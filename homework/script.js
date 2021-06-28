'use strict';

const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', 0),
personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};
let lastMovie = null;
let lastMovieRank = null;
for(let i = 0; i < 2; i++) {
        lastMovie = prompt('Один из последних просмотренных фильмов?', '');
    //} while (lastMovie !== '' && lastMovie !== null && lastMovie.length > 50);
    
        lastMovieRank = +prompt('На сколько оцените его?', '1-10');
    //} while (lastMovieRank !== '' && lastMovieRank !== null);
    const lastMovieIsValid = lastMovie != null && lastMovie != '' && lastMovie.length < 50;
    const lastMovieRankIsValid = lastMovieRank != null && lastMovieRank != '';
    if(lastMovieIsValid && lastMovieRankIsValid) {
        personalMovieDB.movies[lastMovie] = lastMovieRank;
    } else {
        i--;
    }
}
if (personalMovieDB.count < 10) {
    alert('Просмотрено довольно мало фильмов');
} else if (personalMovieDB.count >= 10 && personalMovieDB.count == 30) {
    alert('Вы классический зритель');
} else if (personalMovieDB.count >= 30) {
    alert('Вы киноман');
} else {
    alert('Произошла ошибка');
}