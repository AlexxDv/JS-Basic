function worldSnookerChamp(input) {
  let stage = input[0];
  let ticketType = input[1];
  let ticketsQuantity = Number(input[2]);
  let picture = input[3];

  let ticketPrice = 0;
  let picturePrice = 0;

  switch (stage) {
    case "Quarter final":
      switch (ticketType) {
        case "Standard":
          ticketPrice = 55.5;
          break;
        case "Premium":
          ticketPrice = 105.2;
          break;
        case "VIP":
          ticketPrice = 118.9;
          break;
      }
      break;
    case "Semi final":
      switch (ticketType) {
        case "Standard":
          ticketPrice = 75.88;
          break;
        case "Premium":
          ticketPrice = 125.22;
          break;
        case "VIP":
          ticketPrice = 300.4;
          break;
      }
      break;
    case "Final":
      switch (ticketType) {
        case "Standard":
          ticketPrice = 110.1;
          break;
        case "Premium":
          ticketPrice = 160.66;
          break;
        case "VIP":
          ticketPrice = 400;
          break;
      }
      break;
  }

  let ticketsAll = ticketPrice * ticketsQuantity;

  if (picture === "Y" && ticketsAll <= 4000) {
    picturePrice = 40;
  }
  if (ticketsAll > 4000) {
    ticketsAll *= 0.75;
  } else if (ticketsAll > 2500) {
    ticketsAll *= 0.9;
  }

  let totalSum = ticketsAll + picturePrice * ticketsQuantity;
  console.log(totalSum.toFixed(2));
}

worldSnookerChamp(["Final", "Premium", "25", "Y"]);
worldSnookerChamp(["Semi final", "VIP", "9", "Y"]);
worldSnookerChamp(["Quarter final", "Standard", "11", "N"]);
