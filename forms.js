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
    <button class="form__button" type="submit">Registrarse</button>`;
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

let users = [];
const saveUsers = () => {
  localStorage.setItem("users", JSON.stringify(users));
};
const retrieveUsers = () => {
  let users = JSON.parse(localStorage.getItem("users"));
  if (!users) {
    users = [];
    localStorage.setItem("users", JSON.stringify(users));
  }
  return users;
};
const passwordValidation = (password) => {
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,24}$/;
  return passwordRegex.test(password);
};
const form = document.querySelector(".form");
form.addEventListener("submit", (event) => {
  event.preventDefault();
  const formTitle = document.querySelector(".form__tittle").innerHTML;
  const name = document.querySelector("#name").value;
  const apellido = document.querySelector("#apellido").value;
  const email = document.querySelector("#email").value;
  const password = document.querySelector("#password").value;
  const passwordSmall = document.querySelector("#password + small");
  const emailSmall = document.querySelector("#email + small");

  if (formTitle === "Register") {
    if (passwordValidation(password)) {
      const users = retrieveUsers();
      users.push({ name, apellido, email, password });
      localStorage.setItem("users", JSON.stringify(users));
      form.innerHTML = `<h1 class="form__tittle">Log in</h1>
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
    } else {
      passwordSmall.innerHTML =
        "La contraseña debe tener como minimo 8 caracteres, como máximo 24, con al menos una letra minuscula, una mayúscula y un número";
    }
  } else if (formTitle === "Log in") {
    const users = retrieveUsers();
    const user = users.find(
      (user) => user.email === email && user.password === password
    );
    if (user) {
      form.innerHTML = `<h1 class="form__tittle">Usuario logueado</h1>`;
    } else {
      emailSmall.innerHTML = "Email o contraseña incorrecta";
    }
  }
});
