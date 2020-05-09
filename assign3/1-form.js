// Enter your code here
function myForm(){
var x = document.getElementById("name");
console.log("name:",document.getElementById("name").value)
var x = document.getElementById("email");
console.log("email:",x.value)
var x = document.getElementById("registration");
console.log("registration status:",x.value)

if(document.getElementById("CS410P").checked)
{
    console.log("class section: undergrad")
}
else
{
    console.log("class section: grad")
}

var x = document.getElementById("course1");
var y = document.getElementById("course2");
var z = document.getElementById("course3");
var checkString = "";
if (x.checked == true){
    checkString = x.value;
}
if(y.checked == true)
{
    checkString = checkString != "" ? checkString + ", " : checkString;
    checkString = checkString + y.value;
}
if(z.checked == true)
{
    checkString = checkString != "" ? checkString + ", " : checkString;
    checkString = checkString + z.value;
}
console.log("courses:",checkString)
console.log("class goals:",document.getElementById("comment").value)
}
