function oscarsWeekInCinema(input) {
    let nameOfTheMovie = input[0];
    let type = input[1];
    let numberOfTikets = Number(input[2]);
    let tiketPrice = 0;

    switch (type) {
        case "normal":
            switch(nameOfTheMovie){
                case "A Star Is Born": tiketPrice = 7.50; break;
                case "Bohemian Rhapsody": tiketPrice = 7.35; break;
                case "Green Book": tiketPrice = 8.15; break;
                case "The Favourite": tiketPrice = 8.75; break
            }
            break;
        case "luxury": 
            switch (nameOfTheMovie){
                case "A Star Is Born": tiketPrice = 10.50; break;
                case "Bohemian Rhapsody": tiketPrice = 9.45; break;
                case "Green Book": tiketPrice = 10.25; break;
                case "The Favourite": tiketPrice = 11.55; break
            }
            break;
        case "ultra luxury": 
            switch (nameOfTheMovie) {
                case "A Star Is Born": tiketPrice = 13.50; break;
                case "Bohemian Rhapsody": tiketPrice = 12.75; break;
                case "Green Book": tiketPrice = 13.25; break;
                case "The Favourite": tiketPrice = 13.95; break
            }
            break;
    }
    let totalmoney = (tiketPrice * numberOfTikets).toFixed(2);
console.log(`${nameOfTheMovie} -> ${totalmoney} lv.`)
}
oscarsWeekInCinema(["A Star Is Born", "luxury", "42"]);
oscarsWeekInCinema(["Green Book", "normal", "63"]);
