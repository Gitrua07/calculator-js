//Selects HTML elements and variable containers
//for selecting number/operation buttons
const btn = document.querySelector('.numbers');
const screen = document.querySelector('.screen');
let result = undefined;
let num1 = '';
let operator1 = undefined;
let num2 = '';
let isResult = 0; //0 = No, 1 = Yes

/**
 * add(num1,num2)
 * @param {*} num1 The first number to be added
 * @param {*} num2 The second number to be added
 * @returns The sum of two numbers
 */
function add(num1, num2) {
    return num1 + num2;
}

/**
 * subtract(num1, num2)
 * @param {*} num1 The first number to be subtracted
 * @param {*} num2 The second number to be subtracted
 * @returns Two numbers subtracted
 */
function subtract(num1, num2) {
    return num1 - num2;
}

/**
 * multiply(num1, num2)
 * @param {*} num1 The first number to be multiplied
 * @param {*} num2 The second number to be multiplied
 * @returns The product of two numbers
 */
function multiply(num1, num2) {
    return num1 * num2;
}

/**
 * divide(num1, num2)
 * @param {*} num1 The first number to be divided
 * @param {*} num2 The second number to be divided
 * @returns The quotient of two numbers
 */
function divide(num1, num2) {
    if (num2 == 0) {
        return 'Not Allowed!';
    }

    let result = num1 / num2;
    return result.toFixed(4);
}

/**
 * operator(num1, operator, num2)
 * @param {*} num1 The first number in the calculation
 * @param {*} operator The operand used in the calculation
 * @param {*} num2 The second number in the calculation
 * @returns The result of the calculation
 */
function operator(num1, operator, num2) {
    switch (operator) {
        case '+':
            return add(num1, num2);
        case '-':
            return subtract(num1, num2);
        case '*':
            return multiply(num1, num2);
        case '/':
            return divide(num1, num2);
        default:
            return ' ';
    }

}

//Event listener outputs a result based on
//the button that is clicked
btn.addEventListener('click', (event) => {
    if (event.target.tagName == 'BUTTON') {
        const value = event.target.textContent.trim();
        const num = Number(value);

        if(screen.textContent === 'Not Allowed!'){
            screen.textContent = '';
        }
        

        if (value == 'C') {
            num1 = '';
            operator1 = undefined;
            num2 = '';
            screen.textContent = '';
            isResult = 0;
        }

        if (value == '=' && num1 != '' && operator1 != undefined &&
            num2 != ''
        ) {
            result = operator(Number(num1), operator1, Number(num2));
            screen.textContent = result;
            if (result == 'Not Allowed!') {
                num1 = '';
                operator1 = undefined;
                num2 = '';
                isResult = 0;
            } else {
                operator1 = undefined;
                num2 = '';
                num1 = String(result);
                isResult = 1;
            }
        }

        if (operator1 == undefined && Number.isInteger(num)
            && isResult === 0) {
            num1 += value;
            screen.textContent = num1;
        }else if (operator1 == undefined && Number.isInteger(num)
            && isResult === 1) {
            num1 = value;
            screen.textContent = num1;
            isResult = 0;
        }

        if (operator1 === undefined && num1 != '' && num2 == '') {
            switch (value) {
                case '×':
                    screen.textContent += ` ${value} `;
                    operator1 = '*';
                    break;
                case '÷':
                    screen.textContent += ` ${value} `;
                    operator1 = '/';
                    break;
                case '+':
                    screen.textContent += ` ${value} `;
                    operator1 = '+';
                    break;
                case '–':
                    screen.textContent += ` ${value} `;
                    operator1 = '-';
                    break;
            }

        }

        if (num1 != '' && operator1 != undefined && Number.isInteger(num)) {
            num2 += value;
            screen.textContent += value;
        }
    }

})
