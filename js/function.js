$(document).ready(function(){
	
	//HAMBURGER//
	$('.navbar-toggler-animation').on('click', function () {

    $('.hamburger-animation').toggleClass('hamburger-open');
  });
	
	//ACCORDION//
	$(".collapse.show").each(function(){
		$(this).prev(".accordion-item-header").find(".ico-accordion").addClass("ico-remove-dark").removeClass("ico-add-dark");
	});

	$(".collapse").on('show.bs.collapse', function(){
		$(this).prev(".accordion-item-header").find(".ico-accordion").removeClass("ico-add-dark").addClass("ico-remove-dark");
	}).on('hide.bs.collapse', function(){
		$(this).prev(".accordion-item-header").find(".ico-accordion").removeClass("ico-remove-dark").addClass("ico-add-dark");
	});
});


//HEADER SHRINK//
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.getElementById("fixed-top").classList.add("fixed-top");
  } else {
    document.getElementById("fixed-top").classList.remove("fixed-top");
  }
}