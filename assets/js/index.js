// Javascript
document.addEventListener('DOMContentLoaded', function () {

  // Accordion
  var accordionItems = document.querySelectorAll('.accordion--item');
  var titles = document.querySelectorAll('.accordion__title');

  if (accordionItems.length) {
    function slideUp(el) {
      el.classList.remove('active');
      el.children[1].style.height = 0;
    }
    function slideDown(el) {
      el.classList.add('active');
      el.children[1].style.height = el.children[1].children[0].offsetHeight + 'px';
    }
    slideDown(accordionItems[0]);
    for (let i = 0; i < titles.length; i++) {
      titles[i].addEventListener('click', function () {
        const item = this.parentElement;
        if (item.classList.contains('active')) {
          slideUp(item);
          return;
        } else {
          for (let i = 0; i < accordionItems.length; i++) {
            slideUp(accordionItems[i]);
          }
          slideDown(this.parentElement);
        }
      })
    }
  }

  // Mobile Navigation
  var button = document.querySelector('.page-header .d-block.d-md-none');
  if (button) {
    button.addEventListener('click', function () {
      document.querySelector('.mobile-fullheight-navbar').classList.add('active-navbar');
      console.log(this.nextElementSibling);
    })
    function mobileFullheightNavbar() {
      const closeButton = document.querySelector('.mobile-fullheight-navbar > button:first-child');
      closeButton.addEventListener('click', function () {
        this.parentElement.classList.remove('active-navbar');
      })
    }
    mobileFullheightNavbar();
  }
})
// jQuery
if (typeof $ !== "undefined") {
  $(document).ready(function () {
    // if ($(".video-popup-button").length) {
    //   $(".video-popup-button").magnificPopup({
    //     type: "iframe",
    //   });
    // }
    $(document).ready(function () {
      console.log($(".aklievers-app-sliders").length);
      if ($(".aklievers-app-sliders").length) {
        $(".aklievers-app-sliders").owlCarousel({
          items: 1,
          nav: true,
          navText: ['<img src="assets/images/icons/slider-left-arrow.png" alt="">', '<img src="assets/images/icons/slider-right-arrow.png" alt=""></img>'],
          loop: true
        });
      }
      if ($(".ahs-sliders").length) {
        $(".ahs-sliders").owlCarousel({
          items: 1,
          nav: true,
          navText: ['<img src="assets/images/icons/slider-left-white-arrow.png" alt="">', '<img src="assets/images/icons/slider-right-white-arrow.png" alt=""></img>'],
          loop: true
        });
      }
      if ($(".dtc-slider-items").length) {
        $(".dtc-slider-items").owlCarousel({
          items: 1,
          nav: true,
          navText: ['<img src="assets/images/icons/slider-left-white-arrow.png" alt="">', '<img src="assets/images/icons/slider-right-white-arrow.png" alt=""></img>'],
          loop: true
        });
      }

    });
  });
}




