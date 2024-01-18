var randomnumber = (Math.floor(Math.random()*6))+1;
var randomimage="dice"+randomnumber+".png";
var image="images/"+randomimage;

var firstimg = document.querySelectorAll("img")[0];
firstimg.setAttribute("src", image); 

var randomnumber2 = (Math.floor(Math.random()*6))+1;
var randomimage2="images/"+"dice"+randomnumber2+".png";

document.querySelectorAll("img")[1].setAttribute("src", randomimage2);

if (image>randomimage2){
    document.querySelector("h1").textContent="Yohoo, player 1 wins";
}
if (image<randomimage2){
    document.querySelector("h1").textContent="Yohoo, player 2 wins";
}

if (image==randomimage2){
    document.querySelector("h1").textContent="oh - oh draw";
}