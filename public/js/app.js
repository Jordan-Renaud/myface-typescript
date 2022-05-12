document.addEventListener("DOMContentLoaded", function () {
  const changeColourButton = document.getElementById("new-colour-button");
  changeColourButton.addEventListener("click", changeColour);
  const posts = document.getElementsByClassName("post");
  function changeColour() {
    for (let i = 0; i < posts.length; i++) {
      posts[i].style.backgroundColor = `rgb(${Math.random() * 255}, ${
        Math.random() * 255
      }, ${Math.random() * 255})`;
    }
  }

  const menuButton = document.getElementById("menu");
  menuButton.addEventListener("click", hideMenu);
  function hideMenu() {
    const menuBar = document.getElementById("menuBar");
    if (menuBar.style.display === "none") {
      menuBar.style.display = "block";
    } else {
      menuBar.style.display = "none";
    }
  }
});
