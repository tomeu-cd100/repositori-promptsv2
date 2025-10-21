# 🚀 Guía de Despliegue en GitHub Pages

## 📋 Resumen
Esta guía te ayudará a publicar el Repositori de Prompts en GitHub Pages para que esté accesible desde cualquier ordenador mediante una URL pública.

---

## 🔧 CONFIGURACIÓN PREVIA

### ✅ Lo que ya tienes
- ✓ Repositorio en GitHub: `https://github.com/tomeu-cd100/repositori-promptsv2`
- ✓ Google Spreadsheet compartida con los datos
- ✓ Archivo `index.html` optimizado (todo en uno)
- ✓ Google Apps Script configurado

---

## 📝 PASO 1: Verificar/Configurar Google Apps Script

### 1.1 Abrir tu Google Spreadsheet
Accede a: `https://docs.google.com/spreadsheets/d/1STc_y1Fc6dkNW9duPU-TxsOpoHZAEqK-WPdm5eHEkWU/edit`

### 1.2 Verificar el Apps Script
1. Ve a **Extensions > Apps Script**
2. Asegúrate de que el código del archivo `google-apps-script.gs` está copiado
3. Verifica que `MAIN_SHEET_NAME` coincida con el nombre de tu pestaña

### 1.3 Desplegar/Verificar el Web App
1. En Apps Script, ve a **Deploy > Manage deployments**
2. Si no hay deployments:
   - Haz clic en **Deploy > New deployment**
   - Selecciona **Web app**
   - Configura:
     - Execute as: **Me**
     - Who has access: **Anyone**
   - Haz clic en **Deploy**
   - Autoriza los permisos
3. **COPIA LA URL** del Web App (la necesitarás en el siguiente paso)

**NOTA**: El proyecto actual ya tiene un Google Apps Script desplegado y funcionando. Solo necesitas crear uno nuevo si quieres usar tu propia cuenta de Google.

---

## 🔑 PASO 2: Configurar la URL de la API

### 2.1 Editar index.html localmente
1. Abre `index.html` en tu editor de código
2. Busca la línea con `API_URL:` (aproximadamente línea 94)
3. Reemplaza la URL con la que copiaste en el paso anterior
4. Cambia también `ADMIN_PASSWORD` por una contraseña segura

```javascript
const CONFIG = {
    API_URL: 'https://script.google.com/macros/s/AKfycbzxKZdhPxg6aeHk3UTVtS6FEKmiIrAhb4NmhsFZHe6MjN_DXvdufAFRxhDYONYHJL1T/exec',
    ADMIN_PASSWORD: '123',
    CATEGORIES: ['Prompt Mestre', 'Assignatura OPT', 'Pedagogia', 'Vídeos Alumnes']
};
```

**IMPORTANTE**: La URL y contraseña mostradas arriba son las actuales del proyecto funcionando. Cámbialas solo si necesitas usar tu propio Google Apps Script o quieres una contraseña diferente.

5. Guarda el archivo

---

## 📤 PASO 3: Subir los Cambios a GitHub

### Opción A: Desde la línea de comandos (Git)

```bash
# Añadir todos los cambios
git add .

# Crear commit
git commit -m "Actualizar configuración para GitHub Pages"

# Subir a GitHub
git push origin main
```

### Opción B: Desde GitHub Web
1. Ve a tu repositorio: `https://github.com/tomeu-cd100/repositori-promptsv2`
2. Haz clic en el archivo `index.html`
3. Haz clic en el icono de lápiz (Edit)
4. Actualiza la configuración (API_URL y ADMIN_PASSWORD)
5. Haz clic en **Commit changes**

---

## 🌐 PASO 4: Activar GitHub Pages

### 4.1 Ir a la configuración del repositorio
1. Ve a tu repositorio en GitHub
2. Haz clic en **Settings** (Configuración)
3. En el menú lateral, haz clic en **Pages**

### 4.2 Configurar GitHub Pages
1. En **Source** (Origen), selecciona:
   - Branch: **main**
   - Folder: **/ (root)**
2. Haz clic en **Save**

### 4.3 Esperar el despliegue
- GitHub tardará 1-2 minutos en publicar el sitio
- Verás un mensaje que dice: "Your site is live at..."
- La URL será: `https://tomeu-cd100.github.io/repositori-promptsv2/`

---

## ✅ PASO 5: Verificar que Funciona

### 5.1 Abrir la página
1. Abre la URL: `https://tomeu-cd100.github.io/repositori-promptsv2/`
2. Deberías ver "Carregant prompts..."
3. Si todo está bien configurado, los prompts se cargarán automáticamente

### 5.2 Probar funcionalidades
- ✓ Los prompts se cargan desde Google Sheets
- ✓ Puedes buscar prompts
- ✓ Puedes filtrar por categoría
- ✓ Puedes copiar prompts
- ✓ Doble clic abre el modal de edición
- ✓ La autenticación funciona con tu contraseña
- ✓ Puedes editar y guardar cambios
- ✓ Los cambios se guardan en Google Sheets

---

## 🔍 SOLUCIÓN DE PROBLEMAS

### ❌ Error 404 - Página no encontrada
**Solución:**
- Verifica que GitHub Pages esté activado
- Asegúrate de que el archivo se llama exactamente `index.html`
- Espera 2-3 minutos después de activar GitHub Pages

### ❌ "Error connectant amb Google Sheets"
**Causas posibles:**

1. **URL del API incorrecta**
   - Verifica que la URL en `CONFIG.API_URL` sea correcta
   - No debe tener espacios
   - Debe terminar en `/exec`

2. **Apps Script no autorizado**
   - Ve a Apps Script
   - Ejecuta manualmente `getPrompts`
   - Autoriza los permisos

3. **Deployment no actualizado**
   - Ve a **Deploy > Manage deployments**
   - Crea una nueva versión si hiciste cambios

### ❌ "Access-Control-Allow-Origin" (Error CORS)
**Solución:**
- Asegúrate de que en Apps Script, el deployment tiene:
  - "Who has access" = **Anyone**
- Redesplegar el Apps Script si es necesario

### ❌ Los cambios no se guardan
**Solución:**
1. Verifica la contraseña de administrador
2. Abre la consola del navegador (F12)
3. Revisa si hay errores
4. Verifica que el Apps Script funcione ejecutando manualmente `updatePrompt`

---

## 🔄 ACTUALIZAR LA PÁGINA

### Cuando hagas cambios en el código:

1. **Edita localmente**
   ```bash
   # Edita el archivo index.html
   ```

2. **Commit y push**
   ```bash
   git add index.html
   git commit -m "Descripción de los cambios"
   git push origin main
   ```

3. **Espera el despliegue**
   - GitHub Pages se actualiza automáticamente
   - Tarda 1-2 minutos
   - Puedes ver el progreso en **Actions**

4. **Limpia la caché del navegador**
   - Presiona Ctrl+Shift+R (o Cmd+Shift+R en Mac)
   - Esto fuerza la recarga sin caché

---

## 📱 COMPARTIR LA PÁGINA

### URL para compartir
```
https://tomeu-cd100.github.io/repositori-promptsv2/
```

### Para usar en cualquier ordenador:
1. Abre la URL en cualquier navegador
2. Los prompts se cargan desde Google Sheets en tiempo real
3. Cualquiera puede ver y copiar prompts
4. Solo quienes tengan la contraseña pueden editar

### Guardar como favorito
- Añade la URL a marcadores para acceso rápido
- Funciona en móvil, tablet y ordenador

---

## 🔐 SEGURIDAD

### Contraseña de administrador
- La contraseña está en el código HTML (visible)
- **No compartas** la URL del repositorio con personas que no deberían editar
- Cambia la contraseña periódicamente

### Para mayor seguridad:
1. Crea un branch separado para producción
2. Mantén la contraseña solo en ese branch
3. No subas cambios de contraseña a branches públicos

### Permisos de Google Sheets
- El Apps Script tiene acceso a tu Google Sheet
- Solo despliega con tu cuenta de confianza
- Revisa los permisos regularmente

---

## 📊 MONITOREO

### Ver estadísticas de uso
1. Ve a tu repositorio en GitHub
2. Haz clic en **Insights**
3. Haz clic en **Traffic** para ver visitas

### Ver logs de GitHub Pages
1. Ve a **Settings > Pages**
2. Revisa el estado del deployment
3. En caso de error, verás detalles aquí

---

## 🆘 ARCHIVOS DEL PROYECTO

- **index.html** - Aplicación standalone (HTML+CSS+JS todo en uno)
- **google-apps-script.gs** - Código para Google Apps Script
- **README.md** - Documentación principal del proyecto
- **DESPLEGAR_GITHUB_PAGES.md** - Esta guía (deployment en GitHub Pages)
- **GUIA_GOOGLE_DRIVE.md** - Guía alternativa para Google Drive

**ARCHIVOS ELIMINADOS** (ya no necesarios en versión standalone):
- ~~script.js~~ - Ahora integrado en index.html
- ~~styles.css~~ - Ahora integrado en index.html
- ~~config.example.js~~ - Ya no necesario

---

## ✅ CHECKLIST COMPLETO

### Configuración inicial:
- [ ] Google Apps Script creado y desplegado
- [ ] URL del Web App copiada
- [ ] `index.html` editado con API_URL correcta
- [ ] Contraseña de administrador cambiada
- [ ] Cambios subidos a GitHub
- [ ] GitHub Pages activado
- [ ] Página accesible en la URL pública

### Verificación:
- [ ] Los prompts se cargan correctamente
- [ ] La búsqueda funciona
- [ ] Los filtros de categoría funcionan
- [ ] Se pueden copiar prompts
- [ ] La autenticación funciona
- [ ] Se pueden editar prompts
- [ ] Los cambios se guardan en Google Sheets
- [ ] Se pueden eliminar prompts (van a paperera)

---

## 🎉 ¡LISTO!

Tu Repositori de Prompts ahora está publicado en:
**`https://tomeu-cd100.github.io/repositori-promptsv2/`**

Accesible desde cualquier ordenador con conexión a Internet.
Los datos se sincronizan en tiempo real con Google Sheets.

---

## 📞 CONTACTO Y SOPORTE

Si encuentras problemas:
1. Revisa esta guía paso a paso
2. Consulta la sección de solución de problemas
3. Abre la consola del navegador (F12) para ver errores
4. Revisa el estado del deployment en GitHub
5. Verifica los permisos del Apps Script

**Desarrollado para el proyecto Repositori de Prompts v2**
