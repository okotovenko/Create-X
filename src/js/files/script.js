// Подключение функционала "Чертогов Фрилансера"
import { isMobile } from "./functions.js";
// Подключение списка активных модулей
import { flsModules } from "./modules.js";


// data-courses-marketing
// data-courses-management
// data-courses-hr
// data-courses-design
// data-courses-development
// data-sup-all
// data-sup-marketing
// data-sup-management
// data-sup-hr
// data-sup-design
// data-sup-development

//==================courses лічильники карток============================
export function coursesCounter() {
	if (document.querySelector('[data-sup-all]')) {

		let supAll = document.querySelector('[data-sup-all]');
		console.log(supAll);
		let supMarketing = document.querySelector('[data-sup-marketing]');
		let supManagement = document.querySelector('[data-sup-management]');
		let supHr = document.querySelector('[data-sup-hr]');
		let supDesign = document.querySelector('[data-sup-design]');
		let supDevelopment = document.querySelector('[data-sup-development]');

		let coursesMarketing = document.querySelectorAll('[data-courses-marketing]').length;
		let coursesManagement = document.querySelectorAll('[data-courses-management]').length;
		let coursesHr = document.querySelectorAll('[data-courses-hr]').length;
		let coursesDesign = document.querySelectorAll('[data-courses-design]').length;
		let coursesDevelopment = document.querySelectorAll('[data-courses-development]').length;

		supMarketing.innerHTML = coursesMarketing;
		supManagement.innerHTML = coursesManagement;
		supHr.innerHTML = coursesHr;
		supDesign.innerHTML = coursesDesign;
		supDevelopment.innerHTML = coursesDevelopment;

		supAll.innerHTML = coursesMarketing + coursesManagement + coursesHr + coursesDesign + coursesDevelopment;
		console.log(supAll);
	};
};

//=====================courses load_more=========================

export function loadMore() {
	if (document.querySelector('._icon-arrows')) {

		let loadMore = document.querySelector('._icon-arrows');
		let more = document.querySelector('.more');
		let coursesPageItems = document.querySelector('.courses-page-items');

		async function getContent() {
			let response = await fetch('_courses-more.html', {
				method: 'GET',
			});
			if (response.ok) {
				let result = await response.text();
				coursesPageItems.insertAdjacentHTML('beforeend', result);
			} else {
				alert('Alarm!');
			}
		};

		more.addEventListener('click', function () {
			loadMore.classList.toggle('active');

			getContent();
		});
	};
};

//=========сторінка Events вигляд карток (список, плитка)============================

export function ChangeList() {
	if (document.querySelector('#lectures-items')) {
		console.log(1111);
		const iconList = document.querySelector('._icon-list');
		const iconTile = document.querySelector('._icon-tile');
		const lecturesItems = document.querySelector('.lectures__items');
		const lecturesItem = document.querySelectorAll('.lectures__item');
		console.log(lecturesItem);

		iconList.addEventListener('click', function () {
			iconList.classList.add('active');
			iconTile.classList.remove('active');
			lecturesItems.classList.remove('active');
			for (let i = 0; i < lecturesItem.length; i++) {
				lecturesItem[i].classList.remove('active');
			}
		});

		iconTile.addEventListener('click', function () {
			iconList.classList.remove('active');
			iconTile.classList.add('active');
			lecturesItems.classList.add('active');
			for (let i = 0; i < lecturesItem.length; i++) {
				lecturesItem[i].classList.add('active');
			}
		});
	};
};

//=========сторінка About запуск відео============================

export function playVideo() {
	const play = document.querySelector('.video__button');
	const video = document.querySelector('#video');

	play.addEventListener('click', function () {
		video.play();
	});
}





