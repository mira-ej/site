document.addEventListener("DOMContentLoaded", function() {
  document.getElementById("scroll-down").addEventListener("click", function() {
    var about = document.getElementById("about");
    window.scroll(0, about.offsetTop);
  });
});
