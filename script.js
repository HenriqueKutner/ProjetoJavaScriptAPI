'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');


//////////////////////////////////////////



        const renderCountry = function (data, className = '') {
            const html = `
                <article class="country ${className}">
                    <img class="country__img" src="${data.flag}" />
                    <div class="country__data">
                    <h3 class="country__name">${data.name}</h3>
                    <h4 class="country__region">${data.region}</h4>
                    <p class="country__row"><span>👫</span>${(+data.population / 1000000).toFixed(1)} Millions</p>
                    <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
                    <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
                    </div>
                </article>
            `;
            countriesContainer.insertAdjacentHTML('beforeend', html);
            countriesContainer.style.opacity = 1;           
        };
 




const getCountryData = function (country) {
    fetch(`https://restcountries.eu/rest/v2/name/${country}`)
    .then(response => response.json())
    .then(data => {
        console.log(data)
        renderCountry(data[0]);
        let viz = []
        for(let i = 0; i <= 20; i++){
            const neighbour = viz.push(data[0].borders[i]);
        }   
        //Country 2
        for(let i = 0; i <= viz.length; i++){
            fetch(`https://restcountries.eu/rest/v2/alpha/${viz[i]}`).then(response => response.json())
        .then(data => {
            console.log(data)
            renderCountry(data, 'neighbour')
        })
        }
        
    })
    
    
};
const getPais = document.getElementById('pais');
btn.addEventListener('click', function(){
    getCountryData(getPais.value);
    getPais.value = '';
})





        

