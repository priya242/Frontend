// Enter your code here
function regex() {
  var input = document.getElementById("userinput").value;
  var output = input.split(new RegExp("[,;?.\n]", "g"));
  var htmlTag = "<table class = 'table'>";
  for (var i = 0; i < output.length; i++) {
    htmlTag = htmlTag + "<tr><td>" + output[i] + "</td></tr>";
  }
  htmlTag = htmlTag + "</table>";
  document.getElementById("results").innerHTML = htmlTag;
}
