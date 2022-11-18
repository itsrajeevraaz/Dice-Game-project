//var num=Math.random();
//var count=(num*6)+1;
//var nub=Math.floor(count);

var randomnumber1 = Math.floor(Math.random() * 6 + 1);
var randomdiceimage = "dice" + randomnumber1 + ".png";

var randomimagesource = "image/" + randomdiceimage;

var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", randomimagesource);



var randomnumber2 = Math.floor(Math.random() * 6 + 1);
var randomdiceimage = "dice" + randomnumber2 + ".png";
var randomimagesource = "image/" + randomdiceimage;

var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src", randomimagesource);

if (randomnumber1 > randomnumber2) {
    document.querySelector("h5").innerHTML = "player1 Wins!";
} else if (randomnumber2 > randomnumber1) {
    document.querySelector("h5").innerHTML = "Player2 wins!";
} else {
    document.querySelector("h5").innerHTML = "drow!";
}