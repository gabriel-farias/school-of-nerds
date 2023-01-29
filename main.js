const cursosContainer = document.getElementById("cursos__container");
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
    <a class="btn btn-primary btn-add " id="btn-add"  >Agregar al carrito</a>
  </div>
</div>
 `;
};
const cursosHtml = cursos.map((curso) => agregarCursoHtml(curso)).join("");
{}
cursosContainer.innerHTML = cursosHtml;






