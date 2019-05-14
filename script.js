window.onload = function() {
    document.getElementById("weatherSubmit").addEventListener("click", async function(event) {
        event.preventDefault();
        const value = document.getElementById("weatherInput").value;
        if (value === "")
            return;
        console.log(value);

        const url = "https://api.openweathermap.org/data/2.5/weather?q=" + value + ",US&units=imperial"
            + "&APPID=d4e3c4a280191749cda2ecce91b9750d";

        try {
            // trying to do something that might fail
            const response = await fetch(url);
            const json = await response.json();
            console.log(json);
            let results = "";
            results += '<div class="daily-forecast"><h2 id="weather-title">Current weather in ' + json.name + "</h2>";
            for (let i=0; i < json.weather.length; i++) {
                results += '<img src="https://openweathermap.org/img/w/' + json.weather[i].icon + '.png"/>';
            }
            results += '<h2>' + json.main.temp + " &deg;F</h2>"
            results += "<p>"
            for (let i=0; i < json.weather.length; i++) {
                results += json.weather[i].description
                if (i !== json.weather.length - 1)
                    results += ", "
            }
            results += "</p>";
            results += "<p>High: " + json.main.temp_max + "</p>";
            results+= "<p>Low: " + json.main.temp_min + "</p>";
            results += "<p>Humidity: " + json.main.humidity + "</p>";
            results += "<p>Wind speed: " + json.wind.speed + "mph</p></div>";
            document.getElementById("weatherResults").innerHTML = results;

        } catch(err){
          console.log(err);
        }
        const url2 = "https://api.openweathermap.org/data/2.5/forecast?q=" + value + ", US&units=imperial"
            + "&APPID=d4e3c4a280191749cda2ecce91b9750d";
        fetch(url2)
            .then(function(response) {
                return response.json();
            }).then(function(json) {
            let forecast1 = "";
            for (let i=0; i < 6; i++) {
                forecast1 += "<h2>" + moment(json.list[i].dt_txt).format('MMMM Do YYYY, h:mm:ss a') + "</h2>";
                forecast1 += "<p>Temperature: " + json.list[i].main.temp + "</p>";
                forecast1 += '<img src="https://openweathermap.org/img/w/' + json.list[i].weather[0].icon + '.png"/></div>'
                forecast1 += "<p>High: " + json.list[i].main.temp_max + "</p>";
                forecast1 += "<p>Low: " + json.list[i].main.temp_min + "</p>";
                forecast1 += "<p>Humidity: " + json.list[i].main.humidity + "</p>";
                forecast1 += "<p>Wind Speed: " + json.list[i].wind.speed + "</p>";
            }
            let forecast2 = "";
            for (let i=6; i < 14; i++) {
                forecast2 += "<h2>" + moment(json.list[i].dt_txt).format('MMMM Do YYYY, h:mm:ss a') + "</h2>";
                forecast2 += "<p>Temperature: " + json.list[i].main.temp + "</p>";
                forecast2 += '<img src="https://openweathermap.org/img/w/' + json.list[i].weather[0].icon + '.png"/></div>'
                forecast2 += "<p>High: " + json.list[i].main.temp_max + "</p>";
                forecast2 += "<p>Low: " + json.list[i].main.temp_min + "</p>";
                forecast2 += "<p>Humidity: " + json.list[i].main.humidity + "</p>";
                forecast2 += "<p>Wind Speed: " + json.list[i].wind.speed + "</p>";
            }
            let forecast3 = "";
            for (let i=14; i < 22; i++) {
                forecast3 += "<h2>" + moment(json.list[i].dt_txt).format('MMMM Do YYYY, h:mm:ss a') + "</h2>";
                forecast3 += "<p>Temperature: " + json.list[i].main.temp + "</p>";
                forecast3 += '<img src="https://openweathermap.org/img/w/' + json.list[i].weather[0].icon + '.png"/></div>'
                forecast3 += "<p>High: " + json.list[i].main.temp_max + "</p>";
                forecast3 += "<p>Low: " + json.list[i].main.temp_min + "</p>";
                forecast3 += "<p>Humidity: " + json.list[i].main.humidity + "</p>";
                forecast3 += "<p>Wind Speed: " + json.list[i].wind.speed + "</p>";
            }
            let forecast4 = "";
            for (let i=22; i < 30; i++) {
                forecast4 += "<h2>" + moment(json.list[i].dt_txt).format('MMMM Do YYYY, h:mm:ss a') + "</h2>";
                forecast4 += "<p>Temperature: " + json.list[i].main.temp + "</p>";
                forecast4 += '<img src="https://openweathermap.org/img/w/' + json.list[i].weather[0].icon + '.png"/></div>'
                forecast4 += "<p>High: " + json.list[i].main.temp_max + "</p>";
                forecast4 += "<p>Low: " + json.list[i].main.temp_min + "</p>";
                forecast4 += "<p>Humidity: " + json.list[i].main.humidity + "</p>";
                forecast4 += "<p>Wind Speed: " + json.list[i].wind.speed + "</p>";
            }
            let forecast5 = "";
            for (let i=30; i < 38; i++) {
                forecast5 += "<h2>" + moment(json.list[i].dt_txt).format('MMMM Do YYYY, h:mm:ss a') + "</h2>";
                forecast5 += "<p>Temperature: " + json.list[i].main.temp + "</p>";
                forecast5 += '<img src="https://openweathermap.org/img/w/' + json.list[i].weather[0].icon + '.png"/></div>'
                forecast5 += "<p>High: " + json.list[i].main.temp_max + "</p>";
                forecast5 += "<p>Low: " + json.list[i].main.temp_min + "</p>";
                forecast5 += "<p>Humidity: " + json.list[i].main.humidity + "</p>";
                forecast5 += "<p>Wind Speed: " + json.list[i].wind.speed + "</p>";
            }
            let forecast6 = "";
            for (let i=38; i < 40; i++) {
                forecast6 += "<h2>" + moment(json.list[i].dt_txt).format('MMMM Do YYYY, h:mm:ss a') + "</h2>";
                forecast6 += "<p>Temperature: " + json.list[i].main.temp + "</p>";
                forecast6 += '<img src="https://openweathermap.org/img/w/' + json.list[i].weather[0].icon + '.png"/></div>'
                forecast6 += "<p>High: " + json.list[i].main.temp_max + "</p>";
                forecast6 += "<p>Low: " + json.list[i].main.temp_min + "</p>";
                forecast6 += "<p>Humidity: " + json.list[i].main.humidity + "</p>";
                forecast6 += "<p>Wind Speed: " + json.list[i].wind.speed + "</p>";
            }
            document.getElementById("forecastResults6").innerHTML = forecast6;
            document.getElementById("forecastResults5").innerHTML = forecast5;
            document.getElementById("forecastResults4").innerHTML = forecast4;
            document.getElementById("forecastResults3").innerHTML = forecast3;
            document.getElementById("forecastResults2").innerHTML = forecast2;
            document.getElementById("forecastResults1").innerHTML = forecast1;
        });
    });
};
