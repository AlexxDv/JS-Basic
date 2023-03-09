function easterGuests(input) {
  let guests = Number(input[0]);
  let budget = Number(input[1]);

  let easterBreadPrice = 4;
  let eggPrice = 0.45;

  let easterBreadQuantity = Math.ceil(guests / 3);
  let eggsQuantity = guests * 2;

  let total = easterBreadPrice * easterBreadQuantity + eggPrice * eggsQuantity;
  let diff = Math.abs(budget - total).toFixed(2);

  if (budget >= total) {
    console.log(
      `Lyubo bought ${easterBreadQuantity} Easter bread and ${eggsQuantity} eggs.`
    );
    console.log(`He has ${diff} lv. left.`);
  } else {
    console.log(`Lyubo doesn't have enough money.`);
    console.log(`He needs ${diff} lv. more.`);
  }
}
easterGuests(["10", "35"]);
easterGuests(["9", "12"]);
