function inspectButton(e) {
    if (e.target.textContent === '=') {
        if (validExpression()) {
            displayResult(eval(getExpression()))
        }
    } else if (e.target.textContent.match(/[+*-/]/)) {
        if (isLastDigitOperator()) {
            return;
        }
        else {
            display(e.target.textContent);
        }
    } else if (e.target.textContent === 'C') {
        clearDisplay();
    } else {
        display(e.target.textContent);
    }
}

function isLastDigitOperator() {
    const str = getExpression();
    if (str == '')
        return 1;
    return str[str.length - 1].match(/[+*-/]/);
}

function validExpression() {
    const str = getExpression();
    return !(str[str.length - 1].match(/[+*-/]/));
}