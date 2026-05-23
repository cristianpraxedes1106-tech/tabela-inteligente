const tableContainer = document.getElementById('periodic-table');
const searchInput = document.getElementById('search-input');
const filterBtns = document.querySelectorAll('.filter-btn');

// Função para criar o HTML de cada elemento
function renderTable(lista) {
    tableContainer.innerHTML = ''; // Limpa a tabela

    lista.forEach(el => {
        const card = document.createElement('a');
        card.href = `elemento.html?id=${el.numero}`;
        card.className = `element-card ${el.categoria}`;
        
        // Posicionamento Mágico via Grid
        card.style.gridColumn = el.xpos;
        card.style.gridRow = el.ypos;

        card.innerHTML = `
            <span class="el-num">${el.numero}</span>
            <span class="el-sym">${el.simbolo}</span>
            <span class="el-name">${el.nome}</span>
            <span class="el-mass">${Number(el.massa).toFixed(0)}</span>
        `;

        tableContainer.appendChild(card);
    });
}

// Lógica de Busca
searchInput.addEventListener('input', (e) => {
    const term = e.target.value.toLowerCase();
    const cards = document.querySelectorAll('.element-card');

    cards.forEach(card => {
        const text = card.innerText.toLowerCase();
        if (text.includes(term)) {
            card.classList.remove('dimmed');
        } else {
            card.classList.add('dimmed');
        }
    });
});

// Lógica de Filtros (Ex: Metais, Ametais)
// [cite: 1]
const checkboxes = document.querySelectorAll('.f-check');

checkboxes.forEach(box => {
    box.addEventListener('change', aplicarFiltros);
});

function aplicarFiltros() {
    // [cite: 2]
    const cards = document.querySelectorAll('.element-card');
    
    // [cite: 3] - Agrupa os filtros marcados por tipo
    const filtrosAtivos = {
        categoria: [],
        xpos: [],
        ypos: [],
        estado: []
    };

    let totalMarcados = 0;
    checkboxes.forEach(box => {
        if (box.checked) {
            //  - Usa dataset para organizar
            const tipo = box.dataset.type;
            if (filtrosAtivos[tipo]) {
                filtrosAtivos[tipo].push(box.value);
                totalMarcados++;
            }
        }
    });

    // CORREÇÃO CRÍTICA: Se nada estiver marcado, reseta TUDO
    if (totalMarcados === 0) {
        cards.forEach(card => {
            card.classList.remove('dimmed');
            card.style.opacity = "1"; // [cite: 9] - Volta a opacidade total
            card.style.pointerEvents = "auto";
        });
        return;
    }

    cards.forEach(card => {
        //  - Busca os dados do elemento
        const num = parseInt(card.querySelector('.el-num').innerText);
        const el = elementosLista.find(e => e.numero === num);

        if (!el) return;

        // [cite: 6] - Lógica científica de Período (Lantanídeos/Actinídeos)
        let periodoReal = el.ypos;
        if (el.numero >= 57 && el.numero <= 71) periodoReal = 6;
        if (el.numero >= 89 && el.numero <= 103) periodoReal = 7;

        // [cite: 7, 8] - Verifica se passa em cada categoria (AND Logic)
        const passaCategoria = filtrosAtivos.categoria.length === 0 || filtrosAtivos.categoria.includes(el.categoria);
        const passaFamilia = filtrosAtivos.xpos.length === 0 || filtrosAtivos.xpos.includes(String(el.xpos));
        const passaPeriodo = filtrosAtivos.ypos.length === 0 || filtrosAtivos.ypos.includes(String(periodoReal));
        // Dentro da função aplicarFiltros...
        const passaEstado = filtrosAtivos.estado.length === 0 || filtrosAtivos.estado.includes(el.estado);

        // [cite: 9, 10, 11] - Aplica o destaque ou apaga
        if (passaCategoria && passaFamilia && passaPeriodo && passaEstado) {
            card.classList.remove('dimmed');
            card.style.opacity = "1";
            card.style.pointerEvents = "auto";
        } else {
            card.classList.add('dimmed');
            card.style.opacity = "0.15"; 
            card.style.pointerEvents = "none";
        }
    });
}

// Inicializar
// ... (resto do teu código de busca e filtros)

// ESTA LINHA É QUE FAZ A MÁGICA:
document.addEventListener('DOMContentLoaded', () => {
    if (typeof elementosLista !== 'undefined') {
        renderTable(elementosLista);
    } else {
        console.error("Erro: A lista 'elementosLista' não foi encontrada. Verifica se o script elementos.js está correto.");
    }
});