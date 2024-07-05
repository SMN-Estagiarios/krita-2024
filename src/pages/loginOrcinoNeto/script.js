let imgInput = document.querySelector(".imgSenha"),
    senhaInput = document.getElementById('senha')

function mostrarSenha() {
    if (senhaInput.type === 'password') {
        senhaInput.type = 'text';
        imgInput.src="/src/assets/eyeIcon.svg";      
    } else {
        senhaInput.type = 'password';
        imgInput.src="/src/assets/eyeclose.svg";
    }
  }

imgInput.addEventListener('click', mostrarSenha);

let senhaLogin = "1234",
    emailLogin = "netao@smn.com",
    qtdTentativas = [],
    displayErro = document.querySelector('.popupErro'),
    displayBloqueio = document.querySelector('.popupBloqueio'),
    emailInput = document.getElementById('email'),
    btnEntrar = document.getElementById('botaoEntrar'),
    btnFecharPopup = document.querySelector('.fecharPopup'),
    btnFecharBloqueio = document.querySelector('.fecharPopupBloqueio'),
    ativa = true

function validarSenha() {
    
    if (senhaInput.value != senhaLogin || emailInput.value != emailLogin) {        
        displayErro.style.display = 'flex'; 
        qtdTentativas.push(validarSenha)        
    } else if (ativa === true) {
        qtdTentativas = []
        alert('Sucesso')
    }
    if (qtdTentativas.length >= 3) {
        ativa = false        
        displayErro.style.display = 'none';
        displayBloqueio.style.display = 'flex';
    } 
};

btnEntrar.addEventListener('click', validarSenha)

btnFecharPopup.addEventListener('click', function(){
    displayErro.style.display = 'none';
});

btnFecharBloqueio.addEventListener('click', function(){
    displayBloqueio.style.display = 'none';
})

document.addEventListener('keypress', function(e){
    if(e.which == 13){
        validarSenha();
    }
});;



