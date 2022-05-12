
document.addEventListener("DOMContentLoaded", function () {
  const menuButton = document.getElementById("menu");
  menuButton.addEventListener("click", showMenu);
  function showMenu() {
    const menuBar = document.getElementById("menuBar");
    if (menuBar.style.display === "none" || !menuBar.style.display) {
      menuButton.innerHTML = '<i class="fa fa-times" aria-hidden="true"></i>'
      menuBar.style.display = "block";
    } else {
      menuBar.style.display = "none";
      menuButton.innerHTML  = '<i class="fa fa-bars"></i>'
    }
  }
});
