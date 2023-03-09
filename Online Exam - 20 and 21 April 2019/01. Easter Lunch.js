function easterLunch(input) {
  let easterBread = 3.2;
  let eggs = 4.35;
  let cookies = 5.4;
  let paintPerEgg = 0.15;

  let easterBreadQuantity = Number(input[0]);
  let eggsQuantity = Number(input[1]);
  let cookiesQuantity = Number(input[2]);

  let total =
    easterBread * easterBreadQuantity +
    eggs * eggsQuantity +
    cookies * cookiesQuantity +
    paintPerEgg * eggsQuantity * 12;

    console.log(total.toFixed(2));
}
easterLunch(["3", "2", "3"]);
easterLunch(["4", "4", "3"]);
easterLunch(["2", "3", "2"]);
