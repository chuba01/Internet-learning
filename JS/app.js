// "use strict";

// let numberOfFilms;

// function start() {
//     numberOfFilms = +prompt('СОЛИЧЕСТВО ФИЛЬМОВ');

//     while (numberOfFilms == "" || numberOfFilms == null || isNaN(numberOfFilms)) {
//         numberOfFilms = +prompt('СОЛИЧЕСТВО ФИЛЬМОВ');
//     }
// }

// start();

// const personalMuviDB = {
//     count: numberOfFilms,
//     movies: {},
//     actors: {},
//     genres: [],
//     privat: false
// };



// function rememberMyFilms() {
//     for (let i = 0; i < 2; i++) {
//         const a = prompt("Один из последних просмотренних фильмов", ''),
//             b = prompt('На сколько вы его оцените', '');

//         if (a != null && b != null && a != '' && b != '' && a.length < 50) {
//             personalMuviDB.movies[a] = b;
//             console.log('Dane');
//         } else {
//             i--;
//             console.log('Arror');
//         }

//     }
// }

// // rememberMyFilms();






// function detegPersonalLevel() {
//     if (personalMuviDB.count < 10) {
//         console.log('Мало');
//     } else if (personalMuviDB.count >= 10 && personalMuviDB.count < 30) {
//         console.log('не плохо');
//     } else if (personalMuviDB.count >= 30) {
//         console.log('вы киноман');
//     } else {
//         console.log('Ошибка');
//     }
// }

// // detegPersonalLevel();

// function showMyDB(hidden) {
//     if (!hidden) {
//         console.log(personalMuviDB);
//     }
// }

// showMyDB(personalMuviDB.privat);


// function writeYourGenres() {
//     for (let i = 1; i <= 3; i++) {

//         personalMuviDB.genres[i - 1] = prompt(`Ваш любимый жанр ${i}`);
//     }
// }

// writeYourGenres();
//------------------------------kолбек-------
function first() {
    setTimeout(function () {
        console.log(1);
    }, 500);
}

function second() {
    console.log(2);
}

first();
second();

function learnJs(lang, callback) {
    console.log(`я учу : ${lang}`);
    callback();

}


learnJs('JavaScript'() => {
    console.log('Я прошел этот урок');
});







//--------------------деструктуризация объектов-------------------------------------------------------------------------------------------------

// const options = {
//     name: 'test',
//     widht: 1024,
//     height: 1024,
//     colors: {
//         border: 'black'
//     },
//     make:function(){
//         console.log(options.colors);
//     }
// };

// options.make();

// const {border} = options.colors;

// console.log(Object.keys(options).length);








































// const str = 'test hello';

// console.log(str.slice(5, 9));

// const arr = [1, 2, 3, 4, 5];

// console.log(arr.length);


// const st1r = 'test hello';

// console.log(st1r.substring(8, 5));


// const num = 12.2;

// console.log(Math(num) );

































// let num = 20;

// function showFirstMessage(text,) {
//     console.log(text);

//     console.log(num);
// }

// showFirstMessage('Hello Wold');
// console.log(num);


// function calc() {
//     let nun = 50;
//     return nun;
// }

// console.log(calc());

// const calc = (a, b) => {
//     console.log('1');
//     return a + b;
// }

// console.log(calc(5, 6));


