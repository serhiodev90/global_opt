$(document).ready(function(){

	//Burger

	$('.header__burger').click(function(event){
		$('.header__burger, .header__menu, .contact').toggleClass('active');
	});
});