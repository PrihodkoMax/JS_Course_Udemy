"use strict";

/* Задание на урок:

1) Первую часть задания повторить по уроку

2) Создать функцию showMyDB, которая будет проверять свойство privat. Если стоит в позиции
false - выводит в консоль главный объект программы

3) Создать функцию writeYourGenres в которой пользователь будет 3 раза отвечать на вопрос 
"Ваш любимый жанр под номером ${номер по порядку}". Каждый ответ записывается в массив данных
genres

P.S. Функции вызывать не обязательно*/


let numberOfFilms; 

function start() {
	numberOfFilms = prompt('Сколько фильмов Вы уже посморели?', '');
	while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
		numberOfFilms = +prompt('Сколько фильмов Вы уже посморели?', '');
	}
}

// start();

const personalMovieDB = {
	count: numberOfFilms,
	movies: {},
	actors: {},
	genres: [],
	privat: false,
};

function rememberMyFilms() {
	if (personalMovieDB.count >= 30) {
		alert("Вы киноман");
	} else if (personalMovieDB.count >= 10) {
		alert("Вы классический зритель");
	} else if (personalMovieDB.count > 0) {
		alert("Просмотрено довольно мало фильмов");
	} else {
		alert("Произошла ошибка");
	}
}

// rememberMyFilms();

function detectPersonalLevel() {
	for (let i = 0; i < 2; i++) {
		const a = prompt('Один из последних просмотренных фильмов?', ''),
				b = prompt('На сколько оцените его?','');
	
		if (a != null && b != null && a != '' && b != '' && a.length < 50) {
			personalMovieDB.movies[a] = b;
		}	else {
			i--;
		}	
	}
}

// detectPersonalLevel();

function showMyDB(hidden) {
	if (!hidden) {
		console.log(personalMovieDB);
	}
}

// showMyDB(personalMovieDB.privat);

function writeYourGenres(i) {
	for (let i = 1; i <= 3; i++) {
		personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}?`);
	}
}

// writeYourGenres();
console.log(personalMovieDB);