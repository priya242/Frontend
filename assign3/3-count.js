// Enter your code here
function highlight(){
const term = document.getElementById("input").value;
const results = document.getElementById("intro");

results.innerHTML = (results.innerHTML).replace(new RegExp(" " + term + " ","gi"),
"<span> </span><span style = 'background-color:yellow;'>" + term + "</span><span> </span>")

}   