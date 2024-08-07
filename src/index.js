module.exports = function toReadable(number) {
    let str = "";
    let numberStr = number.toString();
    let oneNumber = [
        "one",
        "two",
        "three",
        "four",
        "five",
        "six",
        "seven",
        "eight",
        "nine",
    ];
    let twoNumber = [
        "ten",
        "eleven",
        "twelve",
        "thirteen",
        "fourteen",
        "fifteen",
        "sixteen",
        "seventeen",
        "eighteen",
        "nineteen",
    ];
    let tenNumber = [
        "twenty",
        "thirty",
        "forty",
        "fifty",
        "sixty",
        "seventy",
        "eighty",
        "ninety",
    ];

    if (number === 0) {
        return (str = "zero");
    } else if (number < 10) {
        return (str = oneNumber[number - 1]);
    } else if (number < 20) {
        return (str = twoNumber[number - 10]);
    } else if (number < 100) {
        if (numberStr[1] === "0") {
            return (str = tenNumber[parseInt(numberStr[0]) - 2]);
        } else {
            return (str =
                tenNumber[parseInt(numberStr[0]) - 2] +
                " " +
                oneNumber[parseInt(numberStr[1]) - 1]);
        }
    }

    // if number.length = 3
    if (numberStr.length === 3) {
        if (number % 100 === 0) {
            return (str = oneNumber[parseInt(numberStr[0]) - 1] + " hundred");
        } else if (numberStr[1] === "1") {
            return (str =
                oneNumber[parseInt(numberStr[0]) - 1] +
                " hundred " +
                twoNumber[parseInt(numberStr[2])]);
        } else if (
            numberStr[1] != "1" &&
            numberStr[1] != "0" &&
            numberStr[2] === "0"
        ) {
            return (str =
                oneNumber[parseInt(numberStr[0]) - 1] +
                " hundred " +
                tenNumber[parseInt(numberStr[1]) - 2]);
        } else if (numberStr[1] != "1" && numberStr[1] != "0") {
            return (str =
                oneNumber[parseInt(numberStr[0]) - 1] +
                " hundred " +
                tenNumber[parseInt(numberStr[1]) - 2] +
                " " +
                oneNumber[parseInt(numberStr[2]) - 1]);
        } else {
            return (str =
                oneNumber[parseInt(numberStr[0]) - 1] +
                " hundred " +
                oneNumber[parseInt(numberStr[2]) - 1]);
        }
    }
};
