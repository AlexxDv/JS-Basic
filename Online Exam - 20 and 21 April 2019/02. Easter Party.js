function easterParty(input) {
  let guests = Number(input[0]);
  let tax = Number(input[1]);
  let totalBudget = Number(input[2]);
  let cake = totalBudget * 0.1;

  if (guests >= 10 && guests <= 15) {
    tax *= 0.85;
  } else if (guests > 15 && guests <= 20) {
    tax *= 0.8;
  } else if (guests > 20) {
    tax *= 0.75;
  }
  let totalBill = tax * guests + cake;
  let diff = Math.abs(totalBill - totalBudget).toFixed(2);

  if (totalBill <= totalBudget) {
    console.log(`It is party time! ${diff} leva left.`);
  } else {
    console.log(`No party! ${diff} leva needed.`);
  }
}
easterParty(["18", "30", "450"]);
easterParty(["8", "25", "340"]);
easterParty(["24", "35", "550"]);
