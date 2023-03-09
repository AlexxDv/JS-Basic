function hotelRoom(input) {
    const studioMayAndOctoberPrice = 50;
    const apartmentMayAndOctoberPrice = 65;
    const studioJuneAndSeptemberPrice = 75.20;
    const apartmetJuneAndSeptemberPrice = 68.70;
    const studioJulyAndAugustPrice = 76;
    const apartmetJulyAndAugustPrice = 77;

    const month = input[0];
    const numberOfNights = Number(input[1]);
    let studioTotalPrice = 0;
    let apartmetTotalPrice = 0;
    
    switch (month) {
        case "May":
        case "October": 
        if (numberOfNights > 7 && numberOfNights <= 14) {
        studioTotalPrice = numberOfNights * studioMayAndOctoberPrice * 0.95
        apartmetTotalPrice = numberOfNights * apartmentMayAndOctoberPrice
        } else if (numberOfNights > 14) {
        studioTotalPrice = numberOfNights * studioMayAndOctoberPrice * 0.7
        apartmetTotalPrice = numberOfNights * apartmentMayAndOctoberPrice * 0.90
        } else {
        studioTotalPrice = numberOfNights * studioMayAndOctoberPrice
        apartmetTotalPrice = numberOfNights * apartmentMayAndOctoberPrice
        }; break;
        case "June":
        case "September":
        if (numberOfNights > 14) {
        studioTotalPrice = numberOfNights * studioJuneAndSeptemberPrice * 0.8
        apartmetTotalPrice = numberOfNights * apartmetJuneAndSeptemberPrice * 0.9
        } else {
        studioTotalPrice = numberOfNights * studioJuneAndSeptemberPrice
        apartmetTotalPrice = numberOfNights * apartmetJuneAndSeptemberPrice
        }; break;
        case "July":
        case "August":
        if (numberOfNights > 14) {
        studioTotalPrice = numberOfNights * studioJulyAndAugustPrice
        apartmetTotalPrice = numberOfNights * apartmetJulyAndAugustPrice * 0.9
        } else {
        studioTotalPrice = numberOfNights * studioJulyAndAugustPrice
        apartmetTotalPrice = numberOfNights * apartmetJulyAndAugustPrice
        }; break;
    }

console.log(`Apartment: ${apartmetTotalPrice.toFixed(2)} lv.`)
console.log(`Studio: ${studioTotalPrice.toFixed(2)} lv.`)

}
// hotelRoom(["May", "15"]);
// hotelRoom(["June", "14"]);
hotelRoom(["August", "20"]);
