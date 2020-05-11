// Enter your code here

const url = "https://swapi.dev/api/people/";
results = document.getElementById("results");

var htmlString = "";
let getDataAsync = async (url) => {
  let data = [];
  try {
    let response = await fetch(url);
    data = await response.json();
    let x = data.results;
    console.log("Data", data);
    for (var i = 0; i < x.length; i++) {
      var name = x[i].name;
      var birthyear = x[i].birth_year;
      htmlString = htmlString + "<li>" + name + " - " + birthyear + "</li>";
    }
    //results.innerHTML = htmlString;
  } catch (error) {
    console.log("Request failed", error);
  }
  if (data.next != null) getDataAsync(data.next);
  results.innerHTML = htmlString;
};
getDataAsync(url);
