"use strict"
const menu = [
    {
        "day": "mon",
        "amount": 17.45
    },
    {
        "day": "tue",
        "amount": 34.91
    },
    {
        "day": "wed",
        "amount": 52.36
    },
    {
        "day": "thu",
        "amount": 31.07
    },
    {
        "day": "fri",
        "amount": 23.39
    },
    {
        "day": "sat",
        "amount": 43.28
    },
    {
        "day": "sun",
        "amount": 25.48
    }
]

let chart = document.querySelector('.chart');
function send(menuItem) {

    let displayMenu = menuItem.map((item) => {
        return `<li>
        <div class="box disable "> $${item.amount}</div>
        <div style="height:${(item.amount) * 1.5}px;" class="column"></div>
        ${item.day}
        </li>`;
    });


    displayMenu = displayMenu.join('');

    chart.innerHTML = displayMenu;



}
send(menu);



let column = document.querySelectorAll('.column');
column.forEach((item) => {

    // console.log(item);
    item.addEventListener('mouseover', (e) => {


        e.target.parentNode.querySelector(".box").classList.remove('disable')

    })
    item.addEventListener('mouseout', (e) => {
        e.target.parentNode.querySelector(".box").classList.add('disable');
    })


});