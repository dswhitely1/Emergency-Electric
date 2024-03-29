/*!
 * Start Bootstrap - Stylish Portfolio v5.0.4 (https://startbootstrap.com/template-overviews/stylish-portfolio)
 * Copyright 2013-2019 Start Bootstrap
 * Licensed under MIT (https://github.com/BlackrockDigital/startbootstrap-stylish-portfolio/blob/master/LICENSE)
 */
!(function(a) {
	'use strict';
	a('.menu-toggle').click(function(e) {
		e.preventDefault(),
			a('#sidebar-wrapper').toggleClass('active'),
			a('.menu-toggle > .fa-bars, .menu-toggle > .fa-times').toggleClass(
				'fa-bars fa-times',
			),
			a(this).toggleClass('active');
	}),
		a('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
			if (
				location.pathname.replace(/^\//, '') ==
					this.pathname.replace(/^\//, '') &&
				location.hostname == this.hostname
			) {
				var e = a(this.hash);
				if (
					(e = e.length ? e : a('[name=' + this.hash.slice(1) + ']'))
						.length
				)
					return (
						a('html, body').animate(
							{
								scrollTop : e.offset().top,
							},
							1e3,
							'easeInOutExpo',
						),
						!1
					);
			}
		}),
		a('#sidebar-wrapper .js-scroll-trigger').click(function() {
			a('#sidebar-wrapper').removeClass('active'),
				a('.menu-toggle').removeClass('active'),
				a(
					'.menu-toggle > .fa-bars, .menu-toggle > .fa-times',
				).toggleClass('fa-bars fa-times');
		}),
		a(document).scroll(function() {
			100 < a(this).scrollTop()
				? a('.scroll-to-top').fadeIn()
				: a('.scroll-to-top').fadeOut();
		});
})(jQuery);
var onMapMouseleaveHandler = function(e) {
		var a = $(this);
		a.on('click', onMapClickHandler),
			a.off('mouseleave', onMapMouseleaveHandler),
			a.find('iframe').css('pointer-events', 'none');
	},
	onMapClickHandler = function(e) {
		var a = $(this);
		a.off('click', onMapClickHandler),
			a.find('iframe').css('pointer-events', 'auto'),
			a.on('mouseleave', onMapMouseleaveHandler);
	};
$('.map').on('click', onMapClickHandler);
