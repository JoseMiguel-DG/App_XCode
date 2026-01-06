# PWA personal para iPhone (iOS Safari)

Proyecto base listo para instalarse como PWA privada en iPhone usando Safari.

## 📂 Estructura del proyecto

```
.
├── index.html
├── styles.css
├── app.js
├── manifest.json
├── service-worker.js
└── assets
    ├── icons
    │   ├── apple-touch-icon.png
    │   ├── icon-192.png
    │   ├── icon-256.png
    │   ├── icon-384.png
    │   └── icon-512.png
    └── splash
        ├── splash-640x1136.png
        ├── splash-750x1334.png
        ├── splash-828x1792.png
        ├── splash-1125x2436.png
        ├── splash-1170x2532.png
        ├── splash-1242x2688.png
        ├── splash-1536x2048.png
        ├── splash-1668x2224.png
        ├── splash-1668x2388.png
        └── splash-2048x2732.png
```

## ✅ Cómo probar localmente (Windows)

1. Instala un servidor local sencillo (por ejemplo, `live-server` o `http-server`).
2. Abre una terminal en la carpeta del proyecto.
3. Ejecuta un servidor local:

```bash
npx http-server -c-1
```

4. En tu PC, abre `http://localhost:8080` para verificar que carga.

> **Nota:** El service worker solo funciona con HTTPS o localhost.

## ☁️ Despliegue gratuito (recomendado: GitHub Pages)

1. Crea un repositorio en GitHub.
2. Sube estos archivos.
3. En GitHub, ve a **Settings → Pages**.
4. Selecciona la rama `main` y carpeta `/root`.
5. Guarda. Obtendrás una URL como `https://tuusuario.github.io/tu-repo/`.

Alternativas: Netlify, Vercel o Cloudflare Pages.

## 📱 Instalación en iPhone (Safari)

1. Abre la URL en Safari.
2. Toca **Compartir**.
3. Selecciona **Añadir a pantalla de inicio**.
4. Abre la app desde el icono (modo standalone).

## 📴 Modo offline

- La primera visita descarga los archivos principales.
- Después, la app funciona sin conexión.

## 🧠 Personalización rápida

- **Textos y secciones:** `index.html`
- **Estilos:** `styles.css`
- **Lógica y datos locales:** `app.js`
- **Config PWA:** `manifest.json` y `service-worker.js`

## 🔐 Privacidad

No se envían datos a terceros. Todo queda en el dispositivo.
