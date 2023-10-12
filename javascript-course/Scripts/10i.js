let calculation = localStorage.getItem('calculation') || "";
let history = localStorage.getItem('history') || "";
displayCalculation();


function updateCalculation(value) {
    calculation += value;
    console.log(calculation);

    history += calculation;

    displayCalculation();
    saveCalculation();
}

function saveCalculation() {
    localStorage.setItem('calculation', calculation);
    localStorage.setItem('history', history);
    displayCalculation();
}

function displayCalculation() {
  document.querySelector('.js-calculation').innerHTML = calculation;
}

function displayHistory() {
  alert(history);
}