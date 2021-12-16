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
            let tableRow = document.createElement('tr');

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

    });