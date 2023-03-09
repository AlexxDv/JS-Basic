function jurney(input) {
  const budget = Number(input[0]);
  const season = input[1];

  let destination;
  let price;
  let place;

  
  if (budget <= 100) {
    if (season === "summer") {
      price = budget * 0.3;
      destination = "Bulgaria";
      place = "Camp";
    } else if (season === "winter") {
      price = budget * 0.7;
      destination = "Bulgaria";
      place = "Hotel";
    }
  } else if (budget <= 1000) {
    if (season === "summer") {
      price = budget * 0.4;
      destination = "Balkans";
      place = "Camp";
    } else if (season === "winter") {
      price = budget * 0.8;
      destination = "Balkans";
      place = "Hotel";
    }
  } else {
    price = budget * 0.9;
    destination = "Europe";
    place = "Hotel";
  }

  console.log(`Somewhere in ${destination}`);
  console.log(`${place} - ${price.toFixed(2)}`);
}

jurney(["50", "summer"]);
// jurney(["75", "winter"]);
jurney(["312", "summer"]);
// jurney(["678.53", "winter"]);
// jurney(["1500", "summer"]);
