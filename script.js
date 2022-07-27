function myFunction() {
  var navBar = document.getElementById("wordlinks");
  if (navBar.className === "words") {
    navBar.className += " active";
  } else {
    navBar.className = "words";
  }
}

var headImage = document.getElementById("head");
