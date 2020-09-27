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

//slide in from left or right
(function () {
  var elements;
  var windowHeight;

  function init() {
    elements = document.querySelectorAll(".slider");
    windowHeight = window.innerHeight;
  }

  function checkPosition() {
    for (let i = 0; i < elements.length; i++) {
      var positionFromTop = elements[i].getBoundingClientRect().top;

      if (positionFromTop - (3 * windowHeight) / 4 <= 0) {
        if (i % 2 === 0) {
          elements[i].classList.add("slide-in-from-left");
        } else {
          elements[i].classList.add("slide-in-from-right");
        }
        elements[i].classList.remove("hidden");
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
