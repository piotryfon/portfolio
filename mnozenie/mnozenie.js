$(document).ready(function(){

    let input = $("#input");
    let showTask = $("#showTask");
    let showResultDiv = $("#show-result-div");
    let start = $("#start");
    start.on("click", randomizeTask);
    let checkBtn = $("#check-btn");
    checkBtn.on("click", submitVal);
    let parsedValue;
    let result;
    
    function getRandomNumberInRange(min, max) {
        return Math.round(Math.random() * (max - min)) + min;
    }
    
    function randomizeTask() {
    
        let a = getRandomNumberInRange(1, 10);
        let b = getRandomNumberInRange(1, 10);
    
        result = a * b;
        showTask.html( a + " X " + b + " = ");
        start.off("click", randomizeTask);
        checkBtn.on("click", submitVal);
        showResultDiv.html("<h3>Dasz radę!</h3>");
    }
    
    function submitVal() {
    
        if (input.val()) {
            parsedValue = parseInt(input.val());
            checkResult();
        } else {
            showResultDiv.html('<h3>Naciśnij "Losuj zadanie" i wpisz wynik!</h3>');
        }
    }
    
    function checkResult() {
    
        if (result === parsedValue) {
            showResultDiv.html("<h3>Bardzo dobrze!</h3>");
        } else {
            showResultDiv.html("<h3>Źle, wynik to: " + result + "</h3>");
        }
    
        start.on("click", randomizeTask);
        checkBtn.off("click", submitVal);
    }
});


