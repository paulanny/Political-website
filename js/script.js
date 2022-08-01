function myFunction() {
  var navBar = document.getElementById("wordlinks");
  if (navBar.className === "words") {
    navBar.className += " active";
  } else {
    navBar.className = "words";
  }
}

var headImage = document.getElementById("head");

const openDropdownButton = document.querySelector(".menu-btn.open"),
  closeDropdownButton = document.querySelector(".menu-btn.close");

openDropdownButton.addEventListener("click", () => {
  const dropdown = document.querySelector(".dropdown");
  dropdown.style.right = "0";
});

closeDropdownButton.addEventListener("click", () => {
  const dropdown = document.querySelector(".dropdown");
  dropdown.style.right = "-400px";
});
