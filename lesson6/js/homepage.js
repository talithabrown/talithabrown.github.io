
const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        //console.table(jsonObject);  // temporary checking for valid response and data parsing
        const towns = jsonObject['towns'];

        for (let i = 0; i < towns.length; i++) {
            let card = document.createElement('section');

            let h2 = document.createElement('h2');
            h2.textContent = towns[i].name;
            card.appendChild(h2);

            let p = document.createElement('p');
            p.textContent = towns[i].motto;
            card.appendChild(p);

            let h4 = document.createElement('h4');
            h4.textContent = 'Year Founded: ' + towns[i].yearFounded;
            card.appendChild(h4);

            let he4 = document.createElement('h4');
            he4.textContent = 'Population: ' + towns[i].currentPopulation;
            card.appendChild(he4);

            let hea4 = document.createElement('h4');
            hea4.textContent = 'Annual Rainfall: ' + towns[i].averageRainfall;
            card.appendChild(hea4);
            
            let image = document.createElement('img');
            image.setAttribute('src', `images/town-images/${towns[i].photo}`);
            image.setAttribute('alt', towns[i].name);
            card.appendChild(image);

            document.querySelector('div.cards').appendChild(card);
        }
    });
