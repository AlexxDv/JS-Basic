function gymnastics(input) {
  let country = input[0];
  let deviceType = input[1];

  let difficulty = 0;
  let execution = 0;

  switch (country) {
    case "Russia":
      switch (deviceType) {
        case "ribbon":
          difficulty = 9.1;
          execution = 9.4;
          break;
        case "hoop":
          difficulty = 9.3;
          execution = 9.8;
          break;
        case "rope":
          difficulty = 9.6;
          execution = 9;
          break;
      }
      break;
    case "Bulgaria":
      switch (deviceType) {
        case "ribbon":
          difficulty = 9.6;
          execution = 9.4;
          break;
        case "hoop":
          difficulty = 9.55;
          execution = 9.75;
          break;
        case "rope":
          difficulty = 9.5;
          execution = 9.4;
          break;
      }
      break;
    case "Italy":
      switch (deviceType) {
        case "ribbon":
          difficulty = 9.2;
          execution = 9.5;
          break;
        case "hoop":
          difficulty = 9.45;
          execution = 9.35;
          break;
        case "rope":
          difficulty = 9.7;
          execution = 9.15;
          break;
      }
      break;
  }
  let score = difficulty + execution;
  let diff = 20 - score;
  let percentage = (diff / 20) * 100;

  console.log(
    `The team of ${country} get ${score.toFixed(3)} on ${deviceType}.`
  );
  console.log(`${percentage.toFixed(2)}%`);
}

gymnastics(["Bulgaria", "ribbon"]);
gymnastics(["Russia", "rope"]);
gymnastics(["Italy", "hoop"]);
