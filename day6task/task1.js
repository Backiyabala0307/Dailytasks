// // create the class movie with the instance film.
// //answer for a.

// class movie {
//     constructor(title,studio,rating){
//         this.title= title;
//         this.studio=studio;
//         this.rating=rating;
//     }
// }

// let film=new movie("Thendral","RV creations","PG35");
// console.log(film);


// //answer for b.

// class movie {
//     constructor(title,studio,rating="PG"){
//         this.title= title;
//         this.studio=studio;
//         this.rating=rating;
//     }
// }

// let film=new movie("Thendral","RV creations");
// console.log(film);

//answer for c.
class movie {
    constructor(title, studio, rating = "PG") {
        this.title = title;
        this.studio = studio;
        this.rating = rating;
    }

    GetPG(...film) {
             
        if (this.rating == "PG") {
            return result.push(...film);
            
        }
    }

}
let film1 = new movie("Thendral", "RV creations", "PG34");
let film2 = new movie ("katru", "AVM creations");
let film3 = new movie("Theneer", "KV creations", "PG10");
let film4 = new movie ("AMBU", "JEMINI creations");
let film5 = new movie("Megam", "RV creations", "PG12");
let film6 = new movie ("Thoduvanam", "AVM creations");
let film7 = new movie("MALAR", "SP creations", "PG06");

let film=[film1, film2, film3, film4, film5, film6, film7];
let result = [];
for (let i in film) {
    film[i].GetPG();
}
console.log(result);

// //answer for d.
// class movie {
//     constructor(title,studio,rating){
//         this.title= title;
//         this.studio=studio;
//         this.rating=rating;
//     }
    
// }
// let film=new movie("Casino Royale","Eon productions","PG13");
// console.log(film);