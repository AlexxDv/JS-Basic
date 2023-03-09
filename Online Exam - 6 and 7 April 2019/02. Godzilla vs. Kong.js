function godzillaVsKong(input) {
  let movieBudget = Number(input[0]);
  let numberOfStatist = Number(input[1]);
  let clothesPriceForOneStatist = Number(input[2]);
  let decorCost = movieBudget * 0.1;
  let clothesTotal = numberOfStatist * clothesPriceForOneStatist;

  if (numberOfStatist > 150) {
    clothesTotal *= 0.9;
  }
  let totalCost = decorCost + clothesTotal;
  let diff = Math.abs(movieBudget - decorCost - clothesTotal).toFixed(2);

  if (movieBudget >= totalCost) {
    console.log(`Action!`);
    console.log(`Wingard starts filming with ${diff} leva left.`);
  } else {
    console.log(`Not enough money!`);
    console.log(`Wingard needs ${diff} leva more.`);
  }
}
godzillaVsKong(["20000", "120", "55.5"]);
godzillaVsKong(["15437.62", "186", "57.99"]);
godzillaVsKong(["9587.88", "222", "55.68"]);
