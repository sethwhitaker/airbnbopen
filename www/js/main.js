(function($) {
	'use strict';

	$(document).ready(function(){

		function scrollTo(e){
			e.preventDefault;

			var $this = $(this),
				  $target = $(this.hash);

			var offset = $this.data('scroll-offset');

			 if( $target.length ){
				$('html,body').animate({
					 scrollTop: $target.offset().top - offset
				  }, 700, 'swing');
			 }
			 if($('.nav-list').hasClass('in')){
			 	closeNav();
			 }
			 return false;
		}
		function closeNav(){
			$('.navbar-toggler').click();
		}
		$('[data-scroll-to]').on('click', scrollTo);

	});
})(jQuery);