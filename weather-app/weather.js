$(document).ready(function(){

    function capitalizeFirstLetter(string){
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    $("#getWeather").click(function(e){
        e.preventDefault();

        const city = $("#city").val();
        const country = $("#country").val();

        let capitalizeCity = capitalizeFirstLetter(city);

        console.log(city + " " + country)
        if(city && country){
            $.ajax({
                url: "https://api.openweathermap.org/data/2.5/weather?q=" + city + "," + 
                country + "&units=metric&appid=7aca2942856bab3c48dcd8e20dcf3d4a",
                type: "GET",
                dataType: "json",
                success: function(data){
                    console.log(data)
                    let showData = showInHtml(data);
                    $("#show").html(showData);

                    $("#info").html("<h2>Miasto: " + capitalizeCity + "</h2>");
                    
                }
            })
        }else{
            $("#info").html("<h2>The field must be filled correctly!</h2>");
        }
    });
    function showInHtml(data){
        return(    
        "<p><b>Pogoda:</b>  <img src='https://openweathermap.org/img/w/" + data.weather[0].icon +".png' style='width: 50px; margin-bottom: -20px'>"  
        + data.weather[0].main + "</p><br/>" +
        "<p><b>Zachmurzenie:</b> " + data.weather[0].description + "</p><br/>" +  
        "<p><b>Temp:</b> "+ data.main.temp + " &#186 C</p><br/>" +
        "<p><b>Ciśnienie:</b> " + data.main.pressure + " hPa</p><br/>" +
        "<p><b>Wiatr:</b> " + data.wind.speed + " m/s</p><br/>" 
        )
    }
});