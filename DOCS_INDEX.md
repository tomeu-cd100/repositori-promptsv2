# 📚 Índex de Documentació - Repositori de Prompts v2

Tota la documentació del projecte organitzada per tipus d'usuari i necessitat.

---

## 🚀 Per Començar

### ⚡ [QUICKSTART.md](QUICKSTART.md) - **COMENÇA AQUÍ**
**Temps de lectura: 5 minuts**

Guia d'inici ràpid per posar en marxa el projecte en menys de 10 minuts.

- ✅ Configuració Google Apps Script
- ✅ Configuració aplicació web
- ✅ Publicació a GitHub Pages
- ✅ Verificació funcionament
- ✅ Problemes comuns i solucions

**Ideal per**: Usuaris nous que volen començar ràpidament.

---

## 📖 Documentació Principal

### 📚 [README.md](README.md) - Documentació Completa
**Temps de lectura: 20-30 minuts**

Documentació exhaustiva de tot el projecte.

**Contingut**:
- ✨ Característiques completes
- 🚀 Instal·lació pas a pas
- 📊 Estructura del Google Sheet
- 📖 Guia d'ús detallada
  - Visualitzar prompts
  - Afegir prompts
  - Copiar prompts
  - Editar prompts (administrador)
  - Sistema de paperera (2 nivells)
  - Recuperar prompts
- 📁 Estructura del projecte
- 🔧 Configuració avançada
- 🔄 Actualitzar Google Apps Script
- 🐛 Resolució de problemes
- 🔐 Notes de seguretat
- 📊 Límits i rendiment
- 🎓 Casos d'ús
- 📝 Changelog (v2.0 a v2.3)

**Ideal per**: Entendre completament el projecte, configuració avançada, resolució de problemes.

---

## 🌐 Guies de Desplegament

### 🚀 [DESPLEGAR_GITHUB_PAGES.md](DESPLEGAR_GITHUB_PAGES.md)
**Temps de lectura: 15-20 minuts**

Guia completa i detallada per publicar a GitHub Pages.

**Contingut**:
- 📝 Configuració previa
- 🔧 Configurar Google Apps Script
- 🔑 Configurar URL de l'API
- 📤 Pujar canvis a GitHub
- 🌐 Activar GitHub Pages
- ✅ Verificar funcionament
- 🔄 Actualitzar la pàgina
- 🔍 Solució de problemes extensa
- 📱 Compartir la pàgina
- 🔐 Seguretat
- 📊 Monitoratge

**Ideal per**: Desplegar a GitHub Pages amb totes les opcions i solucions.

---

### ☁️ [GUIA_GOOGLE_DRIVE.md](GUIA_GOOGLE_DRIVE.md)
**Temps de lectura: 15 minuts**

Guia alternativa per compartir via Google Drive.

**Contingut**:
- 🔧 Configurar Google Apps Script
- 📁 Configurar arxiu HTML
- ☁️ Pujar a Google Drive
- 🌐 Usar des de qualsevol ordinador
- 🔍 Solució de problemes
- 📝 Notes importants
- ✅ Checklist de configuració

**Ideal per**: Compartir l'aplicació sense GitHub, accés ràpid des de Google Drive.

---

## 🔧 Codi Font

### ⚙️ [google-apps-script.gs](google-apps-script.gs)
**Backend del projecte**

Codi del Google Apps Script amb comentaris detallats.

**Funcions principals**:
- `getPrompts()` - Obtenir tots els prompts
- `updatePrompt()` - Actualitzar un prompt
- `deletePromptPermanently()` - Esborrar definitivament
- `moveToTrash()` - Moure a paperera (llegat)
- `createTrashSheet()` - Crear full de paperera

**Accions disponibles**:
- `GET ?action=getPrompts` - Obtenir prompts
- `POST action=updatePrompt` - Actualitzar prompt
- `POST action=deletePrompt` - Esborrar definitivament

---

### 🌐 [index.html](index.html)
**Frontend del projecte**

Aplicació standalone amb HTML, CSS i JavaScript integrats.

**Components**:
- **HTML** (línies 1-551): Estructura de la pàgina
- **CSS** (línies 8-460): Estils i disseny responsive
- **JavaScript** (línies 552-1070): Lògica de l'aplicació

**Seccions clau**:
- CONFIG (línia ~554): Configuració de l'aplicació
- Elements DOM (línia ~571): Referències als elements HTML
- loadPrompts() (línia ~640): Carrega prompts des de Google Sheets
- renderPrompts() (línia ~696): Renderitza les targetes
- handleDelete() (línia ~944): Gestiona esborrat (paperera/definitiu)
- Modal de contrasenya (línia ~858): Sistema d'autenticació

---

## 📋 Per Tipus d'Usuari

### 👤 Usuari Nou
1. **[⚡ QUICKSTART.md](QUICKSTART.md)** - Comença aquí
2. **[📚 README.md](README.md)** - Llegeix la secció "Guia d'Ús"
3. **[🚀 DESPLEGAR_GITHUB_PAGES.md](DESPLEGAR_GITHUB_PAGES.md)** - Per publicar

### 👨‍💻 Desenvolupador
1. **[📚 README.md](README.md)** - Documentació completa
2. **[⚙️ google-apps-script.gs](google-apps-script.gs)** - Backend
3. **[🌐 index.html](index.html)** - Frontend

### 🎓 Administrador/Professor
1. **[📚 README.md](README.md)** - Secció "Guia d'Ús"
2. **[🐛 README.md](README.md#-resolució-de-problemes)** - Resolució de problemes
3. **[🔐 README.md](README.md#-notes-de-seguretat)** - Seguretat

### 🔧 Manteniment
1. **[🔄 README.md](README.md#-actualitzar-google-apps-script)** - Actualitzar Apps Script
2. **[📚 README.md](README.md#-configuració-avançada)** - Configuració avançada
3. **[⚙️ google-apps-script.gs](google-apps-script.gs)** - Codi backend

---

## 🔍 Per Necessitat

### "Vull començar ràpidament"
→ **[⚡ QUICKSTART.md](QUICKSTART.md)**

### "Vull entendre tot el projecte"
→ **[📚 README.md](README.md)**

### "Com público a GitHub Pages?"
→ **[🚀 DESPLEGAR_GITHUB_PAGES.md](DESPLEGAR_GITHUB_PAGES.md)**

### "Com funciona l'esborrat definitiu?"
→ **[📚 README.md - Sistema de Paperera](README.md#%EF%B8%8F-esborrar-prompts-sistema-de-paperera)**

### "Com recupero prompts esborrats?"
→ **[📚 README.md - Recuperar Prompts](README.md#-recuperar-prompts-de-la-paperera)**

### "Tinc un problema"
→ **[🐛 README.md - Resolució de Problemes](README.md#-resolució-de-problemes)**

### "Vull canviar colors/categories"
→ **[🔧 README.md - Configuració Avançada](README.md#-configuració-avançada)**

### "Com actualitzo el Google Apps Script?"
→ **[🔄 README.md - Actualitzar](README.md#-actualitzar-google-apps-script)**

### "Alternativa sense GitHub"
→ **[☁️ GUIA_GOOGLE_DRIVE.md](GUIA_GOOGLE_DRIVE.md)**

---

## 📊 Estructura de Fitxers

```
repositori-promptsv2/
├── 📚 README.md                      # Documentació principal
├── ⚡ QUICKSTART.md                  # Guia d'inici ràpid
├── 📋 DOCS_INDEX.md                  # Aquest índex
├── 🚀 DESPLEGAR_GITHUB_PAGES.md     # Guia GitHub Pages
├── ☁️ GUIA_GOOGLE_DRIVE.md          # Guia Google Drive
├── 🌐 index.html                    # Aplicació web
├── ⚙️ google-apps-script.gs         # Backend Google Apps Script
└── 🎨 favicon.ico                   # Icona del site
```

---

## 🔗 Enllaços Externs

- **Aplicació demo**: https://tomeu-cd100.github.io/repositori-promptsv2/
- **Repositori GitHub**: https://github.com/tomeu-cd100/repositori-promptsv2
- **Google Form**: https://forms.gle/CG3C7HCHNHJry7oh6

---

## 📝 Versions de la Documentació

Tota la documentació està actualitzada a la **versió v2.3** del projecte (gener 2025).

**Funcionalitats documentades**:
- ✅ Sistema de paperera amb dos nivells
- ✅ Esborrat definitiu
- ✅ Modal de contrasenya amb camp ocult
- ✅ Recuperació de prompts
- ✅ Exclusió de Paperera de la vista principal
- ✅ Versió standalone (HTML+CSS+JS)

---

## 🆘 Necessites Ajuda?

1. **Comença per**: [⚡ QUICKSTART.md](QUICKSTART.md)
2. **Si tens un problema**: [🐛 README.md - Resolució de Problemes](README.md#-resolució-de-problemes)
3. **Per entendre tot**: [📚 README.md](README.md)
4. **Consulta la consola**: F12 > Console (busca emojis: 🔵 🟢 ❌)

---

**🤖 Desenvolupat amb Claude Code per a la gestió eficient de prompts educatius**
