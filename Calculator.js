const display=document.getElementById("display")
function displayy(character){
    display.value+=character
}

function clearDisplay(){
    display.value=""
}

function calculate(){
    try{
        display.value=eval(display.value)
    }
    catch(error){
        display.value="error"
    }
}