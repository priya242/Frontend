// Enter your code here
function palindrome(){
var numb = document.getElementById("number").value;
var number = Array.from(numb);
var result = document.getElementById("result").value;
var i = 0;
var j = number.length-1;
var test = true;


while(i < j){
    if(number[i] != number[j]){
        test = false;
        break;
    }
    i++;
    j--;
}
if(test == true){
    result = "Yes";
}
else
result = "No";
document.getElementById("result").innerHTML = result;

}