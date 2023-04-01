"use strict";
const numberOfFilms = +prompt('солько фильмов вы посмотрели?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

let i = 0;
do {
    i++;
    const a = prompt("Один из последних просмотренних фильмов", ''),
        b = prompt('На сколько вы его оцените', '');

    if (a != null && b != null && a != '' && b != '' && a.length < 50) {
        personalMovieDB.movies[a] = b;
        console.log('Dane');
    } else {
        i--;
        console.log('Arror');
    }

} while (i < 2);

if (personalMovieDB.count < 10) {
    console.log('Мало');
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    console.log('не плохо');
} else if (personalMovieDB.count >= 30) {
    console.log('вы киноман');
} else {
    console.log('Ошибка');
}




console.log(personalMovieDB);




