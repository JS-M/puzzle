function getRandomColor() {
  var letters = "0123456789ABCDEF";
  var color = "#";
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
function setRandomColor() {
  for (var i = 0; i < 9; i++) {
    let e = document.getElementsByClassName("cont");
    e[i].style.backgroundColor = getRandomColor();
  }
}

function set(r) {
  let element = document.getElementsByClassName("cont");

  element[r].style.backgroundColor = "white";
  change(r);
}

function change(r) {
  let element = document.getElementsByClassName("cont");
  var x = Math.floor(Math.random() * 10);
  if (element[x].style.backgroundColor == "white" && x != r) {
    element[x].style.backgroundColor = getRandomColor();
  } else {
    change(r);
  }
}
