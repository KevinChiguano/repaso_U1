function cambioKuma() {
    let imagen = document.getElementById("idKuma");
    if (imagen.src.includes("Kuma2")) {
        imagen.src = "../img/Kuma.jpg";
    } else {
        imagen.src = "../img/Kuma2.jpg";
    }
}

function cambioRokudo() {
    let imagen = document.getElementById("idRokudo");

    if (imagen.src.includes("Rokudo2")) {
        imagen.src = "../img/Rokudo.jpg";
    } else {
        imagen.src = "../img/Rokudo2.jpg";
    }
}

function cambioUma() {

    let imagen = document.getElementById("idUma");
    if (imagen.src.includes("Uma2")) {
        imagen.src = "../img/Uma.jpg";
    } else {
        imagen.src = "../img/Uma2.jpg";
    }

}

const cambioJigo = () => {
    let imagen = document.getElementById("idJigo");
    if (imagen.src.includes("Jigo2")) {
        imagen.src = "../img/Jigo.jpg";
    } else {
        imagen.src = "../img/Jigo2.jpg";
    }
}

const comentarios = [];
let numComen = 0;

const comentar = () => {
    let comentario = document.getElementById("idInsertar");

    comentarios.push(comentario.value);

    comentario.value = ""
    agregarComentario(comentarios.join("<br><br>"));
    
    numComen++;
    sumarComentario();
}

const agregarComentario = (comentarios) => {
    document.getElementById('idCajaComen').innerHTML = comentarios;
}

const sumarComentario=()=>{
    document.getElementById('numComentarios').innerHTML='Comentarios ('+numComen+')';
}