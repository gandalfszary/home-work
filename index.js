let options = [
    'bartek',
    'maciek',
    'karolina',
    'emilka',
    'orion',
    'czeslaw',
    'freja',
];



function mix() {

    let randomOptionsNum = Math.floor(Math.random() * options.length);
    document.getElementById('text').innerHTML = '';
    document.getElementById('text').innerHTML = options[randomOptionsNum]

}