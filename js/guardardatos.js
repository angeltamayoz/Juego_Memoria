let nombreJugador = document.querySelector(".jugador");
let listaJugadores = "jugadores";

function obtenerDatos() {
    let datosJugador = {
        "nombre": nombreJugador.textContent,
        "intentos": totalIntentos,
        "tiempoTotal": totalTiempo,
        "tiempoSobrante": tiempoSobrante
    };
    guardarDatos(datosJugador);
}

function guardarDatos(datos) {
    let jugadores = [];
    let datosPrevios = JSON.parse(localStorage.getItem(listaJugadores));
    if (datosPrevios != null) {
        jugadores = datosPrevios;
    }
    jugadores.push(datos);
    localStorage.setItem(listaJugadores, JSON.stringify(jugadores));
}

function mostrarDatos() {
    let jugadores = [];
    let datosPrevios = JSON.parse(localStorage.getItem(listaJugadores));
    if (datosPrevios != null) {
        jugadores = datosPrevios;
    }

    jugadores.sort((a, b) => {
        if (a.tiempoTotal < b.tiempoTotal) {
            return -1;
        }
        if (a.intentos < b.intentos) {
            return 1;
        }
    });

    jugadores.forEach((jugador, i) => {
        let fila = document.createElement("tr");
        fila.innerHTML = `
        <td> ${i + 1} </td>
        <td> ${jugador.nombre} </td>
        <td> ${jugador.tiempoTotal} </td>
        <td> ${jugador.intentos} </td>
        <td> ${jugador.tiempoSobrante} </td>
        `;

        tabla.appendChild(fila);
    });
}