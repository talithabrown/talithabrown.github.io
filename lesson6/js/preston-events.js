const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        console.table(jsonObject);  // temporary checking for valid response and data parsing
        const towns = jsonObject['towns'];

        let card = document.createElement('section');

        for (let i = 0; i < towns[6].events.length; i++) {
            let p = document.createElement('p');
            p.textContent = towns[6].events[i];
            card.appendChild(p);
        };

        document.querySelector('div.events').appendChild(card);

    });
