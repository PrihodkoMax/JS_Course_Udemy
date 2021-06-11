
/* Задания на урок:

1) Реализовать функционал, что после заполнения формы и нажатия кнопки "Подтвердить" -
новый фильм добавляется в список. Страница не должна перезагружаться.
Новый фильм должен добавляться в movieDB.movies.
Для получения доступа к значению input - обращаемся к нему как input.value;
P.S. Здесь есть несколько вариантов решения задачи, принимается любой, но рабочий.

2) Если название фильма больше, чем 21 символ - обрезать его и добавить три точки

3) При клике на мусорную корзину - элемент будет удаляться из списка (сложно)

4) Если в форме стоит галочка "Сделать любимым" - в консоль вывести сообщение:
"Добавляем любимый фильм"

5) Фильмы должны быть отсортированы по алфавиту */


'use strict';

document.addEventListener('DOMContentLoaded', () => {

	const movieDB = {
		movies: [
			"Логан",
			"Лига справедливости",
			"Ла-ла лэнд",
			"Одержимость",
			"Скотт Пилигрим против..."
		]
	};

	const adv = document.querySelectorAll('.promo__adv img'),
		poster = document.querySelector('.promo__bg'),
		genre = poster.querySelector('.promo__genre'),
		movieList = document.querySelector('.promo__interactive-list'),
		addForm = document.querySelector('form.add'),
		addInput = addForm.querySelector('.adding__input'),
		checkbox = addForm.querySelector('[type="checkbox"]');


	// обработчик события на отправку формы:

	addForm.addEventListener('submit', (event) => {
		event.preventDefault();

		let newFilm = addInput.value;          // получаем значение от пользователя
		let favorite = checkbox.checked;

		if (newFilm) {

			if (newFilm.length > 21) {
				newFilm = `${newFilm.substring(0, 22)}...`;
			}

			if (favorite) {
				console.log("Добавляем любимый фильм");
			};

			movieDB.movies.push(newFilm);
			sortArr(movieDB.movies);
			creatMovieList(movieDB.movies, movieList);
		}
		event.target.reset();
	});

	const makeChanges = () => {
		genre.textContent = 'драма';
		poster.style.backgroundImage = 'url("img/bg.jpg")';
	}


	const sortArr = (arr) => {    // сортируем массив
		arr.sort();
	}

	const deleteAdv = (arr) => {    // удаляем рекламу
		arr.forEach(item => {
			item.remove();
		});
	}


	// формируем динамически список просмотренных фильмов:

	function creatMovieList(films, parent) {
		parent.innerHTML = '';   // очищаем список на странице 
		sortArr(films);

		films.forEach((item, i) => {
			parent.innerHTML += `
				<li class="promo__interactive-item">${i + 1} ${item}
					<div class="delete"></div>
				</li>
			`;
		});

		// удаляем фильмы из списка нажатием на козину

		document.querySelectorAll('.delete').forEach((cart, i) => {
			cart.addEventListener('click', () => {
				cart.parentElement.remove();
				movieDB.movies.splice(i, 1);   // удалям из базы

				creatMovieList(films, parent);
			})
		});
	};

	deleteAdv(adv);
	makeChanges();
	sortArr(movieDB.movies);
	creatMovieList(movieDB.movies, movieList);

});

console.log(document.querySelectorAll('.promo__menu-item'));

const items = document.querySelectorAll('.promo__menu-item');
const nav = document.querySelector('nav.promo__menu-list');

console.log(items[1].classList.length);
console.log(items[0].classList.length);
console.log(items[0].classList.item(1));

items[0].classList.add('test');
console.log(items[0].classList.length);

items[0].classList.remove('test');
console.log(items[0].classList.length);

// items[0].classList.toggle('test');


items.forEach(item => {
	item.addEventListener('click', (e) => {
		e.preventDefault();
		// console.log(event.target);
		// if (!e.target.classList.contains('promo__menu-item_active')) {
		// 	e.target.classList.add('promo__menu-item_active');

		// } else {
		// 	e.target.classList.remove('promo__menu-item_active');
		// }
		e.target.classList.toggle('promo__menu-item_active');
	});
});

// nav.addEventListener('click', (e) => {
// 	e.preventDefault();
// 	console.dir(e.target);

// 	if (e.target && e.target.tagName == 'A') {
// 		e.target.classList.toggle('promo__menu-item_active');
// 	}
// });
