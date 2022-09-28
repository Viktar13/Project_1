const numberOfFilms = +prompt("Haw many films have you watched?", "");

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
};

const a = prompt("One if the last movies you watched?", ""),
    b = prompt("How much would you rete it?", ""),
    c = prompt("One if the last movies you watched?", ""),
    d = prompt("How much would you rete it?", "");

    personalMovieDB.movies[a] = b;
    personalMovieDB.movies[c] = d;

    console.log(personalMovieDB);