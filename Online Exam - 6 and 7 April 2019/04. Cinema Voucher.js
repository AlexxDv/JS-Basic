function solve(input) {
  let voucherValue = Number(input.shift());
  let tickets = 0;
  let other = 0;

  let next = input.shift();
  while (next !== "End") {
    let price = 0;
    if (next.length > 8) {
      price = next.charCodeAt(0) + next.charCodeAt(1);
    } else {
      price = next.charCodeAt(0);
    }

    if (price > voucherValue) {
      break;
    }

    voucherValue -= price;
    if (next.length > 8) {
      tickets++;
    } else {
      other++;
    }

    next = input.shift();
  }

  console.log(tickets);
  console.log(other);
}
solve(["1500", "Avengers: Endgame", "Bohemian Rhapsody", "Deadpool 2", "End"]);
