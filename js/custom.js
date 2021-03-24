// top alert-bar start
// {
//   let header = document.getElementById('header');
//   let alertBar = document.getElementById('alert-bar');
//   let alertBarBtn = document.getElementById('alert-bar-btn');

//   alertBarBtn.addEventListener('click', function(){
//     alertBar.style.display = 'none';
//     header.style.top = 0;
//   })
// }
//  top alert-bar end




// banner slide start
{
  $('.banner-slide').slick({
    dots: true, 
    autoplay: true,
    autoplaySpeed: 2000,
    prevArrow: '<span class="prev-arrow"><i class="fa fa-angle-left"></i></span>',
    nextArrow: '<span class="next-arrow"><i class="fa fa-angle-right"></i></span>',
  });
    
}
// banner slide end


// fun-slider start
{
  $('.fun-slider').slick({
    dots: true, 
    autoplay: true,
    autoplaySpeed: 2000,
    prevArrow: '<span class="prev-arrow"><i class="fal fa-chevron-left"></i></span>',
    nextArrow: '<span class="next-arrow"><i class="fal fa-chevron-right"></i></span>',
  });
    
}
// fun-slider end


// header fixed on scroll start
  $(window).scroll(function(){
    let scrollValue = $(this).scrollTop();
    //header fixed
    if(scrollValue >= 200){
      $(".header").addClass("translate-top");
    }else{
      $(".header").removeClass("translate-top");
    }

    //header fixed
    if(scrollValue >= 300){
      $(".header").addClass("position-fixed");
    }else{
      $(".header").removeClass("position-fixed");
    }
  })
// header fixed on scroll end


// service-spotlight-slider start
$('.service-spotlight-slider').slick({
  dots: false,
  infinite: true,
  speed: 300,
  slidesToShow: 3,
  slidesToScroll: 1,
  prevArrow: '<span class="prev-arrow"><i class="fal fa-chevron-left"></i></span>',
  nextArrow: '<span class="next-arrow"><i class="fal fa-chevron-right"></i></span>',
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 769,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});
			
// service-spotlight-slider end


// newsticker-slider start
$('.newsticker-slider').slick({
  dots: false,
  infinite: true,
  autoplay: true,
  autoplaySpeed: 2000,
  speed: 300,
  slidesToShow: 4,
  slidesToScroll: 1,
  prevArrow: '<span class="prev-arrow"><i class="fas fa-long-arrow-alt-left"></i></span>',
  nextArrow: '<span class="next-arrow"><i class="fas fa-long-arrow-alt-right"></i></span>',
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1
      }
    },
    {
     
      breakpoint: 769,
      autoplay: true,
      arrows: false,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
  
      breakpoint: 400,
      autoplay: true,
      arrows: false,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
    
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});
			
// newsticker-slider end



// quote slide start
{
  $('.quote-slider').slick({
    dots: true, 
    arrows: false,
    autoplay: true,
    autoplaySpeed: 4000,
    prevArrow: '<span class="prev-arrow"><i class="fa fa-angle-left"></i></span>',
    nextArrow: '<span class="next-arrow"><i class="fa fa-angle-right"></i></span>',
  });
    
}
// quote slide end


//back to top button start
{
    //Get the button
  // When the user clicks on the button, scroll to the top of the document
  function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }
}


// sidebar fixed start
{
  $(".toggler-btn").click(function(){
    $(".side-bar").toggleClass("hidden")
  })
  $(".btn-sidebar-back").click(function(){
    $(".side-bar").toggleClass("hidden")
  })
}
// sidebar fixed end