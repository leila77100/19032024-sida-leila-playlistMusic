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

//insttancia de la MusicPlayer

const player = new MusicPlayer(musicList);
// evento dentro del html ejecutar una ventana que me indique el program y las canciones se han cargado
window.addEventListener("load",()=>{
    let music = player.getMusic(); // musica actual
    displayMusic(music); // Mostrar los detalles de la cancion
    displayMusicList(player.music);// Lista de reproduccion
    isPlayingNow(); //comprueba si hay musica reproduciendo
})

function displayMusic(music){
    // titulo de la cancion
    title.innerText = music.getName(),
    //Cantante
    singer.innerText = music.singer;
    //imagen
    image.src = "img/" + music.img;
    //archivo ogg, wav, mp3
    audio.src = "music/" 
}

// Evento  para los botones reproduccion y pausa acciones predefinida (click, mouseover, mousedown)

play.addEventListener("click",()=>{
    // constante que verifique la musica que se reproduce
    const isMusicPlay = container.classList.contains("playing")
    //al darle click de nuevo haga una pausa
    isMusicPlay? pauseMusic() : playMusic();
});

// evento click en los botones prev y next

prev.addEventListener("click",()=>{
    prevMusic()
});

next.addEventListener("click",()=>{
    nextMusic()});

    //acciones que reproduzca la cancion correspondiente anterior
    const prevMusic = ()=>{};
    const pnextMusic = ()=>{};

    // acciones para pausar

    const pauseMusic = ()=>{};
    const playMusic = () => {};


