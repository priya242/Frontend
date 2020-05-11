// Enter your code here
function palindrome() {
  var numb = document.getElementById("number");
  var number = Array.from(numb.value);
  var result = document.getElementById("result").value;
  var i = 0;
  var j = number.length - 1;
  var test = true;
  if (numb.value == null || numb.value == "") {
    document.getElementById("result").innerHTML = "Please fill in this field";
    return;
  }
  while (i < j) {
    if (number[i] != number[j]) {
      test = false;
      break;
    }
    i++;
    j--;
  }
  if (test == true) {
    result = "Yes";
  } else result = "No";
  document.getElementById("result").innerHTML = result;
}
