function club(input) {
  let index = 0;
  let target = Number(input[index]);
  index++;
  let cocktailName = input[index];
  index++;
  let totalBill = 0;

  while (cocktailName !== "Party!") {
    let quantity = Number(input[index]);
    index++;
    let tempBill = cocktailName.length * quantity;
        if (tempBill % 2 !== 0) {
      tempBill *= 0.75;
    }
    totalBill += tempBill;
        if (totalBill >= target) {
      console.log(`Target acquired.`);
      console.log(`Club income - ${totalBill.toFixed(2)} leva.`);
      break;
    }
    cocktailName = input[index];
    index++;
  }

  if (cocktailName === "Party!") {
    console.log(`We need ${(target - totalBill).toFixed(2)} leva more.`);
    console.log(`Club income - ${totalBill.toFixed(2)} leva."`)
  }
}
// club(["500", "Bellini", "6", "Bamboo", "7", "Party!"]);
club(["100", "Sidecar", "7", "Mojito", "5", "White Russian", "10"]);
