// Nav Scrolling

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

Inicio.addEventListener('click', function(){
	Contato.className = 'nav-item nav-link';
	Inicio.className = 'nav-item nav-link active';
});

Contato.addEventListener('click', function(){
	Inicio.className = 'nav-item nav-link';
	Contato.className = 'nav-item nav-link active';
});