'use strict';

const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', 0);
const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};
const lastMovie = prompt('Один из последних просмотренных фильмов?', '');
const lastMovieRank = +prompt('Нф сколько оцените его?', '1-10');
numberOfFilms.movies[lastMovie] = lastMovieRank;