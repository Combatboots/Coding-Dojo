function hide(element){
    element.remove();
}

function turnoff(element){
    if(element.innerText == "Login"){
        element.innerText = "Logout";
    }
    else{
        element.innerText = "Login"
    }
}