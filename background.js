var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var gumb = document.getElementById("bgrandom");


function setGradient() {
    body.style.background = 
        "linear-gradient(to right, " 
        + color1.value 
        + ", " 
        + color2.value 
        + ")";
}

/*function newGradient() {
  var color1 = "#" + Math.floor(Math.random()*16777215).toString(16),
      color2 = "#" + Math.floor(Math.random()*16777215).toString(16);
  return 'radial-gradient(to right, '+color1+', '+color2+')'
}
*/

function randmColor() {
  let color1 = "#";
for(let i = 0; i < 6; i++){
      color1 += Math.floor((Math.random() * 16)).toString(16);
}
  return color1;

}



gumb.addEventListener('click', () {
  body.style.backgroundColor=randmColor(); 

  });

                     



//body.style.background = "red";

color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);


//gumb.addEventListener("click", newGradient);