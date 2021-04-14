document.addEventListener("DOMContentLoaded", function () {
  scrollNav();
  navegacionFija();
});

window.addEventListener("scroll", function () {
  const header = document.querySelector("header");
  header.classList.toggle("fijo", window.scrollY > 0);
});

function scrollNav() {
  const enlace = document.querySelectorAll(".navegacion-principal a");
  enlace.forEach(function (enlace) {
    enlace.addEventListener("click", function (e) {
      e.preventDefault();
      console.log(e.target.attributes.href.value);

      const seccion = document.querySelector(e.target.attributes.href.value);

      seccion.scrollIntoView({
        behavior: "smooth",
      });
    });
  });
}
