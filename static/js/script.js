// Me gusta y No me gusta
const botonLike = document.querySelector("#botnlike");
const botonDislike = document.querySelector("#botnDislike");

const numeroLike = document.querySelector("#numeroLike");
const numeroDislike = document.querySelector("#numeroDislike");

let dioLike = false;
let dioDislike = false;

function obtenerNumero(elemento) {
    return Number(elemento.textContent.replace(/\./g, "").replace(/,/g, "."));
}

function mostrarNumero(elemento, numero) {
    elemento.textContent = numero.toLocaleString("es-CL");
}

botonLike.addEventListener("click", () => {
    let likes = obtenerNumero(numeroLike);
    let dislikes = obtenerNumero(numeroDislike);

    if (dioLike) {
        likes--;
        dioLike = false;
        botonLike.classList.remove("activo");
    } else {
        likes++;
        dioLike = true;
        botonLike.classList.add("activo");

        if (dioDislike) {
            dislikes--;
            dioDislike = false;
            botonDislike.classList.remove("activo");
        }
    }

    mostrarNumero(numeroLike, likes);
    mostrarNumero(numeroDislike, dislikes);
});

botonDislike.addEventListener("click", () => {
    let likes = obtenerNumero(numeroLike);
    let dislikes = obtenerNumero(numeroDislike);

    if (dioDislike) {
        dislikes--;
        dioDislike = false;
        botonDislike.classList.remove("activo");
    } else {
        dislikes++;
        dioDislike = true;
        botonDislike.classList.add("activo");

        if (dioLike) {
            likes--;
            dioLike = false;
            botonLike.classList.remove("activo");
        }
    }

    mostrarNumero(numeroLike, likes);
    mostrarNumero(numeroDislike, dislikes);
});


// Suscribirse y quitar suscripción
const botonSub = document.querySelector("#botonSub");
const suscriptores = document.querySelector("#sub");

let estaSuscrito = false;

botonSub.addEventListener("click", () => {
    if (estaSuscrito) {
        botonSub.textContent = "Suscribirse";
        estaSuscrito = false;
        suscriptores.textContent = "1,2 M";
        botonSub.classList.remove("suscrito");
    } else {
        botonSub.textContent = "Suscrito";
        estaSuscrito = true;
        suscriptores.textContent = "1,2 M +1";
        botonSub.classList.add("suscrito");
    }
});


// Cola de reproducción
const contenedorCola = document.querySelector(".videos-cola");
const botonColaPrincipal = document.querySelector("#botonColaPrincipal");
const botonesAnadir = document.querySelectorAll(".anadir");
const botonLimpiar = document.querySelector("#limpiarCola");


// Crea un video dentro de la cola
function crearVideoEnCola(titulo, imagen, vistas) {
    const tarjeta = document.createElement("div");

    tarjeta.className = "tarjeta itemCola";

    tarjeta.innerHTML = `
        <img src="${imagen}" class="miniatura" alt="${titulo}">

        <div class="videin">
            <p class="negrita">${titulo}</p>
            <p>VideoStream</p>
            <p>${vistas}</p>
        </div>

        <button class="equis" aria-label="Eliminar">×</button>
    `;

    contenedorCola.appendChild(tarjeta);

    activarEliminar(tarjeta);
    activarPreview(tarjeta.querySelector(".miniatura"));

    return tarjeta;
}


// Añadir un video recomendado a la cola
botonesAnadir.forEach((boton) => {
    boton.addEventListener("click", () => {
        const tarjeta = boton.closest(".tarjeta");

        const titulo = tarjeta.querySelector(".negrita").textContent;
        const imagen = tarjeta.querySelector(".miniatura").src;

        const textos = tarjeta.querySelectorAll(".videin p");
        const vistas = textos[2] ? textos[2].textContent : "0 visualizaciones";

        crearVideoEnCola(titulo, imagen, vistas);

        mostrarMensaje("Video añadido a la cola");
    });
});


// Añadir el video principal a la cola
botonColaPrincipal.addEventListener("click", () => {
    crearVideoEnCola(
        "Lagos y montañas",
        "static/images/Cuernos_del_Paine_from_Lake_Pehoé.jpg",
        "95 mil visualizaciones"
    );

    mostrarMensaje("Video añadido a la cola");
});


// Eliminar un video de la cola
function activarEliminar(tarjeta) {
    const botonEliminar = tarjeta.querySelector(".equis");

    botonEliminar.addEventListener("click", () => {
        tarjeta.remove();
    });
}


// Activar los botones X que ya estaban en el HTML
document.querySelectorAll(".itemCola").forEach((tarjeta) => {
    activarEliminar(tarjeta);
});


// Limpiar toda la cola
botonLimpiar.addEventListener("click", () => {
    document.querySelectorAll(".itemCola").forEach((video) => {
        video.remove();
    });
});


// Mensaje pequeño cuando se añade un video
function mostrarMensaje(texto) {
    const mensajeAnterior = document.querySelector(".mensajeCola");

    if (mensajeAnterior) {
        mensajeAnterior.remove();
    }

    const mensaje = document.createElement("div");

    mensaje.className = "mensajeCola";
    mensaje.textContent = texto;

    document.body.appendChild(mensaje);

    setTimeout(() => {
        mensaje.remove();
    }, 2000);
}


// Vista previa al pasar el mouse
function activarPreview(miniatura) {
    if (!miniatura) return;

    const imagenOriginal = miniatura.src;

    miniatura.addEventListener("mouseenter", () => {
        miniatura.src = "static/videos/sergeigussev-geiranger-28062.gif";
        miniatura.classList.add("reproduciendo");
    });

    miniatura.addEventListener("mouseleave", () => {
        miniatura.src = imagenOriginal;
        miniatura.classList.remove("reproduciendo");
    });
}


// Activar vista previa de las miniaturas que ya existen
document.querySelectorAll(".miniatura").forEach((miniatura) => {
    activarPreview(miniatura);
});