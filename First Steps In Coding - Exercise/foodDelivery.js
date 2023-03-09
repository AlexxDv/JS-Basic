function foodDelivery(imput) {
  const chickenMenuPrice = 10.35;
  const fishMenuPrice = 12.4;
  const vegMenuPrice = 8.15;
  const foodDeliveryveryPrice = 2.5;
  const percentageOfTotalSumForDeser = 0.2;

  const chickenMenu = Number(imput[0]);
  const fishMenu = Number(imput[1]);
  const vegMenu = Number(imput[2]);
  
  const totalChickenMenuPrice = chickenMenu * chickenMenuPrice;
  const totalFishMenuPrice = fishMenu * fishMenuPrice;
  const totalVegMenuPrice = vegMenu * vegMenuPrice;
  const totalMenu = totalChickenMenuPrice + totalFishMenuPrice + totalVegMenuPrice;
  const totaldesertPrice = totalMenu * percentageOfTotalSumForDeser;

  const totalBill = totalMenu + totaldesertPrice + foodDeliveryveryPrice;
  
  console.log(totalBill);
}

foodDelivery(["2 ", "4 ", "3 "]);
foodDelivery(["9 ", "2 ", "6 "]);
