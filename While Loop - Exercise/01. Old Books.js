function oldBooks(input) {
  let index = 0;
  let neededBook = input[index++];
  let searchedBooks = input[index++];
  let bookcount = 0;

  while (searchedBooks !== neededBook) {
    searchedBooks = input[index++];
    bookcount++;
    if (searchedBooks === "No More Books") {
      console.log("The book you search is not here!");
      console.log(`You checked ${bookcount} books.`);
      break;
    }
  }

  if (searchedBooks === neededBook) {
    console.log(`You checked ${bookcount} books and found it.`);
  }
}
oldBooks(["Troy", "Stronger", "Life Style", "Troy"]);
oldBooks([
  "The Spot",
  "Hunger Games",
  "Harry Potter",
  "Torronto",
  "Spotify",
  "No More Books",
]);
