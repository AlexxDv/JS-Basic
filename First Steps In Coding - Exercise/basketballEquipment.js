function basketballEquipment(imput) {
  const yearTax = Number(imput[0]);
  const sneakers = yearTax - yearTax * 0.4;
  const tracksuit = sneakers - sneakers * 0.2;
  const basketballBall = tracksuit / 4;
  const basketballAcc = basketballBall / 5;
  const totalBill =
    yearTax + sneakers + tracksuit + basketballBall + basketballAcc;

  console.log(totalBill);
}

basketballEquipment(["365 "]);
basketballEquipment(["550 "]);


