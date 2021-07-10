// CAROUSEL


$(document).ready(function(){
    $('.carousel').slick({
        autoplay: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        centerMode: false,
        variableWidth: true,
        mobileFirst: true,
        respondTo: 'min',
        responsive: [
            {
              breakpoint: 768,
              settings: {
                centerMode: true,
              }
            },
        ]
    });
  });

  // COPYRIGHT

  document.querySelector('#copyright-year').innerText = new Date().getFullYear();