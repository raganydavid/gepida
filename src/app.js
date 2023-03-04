/*
File: app.js
Author: Ragány Dávid Gergő
Copyright: 2023, Ragány Dávid Gergő
Group: Szoft I-2-E
Date: 2023.03.04
Github: https://github.com/raganydavid/gepida
Licenc: GNU GPL 
*/

const body = document.querySelector("#tableBody");

var empList =  [
    {name: "cassis", wheel: 28, usage: "offroad", price: 557900},
    {name: "Alboin 900", wheel: 28, usage: "trekking", price: 519900},
    {name: "Asgard", wheel: 29, usage: "technikás utak", price: 519900},
    {name: "Ruga", wheel: 29, usage: "hegyi", price: 372900},
    {name: "Reptila", wheel: 28, usage: "városi", price: 308900},
    {name: "Sirmium", wheel: 29, usage: "hegyi", price: 264900}
];

function tableCreation(){
    empList.forEach((emp)=>{

	    let row = document.createElement("tr");

        let dataName = document.createElement("th");
        let dataWheel = document.createElement("th");
        let dataUsage = document.createElement("th");
        let dataPrice = document.createElement("th");

        dataName.textContent = emp.name;
        dataWheel.textContent = emp.wheel;
        dataUsage.textContent = emp.usage;
        dataPrice.textContent = emp.price;

        body.append(row);

        row.append(dataName);
        row.append(dataWheel);
        row.append(dataUsage);
        row.append(dataPrice);

    });
};

tableCreation();