
let a = parseFloat(prompt('введите число'));
console.log(a);
let b = parseFloat(prompt('введите второе число'));
console.log(b);
let operator = prompt('введите оператор');
console.log(operator);

function calc(a, b, operator = '+') {
    if (typeof a === 'number' && typeof b === 'number') {

        switch (operator) {
            case '+':
                return a+b;
            case '-':
                return a-b;
            case '*':
                return a*b;
            case '/':
                return a/b;
            case 'pow':
                return a**b;
            default:
                return 'Введен неверный оператор';
        }

    }
    else {
        return 'Введен неверный формат данных';
    }
}

alert(calc(a, b, operator));