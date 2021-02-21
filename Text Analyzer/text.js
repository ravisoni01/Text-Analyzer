// console.log("Welcome to Text-Analyzer Web-App");

let result = document.getElementById("result");
result.style.display = "none";

let btn = document.getElementById("btn"); //is use for get data form dom.
btn.addEventListener("click", () => {

  result.style.display = "block";
  let noneResult = document.getElementById("noneResult");
  noneResult.style.display = "none";
  // console.log("you click on submit button");
  let enterText = document.getElementById("enterText").value; //we take input from textarea.
  // console.log(enterText.length);

  let text = enterText.length; //we calculate no. of length present in string.
  document.getElementById("characters").innerHTML = text; // print no. of character present in sting.

  let character = enterText.split(" ").length; //calculate no. words present in string.
  // console.log(character);
  if(enterText == 0){//this condition is use for printing 0 when someone not input any text.
    document.getElementById("words").innerHTML = 0;
  }
  else{
    document.getElementById("words").innerHTML = character; //print no. of words in string.
  }

  let spaceCount = enterText.split(" ").length - 1; //calculate no. of spaces present in string.
  // console.log(spaceCount);
  document.getElementById("spaces").innerHTML = spaceCount; //print no. of spaces in string.
});
