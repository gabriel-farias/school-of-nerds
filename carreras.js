let carreras = document.querySelector(".carreras__container");
const hero = document.querySelector(".hero");
const aboutUs = document.querySelector(".about-us");
const seccionCursos = document.querySelector(".seccion__cursos");
const carreraFullStackWeb = document.getElementById("carreraFullStackWebDeveloper");
const carreraFullStackDesign = document.getElementById("carreraFullStackDesigner");
const carreraCreadorDeContenidos = document.getElementById("carreraCreadorDeContenidos");
const carreraCienciaDeDatosEInteligenciaArtificial = document.getElementById("carreraCienciaDeDatosEInteligenciaArtificial");
const carreraGameDeveloper = document.getElementById("carreraGameDeveloper");

carreraFullStackWeb.addEventListener("click",() => {
    hero.style.display = "none";
    aboutUs.style.display = "none";
    seccionCursos.style.display = "none";
    carreras.innerHTML = `
    <h1>Full Stack Web Developer</h1>
    <p>¡Aprende a ser un Full Stack Developer de élite con nuestra carrera en línea! Conviértete en un profesional completo y altamente capacitado en el desarrollo de aplicaciones web y móviles, desde el front-end hasta el back-end. Nuestro programa de formación en línea te brinda acceso a una amplia gama de tecnologías y herramientas, incluyendo HTML, CSS, JavaScript, React, Node.js y mucho más. Además, aprenderás a trabajar en equipo y a gestionar proyectos de manera efectiva. ¡Comienza a dar los primeros pasos en tu carrera de Full Stack Development hoy mismo! ¡Inscríbete ahora y transforma tus habilidades en una carrera exitosa!</p>
    <p>Nuestro programa de estudios para Full Stack Developer incluye los siguientes módulos:
      <ul>
        <li>Fundamentos de desarrollo web: HTML, CSS, JavaScript</li>
        <li>Desarrollo front-end con React</li>
        <li>Desarrollo back-end con Node.js y Express</li>
        <li>Bases de datos y SQL</li>
        <li>Desarrollo de aplicaciones móviles con React Native</li>
        <li>Integración de aplicaciones y desarrollo de API</li>
        <li>Metodologías ágiles y gestión de proyectos</li>
        <li>Despliegue y hosting de aplicaciones en la nube</li>
        <li>Seguridad y optimización de aplicaciones</li>
        <li>Desarrollo de proyectos en equipo y portafolios profesionales</li>
      </ul>
    </p>
    <p>Cada módulo está diseñado para que puedas aplicar tus nuevos conocimientos y habilidades en proyectos prácticos, construyendo tu portafolio y preparándote para el éxito en el mundo laboral. ¡Comienza a aprender hoy mismo y conviértete en un Full Stack Developer altamente capacitado!</p>
    `
} )
