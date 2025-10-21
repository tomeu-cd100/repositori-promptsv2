# Repositori de Prompts v2

Aplicació web per gestionar prompts des d'un formulari de Google Forms connectat a Google Sheets. Versió optimitzada standalone per a GitHub Pages.

## Característiques

- Visualització de prompts en targetes amb categories
- Sidebar amb filtrat per categories
- Barra de cerca de prompts
- Botó de copiar prompt al portapapes
- Edició de prompts (només administrador)
- Sistema de paperera (no s'esborra definitivament)
- Disseny minimalista i responsive
- Connexió en temps real amb Google Sheets
- **Versió standalone** - tot el codi (HTML, CSS, JS) en un únic fitxer

## Instal·lació i Configuració

### Pas 1: Configurar Google Apps Script

1. Obre el teu Google Spreadsheet:
   ```
   https://docs.google.com/spreadsheets/d/1STc_y1Fc6dkNW9duPU-TxsOpoHZAEqK-WPdm5eHEkWU/edit
   ```

2. Ves a **Extensions > Apps Script**

3. Esborra el codi per defecte i enganxa tot el contingut del fitxer `google-apps-script.gs`

4. **IMPORTANT**: Verifica que la línia 21 coincideixi amb el nom del teu full:
   ```javascript
   const MAIN_SHEET_NAME = 'Respostes';
   ```

5. Desa el projecte (Ctrl+S)

6. Ves a **Deploy > New deployment**

7. Selecciona **Web app** i configura:
   - **Execute as**: Me (el teu email)
   - **Who has access**: Anyone

8. Fes clic a **Deploy** i autoritza els permisos

9. **COPIA LA URL** que et dona (Web app URL):
   ```
   https://script.google.com/macros/s/AKfycbx.../exec
   ```

### Pas 2: Configurar index.html

1. Obre el fitxer `index.html` en un editor de text

2. Busca la secció CONFIG (al voltant de la línia 94):
   ```javascript
   const CONFIG = {
       API_URL: 'ENGANXA_AQUÍ_LA_TEVA_URL',
       ADMIN_PASSWORD: 'CANVIA_AQUESTA_CONTRASENYA',
       CATEGORIES: ['Prompt Mestre', 'Assignatura OPT', 'Pedagogia', 'Vídeos Alumnes']
   };
   ```

3. Enganxa la URL del Google Apps Script a `API_URL`

4. Canvia `ADMIN_PASSWORD` per una contrasenya segura

5. Desa els canvis

### Pas 3: Publicar a GitHub Pages

Consulta la guia completa: [DESPLEGAR_GITHUB_PAGES.md](DESPLEGAR_GITHUB_PAGES.md)

**Resum ràpid:**

1. Puja els canvis a GitHub:
   ```bash
   git add .
   git commit -m "Configurar API i contrasenya"
   git push origin main
   ```

2. Activa GitHub Pages:
   - Ves a **Settings > Pages**
   - Source: **main** branch, carpeta **/ (root)**
   - Fes clic a **Save**

3. La teva aplicació estarà disponible a:
   ```
   https://tomeu-cd100.github.io/repositori-promptsv2/
   ```

## Estructura del Google Sheet

El full "Respostes" ha de tenir aquestes 5 columnes:

| A | B | C | D | E |
|---|---|---|---|---|
| Marca de temps | Adreça electrònica | Títol del prompt | Prompt | Categoria |

## Ús de l'Aplicació

### Afegir Prompts
Els prompts s'afegeixen mitjançant el formulari de Google.

### Copiar Prompts
Fes clic al botó **📋 Copiar** de qualsevol targeta.

### Editar Prompts (Administrador)
1. Fes **doble clic** sobre la targeta
2. Introdueix la contrasenya d'administrador
3. Modifica el contingut
4. Fes clic a **Desar**

### Esborrar Prompts (Administrador)
1. Fes **doble clic** sobre la targeta
2. Introdueix la contrasenya
3. Fes clic a **Esborrar**
4. El prompt es mourà al full "Paperera"

### Filtrar i Cercar
- **Filtrar**: Fes clic a qualsevol categoria del sidebar
- **Cercar**: Escriu a la barra de cerca del header

## Estructura del Projecte

```
repositori-promptsv2/
├── index.html                    # Aplicació standalone (HTML+CSS+JS)
├── google-apps-script.gs         # Codi per Google Apps Script
├── README.md                     # Aquesta documentació
├── DESPLEGAR_GITHUB_PAGES.md     # Guia detallada de deployment
└── GUIA_GOOGLE_DRIVE.md          # Guia alternativa per Google Drive
```

## Configuració Avançada

### Afegir Noves Categories

Edita `index.html`, a la secció CONFIG:

```javascript
CATEGORIES: ['Prompt Mestre', 'Assignatura OPT', 'Pedagogia', 'Vídeos Alumnes', 'NOVA_CATEGORIA']
```

### Canviar Colors

Edita les variables CSS dins de `index.html`:

```css
:root {
    --primary-color: #2563eb;
    --bg-color: #ffffff;
    /* ... */
}
```

## Resolució de Problemes

### Els prompts no es carreguen

1. Verifica que `API_URL` a `index.html` és correcta
2. Comprova que el Google Apps Script està desplegat amb "Who has access: Anyone"
3. Obre la consola del navegador (F12) per veure errors amb emojis:
   - 🔵 = Intent de connexió
   - 🟢 = Resposta rebuda
   - ❌ = Error

### Error "No s'ha trobat el full"

Verifica que `MAIN_SHEET_NAME` a `google-apps-script.gs` coincideix amb el nom exacte del full (per defecte: 'Respostes').

### La contrasenya no funciona

1. Verifica que has canviat `ADMIN_PASSWORD` a `index.html`
2. Neteja la caché del navegador (Ctrl+Shift+R)

### Els canvis no es desen

1. Verifica que has autoritzat tots els permisos al Google Apps Script
2. Comprova que el deployment està configurat com "Execute as: Me"

### Més problemes?

Consulta: [DESPLEGAR_GITHUB_PAGES.md - Solució de Problemes](DESPLEGAR_GITHUB_PAGES.md#-solución-de-problemas)

## Notes Importants

- **Seguretat**: La contrasenya està al codi HTML (visible). No comparteixis el repositori amb qui no hauria d'editar.
- **Límits**: Google Apps Script té límits d'ús diari. Per a ús normal, no els hauràs de superar.
- **Actualitzacions**: Cada cop que modifiquis el Google Apps Script, crea un nou deployment o actualitza l'existent.

## Suport

Si tens problemes:
1. Revisa la secció "Resolució de Problemes" d'aquest README
2. Consulta [DESPLEGAR_GITHUB_PAGES.md](DESPLEGAR_GITHUB_PAGES.md)
3. Revisa els logs del navegador (F12 > Console)
4. Revisa els logs de Google Apps Script

## Enllaços Útils

- **Aplicació**: https://tomeu-cd100.github.io/repositori-promptsv2/
- **Google Sheet**: https://docs.google.com/spreadsheets/d/1STc_y1Fc6dkNW9duPU-TxsOpoHZAEqK-WPdm5eHEkWU/edit
- **Repositori GitHub**: https://github.com/tomeu-cd100/repositori-promptsv2

---

**Desenvolupat per a la gestió eficient de prompts educatius**
