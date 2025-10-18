# Repositori de Prompts

Aplicació web minimalista per gestionar prompts des d'un formulari de Google Forms connectat a un Google Spreadsheet.

## 📋 Característiques

- ✅ Visualització de prompts en targetes amb categories
- ✅ Sidebar amb filtrat per categories
- ✅ Barra de cerca de prompts
- ✅ Botó de copiar prompt al portapapes
- ✅ Edició de prompts (només administrador)
- ✅ Sistema de paperera (no s'esborra definitivament)
- ✅ Disseny minimalista i responsive
- ✅ Connexió en temps real amb Google Sheets

## 🚀 Instal·lació i Configuració

### Pas 1: Configurar Google Apps Script

1. Obre el teu Google Spreadsheet:
   ```
   https://docs.google.com/spreadsheets/d/1STc_y1Fc6dkNW9duPU-TxsOpoHZAEqK-WPdm5eHEkWU/edit
   ```

2. Ves a **Extensions > Apps Script**

3. Esborra el codi per defecte i enganxa tot el contingut del fitxer `google-apps-script.gs`

4. **IMPORTANT**: Modifica la línia 23 si el teu full té un nom diferent:
   ```javascript
   const MAIN_SHEET_NAME = 'Respostes del formulari 1';
   ```

5. Desa el projecte (Ctrl+S o Cmd+S)

6. Ves a **Deploy > New deployment**

7. Fes clic a la icona d'engranatge ⚙️ al costat de "Select type" i selecciona **Web app**

8. Configuració del deployment:
   - **Description**: Repositori Prompts API
   - **Execute as**: Me (el teu email)
   - **Who has access**: Anyone

9. Fes clic a **Deploy**

10. Autoritza els permisos necessaris (pot sortir una advertència, fes clic a "Advanced" > "Go to [nom del projecte]")

11. **Copia la URL que et dona** (Web app URL). Hauria de ser similar a:
    ```
    https://script.google.com/macros/s/AKfycbx.../exec
    ```

### Pas 2: Configurar l'Aplicació Web

1. Obre el fitxer `script.js`

2. Troba la línia 3 i enganxa la URL que has copiat:
   ```javascript
   API_URL: 'ENGANXA_AQUI_LA_TEVA_URL',
   ```

3. **MOLT IMPORTANT**: Canvia la contrasenya d'administrador a la línia 4:
   ```javascript
   ADMIN_PASSWORD: 'LA_TEVA_CONTRASENYA_SECRETA',
   ```

4. Desa els canvis

### Pas 3: Crear el Full de Paperera (Opcional)

Pots fer-ho de dues maneres:

**Opció A - Automàtica:**
El full es crearà automàticament la primera vegada que esborris un prompt.

**Opció B - Manual:**
1. Torna a Google Apps Script
2. Selecciona la funció `createTrashSheet` al menú desplegable
3. Fes clic al botó ▶️ Run
4. Autoritza els permisos si cal

### Pas 4: Pujar a GitHub

1. Inicialitza un repositori Git:
   ```bash
   git init
   git add .
   git commit -m "Commit inicial - Repositori de Prompts"
   ```

2. Crea un nou repositori a GitHub (sense README ni .gitignore)

3. Connecta el repositori local amb GitHub:
   ```bash
   git remote add origin https://github.com/EL_TEU_USUARI/NOM_DEL_REPO.git
   git branch -M main
   git push -u origin main
   ```

### Pas 5: Activar GitHub Pages

1. Ves al teu repositori a GitHub

2. Fes clic a **Settings**

3. Al menú lateral esquerre, fes clic a **Pages**

4. A "Source", selecciona **main** branch i la carpeta **/ (root)**

5. Fes clic a **Save**

6. Espera uns minuts i la teva pàgina estarà disponible a:
   ```
   https://EL_TEU_USUARI.github.io/NOM_DEL_REPO/
   ```

## 🎯 Ús de l'Aplicació

### Afegir Prompts

Els prompts s'afegeixen mitjançant el formulari de Google:
```
https://forms.gle/CG3C7HCHNHJry7oh6
```

### Copiar Prompts

1. Fes clic al botó **📋 Copiar** de qualsevol targeta
2. El prompt es copiarà automàticament al portapapes

### Editar Prompts (Només Administrador)

1. Fes **doble clic** sobre la targeta del prompt
2. Introdueix la contrasenya d'administrador
3. Modifica el títol, categoria o contingut
4. Fes clic a **Desar**

### Esborrar Prompts (Només Administrador)

1. Fes **doble clic** sobre la targeta del prompt
2. Introdueix la contrasenya d'administrador
3. Fes clic a **Esborrar**
4. Confirma l'acció
5. El prompt es mourà al full "Paperera" del Google Spreadsheet

### Filtrar per Categoria

- Fes clic a qualsevol categoria del sidebar esquerre
- Els prompts es filtraran automàticament

### Cercar Prompts

- Escriu a la barra de cerca del header
- La cerca funciona sobre títol, contingut i categoria

## 📁 Estructura del Projecte

```
repositori-prompts2/
├── index.html              # Estructura HTML de l'aplicació
├── styles.css              # Estils minimalistes mode clar
├── script.js               # Lògica de l'aplicació
├── google-apps-script.gs   # Codi per Google Apps Script
└── README.md               # Aquest fitxer
```

## 🔧 Configuració Avançada

### Afegir Noves Categories

Edita el fitxer `script.js`, línia 5:

```javascript
CATEGORIES: ['Prompt Mestre', 'Assignatura OPT', 'Pedagogia', 'Vídeos Alumnes', 'NOVA_CATEGORIA']
```

### Canviar Colors o Estils

Edita el fitxer `styles.css`, variables CSS (línies 8-18):

```css
:root {
    --primary-color: #2563eb;  /* Color principal */
    --bg-color: #ffffff;        /* Color de fons */
    /* ... */
}
```

## 🐛 Resolució de Problemes

### Els prompts no es carreguen

1. Verifica que la URL de l'API està configurada correctament a `script.js`
2. Comprova que el Google Apps Script està desplegat com "Anyone can access"
3. Obre la consola del navegador (F12) i busca errors

### Error "No s'ha trobat el full"

1. Verifica que el nom del full a `google-apps-script.gs` (línia 23) coincideix amb el nom real del full al teu Google Spreadsheet
2. El nom per defecte del formulari sol ser "Respostes del formulari 1"

### La contrasenya no funciona

1. Verifica que has canviat la contrasenya a `script.js` (línia 4)
2. Esborra la caché del navegador i prova de nou

### Els canvis no es desen al Google Sheet

1. Verifica que has autoritzat tots els permisos al Google Apps Script
2. Comprova que el deployment està configurat com "Execute as: Me"
3. Revisa els logs a Google Apps Script (View > Logs)

## 📝 Notes Importants

- **Seguretat**: La contrasenya d'administrador està al codi JavaScript. Per a més seguretat, considera implementar autenticació amb Google OAuth.

- **Límits de Google Apps Script**: Hi ha límits d'ús diari. Per a ús intensiu, consulta la documentació de Google.

- **Actualitzacions**: Cada vegada que modifiquis el Google Apps Script, hauràs de crear un nou deployment o actualitzar l'existent.

## 🆘 Suport

Si tens problemes:
1. Revisa la secció de "Resolució de Problemes"
2. Consulta els logs del navegador (F12 > Console)
3. Revisa els logs de Google Apps Script (Extensions > Apps Script > View > Logs)

## 📄 Llicència

Aquest projecte és de lliure ús per a fins educatius i personals.

---

**Desenvolupat amb ❤️ per a la gestió eficient de prompts**
