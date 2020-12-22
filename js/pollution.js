const apiKey = '43a8655d-fa1c-43cb-b303-1b7ce3f96dc3';

myForm = document.getElementById('pollution-search-form');
myForm.addEventListener("submit", (e) =>{
    e.preventDefault();
    retrieve();
})
function retrieve(){
    console.log("IN RETRIEVE");
    city = document.querySelector('#city').value;
    state = document.querySelector('#state').value;
    APIretrieve(city,state);
    
}


function APIretrieve(city, state){
    console.log("IN APIRETRIEVE");
    fetch(`http://api.airvisual.com/v2/city?city=${city}&state=${state}&country=USA&key=${apiKey}`)
    .then(response => response.json())
    .then(body =>  showData(body.data));
}

function showData(data){
    console.log(data);
    let city = document.querySelector('.city');
    city.innerText = `City:${data.city}`;
    console.log(city.innerText);

    let state = document.querySelector('.state');
    state.innerText =   `State:${data.state}`;

    let airquality = document.querySelector('.aqi');
    airquality.innerText =  `Air Quality: ${data.current.pollution.aqius}`;

    let pollutants = document.querySelector('.mainpollutant');
    pollutants.innerText =  `Main Pollutant: ${data.current.pollution.mainus}`;
   
    return;

}
