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

    switch (decision) {
      case "spend":
        curentsum -= decisionSum;
        daysOfSpendingCounter++;
        if (curentsum < decisionSum) {
          curentsum = 0;
        }
        break;
      case "save":
        curentsum += decisionSum;
        daysOfSpendingCounter = 0;
        break;
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
