function backToThePast(input) {
  let heritage = Number(input[0]);
  let targetYear = Number(input[1]);

  let ivanYears = 18;
  let startYear = 1800;
  let spendingPerEvenYear = 12000;

  for (let i = startYear; i <= targetYear; i++) {
    let spendingPerOddYear = 12000 + 50 * ivanYears;

    //  i % 2 === 0
    //  ? (heritage -= spendingPerEvenYear)
    //  : (heritage -= spendingPerOddYear);

    if (i % 2 === 0) {
      heritage -= spendingPerEvenYear;
    } else {
      heritage -= spendingPerOddYear;
    }

    ivanYears++;
  }
  if (heritage >= 0) {
    console.log(
      `Yes! He will live a carefree life and will have ${heritage.toFixed(
        2
      )} dollars left.`
    );
  } else {
    console.log(
      `He will need ${Math.abs(heritage).toFixed(2)} dollars to survive.`
    );
  }
}
// backToThePast(["50000", "1802"]);
backToThePast(["100000.15", "1808"]);
