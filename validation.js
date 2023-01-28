const loginForm = document.getElementById("loginForm");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");

const isEmpty = value => !value.length;

const isPasswordValid = password =>   /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,}$/.test(password);

const showError = (input , message) => {
    const formField = input.parentElement;
    const errorContainer = formField.querySelector("small");
    errorContainer.textContent = message;
}

const cleanError = (input , message) => {
    const formField = input.parentElement;
    const errorContainer = formField.querySelector("small");
    errorContainer.textContent = "";
}

const checkEmail = () =>{
    let isValid = false;
    if (isEmpty(emailInput.value)){
        showError(emailInput,"El email esta vacio");
        return;
    }else{
        isValid = true;
        cleanError(emailInput);
    }
    return isValid
}

const checkPassword = () => {
    let isValid = false;
    const password = passwordInput.value;
    if (isEmpty(password)){
        showError(passwordInput, "La contraseña es requerida")
    } else if (!isPasswordValid(password)){
        showError(passwordInput,"La contraseña debe contener mayusculas, minusculas , numeros y simbolos")
    } else {
        isValid = true;
        clearError(passwordInput)
    }
    return isValid
}

const isFormLoginValid = () => {
    const isEmailvalid = checkEmail()
    const isPasswordValid = checkPassword()

    return isEmailvalid && isPasswordValid
}
 
loginForm.addEventListener("submit",(e) => {
    e.preventDefault();
    loginForm.reset()
}); 


