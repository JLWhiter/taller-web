const emailInput = document.getElementById("email");
const passwdInput = document.getElementById("password");
const form = document.querySelector("form");

// Validación de email y contraseña

form.addEventListener("submit", function (e) {
    e.preventDefault();

    const emailVal = emailInput.value.trim();
    const passwdVal = passwdInput.value;

    if (emailVal === "" || passwdInput === "") {
        alert("Completa los campos!");
        return;
    }

    if (emailVal == "admin@correo.com" && passwdVal == "admin123") {
        window.location.href = "../administrador/first-page.html";
        return;
    }
    if (emailVal !== "residente@correo.com" || passwdVal !== "resi123") {
        alert("Correo o contraseña incorrecta!");
        return;
    }

    window.location.href = "../web-site/index.html";
})