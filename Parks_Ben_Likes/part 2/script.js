var countK = 0;
var elementCountK = document.querySelector("#countK");

var countM = 0;
var elementCountM = document.querySelector("#countM");

var countR = 0;
var elementCountR = document.querySelector("#countR");

function add1() {
    countM++;
    elementCountM.innerText = countM +" "+ "like(s)";
}

function add2() {
    countK++;
    elementCountK.innerText = countK +" "+ "like(s)";
}

function add3() {
    countR++;
    elementCountR.innerText = countR +" "+ "like(s)";
}