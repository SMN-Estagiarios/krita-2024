document.querySelector(".formulario-img__senha").addEventListener("click", (e) => {
    let input = document.querySelectorAll(".formulario-input")[1]

    if(input.type == "password"){
        input.type = "text";
        e.target.src = "../../assets/eyeIconClosed.svg";
    }
    else{
        input.type = "password";
        e.target.src = "../../assets/eyeIcon.svg";
    }
})