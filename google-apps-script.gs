/**
 * GOOGLE APPS SCRIPT per connectar Google Sheets amb la pàgina web
 *
 * INSTRUCCIONS:
 * 1. Obre el teu Google Spreadsheet: https://docs.google.com/spreadsheets/d/1STc_y1Fc6dkNW9duPU-TxsOpoHZAEqK-WPdm5eHEkWU/edit
 * 2. Ves a Extensions > Apps Script
 * 3. Esborra el codi per defecte i enganxa tot aquest codi
 * 4. Desa el projecte (Ctrl+S)
 * 5. Ves a Deploy > New deployment
 * 6. Selecciona "Web app"
 * 7. Configuració:
 *    - Execute as: Me (el teu email)
 *    - Who has access: Anyone
 * 8. Fes clic a "Deploy"
 * 9. Autoritza els permisos necessaris
 * 10. Copia la URL que et dona (Web app URL)
 * 11. Enganxa aquesta URL a script.js a la variable CONFIG.API_URL
 */

// Nom del full principal (on estan les respostes del formulari)
const MAIN_SHEET_NAME = 'Respostes'; // Canvia això si el teu full té un altre nom

// Nom del full de paperera (es crearà automàticament si no existeix)
const TRASH_SHEET_NAME = 'Paperera';

/**
 * Funció principal que gestiona les peticions GET
 */
function doGet(e) {
  const action = e.parameter.action;

  if (action === 'getPrompts') {
    return getPrompts();
  }

  return ContentService.createTextOutput(JSON.stringify({
    error: 'Acció no reconeguda'
  })).setMimeType(ContentService.MimeType.JSON);
}

/**
 * Funció principal que gestiona les peticions POST
 */
function doPost(e) {
  try {
    const data = JSON.parse(e.postData.contents);
    const action = data.action;

    if (action === 'updatePrompt') {
      return updatePrompt(data.data);
    } else if (action === 'moveToTrash') {
      return moveToTrash(data.data);
    }

    return ContentService.createTextOutput(JSON.stringify({
      error: 'Acció no reconeguda'
    })).setMimeType(ContentService.MimeType.JSON);

  } catch (error) {
    return ContentService.createTextOutput(JSON.stringify({
      error: error.toString()
    })).setMimeType(ContentService.MimeType.JSON);
  }
}

/**
 * Obtenir tots els prompts del full principal
 */
function getPrompts() {
  try {
    const ss = SpreadsheetApp.getActiveSpreadsheet();
    const sheet = ss.getSheetByName(MAIN_SHEET_NAME);

    if (!sheet) {
      return ContentService.createTextOutput(JSON.stringify({
        error: `No s'ha trobat el full "${MAIN_SHEET_NAME}"`
      })).setMimeType(ContentService.MimeType.JSON);
    }

    const data = sheet.getDataRange().getValues();

    // Saltar la primera fila (capçaleres)
    const prompts = [];
    for (let i = 1; i < data.length; i++) {
      const row = data[i];

      // Només afegir si té contingut
      if (row[2] && row[3]) { // Títol i Prompt
        prompts.push({
          id: `${i}`, // Utilitzem el número de fila com ID
          rowIndex: i + 1, // Fila real al sheet (començant per 1)
          timestamp: row[0],
          email: row[1],
          title: row[2],
          prompt: row[3],
          category: row[4] || 'Sense categoria'
        });
      }
    }

    return ContentService.createTextOutput(JSON.stringify({
      success: true,
      data: prompts
    })).setMimeType(ContentService.MimeType.JSON);

  } catch (error) {
    return ContentService.createTextOutput(JSON.stringify({
      error: error.toString()
    })).setMimeType(ContentService.MimeType.JSON);
  }
}

/**
 * Actualitzar un prompt existent
 */
function updatePrompt(promptData) {
  try {
    const ss = SpreadsheetApp.getActiveSpreadsheet();
    const sheet = ss.getSheetByName(MAIN_SHEET_NAME);

    if (!sheet) {
      return ContentService.createTextOutput(JSON.stringify({
        error: `No s'ha trobat el full "${MAIN_SHEET_NAME}"`
      })).setMimeType(ContentService.MimeType.JSON);
    }

    const rowIndex = parseInt(promptData.rowIndex);

    // Actualitzar les cel·les
    // Columna C: Títol
    sheet.getRange(rowIndex, 3).setValue(promptData.title);

    // Columna D: Prompt
    sheet.getRange(rowIndex, 4).setValue(promptData.prompt);

    // Columna E: Categoria
    sheet.getRange(rowIndex, 5).setValue(promptData.category);

    return ContentService.createTextOutput(JSON.stringify({
      success: true,
      message: 'Prompt actualitzat correctament'
    })).setMimeType(ContentService.MimeType.JSON);

  } catch (error) {
    return ContentService.createTextOutput(JSON.stringify({
      error: error.toString()
    })).setMimeType(ContentService.MimeType.JSON);
  }
}

/**
 * Moure un prompt a la paperera
 */
function moveToTrash(promptData) {
  try {
    const ss = SpreadsheetApp.getActiveSpreadsheet();
    const mainSheet = ss.getSheetByName(MAIN_SHEET_NAME);

    if (!mainSheet) {
      return ContentService.createTextOutput(JSON.stringify({
        error: `No s'ha trobat el full "${MAIN_SHEET_NAME}"`
      })).setMimeType(ContentService.MimeType.JSON);
    }

    // Crear full de paperera si no existeix
    let trashSheet = ss.getSheetByName(TRASH_SHEET_NAME);
    if (!trashSheet) {
      trashSheet = ss.insertSheet(TRASH_SHEET_NAME);

      // Afegir capçaleres
      const headers = ['Data eliminació', 'Marca de temps original', 'Adreça electrònica', 'Títol del prompt', 'Prompt', 'Categoria'];
      trashSheet.getRange(1, 1, 1, headers.length).setValues([headers]);
      trashSheet.getRange(1, 1, 1, headers.length).setFontWeight('bold');
    }

    // Obtenir les dades de la fila a eliminar
    const rowIndex = parseInt(promptData.rowIndex);
    const rowData = mainSheet.getRange(rowIndex, 1, 1, 5).getValues()[0];

    // Afegir a la paperera amb data d'eliminació
    const trashRow = [new Date(), ...rowData];
    trashSheet.appendRow(trashRow);

    // Eliminar la fila del full principal
    mainSheet.deleteRow(rowIndex);

    return ContentService.createTextOutput(JSON.stringify({
      success: true,
      message: 'Prompt mogut a la paperera correctament'
    })).setMimeType(ContentService.MimeType.JSON);

  } catch (error) {
    return ContentService.createTextOutput(JSON.stringify({
      error: error.toString()
    })).setMimeType(ContentService.MimeType.JSON);
  }
}

/**
 * Funció auxiliar per crear el full de paperera si no existeix
 * Pots executar aquesta funció manualment des d'Apps Script per crear el full
 */
function createTrashSheet() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  let trashSheet = ss.getSheetByName(TRASH_SHEET_NAME);

  if (trashSheet) {
    Logger.log('El full de paperera ja existeix');
    return;
  }

  trashSheet = ss.insertSheet(TRASH_SHEET_NAME);
  const headers = ['Data eliminació', 'Marca de temps original', 'Adreça electrònica', 'Títol del prompt', 'Prompt', 'Categoria'];
  trashSheet.getRange(1, 1, 1, headers.length).setValues([headers]);
  trashSheet.getRange(1, 1, 1, headers.length).setFontWeight('bold');

  Logger.log('Full de paperera creat correctament');
}
