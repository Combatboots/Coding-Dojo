function cookies(){
    var cookies = document.querySelector('.cookies');
    cookies.style.display = "flex";
}

setTimeout(cookies, 3000)

function accept2(){
    var cookies = document.querySelector('.cookies');
    cookies.style.display = "none";
}

function accept1(){
    var popUp = document.querySelector('.popup');
    popUp.style.display = "none";
}

function popUp(){
    var popUp = document.querySelector(".popup");
    popUp.style.display = "flex"
}

var hot = document.querySelector(".hot");
var cold = document.querySelector(".cold");

function celsius(element) {
    console.log(element.value);
    hot.innerText = (hot - 32) * 5/9;
    cold.innerText = (cold - 32) * 5-9;
}

function fahrenheit(element) {
    console.log(element.value);
    hot.innerText = (element.value * 5/9) + 32;
    cold.innerText = (element.value * 5/9) + 32;
}