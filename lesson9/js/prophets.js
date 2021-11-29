
const requestURL = 'https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json';

fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        //console.table(jsonObject);  // temporary checking for valid response and data parsing
        const prophets = jsonObject['prophets'];

        for (let i = 0; i < prophets.length; i++) {
            let card = document.createElement('section');

            let h2 = document.createElement('h2');
            h2.textContent = prophets[i].name + ' ' + prophets[i].lastname;
            card.appendChild(h2);

            let h3 = document.createElement('h3');
            h3.textContent = 'Date of Birth: ' + prophets[i].birthdate;
            card.appendChild(h3);

            let h4 = document.createElement('h4');
            h4.textContent = 'Place of Birth: ' + prophets[i].birthplace;
            card.appendChild(h4);
            
            let image = document.createElement('img');
            image.setAttribute('src', prophets[i].imageurl);
            image.setAttribute('alt', `${prophets[i].name} ${prophets[i].lastname} - ${i}`);
            card.appendChild(image);

            document.querySelector('div.cards').appendChild(card);
        }
    });
