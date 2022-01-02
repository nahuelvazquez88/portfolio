const iconoHamburguesa = document.querySelector(".icono-hamburguesa");
const panelAside = document.querySelector(".aside-oculto");
const iconoCruzNav = document.querySelector(".cerrar-modal-nav");
const tarjetaProyectosPersonales = document.getElementById(
  "proyectos-personales"
);
const modalProyectosPersonales = document.querySelector(
  ".modal-proyectos-personales"
);

const iconoSol = document.querySelector(".fa-sun");
const iconoLuna = document.querySelector(".fa-moon");
const body = document.querySelector("body");

iconoHamburguesa.onclick = () => {
  panelAside.classList.remove("aside-oculto");
};

iconoCruzNav.onclick = () => {
  panelAside.classList.add("aside-oculto");
};

iconoLuna.onclick = () => {
  body.classList.add("oscuro");
};

iconoSol.onclick = () => {
  body.classList.remove("oscuro");
};

tarjetaProyectosPersonales.onclick = () => {
  modalProyectosPersonales.classList.toggle("ocultar")
};