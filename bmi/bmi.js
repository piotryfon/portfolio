function maxLengthCheck(object)
  {
    if (object.value.length > object.maxLength)
      object.value = object.value.slice(0, object.maxLength)
  }

$(document).ready(function() {

    let wzrost = $("#wzrost");
    let waga = $("#waga");
    let policz = $("#policz");

    Math.decimal = function(n, k) {
    var factor = Math.pow(10, k+1);
    n = Math.round(Math.round(n*factor)/10);
    return n/(factor/10);
    }
    
    policz.on("click", function(e) {
        e.preventDefault();
        let h = wzrost.val()/100;
        let kg = waga.val();
        let result;
        if(h && kg) {
            result = kg / (h * h);
            let roundResult = Math.decimal(result, 2);
            console.log("BMI: " + roundResult)
            if(roundResult < 16) {
                $("output").html("<h3> Wygłodzenie </h3>");
            } else if (roundResult >= 16 && roundResult < 17) {
                $("output").html("<h3> Wychudzenie </h3>");
            } else if (roundResult >= 17 && roundResult < 18.5) {
                $("output").html("<h3> Niedowaga </h3>");
            } else if(roundResult >=18.5 && roundResult < 25) {
                $("output").html("<h3> Wartość prawidłowa. </h3>");
            } else if(roundResult >= 25 && roundResult < 30) {
                $("output").html("<h3> Nadwaga </h3>");
            } else if(roundResult >= 30 && roundResult < 35) {
                $("output").html("<h3> I stopień otyłości </h3>");
            } else if(roundResult >= 35 && roundResult < 40) {
                $("output").html("<h3> II stopień otyłości (otyłość kliniczna)</h3>");
            } else $("output").html("<h3> III stopień otyłości (otyłość skrajna)</h3>");
        } else $("output").html("<h3> Wpisz wartości w pola </h3>");
    })
    
})