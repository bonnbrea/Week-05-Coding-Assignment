class Movie {
    constructor(title){
    this.title=title;
}

describe () {
    return  `${this.title}\n`
}
}


class Genre {
    constructor (type){
        this.type=type;
        this.movies=[];
    }

    describe () {
        return 
        `${this.type} has ${this.movies.length} movies.`;

    }
}

class Menu {
    constructor (){
        this.genres= [];
        this.selectedGenre= null;
    }



    start () {
        let selection= this.showMainMenuOptions();
        while(selection !=0){
            switch (selection){
                case '1':
                    this.createGenre();
                    break;
                case '2':
                    this.viewGenre();
                    break;
                case '3':
                    this.deleteGenre();
                    break;
                case '4':
                    this.displayGenre();
                    break;
                default:
                    selection=0;
            }
            selection=this.showMainMenuOptions();
        }
        alert ('Goodbye');
    }



    showMainMenuOptions() {
        return prompt (`
        MOVIE GENRE MENU
        0) Exit application
        1) Create a new Genre
        2) View a Genre
        3) Delete a Genre
        4) Display all Genres 
        `);
    }
    showGenreMenuOptions(genreInfo){
        return prompt (`
        0) Go back
        1) Add Movie
        2) Delete Movie
        --------------------------------------
        ${genreInfo}
        `);
    }
  



    
}