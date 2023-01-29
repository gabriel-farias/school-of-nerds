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
  