    function vacation(input) {
    let index = 0;
    let vacationNeededMoney = Number(input[index++]);
    let startMoney = Number(input[index++]);
    let daysOfSpendingCounter = 0;
    let daysCounter = 0;

    while (startMoney < vacationNeededMoney) {
        daysCounter++;
        let decision = input[index++];
        let decisionSum = Number(input[index++]);
        let curentsum = startMoney;
 
        if (decision === "spend") {
            if (decisionSum >= curentsum) {
                curentsum = 0;
                daysOfSpendingCounter++;
            } else if (decisionSum < curentsum) {
                curentsum -= decisionSum;
                daysOfSpendingCounter++;
            }
        } else if (decision === "save") {
        curentsum += decisionSum;
        daysOfSpendingCounter = 0;
    }
    
        if (daysOfSpendingCounter >= 5) {
    break;
    }
    startMoney = curentsum;
    }
    if (startMoney >= vacationNeededMoney) {
        console.log(`You saved the money for ${daysCounter} days.`);
    } else {
        console.log("You can't save the money.");
        console.log(daysCounter);
    }
    }
vacation(["2000", "1000", "spend", "1200", "save", "1000", "save", "1000"]);
vacation([
  "110",
  "60",
  "spend",
  "10",
  "spend",
  "10",
  "spend",
  "10",
  "spend",
  "10",
  "spend",
  "10",
]);
