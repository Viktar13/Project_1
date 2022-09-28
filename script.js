const numberOfFilms = +prompt("Haw many films have you watched?", "");

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
};


for (let i = 0; i < 2; i++) {
    const a = prompt("One if the last movies you watched?", ""),
          b = prompt("How much would you rete it?", "");

    if (a != "" && b != "" && a != null && b != null && a.length < 50) {
        personalMovieDB.movies[a] = b;
        console.log("ok");
    } else {
        i--;
        console.log("error");
    }
}

if (personalMovieDB.count < 10) {
    console.log("Few movies watched.");
} if (personalMovieDB.count >= 10 && personalMovieDB < 30) {
    console.log("You are classic viewer!");
} if (personalMovieDB.count >= 30) {
    console.log("You are movie fan!");
} else {
    console.log("Error!");
}

console.log(personalMovieDB);

// const a = prompt("One if the last movies you watched?", ""),
//     b = prompt("How much would you rete it?", ""),
//     c = prompt("One if the last movies you watched?", ""),
//     d = prompt("How much would you rete it?", "");

//     personalMovieDB.movies[a] = b;
//     personalMovieDB.movies[c] = d;

//     console.log(personalMovieDB);