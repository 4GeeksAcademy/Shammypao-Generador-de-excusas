function generateExcuse() {
    const who = ['El perro', 'Mi abuela', 'Su tortuga', 'Mi pájaro'];
    const action = ['se comió', 'orino en', 'aplastó', 'rompió'];
    const what = ['mi tarea', 'las llaves', 'el coche', 'el celular'];
    const when = ['antes de la clase', 'justo a tiempo', 'durante mi almuerzo',
        'cuando terminé', 'mientras rezaba'];

    const whoInd = Math.floor(Math.random() * who.length);
    const actionInd = Math.floor(Math.random() * action.length);
    const whatInd = Math.floor(Math.random() * what.length);
    const whenInd = Math.floor(Math.random() * when.length);


    const excuse = `${who[whoInd]} ${action[actionInd]} ${whatInd} ${whenInd}.`;

    const excuseElement = document.getElementById("excuse");
    if (excuseElement) {
        excuseElement.innerHTML = excuse;
    }
};

window.onload = () => {
   const generateBtn = document.getElementById("generate");
    if (generateBtn) {  
        generateBtn.addEventListener("click", generateExcuse);
    };
};
