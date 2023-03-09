function filmPrem(input) {
    let name = input[0];
    let package = input[1];
    let numOfTicks = Number(input[2]);
    let price = 0;

    switch (name) {
        case "John Wick":
            switch (package) {
                case "Drink": price = 12; break;
                case "Popcorn": price = 15; break;
                case "Menu": price = 19; break;
            } break;
        case "Star Wars":
            switch (package) {
                case "Drink": price = 18; break;
                case "Popcorn": price = 25; break;
                case "Menu": price = 30; break;
            } break;
         case "Jumanji":
             switch (package) {
                case "Drink": price = 9; break;
                case "Popcorn": price = 11; break;
                case "Menu": price = 14; break;
            } break;
    }
    if (name === "Star Wars" && numOfTicks >= 4) {
        price *= 0.7;
    } else if (name === "Jumanji" && numOfTicks === 2) {
        price *= 0.85;
    }
    
    let total = price * numOfTicks
    console.log(`Your bill is ${total.toFixed(2)} leva.`)
}
filmPrem(["John Wick", "Drink", "6"]);
filmPrem(["Star Wars", "Popcorn", "4"]);
filmPrem(["Jumanji", "Menu", "2"]);
