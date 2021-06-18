'use strict';

const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', 0),
personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
},
lastMovie1 = prompt('Один из последних просмотренных фильмов?', ''),
lastMovieRank1 = +prompt('На сколько оцените его?', '1-10'),
lastMovie2 = prompt('Один из последних просмотренных фильмов?', ''),
lastMovieRank2 = +prompt('На сколько оцените его?', '1-10');

personalMovieDB.movies[lastMovie1] = lastMovieRank1;
personalMovieDB.movies[lastMovie2] = lastMovieRank2;