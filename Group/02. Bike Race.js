function bikeRace(input) {
  const young = Number(input[0]);
  const old = Number(input[1]);
  const type = input[2];
  const allPpl = young + old;

  let juniorsTax = 0;
  let seniorsTax = 0;

  switch (type) {
    case "trail":
      juniorsTax = 5.5;
      seniorsTax = 7;
      break;
    case "cross-country":
      juniorsTax = 8;
      seniorsTax = 9.5;
      break;
    case "downhill":
      juniorsTax = 12.25;
      seniorsTax = 13.75;
      break;
    case "road":
      juniorsTax = 20;
      seniorsTax = 21.5;
      break;
  }
  let tax = juniorsTax * young + seniorsTax * old;
  if (type === "cross-country" && allPpl >= 50) {
    tax *= 0.75;
  }

  let expences = tax * 0.05;
  let donatedMoney = tax - expences;
  console.log(donatedMoney.toFixed(2));
}
bikeRace(["3", "40", "road"]);
