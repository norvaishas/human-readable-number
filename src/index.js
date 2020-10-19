const stringValueOfNumber = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen', 'twenty'];
const stringValueOfRound = ['', 'ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

module.exports = function toReadable(number) {
    const hundreds = Math.floor(number / 100);
    const dozens = Math.floor((number % 100) / 10);
    const units = number - ((hundreds * 100) + (dozens * 10));
    let result = '';

    if (number < 100) {
        return convertToString();
    } else {
        number %= 100;
        const endFragment = convertToString();
        if (endFragment === 'zero') {
            return `${stringValueOfNumber[hundreds]} hundred`;
        } else {
            return `${stringValueOfNumber[hundreds]} hundred ${endFragment}`;
        }
    }

    function convertToString() {
        // Для чисел от 0 до 10
        if (number <= 10) {
            result = `${stringValueOfNumber[number]}`;
        }
        // Для чисел от 1 до 99 кратных 10
        else if (number !== 0 && number < 100 && number % 10 === 0) {
            result = stringValueOfRound[number / 10];
        }
        // Для чисел от 21 до 99 не кратных 10
        else if (number >= 20 && number < 100 && number % 10 !== 0) {
            result += `${stringValueOfRound[dozens]} ${stringValueOfNumber[units]}`;
        }
        // Для чисел от 11 до 19
        else if (number > 10 && number < 20) {
            result += `${stringValueOfNumber[units + 10]}`;
        }
        return result;
    }
}
