function cinemaTickets(input) {
  let index = 0;
  let inputLine = input[index++];
  let countStandartTickets = 0;
  let countKidTickets = 0;
  let countStudentTickets = 0;

  while (inputLine !== "Finish") {
    let movieName = inputLine;
    // index++;
    let allTickets = Number(input[index++]);
    let freeSpadeInTheCinema = allTickets;
    // index++;
    let tiketType = input[index++];
    while (tiketType !== "End") {
      switch (tiketType) {
        case "standard":
          countStandartTickets++;
          break;
        case "kid":
          countKidTickets++;
          break;
        case "student":
          countStudentTickets++;
          break;
      }
      freeSpadeInTheCinema--;
      if (freeSpadeInTheCinema === 0) {
        break;
      }
    //   index++;
      tiketType = input[index++];
    }
    let boughtTickets = allTickets - freeSpadeInTheCinema;
    let percentageFull = (boughtTickets / allTickets) * 100;
    console.log(`${movieName} - ${percentageFull.toFixed(2)}% full.`);
    // index++;
    inputLine = input[index++];
  }
  let allBoughtTickets =
    countStudentTickets + countKidTickets + countStandartTickets;
  console.log(`Total tickets: ${allBoughtTickets}`);
  console.log(
    `${((countStudentTickets / allBoughtTickets) * 100).toFixed(
      2
    )}% student tickets.`
  );
  console.log(
    `${((countStandartTickets / allBoughtTickets) * 100).toFixed(
      2
    )}% standard tickets.`
  );
  console.log(
    `${((countKidTickets / allBoughtTickets) * 100).toFixed(2)}% kids tickets.`
  );
}
cinemaTickets([
  "Taxi",
  "10",
  "standard",
  "kid",
  "student",
  "student",
  "standard",
  "standard",
  "End",
  "Scary Movie",
  "6",
  "student",
  "student",
  "student",
  "student",
  "student",
  "student",
  "Finish",
]);
// cinemaTickets([
//   "The Matrix",
//   "20",
//   "student",
//   "standard",
//   "kid",
//   "kid",
//   "student",
//   "student",
//   "standard",
//   "student",
//   "End",
//   "The Green Mile",
//   "17",
//   "student",
//   "standard",
//   "standard",
//   "student",
//   "standard",
//   "student",
//   "End",
//   "Amadeus",
//   "3",
//   "standard",
//   "standard",
//   "standard",
//   "Finish",
// ]);
