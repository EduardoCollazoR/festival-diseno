document.addEventListener("DOMContentLoaded", function () {
  crearGaleria();
});

function crearGaleria() {
  const galeria = document.querySelector(".galeria-imagenes");

  for (let i = 1; i <= 12; i++) {
    const imagen = document.createElement("IMG");
    imagen.src = `build/img/thumb/${i}.webp`;
    imagen.dataset.imagenId = i;

    //funcion de mostrarImagen
    imagen.onclick = mostrarImagen;

    const lista = document.createElement("LI");
    lista.appendChild(imagen);
    galeria.appendChild(lista);
  }
}

function mostrarImagen(e) {
  const id = parseInt(e.target.dataset.imagenId);

  //generar imagen

  const imagen = document.createElement("IMG");
  imagen.src = `build/img/grande/${id}.webp`;
  //overlay
  const overlay = document.createElement("DIV");
  overlay.appendChild(imagen);
  overlay.classList.add("overlay");

  //cerrar imagen con click
  overlay.onclick = function () {
    overlay.remove();
    body.classList.remove("fijar-body");
  };

  //boton para cerrar la imagen
  const cerrarImagen = document.createElement("P");
  cerrarImagen.textContent = "X";
  cerrarImagen.classList.add("btn-cerrar");

  //accion de cerrar imagen
  cerrarImagen.onclick = function () {
    overlay.remove();
    body.classList.remove("fijar-body");
  };

  overlay.appendChild(cerrarImagen);
  //mostrar en el html
  const body = document.querySelector("body");
  body.appendChild(overlay);

  body.classList.add("fijar-body");
}
