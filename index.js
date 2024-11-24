// function getWether() {
//    
//     // let API_key = "1bb8c0beecf074b8871033e7d4dd535f"
//     axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=${API_key}&units=metric`)
//         .then(function (response) {
//             // handle success
//             console.log(response);
//             document.querySelector("#icon").innerHTML = `https://openweathermap.org/img/wn/${response.data.weather[0].icon}`
//             document.querySelector("#forc").innerHTML = `this is the weather of ${input} city ${response.data.main.temp} ° C`
//         })
//         .catch(function (error) {
//             // handle error
//             document.querySelector("#forc").innerHTML = `Not Found`
//             console.log(error.message);
//         })
// }






let city = document.getElementById("cityname")
let btn = document.getElementById("btn")
let centi = document.getElementById("centi")
let humidity = document.getElementById("humidity")
let wind = document.getElementById("wind")
let citynames = document.getElementById("cityNames")
let img = document.getElementById("img")
let weathernamee = document.getElementById("weathernamee")
function checkweather(cityname) {
    let API_key = "1bb8c0beecf074b8871033e7d4dd535f"
    let apiUrl = (`https://api.openweathermap.org/data/2.5/weather?q=${cityname}&appid=${API_key}&units=metric`)
    fetch(apiUrl)
        .then((response) => 
            response.json()
        )
        .then((response) => {
            console.log(response)
            if (!response.ok){
              alert("invalid city")  
            }
            else{ weathernamee.innerHTML=response.weather[0].main;
                centi.innerHTML=Math.round(response.main.temp)+"°C"
                humidity.innerHTML=response.main.humidity+"%"
                wind.innerHTML=response.wind.speed+"kmph"
                citynames.innerHTML=response.name;
                if(response.weather[0].main == "Clouds"){
                    img.src="cloudy-1-day.svg"
                }
                else if(response.weather[0].main =="Rain"){
                    img.src="rainy-3.svg"
                }
                else if(response.weather[0].main == "Mist"){
                    img.src="fog.svg"
                }
                 else if(response.weather[0].main == "Drizzle"){
                    img.src="drizle.svg"
                }
                else if(response.weather[0].main == "Clear"){
                    img.src="clear-day.svg"
                }
                else if(response.weather[0].main=="Smoke"){
                    img.src="wind.svg"
                }
                else if(response.weather[0].main=="Snow"){
                    img.src="snowy-3.svg"
                }}
          
             })
        .catch((err)=>{
console.log(err)
        })
}
btn.addEventListener("click",()=> checkweather(city.value))


