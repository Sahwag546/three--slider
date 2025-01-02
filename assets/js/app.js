
// slider-1 
$('.first-slider').slick({
    dots: true,
    arrow: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplaySpeed: 3000,
    centermode: true,
    prevArrow: $('#prev'),
    nextArrow: $('#next'),
     
    responsive: [

        {
            breakpoint: 992,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
            }
        },
        {
            breakpoint: 720,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
            }
      },
        
        {
            breakpoint: 576,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
            }
        },
    ]
    
});
// slider-2

$('.center').slick({
  centerMode: true,
  centerPadding: '60px',
    slidesToShow: 3,
    variableWidth: true,
    slidesToShow: 3,
    autoplay: true,
    autoplaySpeed:0,
    speed: 3000,
    pauseOnHover: true,
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
//  third slider details 
$('.one-time').slick({
    dots: false,
    arrows: true,
  infinite: true,
  speed: 300,
  slidesToShow: 6,
    adaptiveHeight: true,
       prevArrow: ".prev",
    nextArrow: ".next",
  responsive: [
    {
      breakpoint: 1300,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 5
      }
      },
      {
      breakpoint: 1200,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 4
      }
    },
  ]
});