function godzillaVsKong(input) {
  const movieBudget = Number(input[0]);
  const statistsNumber = Number(input[1]);
  const clothesForStatistCost = Number(input[2]);
  const decorCost = movieBudget * 0.1;

  let clothesTotalCost = statistsNumber * clothesForStatistCost;

  if (statistsNumber > 150) {
    clothesTotalCost *= 0.9;
  }

  let totalMoney = decorCost + clothesTotalCost;

  if (totalMoney <= movieBudget) {
    const moneyleft = movieBudget - totalMoney;
    console.log("Action!");
    console.log(
      `Wingard starts filming with ${moneyleft.toFixed(2)} leva left.`
    );
  } else {
    const moneyNeeded = totalMoney - movieBudget;
    console.log("Not enough money!");
    console.log(`Wingard needs ${moneyNeeded.toFixed(2)} leva more.`);
  }
}
godzillaVsKong(["100000", "120", "55.5"]);
