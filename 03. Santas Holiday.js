function santasHoliday(input) {
  const roomForOnePrice = 18.0;
  const apartmentPrice = 25.0;
  const presidentApartmentPrice = 35.0;

  const daysForStayin = Number(input[0]);
  const nightForStayin = daysForStayin - 1;
  const roomType = input[1];
  const review = input[2];
  let totalPrice = 0;

  switch (roomType) {
    case "room for one person":
      totalPrice = roomForOnePrice * nightForStayin;
      break;
    case "apartment":
      if (nightForStayin < 10) {
        totalPrice = apartmentPrice * nightForStayin * 0.7;
      } else if (nightForStayin >= 10 && nightForStayin <= 15) {
        totalPrice = apartmentPrice * nightForStayin * 0.65;
      } else {
        totalPrice = apartmentPrice * nightForStayin * 0.5;
      }
      break;
    case "president apartment":
      if (nightForStayin < 10) {
        totalPrice = presidentApartmentPrice * nightForStayin * 0.9;
      } else if (nightForStayin >= 10 && nightForStayin <= 15) {
        totalPrice = presidentApartmentPrice * nightForStayin * 0.85;
      } else {
        totalPrice = presidentApartmentPrice * nightForStayin * 0.8;
      }
      break;
  }
  if (review === "positive") {
    totalPrice *= 1.25;
  } else if (review === "negative") {
    totalPrice *= 0.9;
  }
  console.log(totalPrice.toFixed(2));
}
santasHoliday(["14", "apartment", "positive"]);
santasHoliday(["30", "president apartment", "negative"]);
santasHoliday(["12", "room for one person", "positive"]);
