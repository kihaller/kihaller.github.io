const navbarButton = document.getElementById("navbar-toggler");
const navbar = document.getElementById("navbar");

let firstTime = true;

navbarButton.addEventListener("click", (event) => {
  if (firstTime || navbarButton.classList.contains("collapsed")) {
    // Make background black
    navbar.classList.add("black");
    firstTime = false;
  } else {
    // Make background transparent
    navbar.classList.remove("black");
  }
});
