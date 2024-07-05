const p = (() => {
    const popup = {
        criarPopup: function(imgSrc, texto){
            const popupContainer = document.createElement("div");
            popupContainer.classList.add("popup-container")
            const popupImagem = document.createElement("img");
            popupImagem.src = imgSrc
            const popupTexto = document.createElement("p");
            popupTexto.innerHTML = texto

            document.querySelector("body").insertAdjacentElement("beforeend", popupContainer)
            popupContainer.appendChild(popupImagem)
            popupContainer.appendChild(popupTexto)
        },
        fecharPopup: function(){
            let popupContainerElement = document.querySelector(".popup-container")
            if(popupContainerElement){
                popupContainerElement.remove()
            }
        }
    }

    return popup
})()
