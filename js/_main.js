// Off Canvas Sliding
$(document).ready(function(){
  // Menu button click
  $('#js-menu-trigger,#js-menu-screen').on('click touchstart', function(e){
    // $('#js-body').toggleClass('no-scroll');
    $('#js-menu, #js-menu-screen').toggleClass('is-visible');
    $('#js-menu-trigger').toggleClass('slide close');
    // $('#masthead, #page-wrapper').toggleClass('slide');
    e.preventDefault();
  });

  // Bitcoin QR support
  $('#bitcoin-qr-trigger,#bitcoin-qr-popup').on('click touchstart', function(e){
    $('#bitcoin-qr-popup').toggleClass('is-visible');
    e.preventDefault();
  }); 

  $('#bitcoin-qr-target').on('click touchstart', function(e){
    $('#bitcoin-qr-popup').toggleClass('is-visible');
  }); 
});

// FitVids
$(document).ready(function(){
	// Target your .container, .wrapper, .post, etc.
	$("#main").fitVids();
});

// Table of Contents title. Change text to localize
$("#markdown-toc").prepend("<li><h6>{{ site.data.messages.locales[site.locale].overview }}</h6></li>");
