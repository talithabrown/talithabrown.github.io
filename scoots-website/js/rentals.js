
// $.getJSON("./data/rental-info.json", function(json) {
//     console.log(json); // this will show the info it in firebug console
// });

var mydata = JSON.parse('rental-info');
    alert(mydata[0].name);
    alert(mydata[0].age);
    alert(mydata[1].name);
    alert(mydata[1].age);

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