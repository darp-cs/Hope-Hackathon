const apiKey = '43a8655d-fa1c-43cb-b303-1b7ce3f96dc3';

myForm = document.getElementById('pollution-search-form');
myForm.addEventListener("submit", (e) =>{
    e.preventDefault();
    retrieve();
})
function retrieve(){
    city = document.querySelector('#city').value;
    state = document.querySelector('#state').value;
    APIretrieve(city,state);
    
}


function APIretrieve(city, state){
    
    fetch(`http://api.airvisual.com/v2/city?city=${city}&state=${state}&country=USA&key=${apiKey}`)
    .then(response => response.json())
    .then(body =>  {if(body.data.city == undefined){throw new Error} else showData(body.data)})
    .catch(()=>{
        alert("Invalid City")
    });
    
}

function showData(data){


    let city = document.getElementById('city-data');
    let cityin = document.getElementById('cityd');
    city.classList.add('city-data');
    console.log(cityin)
    cityin.innerText =`City:${data.city}`;

    let state = document.getElementById('state-data');
    let statein = document.getElementById('stated');
    state.classList.add('state-data');
    statein.innerText = `State:${data.state}`;

    let airquality = document.getElementById('aqi-data');
    let airqualityin = document.getElementById('aqi');
    airquality.classList.add('aqi-data');
    airqualityin.innerText =  `Air Quality: ${data.current.pollution.aqius}`;

    let pollutants = document.getElementById('pollutants-data');
    let pollutantsin = document.getElementById('mainpollutant');
    pollutants.classList.add('pollutants-data');
    pollutantsin.innerText =  `Main Pollutant: ${data.current.pollution.mainus}`;
   
    return;

}
