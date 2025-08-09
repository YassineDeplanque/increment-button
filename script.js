let num = 1;
let button = document.getElementById("button");

function incrementer() {   
    button.innerText = num;
    num++;
}

function reset() {
    num = 1;
    button.innerText = 0;
}