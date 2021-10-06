
'use strict';

window.addEventListener('DOMContentLoaded', () => {

	// Tabs

	const tabsContent = document.querySelectorAll('.tabcontent'),
		tabsParent = document.querySelector('.tabheader__items'),
		tabs = document.querySelectorAll('.tabheader__item');


	function hideTabsContent() {
		tabsContent.forEach(item => {
			item.classList.add('hide');
			item.classList.remove('show', 'fade');
		});

		tabs.forEach(tab => {
			tab.classList.remove('tabheader__item_active');
		});
	}

	function showTabContent(i = 0) {
		tabsContent[i].classList.add('show', 'fade');
		tabsContent[i].classList.remove('hide');
		tabs[i].classList.add('tabheader__item_active');
	}

	hideTabsContent(); // Скрываем все табы на странице

	showTabContent();  // Показываем только первый таб по дэфолту

	tabsParent.addEventListener('click', (event) => {
		const target = event.target;

		if (target && target.classList.contains('tabheader__item')) {
			tabs.forEach((tab, i) => {
				if (target == tab) {
					hideTabsContent();
					showTabContent(i);
				}
			});
		}
	});

	// Timer 

	const deadLine = '2021-10-30';

	function getRemainingDate(overDate) {
		const t = Date.parse(overDate) - Date.parse(new Date()),
			d = Math.floor(t / (1000 * 60 * 60 * 24)),
			h = Math.floor(t / (1000 * 60 * 60) % 24),
			m = Math.floor(t / (1000 * 60) % 60),
			s = Math.floor(t / 1000 % 60);

		return {
			'total': t,
			'days': d,
			'hours': h,
			'minutes': m,
			'seconds': s,
		};
	}

	function setZero(num) {
		if (num >= 0 && num < 10) {
			return `0${num}`;
		} else {
			return num;
		}
	}

	function setCounter(selector, endTime) {
		let timer = document.querySelector(selector),
			days = timer.querySelector('#days'),
			hours = timer.querySelector('#hours'),
			minutes = timer.querySelector('#minutes'),
			seconds = timer.querySelector('#seconds'),
			timerId = setInterval(updateClock, 1000);

		updateClock();

		function updateClock() {
			const t = getRemainingDate(endTime);
			days.innerHTML = setZero(t.days);
			hours.innerHTML = setZero(t.hours);
			minutes.innerHTML = setZero(t.minutes);
			seconds.innerHTML = setZero(t.seconds);

			if (t.total <= 0) {
				clearInterval(timerId);
			}
		}
	}

	setCounter('.timer', deadLine);

});


