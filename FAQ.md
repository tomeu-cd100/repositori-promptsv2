# ❓ Preguntes Freqüents (FAQ)

## General

### Com funciona l'aplicació?
L'aplicació llegeix les dades del Google Spreadsheet mitjançant Google Apps Script, les mostra en una interfície web, i permet copiar, editar i esborrar prompts.

### Necessito coneixements de programació?
No per utilitzar-la. Per configurar-la, només cal seguir les instruccions pas a pas.

### És gratuït?
Sí, tot és gratuït (Google Forms, Google Sheets, GitHub Pages).

## Configuració

### On trobo la URL del Google Apps Script?
Després de fer el deployment a Google Apps Script, et dona una URL que comença per `https://script.google.com/macros/s/...`

### Com sé el nom del meu full de Google Sheets?
Obre el Google Spreadsheet i mira la pestanya inferior. Sol ser "Respostes del formulari 1".

### He de crear el full "Paperera" manualment?
No, es crea automàticament la primera vegada que esborres un prompt.

### Com canvio la contrasenya?
Edita el fitxer `script.js`, línia 4:
```javascript
ADMIN_PASSWORD: 'la_teva_nova_contrasenya',
```

## Ús

### Com afegeixo nous prompts?
Omple el formulari de Google: https://forms.gle/CG3C7HCHNHJry7oh6

### Com copio un prompt?
Fes clic al botó "📋 Copiar" de la targeta del prompt.

### Com edito un prompt?
Fes doble clic sobre la targeta, introdueix la contrasenya i edita.

### Qui pot editar prompts?
Només l'administrador (qui té la contrasenya).

### Qui pot veure prompts?
Tothom qui tingui l'enllaç de la pàgina web.

### Els prompts esborrats es perden per sempre?
No, van al full "Paperera" del Google Spreadsheet i es poden recuperar.

## Errors Comuns

### Error: "No s'ha trobat el full"
**Solució**: Verifica que el nom del full a `google-apps-script.gs` coincideix amb el nom real al teu Google Spreadsheet.

### Els prompts no es carreguen
**Solucions**:
1. Comprova que has enganxat la URL correcta a `script.js`
2. Verifica que el Google Apps Script està desplegat
3. Assegura't que "Who has access" està configurat com "Anyone"

### "Contrasenya incorrecta"
**Solució**: Verifica que estàs utilitzant la contrasenya que has posat a `script.js` (línia 4).

### Els canvis no es desen
**Solucions**:
1. Comprova que has autoritzat els permisos a Google Apps Script
2. Verifica que "Execute as" està configurat com "Me"
3. Revisa els logs a Google Apps Script

### La pàgina GitHub Pages no es veu
**Solucions**:
1. Espera 5-10 minuts després d'activar GitHub Pages
2. Comprova que has seleccionat la carpeta correcta (/ root)
3. Verifica que els fitxers estan a la branca main

## Personalització

### Com afegeixo més categories?
Edita `script.js`, línia 5:
```javascript
CATEGORIES: ['Categoria1', 'Categoria2', 'NOVA_CATEGORIA']
```

### Com canvio els colors?
Edita `styles.css`, variables CSS (línies 8-18).

### Com afegeixo mode fosc?
Requereix modificacions més avançades al CSS. Pots crear un tema fosc modificant les variables CSS.

### Puc afegir més camps al formulari?
Sí, però hauràs de modificar:
1. El formulari de Google
2. El Google Apps Script (per llegir les noves columnes)
3. Els fitxers HTML, CSS i JS per mostrar els nous camps

## Seguretat

### És segura la meva contrasenya?
La contrasenya està al fitxer JavaScript visible a tothom. Per a més seguretat, considera:
- Utilitzar autenticació de Google OAuth
- Configurar un backend més robust
- No utilitzar contrasenyes crítiques

### Algú pot veure el meu codi?
Sí, si el penges a GitHub públic. El codi és visible però els visitants no poden modificar-lo.

### Com protegeixo dades sensibles?
- No posis informació confidencial als prompts
- Utilitza un repositori privat si cal
- Considera afegir autenticació més robusta

## GitHub Pages

### Quant triga a actualitzar-se?
Normalment 2-5 minuts després de fer push.

### Com actualitzo la pàgina després de fer canvis?
```bash
git add .
git commit -m "Descripció dels canvis"
git push
```

### Puc utilitzar un domini personalitzat?
Sí, GitHub Pages permet configurar dominis personalitzats a Settings > Pages.

## Google Apps Script

### Hi ha límits d'ús?
Sí, Google imposa límits diaris:
- ~20,000 execucions per dia
- ~6 minuts de temps d'execució per execució

Per a ús normal, això és més que suficient.

### Com veig els errors del script?
1. Obre Google Apps Script
2. View > Executions
3. Fes clic a una execució per veure detalls

### Puc tenir múltiples versions?
Sí, pots crear múltiples deployments i tenir versions diferents.

## Suport Tècnic

### On trobo ajuda?
1. Revisa aquesta FAQ
2. Consulta el README.md complet
3. Revisa INSTRUCCIONS_RAPIDES.md
4. Comprova la consola del navegador (F12)
5. Revisa els logs de Google Apps Script

### Com reporto un error?
Obre un issue al repositori de GitHub amb:
- Descripció de l'error
- Passos per reproduir-lo
- Captura de pantalla si és possible
- Missatges d'error de la consola

---

**No trobes la resposta? Revisa el README.md complet o consulta els logs per més detalls.**
