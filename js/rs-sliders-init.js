/*
Документация слайдера: https://swiperjs.com/
*/

// Инициализация слайдеров
function initSliders() {
	// Перечень слайдеров
	// rs-gallery
	if (document.querySelector('.rs-gallery__slider-1')) {
		const sliderBlocks = document.querySelectorAll('.rs-gallery__slider-1');
		sliderBlocks.forEach(sliderBlock => {
			const sliderSwiper = new Swiper(sliderBlock, {
				// Автопрокрутка
				autoplay: {
					// Пауза между прокруткой
					delay: 1,
					// delay: 5000,
					// Закончить на последнем слайде
					stopOnLastSlide: false,
					// Отключить после ручного переключения
					disableOnInteraction: false,
					// Изменить направление
					// reverseDirection: true,
				},

				// Обновить свайпер
				// при изменении элементов слайдера
				observer: true,
				// при изменении родительских элементов слайдера
				observeParents: true,
				// при изменении дочерних элементов слайдера
				observeSlideChildren: true,

				// Скорость смены слайдов
				speed: 20000,

				// Включение/отключение
				// перетаскивание на ПК
				simulateTouch: true,
				allowTouchMove: true,
				// Чувствительность свайпа
				touchRadio: 1,
				// Угол срабатывания свайпа/перетаскивания
				touchAngle: 45,

				// Цикличность слайдера
				loop: true,

				// Курсор перетаскивания
				grabCursor: true,

				// Анимация переключения
				// effect: 'fade',

				// Брекпоинты (адаптив)
				breakpoints: {
					320: {
						slidesPerView: 2.5,
						spaceBetween: 15,
					},
					767.98: {
						slidesPerView: 3,
						spaceBetween: 20,
					},
					1169.98: {
						slidesPerView: 4,
						spaceBetween: 30,
					},
				},
			});
		});
	}

	if (document.querySelector('.rs-gallery__slider-2')) {
		const sliderBlocks = document.querySelectorAll('.rs-gallery__slider-2');
		sliderBlocks.forEach(sliderBlock => {
			const sliderSwiper = new Swiper(sliderBlock, {
				// Автопрокрутка
				autoplay: {
					// Пауза между прокруткой
					delay: 1,
					// delay: 5000,
					// Закончить на последнем слайде
					stopOnLastSlide: false,
					// Отключить после ручного переключения
					disableOnInteraction: false,
					// Изменить направление
					reverseDirection: true,
				},

				// Обновить свайпер
				// при изменении элементов слайдера
				observer: true,
				// при изменении родительских элементов слайдера
				observeParents: true,
				// при изменении дочерних элементов слайдера
				observeSlideChildren: true,

				// Скорость смены слайдов
				speed: 20000,

				// Включение/отключение
				// перетаскивание на ПК
				simulateTouch: true,
				allowTouchMove: true,
				// Чувствительность свайпа
				touchRadio: 1,
				// Угол срабатывания свайпа/перетаскивания
				touchAngle: 45,

				// Цикличность слайдера
				loop: true,

				// Курсор перетаскивания
				grabCursor: true,

				// Анимация переключения
				// effect: 'fade',

				// Брекпоинты (адаптив)
				breakpoints: {
					320: {
						slidesPerView: 2.5,
						spaceBetween: 15,
					},
					767.98: {
						slidesPerView: 3,
						spaceBetween: 20,
					},
					1169.98: {
						slidesPerView: 4,
						spaceBetween: 30,
					},
				},
			});
		});
	}

	// rs-reviews
	if (document.querySelector('.rs-reviews')) {
		const sliderBlocks = document.querySelectorAll('.rs-reviews');
		sliderBlocks.forEach(sliderBlock => {
			const slider = sliderBlock.querySelector('.rs-reviews__slider');
			const arrowNext = sliderBlock.querySelector('.rs-reviews__button-next');
			const arrowPrev = sliderBlock.querySelector('.rs-reviews__button-prev');
			// const pagination = sliderBlock.querySelector('.rs-reviews__pagination');

			const sliderSwiper = new Swiper(slider, {
				// Автопрокрутка
				autoplay: {
					// Пауза между прокруткой
					delay: 10000,
					// Закончить на последнем слайде
					stopOnLastSlide: false,
					// Отключить после ручного переключения
					disableOnInteraction: false,
				},

				// Обновить свайпер
				// при изменении элементов слайдера
				observer: true,
				// при изменении родительских элементов слайдера
				observeParents: true,
				// при изменении дочерних элементов слайдера
				observeSlideChildren: true,

				// Скорость смены слайдов
				speed: 500,

				// Включение/отключение
				// перетаскивание на ПК
				simulateTouch: true,
				// Чувствительность свайпа
				touchRadio: 1,
				// Угол срабатывания свайпа/перетаскивания
				touchAngle: 45,

				// Курсор
				grabCursor: true,

				// // Пагинация
				// pagination: {
				// 	el: pagination,
				// 	// clickable: true,
				// 	// dynamicBullets: true
				// 	type: 'progressbar',
				// },

				// Стрелки
				navigation: {
					nextEl: arrowNext,
					prevEl: arrowPrev,
				},

				slidesPerView: 1,
				spaceBetween: 30,
			});
		});
	}
}

// Скролл на базе слайдера (по классу swiper_scroll для оболочки слайдера)
function initSlidersScroll() {
	let sliderScrollItems = document.querySelectorAll('.swiper_scroll');
	if (sliderScrollItems.length > 0) {
		for (let index = 0; index < sliderScrollItems.length; index++) {
			const sliderScrollItem = sliderScrollItems[index];
			const sliderScrollBar = sliderScrollItem.querySelector('.swiper-scrollbar');
			const sliderScroll = new Swiper(sliderScrollItem, {
				observer: true,
				observeParents: true,
				direction: 'vertical',
				slidesPerView: 'auto',
				freeMode: {
					enabled: true,
				},
				scrollbar: {
					el: sliderScrollBar,
					draggable: true,
					snapOnRelease: false
				},
				mousewheel: {
					releaseOnEdges: true,
				},
			});
			sliderScroll.scrollbar.updateSize();
		}
	}
}

window.addEventListener("load", function (e) {
	// Запуск инициализации слайдеров
	if (document.querySelector('.swiper')) {
		initSliders();
	}
	// Запуск инициализации скролла на базе слайдера (по классу swiper_scroll)
	//initSlidersScroll();
});