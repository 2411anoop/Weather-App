
console.log('Hello')

const API_KEY="d1845658f92b31c64bd94f06f7188c9c";

function renderWeatherinfo(data){
        let newPara=document.createElement('p');
        newPara.textContent=`${data?.main?.temp.toFixed(2)}°C`

        document.body.appendChild(newPara);
}

async function fetchWeatherDetails(){

    try{

        //We have used city api key

        let city="Ballia";


        const response=await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);

        const data=await response.json();
        console.log("Weather data:->",data);
       
        renderWeatherinfo(data);
    }
    catch(err){
        //handle the error here
    }
    
}

async function getCustomWeatherDetails(){

    try{
        let latitude=28.6066259;
        let longitude=77.0601443;
    
        let result=await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`);
        let data=await result.json();
    
        console.log(data);
    }
    catch(e){
        console.log("Error found",e);
    }

}

//to get ur own locn
function getLocation(){
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(showPosition);
    }
    else{
        console.log("No geoLocation Support");
    }
}
function showPosition(position){
    let lat=position.coords.latitude;
    let longi=position.coords.longitude;

    console.log(lat);
    console.log(longi);
}