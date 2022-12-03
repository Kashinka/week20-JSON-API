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

    const spiderman = JSON.parse(`{
        "name": "Питер",
        "from": "Нью-Йорк",
        "power": "Ночное видение, сенсорные способности, регенерация, паутина, интеллект"
    }`);

    document.getElementById('result').innerHTML = 
    `<div>Имя:${spiderman.name}</div>
     <div>Откуда: ${spiderman.from}</div>
     <div>Сила: ${spiderman.power}</div>`
    
}

function infoBatman() {

    const batman = JSON.parse(`{
        "name": "Брюс Уэйн",
        "from": "Готэм",
        "power": "Физическая сила, ловкость, технологии"
    }`);

    document.getElementById('result').innerHTML = 
    `<div>Имя:${batman.name}</div>
     <div>Откуда: ${batman.from}</div>
     <div>Сила: ${batman.power}</div>`
    
}

function infoHulk() {

    const hulk = JSON.parse(`{
        "name": "Рооберт Брюс Бэннер",
        "from": "Военный бункер",
        "power": "Физическая сила"
    }`);
    
    document.getElementById('result').innerHTML = 
    `<div>Имя:${hulk.name}</div>
     <div>Откуда: ${hulk.from}</div>
     <div>Сила: ${hulk.power}</div>`

}