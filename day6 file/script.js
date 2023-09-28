1.a) Write a constructor for the class Movie, which takes a String representing the title of the movie, a String representing the studio, and a String representing the rating as its arguments, and sets the respective class properties to these values.
class movie{
    constructor(title,studio,rating){
        this.title= title;
        this.studio=studio;
        this.rating=rating;
    }
} 
var details = new movie ("The Dark Night","Warner Brothers","pg-13")
var a = details;
console.log(detail.title)
console.log(detail.studio)
console.log(detail.rating)

2.The constructor for the class Movie will set the class property rating to "PG" as default when no rating is provided.

class Movie {
    constructor(title, studio, rating = "PG") {
      this.title = title;
      this.studio = studio;
      this.rating = rating;
    }
  }
  var movie1 = new Movie("The Incredibles", "Pixar");
  console.log(movie1.rating)
  
  var movie2 = new Movie("The Dark Knight", "Warner Bros.", "PG-13");
  console.log(movie2.rating);

  3.c) Write a method getPG, which takes an array of base type Movie as its argument, and returns a new array of only those movies in the input array with a rating of "PG". You may assume the input array is full of Movie instances. The returned array need not be full.
  class Movie {
    constructor(title, rating) {
      this.title = title;
      this.rating = rating;
    }
  }
  
  function getPG(movies) {
    
    const pgMovies = movies.filter(movie => movie.rating === "PG");
    return pgMovies;
  }
  const movies = [
    new Movie("The Lion King", "G"),
    new Movie("Harry Potter and the Sorcerer's Stone", "PG"),
    new Movie("The Dark Night","PG"),
    new Movie("Finding Nemo", "G"),
  ];
  
  const pgMovies = getPG(movies);
  console.log(pgMovies);

4.Write a piece of code that creates an instance of the class Movie with the title “Casino Royale”, the studio “Eon Productions”, and the rating “PG­13”

class Movie {
    constructor(title, studio, rating) {
      this.title = title;
      this.studio = studio;
      this.rating = rating;
    }
  }
  const casinoRoyale = new Movie("Casino Royale", "Eon Productions", "PG-13");
  console.log("Title: " + casinoRoyale.title);
  console.log("Studio: " + casinoRoyale.studio);
  console.log("Rating: " + casinoRoyale.rating);
  
  
  
  
  
  
  
  