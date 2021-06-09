"use strict";

/* Задание на урок:

1) У нас уже есть рабочее приложение, состоящее из отдельных функций. Представьте, что
перед вами стоит задача переписать его так, чтобы все функции стали методами объекта personalMovieDB
Такое случается в реальных продуктах при смене технологий или подхода к архитектуре программы

2) Создать метод toggleVisibleMyDB, который при вызове будет проверять свойство privat. Если оно false - он
переключает его в true, если true - переключает в false. Протестировать вместе с showMyDB.

3) В методе writeYourGenres запретить пользователю нажать кнопку "отмена" или оставлять пустую строку. 
Если он это сделал - возвращать его к этому же вопросу. После того, как все жанры введены - 
при помощи метода forEach вывести в консоль сообщения в таком виде:
"Любимый жанр #(номер по порядку, начиная с 1) - это (название из массива)"*/

const personalMovieDB = {
	count: 0,
	movies: {},
	actors: {},
	genres: [],
	privat: false,
	start: function () {
		personalMovieDB.count = prompt('Сколько фильмов Вы уже посморели?', '');
		while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
			personalMovieDB.count = +prompt('Сколько фильмов Вы уже посморели?', '');
		}
	},
	rememberMyFilms: function () {
		if (personalMovieDB.count >= 30) {
			alert("Вы киноман");
		} else if (personalMovieDB.count >= 10) {
			alert("Вы классический зритель");
		} else if (personalMovieDB.count > 0) {
			alert("Просмотрено довольно мало фильмов");
		} else {
			alert("Произошла ошибка");
		}
	},
	detectPersonalLevel: function () {
		for (let i = 0; i < 2; i++) {
			const a = prompt('Один из последних просмотренных фильмов?', ''),
				b = prompt('На сколько оцените его?', '');

			if (a != null && b != null && a != '' && b != '' && a.length < 50) {
				personalMovieDB.movies[a] = b;
			} else {
				i--;
			}
		}
	},
	writeYourGenres: function (i) {
		for (let i = 1; i <= 3; i++) {
			let a = prompt(`Ваш любимый жанр под номером ${i}?`).toLowerCase();
			if (a != null && a != '') {
				personalMovieDB.genres[i - 1] = a;
			} else {
				console.log('Error');
				i--;
			}
		}
		personalMovieDB.genres.forEach((item, i) => {
			console.log(`Любимый жанр № ${i + 1} - это ${item}`);
		});
	},
	showMyDB: function (hidden) {
		if (!hidden) {
			console.log(personalMovieDB);
		}
	},
	toggleVisibleMyDB: function () {
		if (personalMovieDB.privat) {
			personalMovieDB.privat = false;
		} else {
			personalMovieDB.privat = true;
		}
	},
};
