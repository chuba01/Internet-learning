const numberOfFilms = +prompt('солько фильмов вы посмотрели?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const a = prompt("Один из последних просмотренних фильмов", ''),
    b = prompt('На сколько вы его оцените', ''),
    c = prompt("Один из последних просмотренних фильмов", ''),
    d = prompt('На сколько вы его оцените', '');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);