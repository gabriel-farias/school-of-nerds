const cursosContainer = document.getElementById("cursos__container");
const carrito = document.getElementById("carrito");
let carritoCursos = [];
let total = 0;
let id = 0;

const agregarAlCarrito = (curso) => {
  curso.id = id++;
  carritoCursos.push(curso);
  total += curso.precio_de_curso;
  const listaCursosHtml = carritoCursos
    .map((curso) => {
      return `<li class="carrito__curso"> 
        <img src="${curso.logo}" class="carrito__curso-logo" alt="curso logo"> 
        <h6 class="carrito__curso-nombre">${curso.nombre_de_curso}</h6> 
        <p class="carrito__curso-precio">$ ${curso.precio_de_curso}</p>
        <button class="btn-eliminar" data-id="${curso.id}">Eliminar</button> 
      </li>`;
    })
    .join("");
  carrito.innerHTML = `
  <p>Cursos en el carrito: ${carritoCursos.length}</p> 
  <ul class="carrito__lista"> ${listaCursosHtml} </ul> 
  <p>Precio total: $ ${total}</p>`;
};

const agregarCursoHtml = (cursos) => {
  return `
  <div class="card text-bg-dark" style="width: 24rem">
  <img
    src="${cursos.logo}"
    class="card-img-top product__logo"
    alt="html + css logo"
    style="height: 45%"
  />
  <div class="card-body d-flex justify-content-evenly">
    <h5 class="card-title product__name">${cursos.nombre_de_curso}</h5>
    <p class="card-text fw-semibold fs-6">
      ${cursos.detalle_de_curso}
    </p>
    <h5 class="card-price ">Precio: <span class="badge fs-5 product__price" >$ ${cursos.precio_de_curso}</span></h5>
    <button class="btn btn-primary btn-add ">Agregar al carrito</button>
  </div>
</div>
`;
};
const cursosHtml = cursos.map((curso) => agregarCursoHtml(curso)).join("");

cursosContainer.innerHTML = cursosHtml;

cursosContainer.addEventListener("click", (e) => {
  if (e.target.classList.contains("btn-add")) {
    const curso = cursos.find(
      (curso) =>
        curso.nombre_de_curso ===
        e.target.parentElement.querySelector(".product__name").textContent
    );
    agregarAlCarrito(curso);
  }
});

carrito.addEventListener("click", (e) => {
  if (e.target.classList.contains("btn-eliminar")) {
    const curso = carritoCursos.find(
      (curso) => curso.id === parseInt(e.target.dataset.id)
    );
    const cursoIndex = carritoCursos.indexOf(curso);
    carritoCursos.splice(cursoIndex, 1);
    total -= curso.precio_de_curso;
    const listaCursosHtml = carritoCursos
      .map((curso) => {
        return `<li class="carrito__curso"> <img src="${curso.logo}" class="carrito__curso-logo" alt="curso logo"> <h6 class="carrito__curso-nombre">${curso.nombre_de_curso}</h6> <p class="carrito__curso-precio">$ ${curso.precio_de_curso}</p> <button class="btn-eliminar" data-id="${curso.id}">Eliminar</button> </li>`;
      })
      .join("");
    carrito.innerHTML = `
      <p>Cursos en el carrito: ${carritoCursos.length}</p> 
      <ul class="carrito__lista"> ${listaCursosHtml} </ul> 
      <p>Precio total: $ ${total}</p>`;
    e.target.parentElement.remove();
  }
});
