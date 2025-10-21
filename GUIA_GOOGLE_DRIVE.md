# 🚀 Guía de Configuración para Google Drive

## 📋 Resumen
Esta guía te ayudará a configurar el Repositori de Prompts para que funcione desde Google Drive y se pueda abrir en cualquier ordenador.

---

## 🔧 PASO 1: Configurar Google Apps Script

### 1.1 Abre tu Google Spreadsheet
Accede a tu hoja de cálculo compartida:
- URL: `https://docs.google.com/spreadsheets/d/1STc_y1Fc6dkNW9duPU-TxsOpoHZAEqK-WPdm5eHEkWU/edit`

### 1.2 Crear el Apps Script
1. En la hoja de cálculo, ve a **Extensions > Apps Script**
2. Borra todo el código que aparece por defecto
3. Copia y pega el contenido del archivo `google-apps-script.gs`
4. Guarda el proyecto (Ctrl+S) con el nombre "Repositori Prompts API"

### 1.3 Verificar el nombre del sheet
En el código que acabas de pegar, verifica la línea 21:
```javascript
const MAIN_SHEET_NAME = 'Respostes';
```
- Asegúrate de que este nombre coincide EXACTAMENTE con el nombre de tu pestaña en Google Sheets
- El nombre actual del proyecto es 'Respostes'
- Si tu pestaña tiene otro nombre, cámbialo aquí

### 1.4 Desplegar como Web App
1. Haz clic en **Deploy > New deployment** (o **Implementar > Nueva implementación**)
2. Haz clic en el icono de engranaje ⚙️ junto a "Select type"
3. Selecciona **Web app**
4. Configura los siguientes parámetros:
   - **Description**: "API Repositori Prompts v1"
   - **Execute as**: **Me** (tu email)
   - **Who has access**: **Anyone** (Cualquiera)
5. Haz clic en **Deploy** (Implementar)
6. **IMPORTANTE**: Autoriza los permisos que te solicita:
   - Lee los permisos cuidadosamente
   - Haz clic en "Revisar permisos"
   - Selecciona tu cuenta de Google
   - Haz clic en "Avanzado" si aparece una advertencia
   - Haz clic en "Ir a Repositori Prompts API (no seguro)"
   - Haz clic en "Permitir"
7. **COPIA LA URL** que te proporciona (Web app URL). Se verá similar a:
   ```
   https://script.google.com/macros/s/AKfycbxXXXXXXXXXXXXX/exec
   ```

---

## 📁 PASO 2: Configurar el archivo HTML

### 2.1 Editar la configuración
1. Abre el archivo `index.html` en un editor de texto
2. Busca la sección de configuración (alrededor de la línea 94):
   ```javascript
   const CONFIG = {
       API_URL: 'https://script.google.com/macros/s/AKfycbzxKZdhPxg6aeHk3UTVtS6FEKmiIrAhb4NmhsFZHe6MjN_DXvdufAFRxhDYONYHJL1T/exec',
       ADMIN_PASSWORD: '123',
       CATEGORIES: ['Prompt Mestre', 'Assignatura OPT', 'Pedagogia', 'Vídeos Alumnes']
   };
   ```

3. **NOTA**: La URL y contraseña mostradas son las actuales del proyecto funcionando
4. Si quieres usar tu propio Google Apps Script, reemplaza la URL del `API_URL` con la que copiaste en el paso 1.4
5. Si quieres cambiar la contraseña, modifica `ADMIN_PASSWORD`
6. Ajusta las `CATEGORIES` si necesitas otras categorías
7. Guarda el archivo

---

## ☁️ PASO 3: Subir a Google Drive

### 3.1 Subir el archivo
1. Ve a tu Google Drive: https://drive.google.com
2. Crea una carpeta llamada "Repositori Prompts" (o el nombre que prefieras)
3. Sube el archivo `index.html` a esta carpeta
4. Opcionalmente, también puedes subir:
   - `google-apps-script.gs` (para referencia)
   - `GUIA_GOOGLE_DRIVE.md` (esta guía)
   - `README.md` (documentación del proyecto)

### 3.2 Compartir el archivo
1. Haz clic derecho en `index.html`
2. Selecciona "Compartir" o "Obtener enlace"
3. En "Acceso general", selecciona:
   - **"Cualquier persona con el enlace"** si quieres que cualquiera pueda acceder
   - **"Usuarios específicos"** si solo quieres compartir con personas concretas
4. Asegúrate de que el permiso esté en **"Lector"** (Viewer)
5. Copia el enlace compartido

### 3.3 Obtener el enlace de visualización directa
El enlace que copiaste se verá así:
```
https://drive.google.com/file/d/1XXXXXXXXXXXXXXXXXXXXXXXXXX/view?usp=sharing
```

Para que se abra directamente en el navegador, transforma el enlace a este formato:
```
https://drive.google.com/uc?export=download&id=1XXXXXXXXXXXXXXXXXXXXXXXXXX
```

O usa este formato alternativo para vista previa:
```
https://drive.google.com/file/d/1XXXXXXXXXXXXXXXXXXXXXXXXXX/preview
```

---

## 🌐 PASO 4: Usar desde cualquier ordenador

### 4.1 Abrir el archivo
1. Abre el enlace directo en cualquier navegador (Chrome, Firefox, Edge, Safari)
2. Si usas el enlace con `/preview`, verás una vista previa
3. Si usas el enlace con `export=download`, se descargará y podrás abrirlo localmente

### 4.2 Guardar como favorito
Para acceso rápido:
1. Abre el enlace
2. Añádelo a tus marcadores/favoritos del navegador
3. Renómbralo como "Repositori de Prompts"

---

## 🔍 SOLUCIÓN DE PROBLEMAS

### ❌ No carga los prompts, se queda "Carregant prompts..."

**Posibles causas:**

1. **URL del API incorrecta**
   - Verifica que la URL en `CONFIG.API_URL` sea exactamente la que te dio Google Apps Script
   - No debe tener espacios al inicio o al final

2. **Permisos no autorizados**
   - Ve a Google Apps Script
   - Ejecuta manualmente la función `getPrompts` desde el editor
   - Autoriza los permisos si te los pide

3. **Nombre del sheet incorrecto**
   - En Google Apps Script, verifica que `MAIN_SHEET_NAME` coincida con el nombre exacto de tu pestaña

4. **Bloqueo CORS**
   - Asegúrate de estar usando el archivo desde Google Drive (no desde archivo local)
   - Si lo abres desde tu ordenador (file://), Chrome y otros navegadores bloquearán las peticiones

### ❌ Error "No s'ha trobat el full"

- El nombre del sheet en Google Apps Script no coincide con el nombre real de la pestaña
- Solución: Edita `MAIN_SHEET_NAME` en Google Apps Script y vuelve a desplegar

### ❌ Los cambios no se guardan

1. Verifica que la contrasenya de administrador sea correcta
2. Abre la consola del navegador (F12) y revisa si hay errores
3. Verifica que el Apps Script esté desplegado correctamente

### ❌ No se puede copiar el prompt

- Algunos navegadores requieren conexión HTTPS para usar el portapapeles
- Si estás en HTTP, usa Ctrl+C manualmente después de seleccionar el texto

---

## 📝 NOTAS IMPORTANTES

1. **Seguridad**: La contraseña se almacena en el código HTML. Para mayor seguridad, no compartas el HTML con personas que no deberían poder editar.

2. **Actualizaciones**: Si haces cambios en el HTML:
   - Guarda el archivo
   - Vuelve a subirlo a Google Drive
   - Reemplaza el archivo anterior
   - El enlace seguirá siendo el mismo

3. **Versiones del Apps Script**: Si actualizas el código del Apps Script:
   - Ve a **Deploy > Manage deployments**
   - Haz clic en el icono de lápiz ✏️
   - Cambia "Version" a "New version"
   - Guarda los cambios

4. **Límites de Google**: Google Apps Script tiene límites de uso diario. Para uso normal, no deberías alcanzarlos.

---

## ✅ CHECKLIST DE CONFIGURACIÓN

- [ ] Google Apps Script creado y desplegado
- [ ] URL del Web App copiada
- [ ] `index-standalone.html` editado con la URL correcta
- [ ] Contraseña de administrador cambiada
- [ ] Nombre del sheet verificado
- [ ] Archivo subido a Google Drive
- [ ] Enlace de compartición configurado
- [ ] Enlace directo creado y probado
- [ ] Prompts cargándose correctamente
- [ ] Función de copiar funcionando
- [ ] Autenticación y edición funcionando

---

## 🆘 SOPORTE

Si tienes problemas:
1. Abre la consola del navegador (F12 > Console)
2. Revisa los mensajes de error
3. Verifica cada paso de esta guía
4. Contacta con el administrador del proyecto

---

## 📚 ARCHIVOS DEL PROYECTO

- `index.html` - Archivo principal standalone (HTML+CSS+JS todo en uno)
- `google-apps-script.gs` - Código para Google Apps Script
- `README.md` - Documentación principal del proyecto
- `DESPLEGAR_GITHUB_PAGES.md` - Guía de deployment en GitHub Pages
- `GUIA_GOOGLE_DRIVE.md` - Esta guía (alternativa Google Drive)

**ARCHIVOS ELIMINADOS** (ya no necesarios en versión standalone):
- ~~script.js~~ - Ahora integrado en index.html
- ~~styles.css~~ - Ahora integrado en index.html
- ~~config.example.js~~ - Ya no necesario
- ~~index-standalone.html~~ - Ahora index.html es la versión standalone

---

**¡Listo! Ahora tu Repositori de Prompts está accesible desde cualquier ordenador con conexión a Internet.**
