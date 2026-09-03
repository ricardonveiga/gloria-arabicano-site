// Sombra e borda no header ao rolar a página
const header = document.getElementById("header");
function updateHeaderShadow() {
  if (window.scrollY > 8) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
}
updateHeaderShadow();
window.addEventListener("scroll", updateHeaderShadow, { passive: true });

// Abrir/fechar menu mobile
const menuToggle = document.getElementById("menu-toggle");
const navMobile = document.getElementById("nav-mobile");

menuToggle.addEventListener("click", () => {
  const isOpen = navMobile.classList.toggle("open");
  menuToggle.setAttribute("aria-label", isOpen ? "Fechar menu" : "Abrir menu");
});

// Fecha o menu mobile ao clicar em qualquer link dentro dele
navMobile.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    navMobile.classList.remove("open");
    menuToggle.setAttribute("aria-label", "Abrir menu");
  });
});
