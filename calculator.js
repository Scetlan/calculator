
const converterRomanNumerals = (operand1, operator, operand2) => {
    const romansNumerals = {
        'I': 1,
        'V': 5,
        'X': 6,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000,
    }

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
    }
    const [operand1, operator, operand2] = string.split(' ')
    console.log(converterRomanNumerals(operand1, operator, operand2))
}


console.log(calculator('IV / XX'));

