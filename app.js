$('.search-trigger').on('click', function(e) {
      e.preventDefault();
      $('.search-wrap').hasClass('expand') ? $('.search-wrap').removeClass('expand') : $('.search-wrap').addClass('expand');
      
      if($('.main-nav__item').hasClass('expand')) {
        $('.main-nav__item').removeClass('expand');
        // $('.main-nav__item').delay(500).fadeIn('slow');
      } else {
        $('.main-nav__item').addClass('expand');
        // $('.main-nav__item').fadeOut('fast');
      }
      
      if($('.fa').hasClass('fa-search')) {
        $('.fa').removeClass('fa-search');
        $('.fa').addClass('fa-times');
      } else {
        $('.fa').addClass('fa-search');
        $('.fa').removeClass('fa-times');
      }
      
      $('#search').delay(500).toggleClass('open');
      
      
    });
    
    $(document).on('click', function(e){
      if(!$(e.target).closest('.search-wrap').length) {
        if($('.fa').hasClass('fa-times')) {
          $('.fa').removeClass('fa-times');
          $('.fa').addClass('fa-search');
        } 
        
        if($('.main-nav__item').hasClass('expand')) {
          $('.main-nav__item').removeClass('expand');
          // $('.main-nav__item').delay(500).fadeIn('slow');
        } 
        
        if($('.search-wrap').hasClass('expand')) {
          $('.search-wrap').removeClass('expand');
          // $('.main-nav__item').delay(500).fadeIn('slow');
        } 
        
        $('#search').removeClass('open');
      }
    });
    
    
    $('.grid').masonry({
      itemSelector: '.grid-item',
      columnWidth: 160,
      horizontalOrder: true
    });
    
    $('.hamburger-button').on('click', function(e) {
        e.preventDefault();
        $('.main-nav').toggleClass('open');
    });
    
    
    $('.btn-go-to-top').on('click', function(e){
      e.preventDefault();
      
      $('html body').animate({
        scrollTop: $($('header')).offset().top
      }, 500, 'linear') ;
    });
    
    const headerTop = $('header').offset().top;
    const headerHeight = $('header').outerHeight();
    
    let oldScroll;
    
    $(window).on('scroll', function(e){
      // console.log("Scroll event  - ",e);
      
      let st = $(this).scrollTop();
      
      if(st > oldScroll) {
        console.log('going down');
      } else {
        console.log('going up');
      }
      
      oldScroll = st;
      
      // console.log(oldScroll);
      if ($(window).scrollTop() > headerTop + headerHeight) {
        $('.btn-go-to-top').find('i').addClass('is-visible');
      } else {
        $('.btn-go-to-top').find('i').removeClass('is-visible');
      }
    });

    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    