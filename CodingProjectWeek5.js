class Movie {
    constructor(title){
    this.title=title;
}

describe () {
    return  `${this.title}\n`;
}
}


class Genre {
    constructor (type){
        this.type=type;
        this.movies=[];
    }

    describe () {
        return  `${this.type} has ${this.movies.length} movies.`;
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
  


    createGenre (){
        let type= prompt(`Enter Type of Genre`)
        this.genres.push(new Genre(type));
    }


    deleteGenre(){
        let index= prompt(`Enter the index of the Genre you would like to delete:`)
        if (index> -1 && index < this.genres.length){
            this.genres.splice(index,1);
        }
    }


    viewGenre(){
        let index=prompt (`Enter the index of the genre you wish to view:`);
        if (index > -1 && index < this.genres.length){
            this.selectedGenre= this.genres[index];
            let description= 'Genre:'+ this.selectedGenre.type+ '\n';
            for (let i=0; i < this.selectedGenre.movies.length; i++) {
                description += i + ') ' + this.selectedGenre.movies[i].title+ '\n';
            }


            let selection= this.showGenreMenuOptions(description);
            switch (selection){
                case '1':
                    this.addMovie();
                    break;
                case '2':
                    this.removeMovie();
                    break;
            }
        }
    }




    displayGenre () {
        let genreString='';
        for (let i=0; i<this.genres.length;i++){
            genreString += i + ') ' +this.genres[i].type + '\n'; 
        }
        alert (`Genres 
        ${genreString}
        `);
    }



    addMovie(){
        let title= prompt("Enter the title of movie you would like to add to this genre:");
        this.selectedGenre.movies.push(new Movie(title));
    }
    

    removeMovie(){
        let index= prompt("Enter the index of the movie you wish to remove from this genre:");
        if (index > -1 && index < this.selectedGenre.movies.length){
            this.selectedGenre.movies.splice(index,1);
        }
    }    
}


const genreMenu= new Menu();
genreMenu.start();
