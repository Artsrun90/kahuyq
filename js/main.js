$(document).ready(function () {

  $('.navbar-toggler').on('click', function(){  
    if ($('#toggle').hasClass('fa-times')) {
      $('#toggle').removeClass("fa-times");        
      $('#toggle').addClass("fa-bars");
      } else {
        $('#toggle').addClass("fa-times");
      }
    });

    var modal = $('#myModal');
    var modalImg = $('#modal-img');

    $('.text').on('click', function(){ 
      modal.css('display', 'block');
      modalImg.attr('src', $(this).parent().parent().find("img").attr('src'));
    });

    $('.close').on('click', function(){ 
      modal.css('display', 'none');
    })


    $(window).scroll(function () {
			if ($(this).scrollTop() > 50) {
				$('#back-to-top').fadeIn();
			} else {
				$('#back-to-top').fadeOut();
			}
		});
		// scroll body to 0px on click
		$('#back-to-top').click(function () {
			$('body,html').animate({
				scrollTop: 0
			}, 400);
			return false;
		});
    
});