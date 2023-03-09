function movieProf(input) {
    let name = input[0];
    let days = Number(input[1]);
    let tickets = Number(input[2]);
    let ticketPrice = Number(input[3]);
    let percentForCinema = Number(input[4]);

    let profit = ticketPrice * tickets * days - (ticketPrice * tickets * days*percentForCinema / 100)
    console.log(`The profit from the movie ${name} is ${profit.toFixed(2)} lv.`)
}
movieProf(["The Programmer",
"20",
"500",
"7.50",
"7"])
movieProf(["Python Basics",
"40",
"34785",
"10.45",
"14"])