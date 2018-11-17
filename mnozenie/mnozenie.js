function maxLengthCheck(object) {
    if (object.value.length > object.maxLength)
        object.value = object.value.slice(0, object.maxLength)
}

$(document).ready(function () {

    let input = $("#input");
    let showTask = $("#showTask");
    let showResultDiv = $("#show-result-div");
    let start = $("#start");
    start.on("click", randomizeTask);
    input.on('keypress', submitValueByEnter);
    let checkBtn = $("#check-btn");
    let score = $("#score");
    let taskCounter = $("#task-counter");
    let parsedValue;
    let result;
    let counter = 0;
    let points = 0;
    let imgPoints = 0;
    let incentive = "";
    let resetPoints;

    function drawIncentive() {
        let randomIncentive = Math.floor(Math.random() * 3);
        switch (randomIncentive) {
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
        input.val('');
    }

    function showNumberOfTask() {
        taskCounter.html('<h4>Zadanie nr ' + (counter + 1) + '.</h4>');
    }

    function randomizeTask() {

        input.on("keypress", submitValueByEnter);
        showNumberOfTask();
        drawIncentive();
        resetInput();

        if (resetPoints) {
            score.html("<h4>Zaczynamy od nowa.</h4>");
            imgPoints = 0;
        }
        if (imgPoints === 0) {
            $('#progressImg').html('');
        }

        let a = getRandomNumberInRange(1, 10);
        let b = getRandomNumberInRange(1, 10);

        result = a * b;
        console.log(a + " * " + b + " = " + (a * b));
        showTask.html(a + " X " + b + " = ");
        start.off("click", randomizeTask);
        checkBtn.on("click", submitVal);
        showResultDiv.html("<h4>" + incentive + "</h4>");
    }

    function submitValueByEnter(event) {
        event.stopPropagation();
        event.stopImmediatePropagation();
      
        if (event.which == 13 || event.keyCode == 13) {
            console.log("ENTER");
            submitVal();
            input.off("keypress", submitValueByEnter);
        }
    }
  
    function submitVal() {
      
        if (input.val()) {
            parsedValue = parseInt(input.val());
            checkResult();
        } else {
            showResultDiv.html('<h4>Wpisz wynik!</h4>');
        }
    }

    function checkResult() {
     
        counter += 1;

        if (result === parsedValue) {
            points += 1;
            imgPoints += 1;
            showResultDiv.html('<h4 class="good">Bardzo dobrze!</h4>');

        } else {
            showResultDiv.html('<h4 class="not-good">Źle, wynik to: ' + result + '</h4>');
        }

        if (counter === 10 && counter / points <= 1.25) {
            score.html('<h4 class="good">Gratulacje! Dobrze Ci poszło. Zdobyte punkty: ' + points + ' na 10  zad.<h4>');
            counter = 0;
            points = 0;
            resetPoints = true;
        } else if (counter === 10 && counter / points > 1.25) {
            score.html('<h4 class="not-good">Spróbuj jeszcze raz! Zdobyte punkty: ' + points + ' na  10 zad.<h4>');
            counter = 0;
            points = 0;
            resetPoints = true;
        } else {
            score.html("<h4>" + "Zdobyte punkty: " + points + " na 10 zad.</h4>");
            resetPoints = false;
        }

        if (imgPoints === 1) {
            $('#progressImg').html('<img src="./img/r1.png"/>');
        } else if (imgPoints === 2) {
            $('#progressImg').html('<img src="./img/r2.png"/>');
        } else if (imgPoints === 3) {
            $('#progressImg').html('<img src="./img/r3.png"/>');
        } else if (imgPoints === 4) {
            $('#progressImg').html('<img src="./img/r4.png"/>');
        } else if (imgPoints === 5) {
            $('#progressImg').html('<img src="./img/r5.png"/>');
        } else if (imgPoints === 6) {
            $('#progressImg').html('<img src="./img/r6.png"/>');
        } else if (imgPoints === 7) {
            $('#progressImg').html('<img src="./img/r7.png"/>');
        } else if (imgPoints === 8) {
            $('#progressImg').html('<img src="./img/r8.png"/>');
        } else if (imgPoints === 9) {
            $('#progressImg').html('<img src="./img/r9.png"/>');
        } else if (imgPoints === 10) {
            $('#progressImg').html('<img src="./img/r10.png"/>');
        } else $('#progressImg').html('');

        start.on("click", randomizeTask);
        checkBtn.off("click", submitVal);
    }

});


