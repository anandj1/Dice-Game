var num = Math.random()*6
num = Math.floor(num)+1
var images1= "images/dice"+num+".png"
document.querySelector(".img1").setAttribute("src",images1);    // NO " " TO  var images1 coz its varivale not constant image


// if(num==1){
//     document.querySelector(".img1").setAttribute("src","./images/dice1.png")
// }
// if(num==2){
//     document.querySelector(".img1").setAttribute("src","./images/dice2.png")
// }
// if(num==3){
//     document.querySelector(".img1").setAttribute("src","./images/dice3.png")
// }
// if(num==4){
//     document.querySelector(".img1").setAttribute("src","./images/dice4.png")
// }
// if(num==5){
//     document.querySelector(".img1").setAttribute("src","./images/dice5.png")
// }
// if(num==6){
//     document.querySelector(".img1").setAttribute("src","./images/dice6.png")
// }

var num2 = Math.random()*6
num2 = Math.floor(num2)+1
// console.log(num2)



if(num2==1){
    document.querySelector(".img2").setAttribute("src","./images/dice1.png")
}
if(num2==2){
    document.querySelector(".img2").setAttribute("src","./images/dice2.png")
}
if(num2==3){
    document.querySelector(".img2").setAttribute("src","./images/dice3.png")
}
if(num2==4){
    document.querySelector(".img2").setAttribute("src","./images/dice4.png")
}
if(num2==5){
    document.querySelector(".img2").setAttribute("src","./images/dice5.png")
}
if(num2==6){
    document.querySelector(".img2").setAttribute("src","./images/dice6.png")
}

if(num>num2){
    document.querySelector("h1").textContent=("🚩PLAYER 1 WINS!!");
    setTimeout(function(){document.querySelector("h1").textContent="Refresh Me"},2000)
    
}
else if(num<num2){
    document.querySelector("h1").textContent=(" PLAYER 2 WINS!! 🚩");
    setTimeout(function(){document.querySelector("h1").textContent="Refresh Me"},2000)
}
else{
    document.querySelector("h1").textContent=("MATCH DRAWN");
    setTimeout(function(){document.querySelector("h1").textContent="Refresh Me"},2000)

}




