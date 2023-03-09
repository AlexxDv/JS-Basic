function easterTrip(input) {
    let destination = input[0];
    let dates = input[1];
    let nights = input[2];
    let price = 0;
    
    switch (dates) {
        case "21-23":
            switch (destination) {
                case "France": price = 30; break;
                case "Italy": price = 28; break;
                case "Germany": price = 32; break;
            } break;
        case "24-27":
            switch (destination) {
                case "France": price = 35; break;
                case "Italy": price = 32; break;
                case "Germany": price = 37; break;
            } break;
        case "28-31":
            switch (destination) {
                case "France": price = 40; break;
                case "Italy": price = 39; break;
                case "Germany": price = 43; break;
            } break;
    }
    let total = (price * nights).toFixed(2);
    console.log(`Easter trip to ${destination} : ${total} leva.`)
}
easterTrip(["Germany", "24-27", "5"]);
easterTrip(["Italy", "21-23", "7"]);
easterTrip(["France", "28-31", "8"]);
