(function ($) {
  'use strict';




  $(document).ready(function () {
    $('select').niceSelect();
  });



  /*   counter UP */
  $(document).ready(function () {
    $('.count').counterUp({
      delay: 10,
      time: 1500
    });
  });





  /* top to bottom js */
  var btn = $('#button');

  $(window).on('scroll', function () {
    if ($(window).scrollTop() > 300) {
      btn.addClass('show');
    } else {
      btn.removeClass('show');
    }
  });

  btn.on('click', function (e) {
    e.preventDefault();
    $('html, body').animate({
      scrollTop: 0
    }, '300');
  });

  $(document).ready(function () {
    $('.showcoupon').on('click', function () {
      $('.checkout_coupon').toggleClass('open_copon');
    });
  });






})(jQuery)


$('.main_menu > li > a').on('click', function () {
  var $ul = $(this).siblings('ul');
  if ($ul.length > 0) {
    $ul.slideToggle(600);
    $(".submenu").not($ul).slideUp(400);
    return false;
  }
});


var button = document.querySelector(".mobile_menu_btn .icon");
var menu_wrap = document.getElementById('menu_wrap');
var bar_close = document.getElementById('bar_close')
button.addEventListener('click', function () {

  if (menu_wrap.classList.contains("open-mobilemenu")) {
    bar_close.classList.replace("ti-close", "ti-align-justify")
    menu_wrap.classList.remove("open-mobilemenu");
  } else {
    menu_wrap.classList.add("open-mobilemenu");
    bar_close.classList.replace("ti-align-justify", "ti-close")
  }
});

/* search-box open close js code */
let header_right = document.querySelector(".search_icon");
let searchBox = document.querySelector(".bx-search");
searchBox.addEventListener("click", () => {
  header_right.classList.toggle("active");
  if (header_right.classList.contains("active")) {
    searchBox.classList.replace("bx-search", "ti-close");
  } else {
    searchBox.classList.replace("ti-close", "bx-search");
  }
});

/* sticky menu js */
window.addEventListener('scroll', () => {
  var sticky = document.getElementById('sticky');
  if (window.scrollY >= 1) {
    sticky.classList.add('sticky_active');
  } else {
    sticky.classList.remove('sticky_active')
  }
})



/*-----------------------
      increaseCounter room
    -------------------------*/

function changeCounter(element, value) {
  var counterElement = element.parentNode.querySelector('.counter');
  var counterId = element.parentNode.parentNode.dataset.counterId;
  var counter = parseInt(counterElement.innerText, 10) + value;

  if (counter > 0) {
    counterElement.innerText = counter;
    // You can use the counter and counterId as needed
    // For example, you can update a hidden input value
    // document.getElementById('hiddenInput' + counterId.slice(-1)).value = counter;
  }
}