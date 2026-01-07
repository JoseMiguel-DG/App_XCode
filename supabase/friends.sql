-- Friends system schema for Supabase

create table if not exists public.profiles (
  user_id uuid primary key references auth.users(id) on delete cascade,
  email text not null,
  display_name text,
  bio text,
  avatar_url text,
  updated_at timestamptz default now()
);

create table if not exists public.friendships (
  id uuid primary key default gen_random_uuid(),
  requester_id uuid not null references auth.users(id) on delete cascade,
  addressee_id uuid not null references auth.users(id) on delete cascade,
  status text not null check (status in ('pending', 'accepted', 'rejected', 'blocked')),
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

create unique index if not exists friendships_unique_pair
on public.friendships (least(requester_id, addressee_id), greatest(requester_id, addressee_id));

create table if not exists public.notifications (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  message text not null,
  read_at timestamptz,
  created_at timestamptz default now()
);

create or replace function public.find_profile_by_email(email_input text)
returns table(user_id uuid, email text, display_name text)
language sql
security definer
set search_path = public
set row_security = off
as $$
  select user_id, email, display_name
  from public.profiles
  where lower(email) = lower(email_input)
  limit 1;
$$;

alter table public.profiles enable row level security;
alter table public.friendships enable row level security;
alter table public.notifications enable row level security;

create policy "profiles_self_or_friends"
on public.profiles for select
using (
  auth.uid() = user_id
  or exists (
    select 1 from public.friendships f
    where f.status in ('accepted', 'pending')
      and (
        (f.requester_id = auth.uid() and f.addressee_id = user_id)
        or (f.addressee_id = auth.uid() and f.requester_id = user_id)
      )
  )
);

create policy "profiles_insert_own"
on public.profiles for insert
with check (auth.uid() = user_id);

create policy "profiles_update_own"
on public.profiles for update
using (auth.uid() = user_id);

create policy "friendships_select_participant"
on public.friendships for select
using (auth.uid() = requester_id or auth.uid() = addressee_id);

create policy "friendships_insert_requester"
on public.friendships for insert
with check (auth.uid() = requester_id);

create policy "friendships_update_participant"
on public.friendships for update
using (auth.uid() = requester_id or auth.uid() = addressee_id);

create policy "friendships_delete_participant"
on public.friendships for delete
using (auth.uid() = requester_id or auth.uid() = addressee_id);

create policy "notifications_select_own"
on public.notifications for select
using (auth.uid() = user_id);

create policy "notifications_insert_any"
on public.notifications for insert
with check (auth.uid() is not null);

create policy "notifications_update_own"
on public.notifications for update
using (auth.uid() = user_id);

alter table public.user_data enable row level security;

create policy "user_data_self_or_friends"
on public.user_data for select
using (
  auth.uid() = user_id
  or exists (
    select 1 from public.friendships f
    where f.status = 'accepted'
      and (
        (f.requester_id = auth.uid() and f.addressee_id = user_id)
        or (f.addressee_id = auth.uid() and f.requester_id = user_id)
      )
  )
);
