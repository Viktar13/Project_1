'use strict';

let numberOfFilms;

function start () {
    numberOfFilms = +prompt("Haw many films have you watched?", "");

    while (numberOfFilms == "" || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt("Haw many films have you watched?", "");
    }
}

start();


const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
};


function rememberMyFilms () {
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
}

rememberMyFilms();


function detectPersonalLevel () {
    if (personalMovieDB.count < 10) {
        console.log("Few movies watched.");
    } if (personalMovieDB.count >= 10 && personalMovieDB < 30) {
        console.log("You are classic viewer!");
    } if (personalMovieDB.count >= 30) {
        console.log("You are movie fan!");
    } else {
        console.log("Error!");
    }
}

detectPersonalLevel();

// ==== hw =====
function showMyDB (hidden) {
    if (!hidden){
        console.log(personalMovieDB);
    }
}

showMyDB(personalMovieDB.privat);



function writeYourGenres() {
    for (let i = 1; i < 4; i++) {
        const genre = prompt(`Ваш любимый жанр под номером ${i}`);
        personalMovieDB.genres[i - 1] = genre;
    }
}

writeYourGenres();