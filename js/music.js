// definimos de la clase music
class Music{
    //constructor de la clase music que inicializa con la propriedad de la musica. title, singer, img file
    constructor(title, singer,img,file){
        this.title=title; // titulo de la cancion
        this.singer=singer;
        this.img=img;
        this.file=file;
    }
//methodo para que me devuelva una cadena texto que incluya title y singer
    getName(){
        return this.title + "-" + this.singer;
    }

    // agregar instancia de las canciones, musica

   
}

const musicList =[
    new Music("No se ve", "OBK", "guitara.jpg", "Big_One.mp4"),
    new Music("la vaca lola", "vaca", "musica.jpg", "no_se_ve.mp4"),
    new Music("The First Time Ever I Saw Your Face", "vvvvvvg", "noseve.jpg", "Big_One.mp4"),   
    new Music("Burbujas de Amor", "Juan Luis", "noseve.jpg", "440.mp3")  
];