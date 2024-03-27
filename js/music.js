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
    new Music("La Vaca Lola", "Comptine Enfant", "la-vaca-lola.jpg", "La_Vaca_Lola.mp3"),
    new Music("Lundi matin - l'empereur, sa femme et le p'tit prince", "Comptine Enfant", "le-petit-prince.jpg", "le_ptit_prince.mp3"),
    new Music("Ah les crocodiles", "Comptine Enfant", "crocodile.jpg", "crocodile.mp3"),   
    new Music("Pirouette, cacahuète - Il était un petit homme", "Comptine Enfant", "pirouette-cacahuete.jpg", "Pirouette_cacahuete.mp3")  
];