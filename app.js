//KWo6ksppR8zrOStCw6ZTq2Ir9l5as3hG 

const input = document.querySelector('.inputVal');
const output = document.querySelector('.output')
const btn = document.querySelector('.btn');

const baseUrl = `http://dataservice.accuweather.com/locations/v1/cities/search?apikey=KWo6ksppR8zrOStCw6ZTq2Ir9l5as3hG&q=`;

const weatherBaseUrl = `http://dataservice.accuweather.com/forecasts/v1/daily/1day/`;
const apiKey = `?apikey=KWo6ksppR8zrOStCw6ZTq2Ir9l5as3hG`;

// fetch(url).then((res)=>{return res.json()})
// .then((data)=>{
//     const detial = data;
//     console.log(detial);
//     console.log(detial[0].Key);
// })

btn.addEventListener('click',(e)=>{
    let inputVal = input.value;
    const url = baseUrl + inputVal;
    //console.log(url);
    fetch(url).then((res)=>{return res.json()})
    .then((data)=>{
        output.innerHTML = '';
        const detial = data;
        console.log(detial);
        console.log(detial[0].Key);
        output.innerHTML = `<h2>${detial[0].AdministrativeArea.EnglishName}</h2>`;
        let weatherUrl = weatherBaseUrl + detial[0].Key + apiKey;
        getCityWeather(weatherUrl);
    })
    .catch((err)=>{
        console.log(err);
        output.innerHTML = `<h2>Please input correct city name</h2>`
    })
})

function getCityWeather(url){
    fetch(url).then((res)=>{return res.json()})
    .then((data)=>{
        console.log(data);
    })
    .catch((err)=>{
        console.log(err);
    })
}