function reportSystem(input) {
  let index = 0;
  let neededMoney = Number(input[index]);
  index++;
  let command = input[index];
  index++;

  let totalColected = 0;
  let card = 0;
  let cardTotal = 0;
  let cash = 0;
  let cashTotal = 0;
  let counter = 0;

  while (command !== "End") {
    let transaction = Number(command);
    counter++;

    if (counter % 2 !== 0) {
      if (transaction > 100) {
        console.log("Error in transaction!");
      } else {
        totalColected += transaction;
        cashTotal += transaction;
        cash++;
        console.log("Product sold!");
      }
    } else {
      if (transaction < 10) {
        console.log("Error in transaction!");
      } else {
        totalColected += transaction;
        cardTotal += transaction;
        card++;
        console.log("Product sold!");
      }
    }
    if (totalColected >= neededMoney) {
      break;
    }
    command = input[index];
    index++;
  }
  if (command !== "End") {
    console.log(`Average CS: ${(cashTotal / cash).toFixed(2)}`);
    console.log(`Average CC: ${(cardTotal / card).toFixed(2)}`);
  } else {
    console.log("Failed to collect required money for charity.");
  }
}
reportSystem(["500", "120", "8", "63", "256", "78", "317"]);
