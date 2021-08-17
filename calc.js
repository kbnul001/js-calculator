function previousAmount() {
    const displayField = document.getElementById('cal-display');
    const amount = parseFloat(displayField.innerText)
    return amount;
}
function digitDisplay(num) {
    const digitField = document.getElementById('cal-displayDigit');
    let prevNum = digitField.innerText;
    let newNum = prevNum + String(num);
    digitField.innerText = newNum;
}
function displayAmount(num) {
    const displayField = document.getElementById('cal-display');
    displayField.innerText = num;
}
function arrayToNum(array) {
    let newNum = '';
    for (const digit of array) {
        newNum = newNum + String(digit);
    }
    newNum = parseFloat(newNum);
    return newNum;
}

function calculate(num, sign) {
    if (sign == '+' || previousAmount() == 0) {
        result = num + previousAmount();
    }
    else if (sign == '-') {
        result = previousAmount() - num;
    }
    else if (sign == 'x') {
        result = previousAmount() * num;
    }
    else if (sign == '/') {
        result = previousAmount() / num;
    }
    return result;
}


let numArray = [];
let sign = '';
//Main
document.getElementById('calculator-buttons').addEventListener('click', function (event) {
    debugger;
    const clickedField = event.target;
    const clickedValue = clickedField.innerText;
    const clickedValueConverted = parseFloat(clickedValue);

    if (clickedValueConverted >= 0 && clickedValueConverted <= 9 || clickedValueConverted == '.') {
        numArray.push(clickedValueConverted);
        digitDisplay(clickedValueConverted);

    }
    else if (typeof clickedValue == 'string') {
        document.getElementById('cal-displayDigit').innerText = '';
        //console.log(numArray, clickedValue);
        let num = arrayToNum(numArray);
        numArray = [];
        let result = calculate(num, sign)
        displayAmount(result);
        sign = clickedValue;

    }

});

