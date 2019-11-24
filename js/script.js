document.addEventListener("DOMContentLoaded", function() {
  setTimeout(function() {
    var style = document.createElement("style");

    document.head.appendChild(style);
    style.sheet.insertRule(
      "#preloader { clip-path: polygon(" +
        "0% 0%, 0% 100%, 50% 100%, -200vmax 200vmax, 50% -100vmax," +
        "300vmax 200vmax, -200vmax 200vmax, 50% 100%, 100% 100%, 100% 0%) }"
    );

    setTimeout(function() {
      style.sheet.insertRule("body { overflow: unset }");
      document.getElementById("preloader").remove();
    }, 1500);
  }, 2000);

  document.getElementById("scroll-down").addEventListener("click", function() {
    var about = document.getElementById("about");
    window.scroll(0, about.offsetTop);
  });
});
