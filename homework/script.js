'use strict';

let numberOfFilms;
const personalMovieDB = {
        count: numberOfFilms,
        movies: {},
        actors: {},
        genres: [],
        privat: false
};

start();
detectPersonalLevel();
rememberMyFilms();
writeYourGenres();
showMyDb();

function start() {
    do {
        numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', 0);
    }
    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms));
}

function detectPersonalLevel() {
    if (personalMovieDB.count < 10) {
        alert('Просмотрено довольно мало фильмов');
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count == 30) {
        alert('Вы классический зритель');
    } else if (personalMovieDB.count >= 30) {
        alert('Вы киноман');
    } else {
        alert('Произошла ошибка');
    }
}

function rememberMyFilms() {
    for (let i = 0; i < 2; i++) {
        const lastMovie = prompt('Один из последних просмотренных фильмов?', '');
        //} while (lastMovie !== '' && lastMovie !== null && lastMovie.length > 50);
    
        const lastMovieRank = +prompt('На сколько оцените его?', '1-10');
        //} while (lastMovieRank !== '' && lastMovieRank !== null);
        const lastMovieIsValid = lastMovie != null && lastMovie != '' && lastMovie.length < 50;
        const lastMovieRankIsValid = lastMovieRank != null && lastMovieRank != '';
        if (lastMovieIsValid && lastMovieRankIsValid) {
            personalMovieDB.movies[lastMovie] = lastMovieRank;
        } else {
            i--;
        }
    }
}

function writeYourGenres() {
    for (let i = 1; i <= 3; i++) {
        personalMovieDB.genres.push(prompt(`Ваш любимый жанр под номером ${i}.`, ''));
    }
}

function showMyDb() {
    if (!personalMovieDB.privat) {
        console.log(personalMovieDB);
    }
}