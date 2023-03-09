function bills(input) {
  let index = 0;
  let monts = Number(input[index]);
  index++;

  let waterBill = 20;
  let internetBill = 15;
  let othersBill = 0;
  let elcityBillSum = 0;

  for (let i = 0; i < monts; i++) {
    let elcityBill = Number(input[index]);
    index++;
    elcityBillSum += elcityBill;
    othersBill += (elcityBill + waterBill + internetBill) * 1.2;
  }
  let avg =
    (elcityBillSum + waterBill * monts + internetBill * monts + othersBill) / monts;
  console.log(`Electricity: ${elcityBillSum.toFixed(2)} lv`);
  console.log(`Water: ${(waterBill * monts).toFixed(2)} lv`);
  console.log(`Internet: ${(internetBill * monts).toFixed(2)} lv`);
  console.log(`Other: ${othersBill.toFixed(2)} lv`);
  console.log(`Average: ${avg.toFixed(2)} lv`);
}
bills(["5", "68.63", "89.25", "132.53", "93.53", "63.22"]);
