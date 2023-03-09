function skiTrip(input) {
    const roomForOnePrice = 18.00;
    const apartmentPrice = 25.00;
    const presidentApartmentPrice = 35.00;

    const daysForStayin = Number(input[0]);
    const nightForStayin = daysForStayin - 1;
    const roomType = input[1];
    const review = input[2];
    let totalPrice = 0;

    switch (roomType) {
        case "room for one person": totalPrice = roomForOnePrice * nightForStayin; break;
        case  "apartment":
            if (nightForStayin < 10) {
                totalPrice = apartmentPrice * nightForStayin * 0.7
            } else if (nightForStayin >= 10 && nightForStayin <= 15) {
                totalPrice = apartmentPrice * nightForStayin * 0.65
            } else {
                totalPrice = apartmentPrice * nightForStayin * 0.5
            }; break;
        case "president apartment":
            if (nightForStayin < 10) {
                totalPrice = presidentApartmentPrice * nightForStayin * 0.9
            } else if (nightForStayin >= 10 && nightForStayin <= 15) {
                totalPrice = presidentApartmentPrice * nightForStayin * 0.85
            } else {
                totalPrice = presidentApartmentPrice * nightForStayin * 0.8
            }; break;
    }
    if (review === "positive") {
        totalPrice *= 1.25
    } else if (review === "negative") {
        totalPrice *= 0.9
    }
    console.log(totalPrice.toFixed(2))
}
skiTrip(["14", "apartment", "positive"]);
skiTrip(["30", "president apartment", "negative"]);
skiTrip(["12", "room for one person", "positive"]);
skiTrip(["2", "apartment", "positive"]);