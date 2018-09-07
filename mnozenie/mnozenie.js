let input = document.querySelector("#input");
let showTask = document.querySelector("#showTask");
let showResultDiv = document.querySelector("#show-result-div");
let start = document.querySelector("#start");
start.addEventListener("click", randomizeTask);
let checkBtn = document.querySelector("#check-btn");
checkBtn.addEventListener("click", submitVal);
let parsedValue;
let result;

function getRandomNumberInRange(min, max){
    return Math.round(Math.random() * (max - min)) + min;
}

function randomizeTask(){

    let a = getRandomNumberInRange(1, 10);
    let b = getRandomNumberInRange(1, 10);
    
    result = a * b;
    console.log("Wynik to: " + result)
    showTask.innerHTML = `${a} x ${b} =`
    start.removeEventListener("click", randomizeTask);
    checkBtn.addEventListener("click", submitVal);
    showResultDiv.innerHTML = "<h3>Dasz radę!</h3>";
}

function submitVal(){

    if(input.value){
        parsedValue = parseInt(input.value);
        console.log("Napisałeś: " + parsedValue);
        checkResult(); 
    }else{
        showResultDiv.innerHTML = "<h3>Wpisz wartość i potwierdź przyciskiem obok!</h3>"
    }   
}

function checkResult(){

    if(result && parsedValue){
        
        console.log("result: " + result + " value: " + parsedValue)
        console.log(result === parsedValue)
        if(result === parsedValue){
            showResultDiv.innerHTML = "<h3>Bardzo dobrze!</h3>"
        }else {
            showResultDiv.innerHTML = `<h3>Źle, wynik to: ${result}</h3>`
        }

    }else showResultDiv.innerHTML = `<h3>Naciśnij "Start" i wpisz prawidłowo wartość!</h3>`

    start.addEventListener("click", randomizeTask); 
    checkBtn.removeEventListener("click", submitVal);
}
