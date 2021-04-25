$(document).ready(function(){

	//Burger

	$('.header__burger').click(function(event){
		$('.header__burger, .header__menu, .contact').toggleClass('active');
	});

	//Slids

	$('.slids').slick({
		infinite: true,
		centerMode: true,
		centerPadding: '60px',
		slidesToShow: 3,
		responsive: [
			{
			 breakpoint: 768,
			 settings: {
				arrows: false,
				centerMode: true,
				centerPadding: '40px',
				slidesToShow: 3
				}
		  	},
		  	{
			 breakpoint: 480,
			 settings: {
				arrows: false,
				centerMode: true,
				centerPadding: '40px',
				slidesToShow: 1
			 	}
		  	}
		]
	});
});