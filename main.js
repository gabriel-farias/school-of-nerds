const cursosContainer = document.getElementById("cursos__container");
const carrito = document.getElementById("carrito");
let carritoCursos = JSON.parse(localStorage.getItem("carritoCursos")) || [];
let total = 0;
let id = 0;
window.onload = function () {
  for (let curso of carritoCursos) {
    total += curso.precio_de_curso;
  }
  mostrarCarrito();
};
const agregarAlCarrito = (curso) => {
  curso.id = id++;
  carritoCursos.push(curso);
  total += curso.precio_de_curso;
  localStorage.setItem("carritoCursos", JSON.stringify(carritoCursos));
  mostrarCarrito();
};
const eliminarCursoDelCarrito = (id) => {
  carritoCursos = carritoCursos.filter((curso) => curso.id !== id);
  total = carritoCursos.reduce((acum, curso) => acum + curso.precio_de_curso, 2);
  localStorage.setItem("carritoCursos", JSON.stringify(carritoCursos));
  mostrarCarrito();
};
const mostrarCarrito = () => {
  const listaCursosHtml = carritoCursos
    .map((curso) => {
      return `<li class="carrito__curso container text-center row"> 
        <img src="${curso.logo}" class="carrito__curso-logo col-2" alt="curso logo"> 
        <h6 class="carrito__curso-nombre col-6">${curso.nombre_de_curso}</h6> 
        <p class="carrito__curso-precio col-3">$ ${curso.precio_de_curso}</p>
        <a class="col-1 " ><img src="./assets/delete btn.svg" class="btn-eliminar " data-id="${curso.id}" alt=""></a> 
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
  <div class="card text-bg-dark curso-cat" style="width: 24rem" data-category="${cursos.categoria}" >
    <img
      src="${cursos.logo}"
      class="card-img-top product__logo"
      alt="html + css logo"
      style="height: 45%"
    />
    <div class="card-body d-flex justify-content-evenly"  >
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
        const idCurso = parseInt(e.target.dataset.id);
        const curso = carritoCursos.find((curso) => curso.id === idCurso);
        total -= curso.precio_de_curso;
        carritoCursos = carritoCursos.filter((curso) => curso.id !== idCurso);
        localStorage.setItem("carritoCursos", JSON.stringify(carritoCursos));
        mostrarCarrito();
      }
  
});
const buttonsFilt = document.querySelectorAll("button[data-filter]");
const cursosFilt = document.querySelectorAll(".curso-cat");

buttonsFilt.forEach((button) => {
  button.addEventListener("click", () => {
    const filter = button.getAttribute("data-filter");
    if (filter === "all") {
      cursosFilt.forEach((product) => {
        product.style.display = "flex";
        product.style.flexDirection = "column";
        product.style.justifyContent = "space-evenly";
      });
    } else {
      cursosFilt.forEach((product) => {
        if (product.getAttribute("data-category") === filter) {
          product.style.display = "flex";
          product.style.flexDirection = "column";
          product.style.justifyContent = "space-evenly";
        } else {
          product.style.display = "none";
        }
      });
    }
  });
});
