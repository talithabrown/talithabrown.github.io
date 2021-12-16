// https://github.com/talithabrown/talithabrown.github.io/commit/21d4a651113efe3b5c0747df00f19b400e725c5b

const requestURL = 'https://talithabrown.github.io/data.json';

fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        //console.table(jsonObject);  
        const rentals = jsonObject['rentals'];
        
        let tableRow = document.createElement('tr');

        for (let i = 0; i < rentals.length; i++) {
            let td1 = document.createElement('td');
            td1.textContent = rentals[i].name;
            tableRow.appendChild(td1);

            let td2 = document.createElement('td');
            td2.textContent = rentals[i].reserveHalfDayPrice;
            tableRow.appendChild(td2);

            let td3 = document.createElement('td');
            td3.textContent = rentals[i].reserveFullDayPrice;
            tableRow.appendChild(td3);

            let td4 = document.createElement('td');
            td4.textContent = rentals[i].walkinHalfDayPrice;
            tableRow.appendChild(td4);

            let td5 = document.createElement('td');
            td5.textContent = rentals[i].walkinFullDayPrice;
            tableRow.appendChild(td5);

            document.querySelector('table.price-table').appendChild(tableRow);
        };

        // document.querySelector('table.price-table').appendChild(tableRow);
    })



    
    // temporary checking for valid response and data parsing
    //     const towns = jsonObject['towns'];

    //     let card = document.createElement('section');

    //     for (let i = 0; i < towns[6].events.length; i++) {
    //         let p = document.createElement('p');
    //         p.textContent = towns[6].events[i];
    //         card.appendChild(p);
    //     };

    //     document.querySelector('div.events').appendChild(card);

    // });

    
    // for (let i = 0; i < towns.length; i++) {
    //     let card = document.createElement('section');

    //     let h2 = document.createElement('h2');
    //     h2.textContent = towns[i].name;
    //     card.appendChild(h2);

    //     let p = document.createElement('p');
    //     p.textContent = towns[i].motto;
    //     card.appendChild(p);

    //     let h4 = document.createElement('h4');
    //     h4.textContent = 'Year Founded: ' + towns[i].yearFounded;
    //     card.appendChild(h4);

    //     let he4 = document.createElement('h4');
    //     he4.textContent = 'Population: ' + towns[i].currentPopulation;
    //     card.appendChild(he4);

    //     let hea4 = document.createElement('h4');
    //     hea4.textContent = 'Annual Rainfall: ' + towns[i].averageRainfall;
    //     card.appendChild(hea4);
        
    //     let image = document.createElement('img');
    //     image.setAttribute('src', `images/town-images/${towns[i].photo}`);
    //     image.setAttribute('alt', towns[i].name);
    //     card.appendChild(image);

    //     document.querySelector('div.cards').appendChild(card);
    // };
