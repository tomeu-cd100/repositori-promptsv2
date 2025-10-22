# 📚 Repositori de Prompts v2

Aplicació web per gestionar prompts des d'un formulari de Google Forms connectat a Google Sheets. Versió optimitzada standalone per a GitHub Pages amb sistema de paperera i esborrat definitiu.

## ✨ Característiques

- ✅ Visualització de prompts en targetes amb categories
- 📂 Sidebar amb filtrat per categories
- 🔍 Barra de cerca de prompts en temps real
- 📋 Botó de copiar prompt al portapapes
- ✏️ Edició de prompts (només administrador amb contrasenya oculta)
- 🗑️ Sistema de paperera amb dos nivells:
  - **Primer esborrat**: Mou a la paperera (recuperable)
  - **Segon esborrat**: Eliminació definitiva (no recuperable)
- 🎨 Disseny minimalista i responsive
- 🔄 Connexió en temps real amb Google Sheets
- 📱 Compatible amb mòbil, tablet i ordinador
- 🔒 Modal de contrasenya amb camp ocult (••••)
- **Versió standalone** - tot el codi (HTML, CSS, JS) en un únic fitxer

## 🚀 Instal·lació Ràpida

### Pas 1: Configurar Google Apps Script

1. Obre el teu Google Spreadsheet
2. Ves a **Extensions > Apps Script**
3. Copia tot el contingut del fitxer `google-apps-script.gs`
4. Enganxa'l al Apps Script (reemplaçant el codi per defecte)
5. **IMPORTANT**: Verifica que la línia 21 coincideixi amb el nom del teu full:
   ```javascript
   const MAIN_SHEET_NAME = 'Respostes'; // Canvia si el teu full té un altre nom
   ```
6. Desa el projecte (Ctrl+S)
7. Ves a **Deploy > New deployment**
8. Selecciona **Web app** i configura:
   - **Execute as**: Me (el teu email)
   - **Who has access**: Anyone
9. Fes clic a **Deploy** i autoritza els permisos necessaris
10. **COPIA LA URL** que et dona (Web app URL)

### Pas 2: Configurar index.html

1. Obre el fitxer `index.html` en un editor de text
2. Busca la secció CONFIG (al voltant de la línia 554):
   ```javascript
   const CONFIG = {
       API_URL: 'https://script.google.com/macros/s/AKfycbybL98pO6VIKZYbTVYuTSfP-BUn_68vqUDeaEp53SZ_mgQUu6dREbBf3oKS7gei0jhq/exec',
       ADMIN_PASSWORD: '123',
       CATEGORIES: ['Prompt Mestre', 'Assignatura OPT', 'Pedagogia', 'Vídeos Alumnes', 'Paperera']
   };
   ```
3. Reemplaça `API_URL` amb la URL que has copiat al Pas 1
4. Canvia `ADMIN_PASSWORD` per una contrasenya segura
5. Ajusta `CATEGORIES` si necessites altres categories
6. Desa els canvis

### Pas 3: Publicar a GitHub Pages

Consulta la guia completa: [DESPLEGAR_GITHUB_PAGES.md](DESPLEGAR_GITHUB_PAGES.md)

**Resum ràpid:**

```bash
# 1. Puja els canvis a GitHub
git add .
git commit -m "Configurar API i contrasenya"
git push origin main

# 2. Activa GitHub Pages
# - Ves a Settings > Pages
# - Source: main branch, carpeta / (root)
# - Fes clic a Save
```

La teva aplicació estarà disponible a:
```
https://[el-teu-usuari].github.io/repositori-promptsv2/
```

## 📊 Estructura del Google Sheet

El full "Respostes" ha de tenir aquestes 5 columnes:

| A | B | C | D | E |
|---|---|---|---|---|
| Marca de temps | Adreça electrònica | Títol del prompt | Prompt | Categoria |

**Nota**: La categoria "Paperera" es crea automàticament quan esborres un prompt.

## 📖 Guia d'Ús

### 👀 Visualitzar Prompts

- **Vista principal**: Mostra tots els prompts actius (exclou la Paperera)
- **Categories**: Clica qualsevol categoria del sidebar per filtrar
- **Paperera**: Clica "Paperera" per veure els prompts esborrats
- **Cerca**: Escriu a la barra de cerca per trobar prompts per títol, contingut o categoria

### ➕ Afegir Prompts

Els prompts s'afegeixen mitjançant el formulari de Google:
- Clica l'enllaç del peu de pàgina: **"➕ Emplena el formulari aquí"**
- O accedeix directament al Google Form configurat

### 📋 Copiar Prompts

Fes clic al botó **📋 Copiar** de qualsevol targeta. El prompt es copiarà al portapapes.

### ✏️ Editar Prompts (Administrador)

1. Fes **doble clic** sobre la targeta del prompt
2. El modal d'edició s'obre (sense contrasenya)
3. Modifica el títol, categoria o contingut
4. Fes clic a **Desar**
5. Apareix el modal de contrasenya (amb camps ocults ••••)
6. Introdueix la contrasenya d'administrador
7. Els canvis es desen a Google Sheets

### 🗑️ Esborrar Prompts (Sistema de Paperera)

El sistema té **dos nivells d'esborrat**:

#### **Nivell 1: Moure a la Paperera**
1. Obre un prompt normal (no de la Paperera)
2. Fes **doble clic** sobre la targeta
3. Fes clic a **Esborrar**
4. Missatge: "Estàs segur que vols esborrar aquest prompt? S'enviarà a la paperera."
5. Confirma
6. Introdueix la contrasenya
7. ✅ El prompt es mou a la categoria "Paperera"
8. ✅ El prompt desapareix de la vista principal
9. ✅ Es pot recuperar canviant la categoria des de la Paperera

#### **Nivell 2: Esborrat Definitiu**
1. Ves a la categoria **"Paperera"**
2. Fes **doble clic** sobre el prompt que vols eliminar definitivament
3. Fes clic a **Esborrar**
4. Missatge: **"ATENCIÓ: Aquest prompt s'esborrarà DEFINITIVAMENT i no es podrà recuperar. Estàs segur?"**
5. Confirma
6. Introdueix la contrasenya
7. ⚠️ **El prompt s'elimina permanentment** del Google Sheet
8. ⚠️ **No es pot recuperar**

### 🔄 Recuperar Prompts de la Paperera

1. Ves a la categoria **"Paperera"**
2. Fes **doble clic** sobre el prompt a recuperar
3. Canvia la **Categoria** a la categoria desitjada
4. Fes clic a **Desar**
5. Introdueix la contrasenya
6. ✅ El prompt es mou a la nova categoria

## 📁 Estructura del Projecte

```
repositori-promptsv2/
├── index.html                      # Aplicació standalone (HTML+CSS+JS tot en un)
├── favicon.ico                     # Icona del site
├── google-apps-script.gs           # Backend per Google Apps Script
├── README.md                       # Aquesta documentació
├── DESPLEGAR_GITHUB_PAGES.md       # Guia completa per GitHub Pages
└── GUIA_GOOGLE_DRIVE.md            # Guia alternativa per Google Drive
```

**Fitxers eliminats** (ja no necessaris en versió standalone):
- ~~script.js~~ - Ara integrat dins index.html
- ~~styles.css~~ - Ara integrat dins index.html
- ~~config.example.js~~ - Ja no necessari

## 🔧 Configuració Avançada

### Afegir Noves Categories

Edita `index.html`, a la secció CONFIG (línia ~558):

```javascript
CATEGORIES: ['Prompt Mestre', 'Assignatura OPT', 'Pedagogia', 'Vídeos Alumnes', 'NOVA_CATEGORIA', 'Paperera']
```

**Important**: No eliminis 'Paperera' de la llista.

### Canviar Colors

Edita les variables CSS dins de `index.html` (al voltant de la línia 16):

```css
:root {
    --primary-color: #2563eb;      /* Blau principal */
    --primary-hover: #1d4ed8;      /* Blau hover */
    --danger-color: #dc2626;       /* Vermell (botó esborrar) */
    --bg-color: #ffffff;           /* Fons blanc */
    --text-primary: #0f172a;       /* Text principal */
    /* ... */
}
```

### Canviar la Contrasenya

1. Edita `index.html`
2. Troba `ADMIN_PASSWORD: '123'`
3. Canvia per una contrasenya segura
4. Puja els canvis a GitHub
5. Espera 1-2 minuts perquè GitHub Pages actualitzi

## 🔄 Actualitzar Google Apps Script

**IMPORTANT**: Cada cop que modifiquis `google-apps-script.gs`, has de crear una nova versió:

1. Ves a: https://script.google.com
2. Obre el teu projecte "Repositori Prompts API"
3. Copia el codi actualitzat del fitxer `google-apps-script.gs`
4. Enganxa'l al Apps Script
5. Fes clic a **Deploy > Manage deployments**
6. Fes clic al botó d'editar ✏️ del deployment actual
7. A "Version", selecciona **"New version"**
8. Afegeix una descripció
9. Fes clic a **Deploy**

## 🐛 Resolució de Problemes

### Els prompts no es carreguen

**Símptomes**: Apareix "Carregant prompts..." indefinidament

**Solucions**:
1. Verifica que `API_URL` a `index.html` és correcta
2. Comprova que el Google Apps Script està desplegat amb "Who has access: Anyone"
3. Obre la consola del navegador (F12 > Console) per veure errors:
   - 🔵 = Intent de connexió
   - 🟢 = Resposta rebuda correctament
   - ❌ = Error de connexió o servidor

### Error "No s'ha trobat el full"

**Solució**: Verifica que `MAIN_SHEET_NAME` a `google-apps-script.gs` (línia 21) coincideix exactament amb el nom del full:

```javascript
const MAIN_SHEET_NAME = 'Respostes'; // Ha de coincidir exactament
```

### La contrasenya no funciona

**Solucions**:
1. Verifica que has canviat `ADMIN_PASSWORD` a `index.html`
2. Neteja la caché del navegador (Ctrl+Shift+R o Cmd+Shift+R)
3. Espera 1-2 minuts si acabes de pujar els canvis a GitHub

### Els canvis no es desen

**Solucions**:
1. Verifica que has autoritzat tots els permisos al Google Apps Script
2. Comprova que el deployment està configurat com "Execute as: Me"
3. Obre la consola (F12) i busca missatges d'error amb emoji ❌

### Els prompts esborrats no desapareixen

**Solució**: Això és correcte si estàs veient "Tots els prompts". Els prompts esborrats només desapareixen si estàs filtrant per una categoria específica (no "Tots els prompts").

### Error en esborrar definitivament

**Solucions**:
1. Verifica que has redesployed el Google Apps Script amb la nova versió
2. Comprova que la funció `deletePromptPermanently` existeix al Apps Script
3. Revisa els logs del Google Apps Script per errors

### El modal de contrasenya no apareix

**Solució**: Neteja la caché del navegador i recarrega la pàgina (Ctrl+Shift+R).

### Més problemes?

Consulta la secció completa de solució de problemes a: [DESPLEGAR_GITHUB_PAGES.md - Solució de Problemes](DESPLEGAR_GITHUB_PAGES.md#-solución-de-problemas)

## 🔐 Notes de Seguretat

- **Contrasenya visible**: La contrasenya està emmagatzemada al codi HTML (visible si inspeccionas el codi font). **No comparteixis** el repositori amb persones que no haurien de poder editar prompts.
- **GitHub privat**: Considera fer el repositori privat si la contrasenya és sensible.
- **Canvi regular**: Canvia la contrasenya periòdicament.
- **Permisos Google**: El Google Apps Script s'executa amb els teus permisos. Revisa regularment qui té accés al teu Google Sheet.

## 📊 Límits i Rendiment

- **Google Apps Script**: Té límits d'execució diari (~20,000 crides per dia per a comptes gratuïtes). Per a ús educatiu normal, no els hauràs de superar.
- **GitHub Pages**: Serveix fitxers estàtics sense límit de visualitzacions.
- **Google Sheets**: Suporta fins a 10 milions de cel·les per full.

## 🎓 Casos d'Ús

Aquest projecte és ideal per:
- 📚 Repositoris de prompts educatius
- 🏫 Col·leccions de recursos docents
- 👥 Compartir prompts entre professors
- 📝 Gestió col·laborativa de continguts
- 🎯 Qualsevol aplicació de repositori amb categories

## 📚 Documentació Addicional

- **[DESPLEGAR_GITHUB_PAGES.md](DESPLEGAR_GITHUB_PAGES.md)** - Guia completa i detallada per desplegar a GitHub Pages
- **[GUIA_GOOGLE_DRIVE.md](GUIA_GOOGLE_DRIVE.md)** - Alternativa per compartir via Google Drive
- **[google-apps-script.gs](google-apps-script.gs)** - Backend amb comentaris detallats

## 🔗 Enllaços Útils

- **Aplicació demo**: https://tomeu-cd100.github.io/repositori-promptsv2/
- **Google Form**: https://forms.gle/CG3C7HCHNHJry7oh6
- **Repositori GitHub**: https://github.com/tomeu-cd100/repositori-promptsv2

## 📝 Changelog

### v2.3 (Actual)
- ✅ Esborrat definitiu des de la Paperera
- ✅ Dos nivells d'esborrat (paperera → definitiu)
- ✅ Modal de contrasenya amb camp ocult (••••)
- ✅ Paperera exclosa de "Tots els prompts"
- ✅ Missatges de confirmació diferents segons context

### v2.2
- ✅ Sistema de paperera
- ✅ Filtrat per categories actualitzat
- ✅ Cerca actualitzada per excloure paperera

### v2.1
- ✅ Versió standalone (HTML+CSS+JS en un fitxer)
- ✅ Favicon integrat
- ✅ Footer amb enllaç al formulari

### v2.0
- ✅ Reescriptura completa
- ✅ Connexió amb Google Sheets via Apps Script
- ✅ Sistema d'autenticació per editar
- ✅ Disseny responsive

## 🤝 Contribucions

Aquest és un projecte educatiu. Si vols contribuir:
1. Fork del repositori
2. Crea una branca per la teva funcionalitat
3. Fes els canvis
4. Crea un Pull Request

## 📄 Llicència

Aquest projecte és de lliure ús per a fins educatius.

---

**🤖 Desenvolupat amb Claude Code per a la gestió eficient de prompts educatius**
