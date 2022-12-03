/*function infoSuperman() {

    document.getElementById('result').innerHTML = JSON.stringify({
        "name": "Кларк Кент",
        "from": "Криптон",
        "power": "Полёты, физическая сила, интеллект, рентген"
    });

}*/

function infoSuperman() {

    const superman = JSON.parse(`{
        "name": "Кларк Кент",
        "from": "Криптон",
        "power": "Полёты, физическая сила, интеллект, рентген"
    }`);

    document.getElementById('result').innerHTML = 
    `<div>Имя:${superman.name}</div>
     <div>Откуда: ${superman.from}</div>
     <div>Сила: ${superman.power}</div>`

}

function infoSpiderman() {

    document.getElementById('result').innerHTML = JSON.stringify({
        "name": "Питер",
        "from": "Нью-Йорк",
        "power": "Ночное видение, сенсорные способности, регенерация, паутина, интеллект"
    });
    
}

function infoBatman() {

    document.getElementById('result').innerHTML = JSON.stringify({
        "name": "Брюс Уэйн",
        "from": "Готэм",
        "power": "Физическая сила, ловкость, технологии"
    });
    
}

function infoHulk() {

    document.getElementById('result').innerHTML = JSON.stringify({
        "name": "Рооберт Брюс Бэннер",
        "from": "Военный бункер",
        "power": "Физическая сила"
    });
    
}