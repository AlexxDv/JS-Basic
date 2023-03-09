function tennisEquiment(input) {
  let tennisRacketPrice = Number(input[0]);
  let tennisRacketQuantity = Number(input[1]);
  let trainersQuantity = Number(input[2]);

  let trainersPrice = tennisRacketPrice / 6;
  let tennisRacketTotalPrice = tennisRacketQuantity * tennisRacketPrice;
  let trainersTotalPrice = trainersQuantity * trainersPrice;

  let otherEquiment = (tennisRacketTotalPrice + trainersTotalPrice) * 0.2;
  let totalPrice = tennisRacketTotalPrice + trainersTotalPrice + otherEquiment;

  console.log(`Price to be paid by Djokovic ${Math.floor(totalPrice / 8)}`);
  console.log(
    `Price to be paid by sponsors ${Math.ceil((totalPrice * 7) / 8)}`
  );
}
tennisEquiment(["850", "4", "2"]);
tennisEquiment(["386", "7", "4"]);
