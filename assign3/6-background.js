// Enter your code here
var interval = document.getElementById("interval");
var start = setInterval(bg, interval.value * 1000);

function bg() {
  var randomColor = Math.floor(Math.random() * 16777215).toString(16);
  document.body.style.backgroundColor = "#" + randomColor;
}

function toggle() {
  var element = document.getElementsByClassName("btn")[0];
  if (element.value == "Stop") {
    element.classList.remove("btn-danger");
    element.classList.add("btn-primary");
    element.setAttribute("value", "Start");
    interval.disabled = false;
    clearInterval(start);
  } else {
    element.classList.remove("btn-primary");
    element.classList.add("btn-danger");
    element.setAttribute("value", "Stop");
    start = setInterval(bg, interval.value * 1000);
  }
}
