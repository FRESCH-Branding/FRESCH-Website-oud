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

// smooth go to intro scroll
const intro = document.getElementById("intro");

function scrollToIntro() {
  intro.scrollIntoView({ behavior: "smooth", block: "center" });
  console.log("click");
}

// smooth go to top scroll
const navbar = document.getElementById("navbar");

function scrollToNavbar() {
  navbar.scrollIntoView({ behavior: "smooth", block: "start" });
  console.log("click2");
}
