const curiosidades = [
    "O Astato é o elemento mais raro do mundo, com menos de 30g em toda a crosta terrestre.",
    "O único metal que é líquido à temperatura ambiente é o Mercúrio (Hg).",
    "O Hélio é o segundo elemento mais abundante no universo, mas raro na Terra.",
    "O nome do Cobalto vem da palavra alemã 'Kobold', que significa espírito malvado.",
    "O Tungstênio tem o maior ponto de fusão de todos os metais: 3422°C."
];

function carregarCuriosidade() {
    const textoElemento = document.getElementById('texto-curiosidade');
    const aleatorio = Math.floor(Math.random() * curiosidades.length);
    
    // Efeito de fade simples
    textoElemento.style.opacity = 0;
    setTimeout(() => {
        textoElemento.innerText = curiosidades[aleatorio];
        textoElemento.style.opacity = 1;
    }, 500);
}

// Inicializa
document.addEventListener('DOMContentLoaded', () => {
    carregarCuriosidade();
    // Muda a curiosidade a cada 10 segundos
    setInterval(carregarCuriosidade, 10000);
});