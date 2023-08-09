window.addEventListener('load', createCalculator);
window.addEventListener('load', bindEvents);

function bindEvents() {
    const buttons = document.querySelectorAll('button');
    buttons.forEach(button => button.addEventListener('click', inspectButton));
}

function createCalculator() {
    const table = document.createElement('table');
    document.body.appendChild(table);
    appendRows();
    createButtons();
    fillButtons();
}

function appendRows() {
    const table = document.querySelector('table');
    for (let i = 0; i < 5; i++) {
        const row = document.createElement('div');
        table.appendChild(row);
    }
    table.children[0].classList.add("display");
}

function createButtons() {
    const table = document.querySelector('table');
    for (let i = 1; i < 5; i++) {
        for (let j = 1; j < 5; j++) {
            table.children[i].appendChild(document.createElement('button'));
            table.children[i].classList.add("btn-row");
            // document.getElementsByTagName("button").classList.add("btn");
        }
    }
}

function fillButtons() {
    const layoutArr = ['7', '8', '9', '/', '4', '5', '6', '*', '1', '2', '3', '-', 'C', '0', '=', '+'];
    let k = 0;
    const table = document.querySelector('table');    
    for (let i = 1; i < 5; i++) {
        for (let j = 0; j < 4; j++) {
            table.children[i].children[j].innerText = layoutArr[k];    
            k++;    
        }
    }
}

function displayResult(str) {
    const table = document.querySelector('table');
    table.children[0].textContent = str;
}   

function getExpression() {
    const table = document.querySelector('table');
    return table.children[0].textContent;
}

function display(str) {
    const table = document.querySelector('table');
    table.children[0].textContent += str;
}

function clearDisplay() {
    const table = document.querySelector('table');
    table.children[0].textContent = '';
}   





