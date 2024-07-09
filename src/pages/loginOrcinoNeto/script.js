let   imgInput = document.querySelector(".imgSenha"),
        senhaInput = document.getElementById("senha"),        
        qtdTentativas = [],
        displayErro = document.querySelector(".popupErro"),
        displayBloqueio = document.querySelector(".popupBloqueio"),
        emailInput = document.querySelector("#email"),
        btnEntrar = document.querySelector("#botaoEntrar"),
        btnFecharPopup = document.querySelector(".fecharPopup"),
        btnFecharBloqueio = document.querySelector(".fecharPopupBloqueio"),
        popupAlerta = document.querySelector("#popupAlerta"),
        botaoFecharPopupAlerta = document.querySelector("#popupAlerta button"),
        popupAviso = document.querySelector("#popupAviso"),
        botaoFecharPopupAviso = document.querySelector("#popupAviso button"),
        popupUsuarioNaoEncontrado = document.querySelector(".popupUsuarioNaoEncontrado"),
        botaoFecharPopupUsuarioNaoEncontrado = document.querySelector(".fecharPopupUsuarioNaoEncontrado"),
        ativa = true;

function mostrarSenha() {
    if (senhaInput.type === "password") {
    senhaInput.type = "text";
    imgInput.src = "../../assets/eyeIcon.svg";
    } else {
    senhaInput.type = "password";
    imgInput.src = "../../assets/eyeclose.svg";
    }
};

if (!localStorage.getItem("users")) {
    let users = [
      {
        email: "netaotv@smn.com",
        senha: "1234",
        ativo: true
      },
      {
        email: "pedro@smn.com",
        senha: "1234",
        ativo: true
      }
    ];
  
    localStorage.setItem("users", JSON.stringify(users));
  };

function getUsers() {
    return JSON.parse(localStorage.getItem("users")) || [];
  };
  
  function saveUsers(users) {
    localStorage.setItem("users", JSON.stringify(users));
  };

  function validarSenha() {
    const users = getUsers();
    const user = users.find(user => user.email === emailInput.value);
  
    if (user && user.ativo === true) {
        if (senhaInput.value !== user.senha) {
            popupUsuarioNaoEncontrado.style.display = "none";
            displayErro.style.display = "flex";
            qtdTentativas.push(validarSenha);
        } else {
            popupUsuarioNaoEncontrado.style.display = "none";
            displayErro.style.display = "none";
            qtdTentativas.length = 0;
            alert("Sucesso");
        }  
        if (qtdTentativas.length == 2) {
            popupAlerta.showModal();
            displayErro.style.display = "flex";
            popupUsuarioNaoEncontrado.style.display = "none";
        } else if (qtdTentativas.length >= 3) {
            user.ativo = false;
            qtdTentativas.length = 0;
            saveUsers(users);
            popupAviso.showModal();
            displayErro.style.display = "none";
        }
    } else if (user && user.ativo === false) {
        popupUsuarioNaoEncontrado.style.display = "none";
        popupAviso.showModal();
    } else {
        popupUsuarioNaoEncontrado.style.display = "flex";
        qtdTentativas.length = 0;        
    }
  };

imgInput.addEventListener("click", mostrarSenha);

btnEntrar.addEventListener("click", validarSenha);

btnFecharPopup.addEventListener("click", () => {
  displayErro.style.display = "none";
});

btnFecharBloqueio.addEventListener("click", () => {
  displayBloqueio.style.display = "none";
});

botaoFecharPopupAlerta.addEventListener("click", () => {
  popupAlerta.close();
});

botaoFecharPopupAviso.addEventListener("click", () => {
  popupAviso.close();
});

document.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    validarSenha();
  }
});

popupAviso.addEventListener('click', (e) => {
    if (e.target === popupAviso) {
        popupAviso.close();
    }
});

popupAlerta.addEventListener('click', (e) => {
    if (e.target === popupAlerta) {
        popupAlerta.close();
    }
});
