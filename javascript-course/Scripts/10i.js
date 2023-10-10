let calculation = localStorage.getItem('calculation') || "";
displayCalculation();

function updateCalculation(value) {
    calculation += value;
    console.log(calculation);
    saveCalculation();
    displayCalculation();
}

function saveCalculation() {
    localStorage.setItem('calculation', calculation);
    displayCalculation();
}

function displayCalculation() {
  document.querySelector('.js-calculation').innerHTML = calculation;
}