const btn = document.querySelector('.numbers');
const screen = document.querySelector('.screen');
let result = undefined;

function add(num1, num2){
    return num1 + num2;
}

function subtract(num1, num2){
    return num1 - num2;
}

function multiply(num1, num2){
    return num1 * num2;
}

function divide(num1, num2){
    return num1/num2;
}

function operator(num1, operator, num2){
    switch(operator){
        case '+':
            return add(num1, num2);
        case '-':
            return subtract(num1,num2);
        case '*':
            return multiply(num1, num2);
        case '/':
            return divide(num1,num2);
        default:
            return ' ';
    }
    
}

let num1 = '';
let operator1 = undefined;
let num2 = '';

btn.addEventListener('click', (event) =>{
    const value = event.target.textContent.trim();
    const num = Number(value);

    screen.textContent += ` ${value}`;

    if(value == 'C'){
        num1 = '';
        operator1 = undefined;
        num2 = '';
        screen.textContent = '';
    }

    if(value == '=' && num1 != undefined && operator1 != undefined &&
        num2 != undefined
    ){
        result = operator(Number(num1), operator1, Number(num2));
        screen.textContent = result;
        operator1 = undefined;
        num2 = '';
        num1 = String(result);
    }

    if(operator1 == undefined && Number.isInteger(num)){
        num1 += value;
    }
    
    if(operator1 == undefined && num1 != undefined){
        switch(value){
            case '×':
                operator1 = '*';
                break;
            case '÷':
                operator1 = '/';
                break;
            case '+':
                operator1 = '+';
                break;
            case '–':
                operator1 = '-';
                break;
        }

    }

    if(num1!= '' && operator1 != undefined && Number.isInteger(num)){
        num2 += value;
    }
    
    console.log(`num1: ${num1} num2: ${num2}, operator: ${operator1}, result: ${result}`);

})
