function movieDest(input) {
    let movieBudget = Number(input[0]);
    let destination = input[1];
    let season = input[2];
    let daysNum = Number(input[3]);

    let price = 0;

    switch (destination) {
        case "Dubai":
            switch (season) {
                case "Winter": price = 45000 * 0.7; break;
                case "Summer": price = 40000 * 0.7; break;
            } break;
        case "Sofia":
            switch (season) {
                case "Winter": price = 17000 * 1.25; break;
                case "Summer": price = 12500 * 1.25; break;
            } break;
        case "London":
            switch (season) {
                case "Winter": price = 24000; break;
                case "Summer": price = 20250; break;
            } break;
    }

    let total = price * daysNum
    let diff = Math.abs(total - movieBudget).toFixed(2);

    if (total <= movieBudget) {
        console.log(`The budget for the movie is enough! We have ${diff} leva left!`)
    } else {
        console.log(`The director needs ${diff} leva more!`)
    }

}
// movieDest(["400000", "Sofia", "Winter", "20"]);
movieDest(["1000000", "Dubai", "Summer", "5"]);
// movieDest(["200000", "London", "Summer", "7"]);
