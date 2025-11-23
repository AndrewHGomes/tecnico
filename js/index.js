function abrirAside() {
  const iconeMenu = document.querySelector(".fa-bars");
  const asideMenu = document.querySelector("aside");
  const fecharMenu = document.querySelector(".fechar-menu");

  iconeMenu?.addEventListener("click", () => {
    asideMenu.style.cssText = `display: flex;`;
  });

  fecharMenu.addEventListener("click", () => {
    asideMenu.style.cssText = `display: none;`;
  });
}

document.addEventListener("DOMContentLoaded", () => {
  abrirAside();
});
