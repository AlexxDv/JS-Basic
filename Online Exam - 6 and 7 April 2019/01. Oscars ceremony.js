function oscarsCeremony(input) {
  let rent = Number(input[0]);
  let oscars = rent * 0.7;
  let catering = oscars * 0.85;
  let sound = catering * 0.5;
  let total = rent + oscars + catering + sound;

  console.log(total.toFixed(2));
}
oscarsCeremony(["3500"]);
oscarsCeremony(["5555"]);
