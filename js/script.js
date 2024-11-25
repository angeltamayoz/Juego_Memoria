const d = document;

let imgN1 = [
    {
        nombre: "Real Madrid",
        url: "../imagenes/madrid.png",
    },
    {
        nombre: "Barcelona",
        url: "../imagenes/barca.png",
    },
    {
        nombre: "Bayern Munich",
        url: "../imagenes/bayern.png",
    },
    {
        nombre: "dortmund",
        url: "../imagenes/dortmund.png",
    },
    {
        nombre: "Man. City",
        url: "../imagenes/city.jpeg",
    },
    {
        nombre: "Man. United",
        url: "../imagenes/united.png",
    },
    {
        nombre: "Real Madrid",
        url: "../imagenes/madrid.png",
    },
    {
        nombre: "Barcelona",
        url: "../imagenes/barca.png",
    },
    {
        nombre: "Bayern Munich",
        url: "../imagenes/bayern.png",
    },
    {
        nombre: "dortmund",
        url: "../imagenes/dortmund.png",
    },
    {
        nombre: "Man. City",
        url: "../imagenes/city.jpeg",
    },
    {
        nombre: "Man. United",
        url: "../imagenes/united.png",
    }
];
let imgN2 = [
    {
        nombre: "Real Madrid",
        url: "../imagenes/madrid.png",
    },
    {
        nombre: "Barcelona",
        url: "../imagenes/barca.png",
    },
    {
        nombre: "Bayern Munich",
        url: "../imagenes/bayern.png",
    },
    {
        nombre: "dortmund",
        url: "../imagenes/dortmund.png",
    },
    {
        nombre: "Man. City",
        url: "../imagenes/city.jpeg",
    },
    {
        nombre: "Man. United",
        url: "../imagenes/united.png",
    },
    {
        nombre: "Real Madrid",
        url: "../imagenes/madrid.png",
    },
    {
        nombre: "Barcelona",
        url: "../imagenes/barca.png",
    },
    {
        nombre: "Bayern Munich",
        url: "../imagenes/bayern.png",
    },
    {
        nombre: "dortmund",
        url: "../imagenes/dortmund.png",
    },
    {
        nombre: "Man. City",
        url: "../imagenes/city.jpeg",
    },
    {
        nombre: "Man. United",
        url: "../imagenes/united.png",
    },
    {
        nombre: "Liverpool",
        url: "../imagenes/liverpool.jpg",
    },
    {
        nombre: "Liverpool",
        url: "../imagenes/liverpool.jpg",
    },
    {
        nombre: "PSG",
        url: "../imagenes/psg.png",
    },
    {
        nombre: "PSG",
        url: "../imagenes/psg.png",
    }
];
let imgN3 = [
    {
        nombre: "Real Madrid",
        url: "../imagenes/madrid.png",
    },
    {
        nombre: "Barcelona",
        url: "../imagenes/barca.png",
    },
    {
        nombre: "Bayern Munich",
        url: "../imagenes/bayern.png",
    },
    {
        nombre: "dortmund",
        url: "../imagenes/dortmund.png",
    },
    {
        nombre: "Man. City",
        url: "../imagenes/city.jpeg",
    },
    {
        nombre: "Man. United",
        url: "../imagenes/united.png",
    },
    {
        nombre: "Real Madrid",
        url: "../imagenes/madrid.png",
    },
    {
        nombre: "Barcelona",
        url: "../imagenes/barca.png",
    },
    {
        nombre: "Bayern Munich",
        url: "../imagenes/bayern.png",
    },
    {
        nombre: "dortmund",
        url: "../imagenes/dortmund.png",
    },
    {
        nombre: "Man. City",
        url: "../imagenes/city.jpeg",
    },
    {
        nombre: "Man. United",
        url: "../imagenes/united.png",
    },
    {
        nombre: "Liverpool",
        url: "../imagenes/liverpool.jpg",
    },
    {
        nombre: "Liverpool",
        url: "../imagenes/liverpool.jpg",
    },
    {
        nombre: "PSG",
        url: "../imagenes/psg.png",
    },
    {
        nombre: "PSG",
        url: "../imagenes/psg.png",
    },
    {
        nombre: "Young Boys",
        url: "../imagenes/young.png",
    },
    {
        nombre: "Aston Villa",
        url: "../imagenes/villa.png",
    },
    {
        nombre: "Young Boys",
        url: "../imagenes/young.png",
    },
    {
        nombre: "Aston Villa",
        url: "../imagenes/villa.png",
    }
];

let tablero = d.querySelector(".tablero");
let nombreImg = [];
let idImg = [];
let intentos = 0;
let totalIntentos = 0;
let aciertos = 0;
let tiempo = 60;
let totalTiempo = 0;
let tiempoSobrante = 0;
let nivel = 1;
let mostrarNivel = d.querySelector(".nivel");
let mostrarIntentos = d.querySelector(".intentos");
let mostrarAciertos = d.querySelector(".aciertos");
let mostrarTiempo = d.querySelector(".tiempo");
let mostrarJugador = d.querySelector(".jugador");
let tiempoTranscurrido;
let btn_iniciar = d.querySelector(".btn-iniciar");
let imagenNivel;
let estoyJugando = false;
let sonidoSeleccionar = new Audio("../sonidos/retro-select-236670.mp3");
let sonidoCorrecto = new Audio("../sonidos/correct-choice-43861.mp3");
let sonidoMal = new Audio("../sonidos/wrong-47985.mp3");
let sonidoFondo = new Audio("../sonidos/background-music-224633.mp3");
let sonidoPerder = new Audio("../sonidos/violin-lose-1-175615.mp3");
let sonidoGanar = new Audio("../sonidos/you-win-sequence-2-183949.mp3");
let fondoBody = d.querySelector("body")
let tabla = d.querySelector(".tablaRec tbody");

d.addEventListener("DOMContentLoaded", ()=>{
    fondoBody.classList.add("fondo1");
    mostrarDatos();
});

btn_iniciar.addEventListener("click", () => { 
    sonidoFondo.play();
    if(estoyJugando == false && nivel == 1){
        ventanaModal();
        
    }else if(estoyJugando == false && nivel == 2) {
        estoyJugando = true;
        nivelDos();
    }else if(estoyJugando == false && nivel == 3) {
        estoyJugando = true;
        nivelTres();
    }
    
});

function agrearImagenes() {
    if(nivel == 1){
        imagenNivel = imgN1;
    }else if(nivel == 2){
        imagenNivel = imgN2;
    }else if(nivel == 3){
        imagenNivel = imgN3;
    }

    imagenNivel.sort(()=>Math.random() -0.5)

    imagenNivel.forEach((img, i) => {
        let div = d.createElement("div");
        div.className = "col-3 my-2";
        let imagen = d.createElement("img");
        // imgagen.src = imgN1[i].url;
        imagen.src = "../imagenes/ocultar.jpg";
        imagen.className = "img-fluid";
        imagen.id = i;
        imagen.addEventListener("click", mostrarImagen);
        div.appendChild(imagen);
        tablero.appendChild(div);
    });
}


function mostrarImagen() {
    sonidoSeleccionar.play();
    let imgID = this.getAttribute("id");
    this.src = imagenNivel[imgID].url;
    nombreImg.push(imagenNivel[imgID].nombre);
    idImg.push(imgID);

    if (nombreImg.length == 2) {
        setTimeout(() => {
            compararImagen();
        }, 100);
    }
}

function compararImagen() {
    let allImg = d.querySelectorAll(".tablero .col-3 img");

    if (nombreImg[0] == nombreImg[1]) {
        if (idImg[0] != idImg[1]) {
            sonidoCorrecto.play();
            allImg[idImg[0]].src = "../imagenes/ok.png";
            allImg[idImg[1]].src = "../imagenes/ok.png";

            allImg[idImg[0]].removeEventListener("click", mostrarImagen);
            allImg[idImg[1]].removeEventListener("click", mostrarImagen);

            aciertos++;
            mostrarAciertos.textContent = aciertos;
        } else {
            sonidoMal.play();
            alert("Debes escoger otra imagen");
            allImg[idImg[0]].src = "../imagenes/ocultar.jpg";

            intentos++;
            mostrarIntentos.textContent = intentos;
        }
    } else {
        sonidoMal.play();
        allImg[idImg[0]].src = "../imagenes/ocultar.jpg";
        allImg[idImg[1]].src = "../imagenes/ocultar.jpg";

        intentos++;
        mostrarIntentos.textContent = intentos;
    }
    nombreImg = [];
    idImg = [];

    if (nivel == 1 && aciertos == 6) {
        fondoBody.classList.replace("fondo1", "fondo2");

        sonidoGanar.play();
        alert("🎉🎉¡¡FELICITACIONES!! PASASTE AL SIGUIENTE NIVEL!!!🥳🥳");

        totalIntentos += intentos;
        totalTiempo += tiempo;
        tiempoSobrante += (60 - tiempo);

        nivel++;
        mostrarNivel.textContent = nivel;
        intentos = 0;
        mostrarIntentos.textContent = intentos;
        aciertos = 0;
        mostrarAciertos.textContent = aciertos;
        clearInterval(tiempoTranscurrido);
        tiempo = 50;
        mostrarTiempo.textContent = tiempo;
        estoyJugando = false;

        quitarImg();
    } else if (nivel == 2 && aciertos == 8) {
        sonidoGanar.play();
        alert("🎉🎉¡¡FELICITACIONES!! PASASTE AL SIGUIENTE NIVEL!!!🥳🥳");
        nivel++;
        mostrarNivel.textContent = nivel;
        intentos = 0;
        mostrarIntentos.textContent = intentos;
        aciertos = 0;
        mostrarAciertos.textContent = aciertos;
        clearInterval(tiempoTranscurrido);
        tiempo = 45;
        mostrarTiempo.textContent = tiempo;
        estoyJugando = false;

        quitarImg();
    } else if (nivel == 3 && aciertos == 10) {
        sonidoGanar.play();
        alert("🎉🎉¡¡FELICITACIONES!! GANASTE EL JUEGO!!!🥳🥳");
        obtenerDatos();
        clearInterval(tiempoTranscurrido);
        setTimeout(() => {
            location.reload();
        }, 5000);
    }
}

function nivelUno() {
    agrearImagenes();
    mostrarNivel.textContent = nivel;
    tiempoJuego();
}

function nivelDos() {
    agrearImagenes();
    tiempoJuego();
}

function nivelTres() {
    agrearImagenes();
    tiempoJuego();
}

function tiempoJuego() {
    tiempoTranscurrido = setInterval(() => {
        tiempo--;
        mostrarTiempo.textContent = tiempo;
        if (tiempo === 10) {
            mostrarTiempo.style.color = "red";
            mostrarTiempo.style.fontSize = "25px";
        }else if(tiempo === 0){
            sonidoPerder.play();
            clearInterval(tiempoTranscurrido);
            alert("Se acabó el tiempo!");
            location.reload();
        }
    }, 1000)
}

function quitarImg() {
    let imagenQuitar = d.querySelectorAll(".tablero div")
    imagenQuitar.forEach(img => {
        img.remove();
    });
}


//MOSTRAR VENTANA MODAL
function ventanaModal() {
    let mostrarModal = d.querySelector("#exampleModal");
    let cerrarModal = d.querySelectorAll(".cerrar");
    let inputJugador = d.querySelector(".nombre");
    let btnJugador = d.querySelector(".registrar");
    cerrarModal.forEach(btn => {
        btn.addEventListener("click", () => {
            mostrarModal.classList.remove("show");
            mostrarModal.style.display = "none";
        });
    });
    mostrarModal.classList.add("show");
    mostrarModal.style.display = "block";
    btnJugador.addEventListener("click", () => {
        mostrarJugador.textContent = inputJugador.value;
        mostrarModal.classList.remove("show");
        mostrarModal.style.display = "none";
        estoyJugando = true;
        nivelUno();
    });
}

