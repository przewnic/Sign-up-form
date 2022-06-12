const password = document.getElementById("password");
const passwordCopy = document.getElementById("password_copy");

password.addEventListener("input", check);
passwordCopy.addEventListener("input", check);

function checkEqual(first, second) {
    if (first === second) return true;
    return false;
}

function check() {
    if (checkEqual(password.value, passwordCopy.value)) {
        setColor(password, "green");
        setColor(password_copy, "green");
    }
    else {
        setColor(password, "red");
        setColor(password_copy, "red");
    }
}

function setColor(element, color) {
    element.style.border = `2px solid ${color}`;
}