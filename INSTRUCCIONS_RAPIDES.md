# ⚡ Instruccions Ràpides

## Pas a Pas per Posar en Marxa el Projecte

### 1️⃣ Configura Google Apps Script (5 minuts)

1. Obre el teu Google Spreadsheet
2. **Extensions** → **Apps Script**
3. Enganxa el codi de `google-apps-script.gs`
4. Canvia el nom del full si cal (línia 23)
5. **Deploy** → **New deployment** → **Web app**
6. Configura:
   - Execute as: **Me**
   - Who has access: **Anyone**
7. **Copia la URL** que et dona

### 2️⃣ Configura l'Aplicació (2 minuts)

1. Obre `script.js`
2. Línia 3: Enganxa la URL de Google Apps Script
3. Línia 4: Canvia la contrasenya
4. Desa el fitxer

### 3️⃣ Prova Local (Opcional)

1. Obre `index.html` al navegador
2. Veuràs 3 prompts de prova
3. Funciona tot excepte desar canvis (normal, no està connectat encara)

### 4️⃣ Puja a GitHub (3 minuts)

```bash
git init
git add .
git commit -m "Primer commit"
git remote add origin https://github.com/EL_TEU_USUARI/NOM_REPO.git
git push -u origin main
```

### 5️⃣ Activa GitHub Pages (1 minut)

1. GitHub → Settings → Pages
2. Source: **main** branch, carpeta **/ (root)**
3. Save
4. Espera 2-3 minuts

✅ **Fet!** La teva pàgina estarà a:
`https://EL_TEU_USUARI.github.io/NOM_REPO/`

---

## 🔑 Recordatoris Importants

- ⚠️ Canvia la contrasenya a `script.js`
- 🔗 Afegeix la URL de Google Apps Script
- 📝 Verifica el nom del full de Google Sheets
- 🔒 Autoritza els permisos quan Google ho demani

## 🆘 Problemes?

- No carrega prompts? → Comprova la URL de l'API
- No puc editar? → Comprova la contrasenya
- Error al desar? → Comprova permisos de Google Apps Script

---

**Temps total: ~15 minuts** ⏱️
