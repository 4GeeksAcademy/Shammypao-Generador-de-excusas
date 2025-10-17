// definir arrays con las partes de la excusa
let who = ['The dog', 'My grandma', 'The mailman', 'My bird'];
let action = ['ate', 'peed', 'crushed', 'broke'];
let what = ['my homework', 'my phone', 'the car'];
let when = ['before the class', 'while I was sleeping', 'while I was exercising', 'during my lunch', 'while I was praying'];

// crear la función que genere la exusa
function generateExcuse() {
    // 2.1: Escoger una palabra aleatoria de cada array
    let randomWho = who[Math.floor(Math.random() * who.length)];
    let randomAction = action[Math.floor(Math.random() * action.length)];
    let randomWhat = what[Math.floor(Math.random() * what.length)];
    let randomWhen = when[Math.floor(Math.random() * when.length)];

    // construcción de la excusa 
    let excuse = randomWho + ' ' + randomAction + ' ' + randomWhat + ' ' + randomWhen + '.';
    

    return excuse;
}

// conecta el documento app.js con el html
window.onload = function() {
    // busca el elemeto con ID "excuse"
    let excuseElement = document.getElementById("excuse");
    
    excuseElement.innerHTML = generateExcuse();
};
