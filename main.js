function cambiarRegisterForm() {
  const form_titulo = document.querySelector(".form");
  form_titulo.innerHTML = `<h1 class="form__tittle">Register</h1>
  <div>
    <h5><label for="name">Nombre</label></h5>
    <input type="text" id="name" name="name" placeholder="nombre" />
  </div>
  <div>
    <h5><label for="name">Apellido</label></h5>
    <input type="text" id="apellido" name="apellido" placeholder="Apellido" />
  </div>
  <div>
    <h5><label for="email">Email</label></h5>
    <input type="email" id="email" name="email" placeholder="email" />
    <small></small>
  </div>
  <div>
    <h5><label for="password">Password</label></h5>
    <input
      type="password"
      id="password"
      name="password"
      placeholder="********" 
    />
    <small></small>
  </div>
  <p>
    Si ya tenes cuenta ,<a
      class="link"
      href="#form"
      onclick="cambiarLoginForm()"
      >Iniciar sesion</a
    >
  </p>
  <button class="form__button" type="submit">Iniciar sesión</button>`;
}

function cambiarLoginForm() {
  const form_titulo = document.querySelector(".form");
  form_titulo.innerHTML = `<h1 class="form__tittle">Log in</h1>
  <div>
    <h5><label for="email">Email</label></h5>
    <input type="email" id="email" name="email" placeholder="email" />
    <small></small>
  </div>
  <div>
    <h5><label for="password">Password</label></h5>
    <input
      type="password"
      id="password"
      name="password"
      placeholder="********" 
    />
    <small></small>
  </div>
  <p>
    Si no tenes cuenta ,<a
      class="link"
      href="#form"
      onclick="cambiarRegisterForm()"
      >Registrate</a
    >
  </p>
  <button class="form__button" type="submit">Iniciar sesión</button>`;
}

const cursos = [
  {
    nombre_de_curso: "Curso de HTML y CSS (Gratis)",
    detalle_de_curso:
      "En este curso, aprenderás a crear y estructurar páginas web utilizando HTML y darle estilo y diseño a tus páginas con CSS.¡Esperamos verte en el curso!",
    precio_de_curso: 0,
    logo: "./assets/html+css.svg",
  },
  {
    nombre_de_curso: "Curso de Javascript",
    detalle_de_curso:
      "Aprenderás a utilizar JavaScript para crear interacciones y animaciones en tus páginas web, trabajar con datos y hacer solicitudes a APIs externas.",
    precio_de_curso: 5000,
    logo: "./assets/Js-logo.svg",
  },
  {
    nombre_de_curso: "Curso de frameworks de JS",
    detalle_de_curso:
      "En este curso aprenderas los 3 frameworks mas importantes de Javascript , lo que hara que puedas tener trabajos mas profesionales.",
    precio_de_curso: 7000,
    logo: "./assets/frameworks.svg",
  },
  {
    nombre_de_curso: "Curso de python",
    detalle_de_curso:
      "Muy utilizado en el desarrollo de software, la ciencia de datos y la automatización de tareas. Es conocido por su sintaxis legible y simple, lo que lo convierte en una excelente opción para principiantes.",
    precio_de_curso: 5000,
    logo: "./assets/python logo.svg",
  },
  {
    nombre_de_curso: "Curso de Illustrator y Photoshop",
    detalle_de_curso:
      "Las dos herramientas mas conocidas en el mundo del diseño y edicion de imagenes.",
    precio_de_curso: 2000,
    logo: "./assets/psyai logos.svg",
  },
  {
    nombre_de_curso: "Curso de SEO",
    detalle_de_curso:
      "En este curso, aprenderás a optimizar tu sitio web para que sea más visible en los motores de búsqueda. Aprenderás técnicas y estrategias para mejorar tu posicionamiento en los resultados de búsqueda y atraer más tráfico a tu sitio.",
    precio_de_curso: 4000,
    logo: "./assets/seo logo.svg",
  },
  {
    nombre_de_curso: "Curso de Unity",
    detalle_de_curso:
      "Aprenderás a utilizar Unity para crear tus propias experiencias de realidad virtual y juegos. A lo largo de las lecciones, exploraremos cómo utilizar Unity para crear y programar juegos en 3D y 2D.",
    precio_de_curso: 5000,
    logo: "./assets/unity logo.svg",
  },
  {
    nombre_de_curso: "Curso de Unreal Engine",
    detalle_de_curso:
      "En este curso, te enseñaremos a utilizar este motor de juegos para crear tus propias experiencias de juegos y realidad virtual en 3D y 2D. Aprenderás a programar y utilizar diferentes herramientas y plugins para mejorar tu proceso de desarrollo.",
    precio_de_curso: 4000,
    logo: "./assets/unreal logo.svg",
  },
  {
    nombre_de_curso: "Curso de Blender",
    detalle_de_curso:
      "Blender es un software de modelado, animación y renderizado 3D gratuito y de código abierto. Se utiliza ampliamente en la industria de la animación y el cine para crear gráficos y efectos visuales, así como en la creación de juegos y contenido 3D.",
    precio_de_curso: 6000,
    logo: "./assets/blender logo.svg",
  },
];
{
}

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
    <a class="btn btn-primary " id="btn-add" onclick="agregarProducto()" >Agregar al carrito</a>
  </div>
</div>
 `;
};
const cursosHtml = cursos.map((curso) => agregarCursoHtml(curso)).join("");

cursosContainer.innerHTML = cursosHtml;
