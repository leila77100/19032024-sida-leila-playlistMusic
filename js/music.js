// definimos de la clase music
class Music{
    //constructor de la clase music que inicializa con la propriedad de la musica. title, singer, img file
    constructor(title, singer,img,file){
        this.title=title // titulo de la cancion
        this.singer=singer
        this.img=img
        this.file=file
    }
//methodo para que me devuelva una cadena texto que incluya title y singer
    getName(){
        return this.title + "-" + this.singer;
    }

    // agregar instancia de las canciones, musica

   
}

const musicList =[
    new Music("No se ve", "OBK", "caratulaobk.jpg", "obk.mp3"),
    new Music(),

]