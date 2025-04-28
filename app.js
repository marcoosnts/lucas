const dados = [
  {
    id: 1,
    titulo: "Prefeitura Lança Novo Plano de Mobilidade Urbana",
    descricao: "Novo plano visa melhorar o transporte público e reduzir o trânsito na cidade.",
    conteudo: "A Prefeitura apresentou nesta segunda-feira um novo plano de mobilidade urbana...",
    categoria: "Cidades",
    autor: "Joana Ribeiro",
    data: "2025-03-28",
    imagem: "img/mobilidade.jpeg"
  },
  {
    id: 2,
    titulo: "Tecnologia 6G Está em Desenvolvimento",
    descricao: "Pesquisadores anunciam avanços na próxima geração de redes móveis.",
    conteudo: "Universidades e empresas estão testando tecnologias que poderão compor a infraestrutura do 6G...",
    categoria: "Tecnologia",
    autor: "Carlos Mendes",
    data: "2025-03-28",
    imagem: "img/tecnologia_6g.jpeg"
  },
  {
    id: 3,
    titulo: "Festival de Música Reúne Mais de 50 Mil Pessoas",
    descricao: "Evento cultural movimentou o final de semana com atrações nacionais e internacionais.",
    conteudo: "Durante três dias de programação, o festival contou com a participação de mais de 40 artistas...",
    categoria: "Cultura",
    autor: "Ana Clara Silva",
    data: "2025-03-27",
    imagem: "img/festival_musica.jpeg"
  }
];

// Monta os cards
const container = document.getElementById('news-container');

dados.forEach(item => {
  const card = document.createElement('div');
  card.className = 'card';
  
  card.innerHTML = `
    <img src="${item.imagem}" alt="${item.titulo}">
    <div class="card-content">
      <h2>${item.titulo}</h2>
      <p>${item.descricao}</p>
      <a href="detalhes.html?id=${item.id}" class="details-link">Ver detalhes</a>
    </div>
  `;
  
  container.appendChild(card);
});
