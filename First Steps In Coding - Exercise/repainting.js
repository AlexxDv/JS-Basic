function repainting(imput) {
  const nylonPrice = 1.5;
  const paintPrice = 14.5;
  const thinnerPrice = 5.0;
  const workersPrice = 0.3;

  const extraPaintPercent = 0.1;
  const extraNylon = 2;
  const bagPrice = 0.4;

  const nylon = Number(imput[0]);
  const paint = Number(imput[1]);
  const thinner = Number(imput[2]);
  const totalHours = Number(imput[3]);

  const nylonCost = (nylon + extraNylon) * nylonPrice;
  const paintCost = (paint + paint * extraPaintPercent) * paintPrice;
  const thinerCost = thinner * thinnerPrice;

  const materailPrice = nylonCost + paintCost + thinerCost + bagPrice;
  const workers = materailPrice * workersPrice * totalHours;

  const totalPrice = materailPrice + workers;

  console.log(totalPrice);
}

repainting(["10 ", "11 ", "4 ", "8 "]);
repainting(["5 ", "10 ", "10 ", "1 "]);
