(function(){
    $(document).ready(function(){
        let btn = $("#getNumbers"),
        output = $("#showNumbers");

    function getRandom(min, max){
        return Math.round(Math.random() * (max - min) + min)
    }

    function sortNumbers(a,b){
        if(a < b) return -1
        else if(a > b) return 1
        else return 0
    }

    function showNumbers(){
        let numbers = [],
            rand;
            
        for(let i = 0; i < 6; i++){

            rand = getRandom(1, 49);
            
            while(numbers.indexOf(rand) !== -1){
                rand = getRandom(1, 49);
            }

            numbers.push(rand);  
        }
        let sortedNumbers = numbers.sort(sortNumbers)
        output.html(sortedNumbers.join(", "));
    }
    btn.on("click", showNumbers);
    });
})();