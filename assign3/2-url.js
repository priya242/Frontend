// Enter your code here

// Input:
// http://www.example.com?name=r2d2&email=r2d2%40me.com&human=no

// Output
// http://www.example.com
// name: r2d2
// email: r2d2@me.com
// human: no
function url(){
var input = "http://www.example.com?name=r2d2&email=r2d2%40me.com&human=no";

var url = input.slice(0,input.indexOf("?"));
var queryString = (input.slice(input.indexOf("?")+1,input.length)).split("&");
var x = "";
for(var i = 0; i < queryString.length; i++){
    x = x + "<div class = 'mt-4'>" + queryString[i].replace("=",": ") + "</div>"
}

var box ='<div class="bg-light border rounded w-50 mx-auto mt-5 p-3"><h2 class = "mt-2 mb-4">Results</h2><h4 class = "mt-4">URL</h4>'
+ '<h7 class = "mt-4" id = "url">' + url +'</h7><h4 class = "mt-4">Query Parameters</h4>' + x +'</div>'

var x = document.getElementById("box")
x.insertAdjacentHTML('afterend',box)
}
//var otherhtml = queryString[0].replace("=",":") + '<br>' + queryString[1].replace("=",":") + '<br>' + queryString[2].replace("=",":");
//element.setAttribute()