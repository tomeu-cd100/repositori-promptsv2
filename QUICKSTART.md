# ⚡ Guia Ràpida - Repositori de Prompts v2

Guia d'inici ràpid en 5 minuts per posar en marxa el teu repositori de prompts.

## 🎯 Què necessites?

- ✅ Un Google Spreadsheet amb dades de prompts
- ✅ Un compte de GitHub (gratuït)
- ✅ 10 minuts de temps

## 📝 Pas 1: Google Apps Script (3 minuts)

### 1. Obre el teu Google Spreadsheet
Ves al teu full de càlcul amb els prompts.

### 2. Crea l'Apps Script
1. Click a **Extensions > Apps Script**
2. Esborra tot el codi que hi ha
3. Copia **tot** el contingut del fitxer `google-apps-script.gs` d'aquest projecte
4. Enganxa'l a l'Apps Script
5. **IMPORTANT**: Verifica la línia 21 - ha de coincidir amb el nom del teu full:
   ```javascript
   const MAIN_SHEET_NAME = 'Respostes';  // ← Canvia-ho si cal
   ```

### 3. Desplega l'Apps Script
1. Click a **Deploy > New deployment**
2. Click a l'engranatge ⚙️ > **Web app**
3. Configura:
   - **Execute as**: Me
   - **Who has access**: Anyone
4. Click **Deploy**
5. Autoritza els permisos (llegir/escriure al teu Sheet)
6. **📋 COPIA LA URL** que et dona (la necessitaràs)

## 🔧 Pas 2: Configurar l'Aplicació (2 minuts)

### 1. Edita index.html
Obre `index.html` i busca (línia ~554):

```javascript
const CONFIG = {
    API_URL: 'ENGANXA_AQUÍ_LA_TEVA_URL',      // ← URL del Pas 1
    ADMIN_PASSWORD: 'CANVIA_AQUESTA_CONTRASENYA', // ← Nova contrasenya
    CATEGORIES: ['Cat1', 'Cat2', 'Cat3']       // ← Les teves categories
};
```

### 2. Desa els canvis

## 🚀 Pas 3: Publicar a GitHub (2 minuts)

### Si és nou projecte:
```bash
git init
git add .
git commit -m "Configuració inicial"
git remote add origin https://github.com/el-teu-usuari/repositori-promptsv2.git
git push -u origin main
```

### Si ja tens el repositori:
```bash
git add .
git commit -m "Actualitzar configuració"
git push origin main
```

## 🌐 Pas 4: Activar GitHub Pages (1 minut)

1. Ves al teu repositori a GitHub.com
2. Click a **Settings**
3. Click a **Pages** (menú lateral)
4. A **Source**, selecciona:
   - Branch: **main**
   - Folder: **/ (root)**
5. Click **Save**
6. Espera 1-2 minuts

## ✅ Verifica que Funciona

Ves a: `https://el-teu-usuari.github.io/repositori-promptsv2/`

Hauries de veure:
- ✅ Els teus prompts carregant-se
- ✅ Categories al sidebar
- ✅ Barra de cerca funcionant
- ✅ Botó de copiar als prompts

## 🎉 Llest!

Ara pots:
- 👀 **Veure** tots els prompts
- 🔍 **Cercar** per títol o contingut
- 📋 **Copiar** qualsevol prompt
- ✏️ **Editar** prompts (doble clic + contrasenya)
- 🗑️ **Esborrar** prompts (a la paperera)
- ♻️ **Recuperar** prompts de la paperera
- ⚠️ **Eliminar definitivament** (des de la paperera)

## 🆘 Problemes Comuns

### ❌ "Carregant prompts..." indefinidament

**Solució**: Verifica que la URL de l'API és correcta i que el Google Apps Script està desplegat.

```javascript
// A index.html, ha de ser una URL com aquesta:
API_URL: 'https://script.google.com/macros/s/AKfycby.../exec'
```

### ❌ "No s'ha trobat el full"

**Solució**: El nom del full no coincideix. A `google-apps-script.gs` línia 21:

```javascript
const MAIN_SHEET_NAME = 'Respostes';  // Ha de ser exactament igual
```

### ❌ La contrasenya no funciona

**Solució**:
1. Neteja la caché del navegador (Ctrl+Shift+R)
2. Espera 1-2 minuts després de pujar els canvis
3. Verifica que has canviat `ADMIN_PASSWORD` a `index.html`

### ❌ Error 404

**Solució**:
- Espera 2-3 minuts després d'activar GitHub Pages
- Verifica que el fitxer es diu exactament `index.html`

## 📚 Més Informació

- **README.md** - Documentació completa
- **DESPLEGAR_GITHUB_PAGES.md** - Guia detallada de deployment
- **GUIA_GOOGLE_DRIVE.md** - Alternativa amb Google Drive

## 🔄 Actualitzar el Google Apps Script

Si canvies `google-apps-script.gs` en el futur:

1. Obre Apps Script
2. Enganxa el nou codi
3. **Deploy > Manage deployments**
4. Click ✏️ editar
5. Version: **New version**
6. Deploy

---

**🎓 Projecte educatiu per gestionar prompts de forma col·laborativa**
