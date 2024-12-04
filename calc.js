let display = document.getElementById("display")

function DisplayValue(input){
display.value+= input;
}

function calculate(){

    display.value=eval(display.value)
}

function clearDisplay(){
display.value=""
}