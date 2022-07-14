//burger animation
var burgerMenu = $(".Burger-menu");

burgerMenu.on("click", function () {
  $(this).toggleClass("active");
  $(this).toggleClass("not-active");
});
