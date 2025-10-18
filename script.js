// Configuració
const CONFIG = {
    // URL del Google Apps Script Web App (cal configurar-la després de crear el script)
    API_URL: 'https://script.google.com/macros/s/AKfycbzfW0SkCdHn6lIiya0uPOrIbNbx1l9GGivxcq7v2OCptnUfTF351B9mOXo5j2VYlZOd/exec',
    ADMIN_PASSWORD: 'indigomontoya', // CANVIA AQUESTA CONTRASENYA!
    CATEGORIES: ['Prompt Mestre', 'Assignatura OPT', 'Pedagogia', 'Vídeos Alumnes']
};

// Estat de l'aplicació
let state = {
    prompts: [],
    filteredPrompts: [],
    currentCategory: 'all',
    isAuthenticated: false,
    currentEditingPrompt: null
};

// Elements del DOM
const elements = {
    promptsContainer: document.getElementById('promptsContainer'),
    categoryList: document.getElementById('categoryList'),
    searchInput: document.getElementById('searchInput'),
    searchBtn: document.getElementById('searchBtn'),
    editModal: document.getElementById('editModal'),
    editTitle: document.getElementById('editTitle'),
    editCategory: document.getElementById('editCategory'),
    editPrompt: document.getElementById('editPrompt'),
    authPassword: document.getElementById('authPassword'),
    authBtn: document.getElementById('authBtn'),
    authGroup: document.getElementById('authGroup'),
    editForm: document.getElementById('editForm'),
    saveBtn: document.getElementById('saveBtn'),
    cancelBtn: document.getElementById('cancelBtn'),
    deleteBtn: document.getElementById('deleteBtn'),
    closeModal: document.querySelector('.close'),
    emptyState: document.getElementById('emptyState'),
    loadingState: document.getElementById('loadingState')
};

// Inicialització
document.addEventListener('DOMContentLoaded', () => {
    initApp();
});

async function initApp() {
    setupEventListeners();
    populateCategorySelect();
    await loadPrompts();
}

// Event Listeners
function setupEventListeners() {
    // Cerca
    elements.searchInput.addEventListener('input', handleSearch);
    elements.searchBtn.addEventListener('click', handleSearch);

    // Modal
    elements.closeModal.addEventListener('click', closeModal);
    elements.cancelBtn.addEventListener('click', closeModal);
    elements.authBtn.addEventListener('click', handleAuth);
    elements.saveBtn.addEventListener('click', handleSave);
    elements.deleteBtn.addEventListener('click', handleDelete);

    // Tancar modal en clicar fora
    window.addEventListener('click', (e) => {
        if (e.target === elements.editModal) {
            closeModal();
        }
    });

    // Enter per autenticar
    elements.authPassword.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            handleAuth();
        }
    });
}

// Carregar prompts des de Google Sheets
async function loadPrompts() {
    try {
        elements.loadingState.style.display = 'block';
        elements.promptsContainer.style.display = 'none';
        elements.emptyState.style.display = 'none';

        // NOTA: Aquesta crida funcionarà quan configuris el Google Apps Script
        // De moment, carrega dades de prova
        const response = await fetchFromGoogleSheets();

        if (response && response.data) {
            state.prompts = response.data;
            state.filteredPrompts = [...state.prompts];
            renderPrompts();
            renderCategories();
        } else {
            // Dades de prova si no hi ha connexió
            loadMockData();
        }

        elements.loadingState.style.display = 'none';

    } catch (error) {
        console.error('Error carregant prompts:', error);
        elements.loadingState.style.display = 'none';

        // Carregar dades de prova en cas d'error
        loadMockData();
    }
}

// Funció per obtenir dades de Google Sheets
async function fetchFromGoogleSheets() {
    try {
        const response = await fetch(`${CONFIG.API_URL}?action=getPrompts`);
        if (!response.ok) throw new Error('Error en la resposta del servidor');
        return await response.json();
    } catch (error) {
        console.error('Error connectant amb Google Sheets:', error);
        return null;
    }
}

// Dades de prova (s'utilitzaran fins que configuris el Google Apps Script)
function loadMockData() {
    state.prompts = [
        {
            id: '1',
            timestamp: new Date().toISOString(),
            email: 'exemple@exemple.com',
            title: 'Exemple Prompt Mestre',
            prompt: 'Aquest és un exemple de prompt mestre per ajudar amb la creació d\'altres prompts...',
            category: 'Prompt Mestre'
        },
        {
            id: '2',
            timestamp: new Date().toISOString(),
            email: 'exemple@exemple.com',
            title: 'Exemple Assignatura OPT',
            prompt: 'Prompt d\'exemple per l\'assignatura OPT que ajuda amb...',
            category: 'Assignatura OPT'
        },
        {
            id: '3',
            timestamp: new Date().toISOString(),
            email: 'exemple@exemple.com',
            title: 'Exemple Pedagogia',
            prompt: 'Aquest prompt ajuda amb aspectes pedagògics com...',
            category: 'Pedagogia'
        }
    ];
    state.filteredPrompts = [...state.prompts];
    renderPrompts();
    renderCategories();
}

// Renderitzar prompts
function renderPrompts() {
    elements.promptsContainer.innerHTML = '';

    if (state.filteredPrompts.length === 0) {
        elements.promptsContainer.style.display = 'none';
        elements.emptyState.style.display = 'block';
        return;
    }

    elements.promptsContainer.style.display = 'grid';
    elements.emptyState.style.display = 'none';

    state.filteredPrompts.forEach(prompt => {
        const card = createPromptCard(prompt);
        elements.promptsContainer.appendChild(card);
    });
}

// Crear targeta de prompt
function createPromptCard(prompt) {
    const card = document.createElement('div');
    card.className = 'prompt-card';
    card.dataset.promptId = prompt.id;

    card.innerHTML = `
        <div class="prompt-card-header">
            <div>
                <h3>${escapeHtml(prompt.title)}</h3>
                <span class="prompt-category">${escapeHtml(prompt.category)}</span>
            </div>
        </div>
        <div class="prompt-content">${escapeHtml(prompt.prompt)}</div>
        <div class="prompt-footer">
            <button class="copy-btn" onclick="copyPrompt('${prompt.id}', event)">
                📋 Copiar
            </button>
        </div>
    `;

    // Doble clic per editar
    card.addEventListener('dblclick', () => openEditModal(prompt));

    return card;
}

// Renderitzar categories
function renderCategories() {
    const categoryCounts = {};

    // Comptar prompts per categoria
    state.prompts.forEach(prompt => {
        categoryCounts[prompt.category] = (categoryCounts[prompt.category] || 0) + 1;
    });

    // Afegir categories úniques
    const categories = ['all', ...new Set(state.prompts.map(p => p.category))];

    elements.categoryList.innerHTML = categories.map(cat => {
        const count = cat === 'all' ? state.prompts.length : (categoryCounts[cat] || 0);
        const displayName = cat === 'all' ? 'Tots els prompts' : cat;
        const activeClass = state.currentCategory === cat ? 'active' : '';

        return `
            <li class="category-item ${activeClass}" data-category="${cat}">
                <span>${escapeHtml(displayName)}</span>
                <span class="count">${count}</span>
            </li>
        `;
    }).join('');

    // Event listeners per categories
    document.querySelectorAll('.category-item').forEach(item => {
        item.addEventListener('click', () => {
            const category = item.dataset.category;
            filterByCategory(category);
        });
    });
}

// Filtrar per categoria
function filterByCategory(category) {
    state.currentCategory = category;

    if (category === 'all') {
        state.filteredPrompts = [...state.prompts];
    } else {
        state.filteredPrompts = state.prompts.filter(p => p.category === category);
    }

    renderPrompts();

    // Actualitzar classe active
    document.querySelectorAll('.category-item').forEach(item => {
        item.classList.toggle('active', item.dataset.category === category);
    });
}

// Cerca
function handleSearch() {
    const searchTerm = elements.searchInput.value.toLowerCase().trim();

    if (!searchTerm) {
        filterByCategory(state.currentCategory);
        return;
    }

    state.filteredPrompts = state.prompts.filter(prompt => {
        const matchesSearch =
            prompt.title.toLowerCase().includes(searchTerm) ||
            prompt.prompt.toLowerCase().includes(searchTerm) ||
            prompt.category.toLowerCase().includes(searchTerm);

        const matchesCategory =
            state.currentCategory === 'all' ||
            prompt.category === state.currentCategory;

        return matchesSearch && matchesCategory;
    });

    renderPrompts();
}

// Copiar prompt
function copyPrompt(promptId, event) {
    event.stopPropagation();

    const prompt = state.prompts.find(p => p.id === promptId);
    if (!prompt) return;

    navigator.clipboard.writeText(prompt.prompt).then(() => {
        const btn = event.target.closest('.copy-btn');
        const originalText = btn.innerHTML;
        btn.innerHTML = '✓ Copiat!';
        btn.classList.add('copied');

        setTimeout(() => {
            btn.innerHTML = originalText;
            btn.classList.remove('copied');
        }, 2000);
    }).catch(err => {
        console.error('Error copiant:', err);
        alert('Error copiant el prompt');
    });
}

// Modal d'edició
function openEditModal(prompt) {
    state.currentEditingPrompt = prompt;
    state.isAuthenticated = false;

    elements.authGroup.style.display = 'block';
    elements.editForm.style.display = 'none';
    elements.authPassword.value = '';

    elements.editModal.classList.add('show');
}

function closeModal() {
    elements.editModal.classList.remove('show');
    state.currentEditingPrompt = null;
    state.isAuthenticated = false;
}

// Autenticació
function handleAuth() {
    const password = elements.authPassword.value;

    if (password === CONFIG.ADMIN_PASSWORD) {
        state.isAuthenticated = true;
        elements.authGroup.style.display = 'none';
        elements.editForm.style.display = 'block';

        // Omplir el formulari amb les dades del prompt
        if (state.currentEditingPrompt) {
            elements.editTitle.value = state.currentEditingPrompt.title;
            elements.editCategory.value = state.currentEditingPrompt.category;
            elements.editPrompt.value = state.currentEditingPrompt.prompt;
        }
    } else {
        alert('Contrasenya incorrecta!');
        elements.authPassword.value = '';
    }
}

// Desar canvis
async function handleSave() {
    if (!state.isAuthenticated || !state.currentEditingPrompt) return;

    const updatedPrompt = {
        ...state.currentEditingPrompt,
        title: elements.editTitle.value.trim(),
        category: elements.editCategory.value,
        prompt: elements.editPrompt.value.trim()
    };

    if (!updatedPrompt.title || !updatedPrompt.prompt) {
        alert('El títol i el prompt són obligatoris!');
        return;
    }

    try {
        // Actualitzar a Google Sheets
        await updatePromptInSheet(updatedPrompt);

        // Actualitzar localment
        const index = state.prompts.findIndex(p => p.id === updatedPrompt.id);
        if (index !== -1) {
            state.prompts[index] = updatedPrompt;
        }

        filterByCategory(state.currentCategory);
        closeModal();

        alert('Prompt actualitzat correctament!');
    } catch (error) {
        console.error('Error desant:', error);
        alert('Error desant els canvis. Comprova la consola.');
    }
}

// Esborrar prompt
async function handleDelete() {
    if (!state.isAuthenticated || !state.currentEditingPrompt) return;

    if (!confirm('Estàs segur que vols esborrar aquest prompt? S\'enviarà a la paperera.')) {
        return;
    }

    try {
        // Moure a paperera a Google Sheets
        await moveToTrash(state.currentEditingPrompt);

        // Eliminar localment
        state.prompts = state.prompts.filter(p => p.id !== state.currentEditingPrompt.id);
        filterByCategory(state.currentCategory);
        closeModal();

        alert('Prompt enviat a la paperera!');
    } catch (error) {
        console.error('Error esborrant:', error);
        alert('Error esborrant el prompt. Comprova la consola.');
    }
}

// Comunicació amb Google Sheets
async function updatePromptInSheet(prompt) {
    try {
        const response = await fetch(CONFIG.API_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                action: 'updatePrompt',
                data: prompt
            })
        });

        if (!response.ok) throw new Error('Error actualitzant');
        return await response.json();
    } catch (error) {
        console.error('Error en updatePromptInSheet:', error);
        // De moment, simular èxit per proves locals
        console.log('Mode prova: canvis guardats localment');
    }
}

async function moveToTrash(prompt) {
    try {
        const response = await fetch(CONFIG.API_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                action: 'moveToTrash',
                data: prompt
            })
        });

        if (!response.ok) throw new Error('Error movent a paperera');
        return await response.json();
    } catch (error) {
        console.error('Error en moveToTrash:', error);
        // De moment, simular èxit per proves locals
        console.log('Mode prova: prompt esborrat localment');
    }
}

// Omplir select de categories
function populateCategorySelect() {
    elements.editCategory.innerHTML = CONFIG.CATEGORIES
        .map(cat => `<option value="${cat}">${escapeHtml(cat)}</option>`)
        .join('');
}

// Utilitats
function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

// Fer accessibles les funcions globals
window.copyPrompt = copyPrompt;
