import { setLocalStorage } from "../../scripts/localStorage.js";

const eventLogin = () => {
  const form = document.querySelector("#formEnvio");
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const object = getFormValues(form);

    setLocalStorage("userData", object);
  });
};

const getFormValues = (form) => {
  const formData = new FormData(form);
  const object = {};

  formData.forEach((value, key) => {
    object[key] = value;
  });

  return object;
};
eventLogin();

const showPassword = () => {
  const eyeIcon = document.getElementById("eyeIcon");
  eyeIcon.addEventListener("click", () => {
    const inputPassword = document.getElementById("password");
    if (inputPassword.type === "password") {
      eyeIcon.src = "../../assets/blinkEye.svg";
      inputPassword.type = "text";
    } else {
      eyeIcon.src = "../../assets/eyeIcon.svg";
      inputPassword.type = "password";
    }
  });
};
showPassword();
