var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var deg = document.getElementById("deg");
var body = document.getElementById("gradient");
var temp;


function changeGradient(){
    body.style.background="linear-gradient("
    +temp
    +"deg, "
    +color1.value
    +", "
    +color2.value
    +")";
    css.textContent = body.style.background; 
} 
function settingdegree(event){
    if(event.keyCode===13){
        temp = deg.value;
        changeGradient();
}
}

color1.addEventListener("input",changeGradient);
color2.addEventListener("input",changeGradient);
deg.addEventListener("keypress",settingdegree);
