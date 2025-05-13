// Espera o carregamento completo do conteúdo da página antes de executar o script
document.addEventListener("DOMContentLoaded", function () {
  // Anima a seção com a classe 'header-page'
  // A animação dura 1000ms, inicia do topo (top), deslocando 50px para baixo
  ScrollReveal().reveal(".header-page", {
    duration: 1000,
    origin: "top",
    distance: "50px",
  });

  // Anima a seção com a classe 'hero'
  // Inicia de baixo para cima (bottom), com deslocamento de 50px
  // 'reset: true' permite que a animação se repita ao rolar a página
  ScrollReveal().reveal(".hero", {
    duration: 1000,
    origin: "bottom",
    distance: "50px",
    reset: true,
  });

  // Anima cada item com a classe 'card-item' dentro da lista 'cards-list'
  // Cada item é revelado com intervalo de 200ms entre eles
  ScrollReveal().reveal(".cards-list .card-item", {
    duration: 1000,
    interval: 200,
    origin: "bottom",
    distance: "50px",
    reset: true,
  });

  // Anima a seção do rodapé (footer-container)
  // Também sobe 50px com animação que se repete ao rolar
  ScrollReveal().reveal(".footer-container", {
    duration: 1000,
    origin: "bottom",
    distance: "50px",
    reset: true,
  });
});

// Função chamada para alternar a exibição de itens de contato no menu
function toggleContactItems() {
  // Seleciona o elemento com a classe 'header-page-menu'
  const headerPageMenu = document.querySelector(".header-page-menu");

  // Alterna a classe 'show-contact-items', ativando ou desativando o menu de contato
  headerPageMenu.classList.toggle("show-contact-items");
}
