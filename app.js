//DOM manejo de los componentes del html manejado por el javascript

const container = document.querySelector("container"); // contenedor principal
const image = document.querySelector("#music-image"); // todos los elementos imagenes
const title= document.querySelector("#music-details .title"); //titulo
const singer= document.querySelector("#music-details .singer");//cantante

// botones de accion

const play= document.querySelector("#control #play");
const prev= document.querySelector("#control #prev");
const next= document.querySelector("#control #next");

//progression de la musica

const duration = document.querySelector("#duration");
const currentTime = document.querySelector("#current-time");
const progressBar = document.querySelector("#progress-bar");
const volume = document.querySelector("#volume");
const volumeBar = document.querySelector("#volume-bar");
const ul = document.querySelector("#ul"); // lista de canciones


