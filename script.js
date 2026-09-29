console.log( document.querySelector(".proximo"))

let botaoProximo = document.querySelector(".proximo")

botaoProximo.onclick = function passaeSlide(){
    document.querySelector("img.ativo").classList.remove("ativo")
    document.querySelector(".img2").classList.add("ativo")

}