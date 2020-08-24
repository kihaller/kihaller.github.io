// Fade in titles
(function () {
  var elements;
  var windowHeight;

  function init() {
    elements = document.querySelectorAll(".fade");
    windowHeight = window.innerHeight;
  }

  function checkPosition() {
    for (element of elements) {
      var positionFromTop = element.getBoundingClientRect().top;

      if (positionFromTop - windowHeight <= 0) {
        element.classList.add("fade-in-element");
        element.classList.remove("hidden");
      }
    }
  }

  window.addEventListener("scroll", checkPosition);
  window.addEventListener("resize", init);

  init();
  checkPosition();
})();

// Slide in featurettes

//slide in from left
(function () {
  var elements;
  var windowHeight;

  function init() {
    elements = document.querySelectorAll(".slider-left");
    windowHeight = window.innerHeight;
  }

  function checkPosition() {
    for (element of elements) {
      var positionFromTop = element.getBoundingClientRect().top;

      if (positionFromTop - windowHeight / 2 <= 0) {
        element.classList.add("slide-in-from-left");
        element.classList.remove("hidden");
      }
    }
  }

  window.addEventListener("scroll", checkPosition);
  window.addEventListener("resize", init);

  init();
  checkPosition();
})();

//slide in from right
(function () {
  var elements;
  var windowHeight;

  function init() {
    elements = document.querySelectorAll(".slider-right");
    windowHeight = window.innerHeight;
  }

  function checkPosition() {
    for (element of elements) {
      var positionFromTop = element.getBoundingClientRect().top;

      if (positionFromTop - windowHeight / 2 <= 0) {
        element.classList.add("slide-in-from-right");
        element.classList.remove("hidden");
      }
    }
  }

  window.addEventListener("scroll", checkPosition);
  window.addEventListener("resize", init);

  init();
  checkPosition();
})();

//Navbar scroll
$(window).scroll(function () {
  $("nav").toggleClass("scrolled", $(this).scrollTop() > 56);
});
