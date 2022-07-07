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
