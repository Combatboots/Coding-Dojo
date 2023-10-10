var count = 0;
var elementCount = document.querySelector("#count");

function add1() {
    count++;
    elementCount.innerText = count +" "+ "like(s)";
}