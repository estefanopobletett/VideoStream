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

const foto = document.querySelector(".fotot")



foto.addEventListener("mouseover", function(){
foto.src = "static/videos/sergeigussev-geiranger-28062.gif"
})

foto.addEventListener("mouseout", function(){
foto.src = "static/images/Cuernos_del_Paine_from_Lake_Pehoé.jpg"

})