const equal = document.querySelector('.equal');
const operationBtn = document.querySelectorAll('.operate')
const numBtn = document.querySelectorAll('#num-btn');
const cleared = document.querySelector('.clear');
const display = document.querySelector('#operation');

let num1 = "";
let num2 = "";
let operator = null;


numBtn.forEach(button => {
    button.addEventListener("click", () => {
        if(operator == null)
        {
            num1 += button.value;
            display.textContent = num1;
        }
        else
        {
            num2 += button.value;
            display.textContent = num1 + " " + operator + " " + num2;
        }
    });
});

operationBtn.forEach(btn => {
    btn.addEventListener('click', () => {
        operator = btn.value;
        display.textContent = num1 + " " + operator;
    });
});

equal.addEventListener("click", () => {
    operate();
});

cleared.addEventListener('click', () => {
    clear();
});

function add(a, b){
    return a + b;
}

function subtract(a, b){
    return a - b;
}

function multiply(a, b){
    return a * b;
}

function divide(a, b){
    if(b == 0)
        display.textContent = `Error: 0 cannot be entered`;
    else
        return a / b;
}

function operate(){
    let result = 0;
    let temp = operator;
    let a = parseFloat(num1);
    let b = parseFloat(num2);

    if(operator == "+")
        result = add(a, b);
    else if(operator == "-")
        result = subtract(a, b);
    else if(operator == "x")
        result = multiply(a, b);
    else
        result = divide(a, b);
    
    display.textContent = `${result}`;

    if (temp == operator || temp != operator)
    {
        num1 = result;
        num2 = "";
        operator = null;
    }
}

function clear(){
    num1 = "";
    num2 = "";
    operator = null;
    display.textContent = `0`;
}
