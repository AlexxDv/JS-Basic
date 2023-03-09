function addBags(input) {
  const lugagePriceAbove = Number(input[0]);
  const lugageKG = Number(input[1]);
  const daysTillTrip = Number(input[2]);
  const lugagePeaces = Number(input[3]);
  let totalPrice = 0.0;

  if (lugageKG < 10) {
    totalPrice = lugagePriceAbove * 0.2;
  } else if (lugageKG >= 10 && lugageKG <= 20) {
    totalPrice = lugagePriceAbove * 0.5;
  } else {
    totalPrice = lugagePriceAbove;
  }

  if (daysTillTrip > 30) {
    totalPrice *= 1.1;
  } else if (daysTillTrip >= 7 && daysTillTrip <= 30) {
    totalPrice *= 1.15;
  } else {
    totalPrice *= 1.4;
  }
  let fullprice = totalPrice * lugagePeaces;
  console.log(`The total price of bags is: ${fullprice.toFixed(2)} lv.`);
}

addBags(["30", "18", "15", "2"]);
addBags(["25.50", "5", "36", "6"]);
addBags(["63.80", "23", "3", "1"]);
