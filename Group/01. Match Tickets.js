function matchTickets(input) {
  const vipTicket = 499.99;
  const normalTicket = 249.99;

  let budget = Number(input[0]);
  let category = input[1];
  let amountOfPeople = Number(input[2]);
  let transport = 0;
  let ticketPrice = 0;

  if (1 <= amountOfPeople && amountOfPeople <= 4) {
    transport = budget * 0.75;
  } else if (5 <= amountOfPeople && amountOfPeople <= 9) {
    transport = budget * 0.6;
  } else if (10 <= amountOfPeople && amountOfPeople <= 24) {
    transport = budget * 0.5;
  } else if (25 <= amountOfPeople && amountOfPeople <= 49) {
    transport = budget * 0.4;
  } else if (amountOfPeople >= 50) {
    transport = budget * 0.25;
  }
  if (category === "VIP") {
    ticketPrice = vipTicket;
  } else {
    ticketPrice = normalTicket;
  }
  let allTickets = ticketPrice * amountOfPeople;
  let allCosts = allTickets + transport;
  let diff = Math.abs(budget - allCosts).toFixed(2);

  if (allCosts > budget) {
    console.log(`Not enough money! You need ${diff} leva.`);
  } else {
    console.log(`Yes! You have ${diff} leva left.`);
  }
}
// matchTickets(["1000", "Normal", "1"]);
matchTickets(["30000", "VIP", "49"]);
