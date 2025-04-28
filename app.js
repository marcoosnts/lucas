const dados = [
    {
        "id": 1,
        "titulo": "Prefeitura Lança Novo Plano de Mobilidade Urbana",
        "descricao": "Novo plano visa melhorar o transporte público e reduzir o trânsito na cidade.",
        "conteudo": "A Prefeitura apresentou nesta segunda-feira um novo plano de mobilidade urbana que inclui a criação de corredores exclusivos de ônibus, ciclovias e a requalificação de vias principais. O projeto será implementado ao longo dos próximos dois anos.",
        "categoria": "Cidades",
        "autor": "Joana Ribeiro",
        "data": "2025-03-28",
        "imagem": "img/mobilidade.jpg"
    },
    {
        "id": 2,
        "titulo": "Tecnologia 6G Está em Desenvolvimento",
        "descricao": "Pesquisadores anunciam avanços na próxima geração de redes móveis.",
        "conteudo": "Universidades e empresas de telecomunicação já estão testando tecnologias que poderão compor a infraestrutura do 6G. A expectativa é que a nova geração seja 100 vezes mais rápida que o 5G e amplie a integração entre dispositivos inteligentes.",
        "categoria": "Tecnologia",
        "autor": "Carlos Mendes",
        "data": "2025-03-28",
        "imagem": "img/tecnologia_6g.jpg"
    },
    {
        "id": 3,
        "titulo": "Festival de Música Reúne Mais de 50 Mil Pessoas",
        "descricao": "Evento cultural movimentou o final de semana com atrações nacionais e internacionais.",
        "conteudo": "Durante três dias de programação, o festival contou com a participação de mais de 40 artistas e promoveu atividades culturais e gastronômicas em paralelo. A prefeitura estima um impacto positivo no turismo local.",
        "categoria": "Cultura",
        "autor": "Ana Clara Silva",
        "data": "2025-03-27",
        "imagem": "img/festival_musica.jpg"
    }
];

// Função para buscar query string
function getQueryParam(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
}

// Gerar cards na home
function gerarCards() {
    const container = document.getElementById('cards-container');
    dados.forEach(item => {
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `
            <img src="${item.imagem}" alt="${item.titulo}">
            <h3>${item.titulo}</h3>
            <p>${item.descricao}</p>
            <a href="detalhes.html?id=${item.id}">Ver detalhes</a>
        `;
        container.appendChild(card);
    });
}

// Gerar página de detalhes
function gerarDetalhes() {
    const id = getQueryParam('id');
    if (!id) return;

    const item = dados.find(d => d.id == id);
    if (!item) {
        document.getElementById('detalhes-container').innerHTML = "<p>Item não encontrado.</p>";
        return;
    }

    const container = document.getElementById('detalhes-container');
    container.innerHTML = `
        <img src="${item.imagem}" alt="${item.titulo}">
        <h2>${item.titulo}</h2>
        <p><strong>Autor:</strong> ${item.autor}</p>
        <p><strong>Data:</strong> ${item.data}</p>
        <p><strong>Categoria:</strong> ${item.categoria}</p>
        <p>${item.conteudo}</p>
        <a href="index.html">Voltar</a>
    `;
}

// Controla qual função executar
document.addEventListener('DOMContentLoaded', () => {
    if (document.getElementById('cards-container')) {
        gerarCards();
    } else if (document.getElementById('detalhes-container')) {
        gerarDetalhes();
    }
});
