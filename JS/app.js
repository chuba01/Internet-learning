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

if (4) {
    console.log('Ok');
} else {
    console.log('Error');
}

//----Условие----- if--else----------else if-----
//------ switch - case - break - default

if (number < 49) {
    console.log('Error');
} else if (number > 100) {
    console.log("Много");
} else {
    console.log('OK');
}

(number === 50) ? console.log('OK') : console.log("Error");



const number = 50;

switch (number) {
    case 49:
        console.log('неверно');
        break;
    case 100:
        console.log('неверно');
        break;
    case 51:
        console.log('верно');
        break;
    default:
        console.log('не в этот раз');
        break;

}