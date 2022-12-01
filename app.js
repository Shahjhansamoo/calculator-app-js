
var display = document.getElementById("display");



function getVal(a){
  display.value += a;
}


function calculate(){
    var a = eval(display.value);
    console.log(a);
    display.value = a;
}

function clearAll(){
    display.value = ''; 
}















