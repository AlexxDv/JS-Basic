function agencyProfits(input) {
  const name = input[0];
  const adultTikets = Number(input[1]);
  const kidsTikets = Number(input[2]);
  const adultTiketsPrice = Number(input[3]);
  const serviceFee = Number(input[4]);
  const kidsTiketPrice = adultTiketsPrice * 0.3;
  const totalTicketPrice =
    adultTikets * adultTiketsPrice +
    adultTikets * serviceFee +
    kidsTiketPrice * kidsTikets +
    kidsTikets * serviceFee;
  const profit = totalTicketPrice * 0.2;

  console.log(
    `The profit of your agency from ${name} tickets is ${profit.toFixed(2)} lv.`
  );
}

agencyProfits(["WizzAir", "15", "5", "120", "40"]);
agencyProfits(["Ryanair", "60", "23", "158.96", "39.12"]);
