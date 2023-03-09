function safari(input) {
  let petrolPrice = 2.1;
  let guidePrice = 100;

  let budget = Number(input[0]);
  let petrolNeed = Number(input[1]);
  let dayOfTheWeek = input[2];

  let petrol = petrolPrice * petrolNeed;
  let total = petrol + guidePrice;

  if (dayOfTheWeek === "Saturday") {
    total *= 0.9;
  } else if (dayOfTheWeek === "Sunday") {
    total *= 0.8;
  }
  let diff = Math.abs(total - budget).toFixed(2);
  if (budget >= total) {
    console.log(`Safari time! Money left: ${diff} lv.`);
  } else {
    console.log(`Not enough money! Money needed: ${diff} lv.`);
  }
}
safari(["120", "30", "Saturday"]);
