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
 
        /*
// AJAX call country 1
const getCountryAndNeighbour = function (country){
    const request = new XMLHttpRequest();
    request.open('GET', `https://restcountries.eu/rest/v2/name/${country}`);
    request.send();

    request.addEventListener('load', function(){
        const [data] = JSON.parse(this.responseText);
        console.log(data);

        // Render country 1
        renderCountry(data);

        // Get neighbour country
        const [...neighbour] = data.borders;
        console.log(neighbour)
        if(!neighbour) return;

        // AJAX call country 2
        const request2 = new XMLHttpRequest();
        request2.open('GET', `https://restcountries.eu/rest/v2/alpha/${neighbour[0]}`);
        request2.send();

        request2.addEventListener('load', function () {
            const data2 = JSON.parse(this.responseText);
            renderCountry(data2, 'neighbour');
            });
        }
    )
};


getCountryAndNeighbour('brazil');

*/

// AULA 245 Fetch

/*
const getCountryData = function (country) {
    fetch(`https://restcountries.eu/rest/v2/name/${country}`).then(function(response){
        console.log(response);
        return response.json();
    }).then(function(data){
        console.log(data);
        renderCountry(data[0]);
    });
};
*/

//PROMISSES
/*
const getCountryData = function (country) {
    fetch(`https://restcountries.eu/rest/v2/name/${country}`)
    .then(response => response.json())
    .then(data => {
        renderCountry(data[0]);
        const neighbour = data[0].borders[0];

        if(!neighbour) return;

        // Country 2
        return fetch(`https://restcountries.eu/rest/v2/alpha/${neighbour}`)
    })
    .then(response => response.json())
    .then(data => renderCountry(data, 'neighbour'))
    .catch(err => alert(err))
};

btn.addEventListener('click', function(){
    getCountryData('brazil');
})

*/














































/*

'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');


const getCountryData = function (country) {
    fetch(`https://restcountries.eu/rest/v2/name/${country}`)
    .then(response => response.json())
    .then(data => {
        renderCountry(data[0]);
        const neighbour = data[0].borders[0];
        if(!neighbour) return;

        // Country 2
        return fetch(`https://restcountries.eu/rest/v2/alpha/${neighbour}`)
    })
    .then(response => response.json())
    .then(data => {
        renderCountry(data, 'neighbour')
        const nextNeighbour = data.borders[2]
        return fetch(`https://restcountries.eu/rest/v2/alpha/${nextNeighbour}`)
    })
    .then(response => response.json())
    .then(data => {
        console.log(data)
        renderCountry(data, 'neighbour')
    })
    
    .catch(err => alert(err))
};

btn.addEventListener('click', function(){
    getCountryData('brazil');
})





*/








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





        

