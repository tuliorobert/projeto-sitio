// Nav Fix on Scrolling

jQuery(function($) {
    $(window).on('scroll', function() {
		if ($(this).scrollTop() >= 200) {
			$('.navbar').addClass('fixed-top');
		} else if ($(this).scrollTop() == 0) {
			$('.navbar').removeClass('fixed-top');
		}
	});
	
	function adjustNav() {
		var winWidth = $(window).width(),
			dropdown = $('.dropdown'),
			dropdownMenu = $('.dropdown-menu');
		
		if (winWidth >= 768) {
			dropdown.on('mouseenter', function() {
				$(this).addClass('show')
					.children(dropdownMenu).addClass('show');
			});
			
			dropdown.on('mouseleave', function() {
				$(this).removeClass('show')
					.children(dropdownMenu).removeClass('show');
			});
		} else {
			dropdown.off('mouseenter mouseleave');
		}
	}
	
	$(window).on('resize', adjustNav);
	
	adjustNav();
});

// Change active link on nav

var Inicio = document.getElementById('inicio');
var Contato = document.getElementById('contato');
var priButton = document.querySelector('.button-primary');
var topButton = document.querySelector('.toTop');

Inicio.addEventListener('click', function(){
	Contato.className = 'nav-item nav-link';
	Inicio.className = 'nav-item nav-link active';
});

Contato.addEventListener('click', function(){
	Inicio.className = 'nav-item nav-link';
	Contato.className = 'nav-item nav-link active';
});

priButton.addEventListener('click', function(){
	Inicio.className = 'nav-item nav-link';
	Contato.className = 'nav-item nav-link active';
});

topButton.addEventListener('click', function(){
	Contato.className = 'nav-item nav-link';
	Inicio.className = 'nav-item nav-link active';
});

// Back to Top button

window.addEventListener('scroll', function(){
	var topButton = document.querySelector('.toTop');

	topButton.classList.toggle('atvd', window.scrollY > 500);
});