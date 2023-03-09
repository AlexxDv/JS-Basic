function travelAgendcy(input) {
  let city = input[0];
  let packetType = input[1];
  let vipDiscount = input[2];
  let days = Number(input[3]);

  let price = 0;

  if (days > 7) {
    days--;
  }

  switch (city) {
    case "Bansko":
    case "Borovets":
      switch (packetType) {
        case "withEquipment":
          price = 100;
          if (vipDiscount === "yes") {
            price *= 0.9;
          }
          break;
        case "noEquipment":
          price = 80;
          if (vipDiscount === "yes") {
            price *= 0.95;
          }
          break;
      }
    case "Varna":
    case "Burgas":
      switch (packetType) {
        case "withBreakfast":
          price = 130;
          if (vipDiscount === "yes") {
            price *= 0.88;
          }
          break;
        case "noBreakfast":
          price = 100;
          if (vipDiscount === "yes") {
            price *= 0.93;
          }
          break;
      }
  }
  let total = price * days;

  if (days < 1) {
    console.log("Days must be positive number!");
  } else if (total === 0) {
    console.log("Invalid input!");
  } else {
    console.log(`The price is ${total.toFixed(2)}lv! Have a nice time!`);
  }
}
travelAgendcy(["Borovets", "noEquipment", "yes", "6"]);
travelAgendcy(["Bansko", "withEquipment", "no", "2"]);
travelAgendcy(["Varna", "withBreakfast", "yes", "5"]);
travelAgendcy(["Burgas", "noBreakfast", "no", "4"]);
travelAgendcy(["Varna", "withBreakfast", "no", "0"]);
travelAgendcy(["Gabrovo", "noBreakfast", "no", "3"]);
