function fruitMarket(arr1, arr2, arr3, arr4, arr5) {
  let strawberriePrice = Number(arr1);
  let bananaQuantity = Number(arr2);
  let orangeQuantity = Number(arr3);
  let raspberrieQuantity = Number(arr4);
  let strawberrieQuantity = Number(arr5);

  let raspberriePrice = strawberriePrice * 0.5;
  let orangePrice = raspberriePrice * 0.6;
  let bananaPrice = raspberriePrice * 0.2;

  let totalCost =
    strawberriePrice * strawberrieQuantity +
    bananaPrice * bananaQuantity +
    orangePrice * orangeQuantity +
    raspberriePrice * raspberrieQuantity;

  console.log(totalCost.toFixed(2));
}
fruitMarket("48", "10", "3.3", "6.5", "1.7");
