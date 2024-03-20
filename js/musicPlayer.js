//definir una clase music

class musicPlayer {
//constructor recibira la musica de (musicList) argumento
    constructor(musicList){
        this.musicList=musicList //asigna la lista de musica que recibe del atributo MusicList que se encuentra de musicPlayer
        this.index = 1; // inicializa el indice de canciones en la numero 1, es obligatorio
    }

    //methodo getMusic que devuelva la cancion actual en la functin indice
    getMusic(){
        return this.musicList[this.index]; // devuelve la cancion en la posicion del indice actual dentro de la lista de musica
    }

    // metodo netx() que avanza a la siguiente cancion de lista
    next(){
        if (this.index + 1 < this.length) //comprueba si en el indice esta dentro del rango de la musica
       { this.index++;
    }else{
        // si el siguiente indice esta a fuera del rango de la lista de la musica
        this.index=0;
    }  
    }

    //metodo retrocedea la cancion anterior de indice

    prev(){
        if(this.index !=0)//comprueba el indice anterior de la lista
        {this.index--}
        else{// si el indico actual es 0
            this.index =this.musicList.length -1
        }
    }
}