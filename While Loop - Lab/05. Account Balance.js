function accountBalance(input) {
  let index = 0;
  let deposits = Number(input[index++]);
  let balance = 0;
  while (deposits !== "NoMoreMoney") {
    let amount = Number(deposits);
    if (amount < 0) {
      console.log("Invalid operation!");
      break;
    }
    balance += amount;
    console.log(`Increase: ${amount.toFixed(2)}`);
    deposits = input[index++];
  }
  console.log(`Total: ${balance.toFixed(2)}`);
}
accountBalance(["5.51", "69.42", "100", "NoMoreMoney"]);
accountBalance(["120", "45.55", "-150"]);
