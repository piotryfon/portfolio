function maxLengthCheck(object)
  {
    if (object.value.length > object.maxLength)
      object.value = object.value.slice(0, object.maxLength)
  }

$(document).ready(function() {

    let input = $("#input");
    let showTask = $("#showTask");
    let showResultDiv = $("#show-result-div");
    let start = $("#start");
    start.on("click", randomizeTask);
    let checkBtn = $("#check-btn");
    let score = $("#points");
    let parsedValue;
    let result;
    let counter = 0;
    let points = 0;
    let incentive = "";
    let resetPoints;

    function losujHtml() {
        let losHtml = Math.floor(Math.random() * 3);
       switch(losHtml){
           case 0:
         incentive = "Dasz radę!";
           break;
           case 1:
         incentive = "Poradzisz sobie!";
           break;
           case 2:
         incentive = ":-)";
           break;
       }
    }
    
    function getRandomNumberInRange(min, max) {
        return Math.round(Math.random() * (max - min)) + min;
    }

    function resetInput() {
        $("#input").val('');
    }

    function randomizeTask() {

        losujHtml();
        resetInput();

        if(resetPoints){
            score.html("<h4>Zaczynamy od nowa.</h4>");
        }
    
        let a = getRandomNumberInRange(1, 10);
        let b = getRandomNumberInRange(1, 10);
    
        result = a * b;
        console.log(a + " * " + b + " = " + (a*b));
        showTask.html( a + " X " + b + " = ");
        start.off("click", randomizeTask);
        checkBtn.on("click", submitVal);
        showResultDiv.html("<h3>" + incentive + "</h3>");
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

        counter += 1;

        if (result === parsedValue) {
            points += 1;
            showResultDiv.html("<h3>Bardzo dobrze!</h3>");
            
        } else {
            showResultDiv.html("<h3>Źle, wynik to: " + result + "</h3>");
        }

        if (counter === 10 && counter/points <= 1.25){
            score.html("<h4>Gratulacje! Dobrze Ci poszło. Zdobyte punkty: " + points + " na " + counter + " zad.<h4>");
            counter = 0;
            points = 0;
            resetPoints = true;

            
        }else if(counter === 10 && counter/points > 1.25){
            score.html("<h4>Spróbuj jeszcze raz! Zdobyte punkty: " + points + " na " + counter + " zad.<h4>");
            counter = 0;
            points = 0;
            resetPoints = true;
        }else {
            score.html("<h4>" + "Zdobyte punkty: " + points + " na " + counter + " zad.</h4>");
            resetPoints = false;
        }
        
        start.on("click", randomizeTask);
        checkBtn.off("click", submitVal);
    }
});


