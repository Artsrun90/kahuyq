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
    
});