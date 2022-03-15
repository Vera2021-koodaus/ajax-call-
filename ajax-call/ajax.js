'use strict';
const countryContainer=document.querySelector('.wrapper');

const getCountryData=function(country){
    const request=new XMLHttpRequest();
    request.open('GET',`https://restcountries.com/v2/name/${country}?fullText=true`);
    request.send();
    request.addEventListener('load',function(){
    const [data]=JSON.parse(this.responseText)
        console.log(data)
        const html=`
            <div class="potugal share">
                <img class="flag" src="${data.flag}" >
                <h1 class="title">${data.name}</h1>
                <p class="continent">Continent: ${data.region}</p>
                <div class="popu">👫 Population:${Math.trunc((+data.population/1000000))} Million</div>
                <div class="lang">🗣️ Language:${data.languages[0].name}</div>
                <div class="curr">💰 Currency:${data.currencies[0].name}</div>
            </div>
        `
        countryContainer.insertAdjacentHTML('beforeend',html)
    
    })

}


getCountryData('portugal')
getCountryData('usa') 
getCountryData('finland')
getCountryData('sweden')
getCountryData('germany')
getCountryData('france') 