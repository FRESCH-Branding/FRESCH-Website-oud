//website title changes
window.onload = function () {
  var pageTitle = document.title;
  var attentionMessage = "HI!👋 kan ik iets voor je doen?";

  document.addEventListener("visibilitychange", function (e) {
    var isPageActive = !document.hidden;

    if (!isPageActive) {
      document.title = attentionMessage;
    } else {
      document.title = pageTitle;
    }
  });
};

function delay(URL) {
  setTimeout(function () {
    window.location = URL;
  }, 500);
}

// navigation animation
const navigationSlide = () => {
  const burger = document.querySelector(".Burger-menu");
  const nav = document.querySelector(".Nav-links");
  const navLinks = document.querySelectorAll(".Nav-links li");

  //toggle nav
  burger.addEventListener("click", () => {
    nav.classList.toggle("nav-active");

    //links animation
    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = "";
      } else {
        link.style.animation = `Nav-links-fade 0.5s ease forwards ${
          index / 7 + 0.3
        }s`;
      }
    });
  });
};

navigationSlide();
