let button = document.getElementsByTagName("button");
function calculete(cal){
    // debugger;
    return display.value = eval(cal);
}
for(let btn of button){
    btn.classList.add("btn");
    btn.addEventListener("click",function(e){
        const display = document.getElementById("display")
        display.value += ''
        if(e.target.innerText == "C" || e.target.innerText == "del"){
            display.value = ""
        }
        else if(e.target.innerText == "Back"){
            display.value = display.value.slice(0,-1)
        }
        else if(e.target.innerText == "="){
            if(display.value != ''){
                display.value = calculete(display.value);
            }
        }
        else{
            display.value += e.target.innerText;
        }
    })
    
}