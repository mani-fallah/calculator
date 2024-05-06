const display = document.getElementById("display")
const goal =  display.value.length-1
function appendToDisplay(input)
{
    if(display.value.length === 10 )
    {
        alert("max length is 10")
    }
    else {
            display.value +=input;
    }
}

function clearScreen()
{
display.value = ""
}
function calculate()
{
    try{
        display.value = eval(display.value)
    }
    catch (error){
        display.value= "error"
    }
}

function deleteItem()
{
   display.value = display.value.replace(display.value[display.value.length-1],'')
}
