function poolDay(input) {
  let people = Number(input[0]);
  let entranceTax = Number(input[1]);
  let sunbedTax = Number(input[2]);
  let umbrellaTax = Number(input[3]);

  let neededUmbrellas = Math.ceil(people / 2);
  let neededSunbeds = Math.ceil(people * 0.75);

  let tax = people * entranceTax + neededUmbrellas * umbrellaTax + neededSunbeds * sunbedTax;
  console.log(`${tax.toFixed(2)} lv.`);
}
poolDay(["21", "5.50", "4.40", "6.20"]);
poolDay(["50", "6", "8", "4"]);
poolDay(["100", "8", "6", "4"]);
