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
});

function displayMusic(music){
    // titulo de la cancion
    title.innerText = music.getName();
    //Cantante
    singer.innerText = music.singer;
    //imagen
    image.src = "img/" + music.img;
    //archivo ogg, wav, mp3
    audio.src = "music/" + music.file;
};

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
    nextMusic()
});

    //acciones que reproduzca la cancion correspondiente anterior
    const prevMusic = ()=>{
        player.prev();
        let music = player.getMusic();
        displayMusic(music);
        playMusic();
        isPlayingNow()
    };

    //acciones que reproduzca la cancion correspondiente siguiente
    const nextMusic = ()=>{
        player.next();
        let music = player.getMusic();
        displayMusic(music);
        playMusic();
        isPlayingNow()
    };
    

    // acciones para pausar
    //tiene que aparecer las 2 || para el pause ---al darle click
    // tiene que esta asociado a la etiqueta "i"
    //tiene que parar el playing
    //audio pausar
    const pauseMusic = ()=>{
        container.classList.remove("playing");
        play.querySelector("i").classList = "fa-solid fa-pause";
        audio.pausa
    };

    //acciones para continuar la cancion
    //volver activar el playing
    //asocialo a la etiqueta "i"
    //pasar de || a icono play
    
    const playMusic = () => {container.classList.remove("playing");
    play.querySelector("i").classList = "fa-solid fa-play";
    audio.play};

    //calcula el tiempo de tributo minutos: segundos
    //operacion matematica que calcule los minutos dividido emtre 60
    //operacion matematica que calcule los segundos en %
    //operacion que actualice el total de segundos y minutos
    // nos genere el resultado(00:00) minutos: sugundos
    // nos lo muestre el calculo

    const calculateTime = (totalSeconds)=>{
        const seconds = Math.floor(totalSeconds/60);
        const minutes = Math.floor(totalSeconds %60);
        const updateMinutes= minutes <10 ? `0 ${minutes}`:`${minutes}`;
        const result = `${seconds}:${updateMinutes}`;
        return result
            
    };

    //evento que calcula el tiempo de reproduccion y el tiempo de la cancion
    //"loadmetadata" => Accion
    //"addEventListener" => metodo event a escuchar
    // tengo que solicitar la duracion del audio
    //tengo que solicitar que se mueva junto con el tiempo de la cancion
    audio.addEventListener("loadadmetadata",()=>{
        duration.textContent=calculateTime(audio.duration)
       progressBar.max=Math.floor(audio.duration);
    });

    //progresion de la barra
    //calcul en la anterior funcion y me muestre el valor
    audio.addEventListener("timeupdate",()=>{
        progressBar.value=Math.floor(currentTime);
        currentTime.textContent = calculateTime(progressBar.value)
    });

    //cuando mueva el boton de la barra de progreso se actualice el tiempo a la izquierda

    progressBar.addEventListener("input",()=>{
        currentTime.textContent =calculateTime(progressBar.value)
        audio.currentTime = progressBar.value;
    });

    // variable para gestionar a amplitud de audio
    let soundStatus = "voice";

    volumeBar.addEventListener("input",(e)=>{
        const value= e.target.value;
        audio.volume = value/100;

        if(value == 0){
            audio.muted = true;
            soundStatus= "silent";
            volume.classList = "fa-solid fa-volume-xmark"
        }
        else{
            audio.muted = false;
            soundStatus = "voice";
            volume.classList = "fa-solid fa-volume-high";
            volumeBar.value =100
        }
    });
// funcion para mostrar la lista de reproduccion
    const displayMusictest=(list)=>{
        for(let i =0; i<list.length; i++){
            let liTag= `
            <li li-index = ${i} onclick= "selectMusic(this)"
             class ="list-group-item d-flex  justify-content-between align-items-center">
             <span> ${list[i].getName()} </span>
             <span id="music-${i}" class="badge bg-primary rounded-pill"></span>
             <audio class="music/${list[i].file}"></audio> 
             </li>;
             `

             ul.insertAdjacentHTML("beforeend", liTag);

             let liAudioDuration = ul.querySelector(`#music-${i}`);
             let liAudioTag = ul.querySelector(`.music-${i}`)
            liAudioTag.addEventListener("loadeddata",()=> {
                liAudioDuration.innerText =calculateTime(liAudioTag.duration);
            })
    }
}

const selectMusic=(li)=>{
    player.index =li.getAttribute("li-index");
    displayMusic(player.getMusic())
    playMusic();
    isPlayingNow();
}

const isPlayingNow=()=>{
    for (let li of ul.querySelectorAll("li")){
        if(li.classList.contains("playing")){
            li.classList.remove("playing");
        if(li.getAttribute ("li-index"== player.index)){
            li.classList.add("playing");
        }
    }
    audio.addEventListener("ended"), ()=>{
    nextMusic();
      
}
}
}


