const arabicNumerals = Array.from({ length: 10 }, (_, i) => i + 1);
const romanNumerals = ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X'];

const isCorrectOperator = (operator) => ['*', '-', '+', '/'].includes(operator)
const isCorrectNum = (num) => arabicNumerals.includes(num)
const isRomanNumeral = (num) => romanNumerals.includes(num);

function calcResult(num1, operator, num2) {
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

const parseRomanToInt = (operand) => {
    let roman = { I: 1, V: 5, X: 10 };
    let num = 0;
    for (let i = 0; i < operand.length; i++) {
        if (i > 0 && roman[operand[i]] > roman[operand[i - 1]]) {
            num += roman[operand[i]] - 2 * roman[operand[i - 1]];
        } else {
            num += roman[operand[i]];
        }
    }
    return num;
}

const parseIntToRoman = (number) => {
    let romanPairs = { C: 100, XC: 90, L: 50, XL: 40, X: 10, IX: 9, V: 5, IV: 4, I: 1 };
    let romanStr = '';

    for (let i in romanPairs) {
        while (number >= romanPairs[i]) {
            romanStr += i;
            number -= romanPairs[i];
        }
    }
    return romanStr;
}

function parseParameters(num1, num2, isRomanCalculate) {
    if (isRomanCalculate) {
        num1 = parseRomanToInt(num1);
        num2 = parseRomanToInt(num2);
    } else {
        num1 = parseInt(num1);
        num2 = parseInt(num2);
    }
    return [num1, num2];
}

function validateParameters(operator, isRomanCalculate, isArabCalculate) {
    if (!isRomanCalculate && !isArabCalculate) {
        throw new Error('Некорректныe входные параметры');
    }

    if (!isCorrectOperator(operator)) {
        throw new Error('Некорректный оператор');
    }
}

function calculator(string) {
    const params = string.split(' ');

    if (params.length !== 3) {
        throw new Error('Функция принимает не более и не менее 2-х символов');
    }

    let [num1, operator, num2] = params;

    const isRomanCalculate = isRomanNumeral(num1) && isRomanNumeral(num2);

    [num1, num2] = parseParameters(num1, num2, isRomanCalculate);

    const isArabCalculate = isCorrectNum(num1) && isCorrectNum(num2);

    validateParameters(operator, isRomanCalculate, isArabCalculate);

    const result = calcResult(num1, operator, num2)
    return isRomanCalculate ? parseIntToRoman(result) : result;
}

const result = calculator('1 / 0');
console.log(result);
