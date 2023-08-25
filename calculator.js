
const converterRomanNumerals = (operand1, operator, operand2) => {
    const romansNumerals = {
        'I': 1,
        'IV': 4,
        'V': 5,
        'IX': 9,
        'X': 10,
        'XL': 40,
        'L': 50,
        'XC': 90,
        'C': 100,
        'CD': 400,
        'D': 500,
        'CM': 900,
        'M': 1000,
    }

    let arrKey = Object.keys(romansNumerals);
    let num1 = 0;
    let num2 = 0;

    for (const key of arrKey) {
        if (operand1.length < 2 && operand2.length < 2) {
            if (key === operand1) {
                num1 += romansNumerals[key];
            }
            if (key === operand2) {
                num2 += romansNumerals[key];
            }
        } else if (operand1 === key && operand2 === key) {

        } else {
            const arrayOper1 = operand1.split('');
            const arrayOper2 = operand2.split('');
            let oper1 = 0;
            let oper2 = 0;
            for (const keyOper1 of arrayOper1) {
                if (key === keyOper1) {
                    oper1 += romansNumerals[key];
                }
            }
            for (const keyOper2 of arrayOper2) {
                if (key === keyOper2) {
                    oper2 += romansNumerals[key];
                }
            }
            console.log(oper1, oper2);
        }
    }

    let result;
    switch (operator) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '/':
            result = Math.floor(num1 / num2);
            break;
        case '*':
            result = num1 * num2;
            break;
        default:
            result;
    }
    return result < 1 ? '' : result;
}

function calculator(string) {

    if (typeof parseInt(string[0]) === Number && typeof parseInt(string[2]) === Number) {
        const [num1, operator, num2] = string.split(' ').map(element => {
            const num = parseInt(element);
            if (isNaN(num)) {
                return element;
            }
            return num;
        });
        let result;
        switch (operator) {
            case '+':
                result = num1 + num2;
                break;
            case '-':
                result = num1 - num2;
                break;
            case '/':
                result = Math.floor(num1 / num2);
                break;
            case '*':
                result = num1 * num2;
                break;
            default:
                result;
        }
        return `${result}`;
    } else {
        const [operand1, operator, operand2] = string.split(' ')
        const arabicNumericalSolution = converterRomanNumerals(operand1, operator, operand2);

        console.log(arabicNumericalSolution);
    }
}
console.log(calculator('IX / XL'));
// console.log(calculator('V * I'));
// console.log(calculator('V * V'));
// console.log(calculator('I - X'));
// console.log(calculator('XX / II'));
// console.log(calculator('XX / II'));

