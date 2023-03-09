function coffeeMachine(input) {
  let typeOfBaverage = input[0];
  let sugar = input[1];
  let quantity = Number(input[2]);
  let price = 0;

  switch (sugar) {
    case "Without":
      switch (typeOfBaverage) {
        case "Espresso":
          price = 0.9;
          break;
        case "Cappuccino":
          price = 1;
          break;
        case "Tea":
          price = 0.5;
          break;
      }
      break;
    case "Normal":
      switch (typeOfBaverage) {
        case "Espresso":
          price = 1;
          break;
        case "Cappuccino":
          price = 1.2;
          break;
        case "Tea":
          price = 0.6;
          break;
      }
      break;
    case "Extra":
      switch (typeOfBaverage) {
        case "Espresso":
          price = 1.2;
          break;
        case "Cappuccino":
          price = 1.6;
          break;
        case "Tea":
          price = 0.7;
          break;
      }
      break;
  }

  if (sugar === "Without") {
    price *= 0.65;
  }
  if (typeOfBaverage === "Espresso" && quantity >= 5) {
    price *= 0.75;
  }
  let total = price * quantity;
  if (total > 15) {
    total *= 0.8;
  }

  console.log(
    `You bought ${quantity} cups of ${typeOfBaverage} for ${total.toFixed(
      2
    )} lv.`
  );
}

coffeeMachine(["Espresso", "Without", "10"]);
coffeeMachine(["Cappuccino", "Normal", "13"]);
coffeeMachine(["Tea", "Extra", "3"]);
