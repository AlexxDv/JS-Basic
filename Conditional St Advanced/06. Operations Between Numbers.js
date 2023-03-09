function operationBetweenNum(input) {
    const num1 = Number(input[0]);
    const num2 = Number(input[1]);
    const operator = input[2];
    let result = 0;
    let evenOrOdd;

    switch (operator) {
        case "+": result = num1 + num2; break;
        case "-": result = num1 - num2; break;
        case "*": result = num1 * num2; break;
        case "/": result = num1 / num2; break;
        case "%": result = num1 % num2; break;
    }

    if (operator === "+" || operator === "-" || operator === "*") {
        if (result % 2 === 0) {
            evenOrOdd = "even"
        } else {
            evenOrOdd = "odd";
        }
    }

    if (operator === "%" && num2 === 0) {
        console.log(`Cannot divide ${num1} by zero`)
    } else if (operator === "/" && num2 === 0){
        console.log(`Cannot divide ${num1} by zero`)
    } else if (evenOrOdd === "even" || evenOrOdd === "odd") {
        console.log(`${num1} ${operator} ${num2} = ${result} - ${evenOrOdd}`)
    } else if (operator === "/") {
        console.log(`${num1} ${operator} ${num2} = ${result.toFixed(2)}`)
    } else {
        console.log(`${num1} ${operator} ${num2} = ${result}`)
    }
}


operationBetweenNum(["10", "12", "+"]);
operationBetweenNum(["123", "12", "/"]);
operationBetweenNum(["112", "0", "/"]);
operationBetweenNum(["10", "1", "-"]);
operationBetweenNum(["10", "3", "%"]);
operationBetweenNum(["10", "0", "%"]);
operationBetweenNum(["7", "5", "-"]);
