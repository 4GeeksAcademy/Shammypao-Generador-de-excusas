const who = ['El perro', 'Mi abuela', 'Su tortuga', 'Mi pájaro'];
const action = ['se comió', 'orino en', 'aplastó', 'rompió'];
const what = ['mi tarea', 'las llaves', 'el coche', 'el celular'];
const when = ['antes de la clase', 'justo a tiempo', 'durante mi almuerzo', 'cuando terminé', 'mientras rezaba'];


const rand = (arr) => arr[Math.floor(Math.random() * arr.length)];

const generateExcuse = () => `${rand(who)} ${rand(action)} ${rand(what)} ${rand(when)}.`;

const renderExcuse = () => {
    const excuseElement = document.getElementById("excuse");
    if (excuseElement) {

        excuseElement.innerHTML = generateExcuse();
    }
};


window.onload = () => {
    
    renderExcuse();

    
    const generateBtn = document.getElementById("generate");
    if (generateBtn) {  
        // Al hacer click, llamamos a la función de renderizado
        generateBtn.addEventListener("click", renderExcuse);
    }
};