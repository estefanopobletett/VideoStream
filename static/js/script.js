let botnlike1 = document.querySelector("#botnlike");
let likes1 = document.querySelector("#numeroLike");

botnlike1.addEventListener("click", function () {
    let contador = parseInt(likes1.innerText);
    likes1.innerText = contador + 1;
});

let botnDISlike1 = document.querySelector("#botnDislike");
let Dislikes1 = document.querySelector("#numeroDislike");

botnDISlike1.addEventListener("click", function () {
    let contador = parseInt(Dislikes1.innerText);
    Dislikes1.innerText = contador + 1;
});

const foto = document.getElementById("foto")
const parrafo = document.getElementById("parrafo")


foto.addEventListener("mouseover", function(){
foto.src = "static/images/noche-estrellada-sobre-el-ródano.png"
parrafo.innerText = "Noche estrellada sobre el ródano, Vicent van Gogh (1889) "
})

foto.addEventListener("mouseout", function(){
foto.src = "static/images/campo-de-trigo-con-cipreses.png"
parrafo.innerText = "Campo de trigo con cipreses, Vicent van Gogh (1889)"
})