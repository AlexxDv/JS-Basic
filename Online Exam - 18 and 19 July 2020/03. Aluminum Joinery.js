function aluminiumJoinery(input) {
  const pieces = Number(input[0]);
  const kind = input[1];
  const delivery = input[2];
  const deliveryPrice = 60;
  let totalcost = 0.0;

  if (kind === "90X130") {
    if (pieces > 30 && pieces <= 60) {
      totalcost = 110 * 0.95;
    } else if (pieces > 60) {
      totalcost = 110 * 0.92;
    } else {
      totalcost = 110;
    }
  } else if (kind === "100X150") {
    if (pieces > 40 && pieces <= 80) {
      totalcost = 140 * 0.94;
    } else if (pieces > 80) {
      totalcost = 140 * 0.9;
    } else {
      totalcost = 140;
    }
  } else if (kind === "130X180") {
    if (pieces > 20 && pieces <= 50) {
      totalcost = 190 * 0.93;
    } else if (pieces > 50) {
      totalcost = 190 * 0.88;
    } else {
      totalcost = 190;
    }
  } else if (kind === "200X300") {
    if (pieces > 25 && pieces <= 50) {
      totalcost = 250 * 0.91;
    } else if (pieces > 50) {
      totalcost = 250 * 0.86;
    } else {
      totalcost = 250;
    }
  }
  totalcost *= pieces;

  if (delivery === "With delivery") {
    totalcost += deliveryPrice;
  }

  if (pieces > 99) {
    totalcost *= 0.96;
  }

  if (pieces < 10) {
    console.log("Invalid order");
  } else {
    console.log(`${totalcost.toFixed(2)} BGN`);
  }
}

aluminiumJoinery(["40", "90X130", "Without delivery"]);
aluminiumJoinery(["105", "100X150", "With delivery"]);
aluminiumJoinery(["2", "130X180", "With delivery"]);
aluminiumJoinery(["30", "200X300", "With delivery"]);
