function timeWithMinutes(input) {
  let hours = Number(input[0]);
  let minutes = Number(input[1]);

  minutes += 15;
  if (minutes >= 60) {
    hours += 1;
    minutes -= 60;
  }

  if (hours > 23) {
    hours = 0;
  }

  if (minutes < 10) {
    console.log(`${hours}:0${minutes}`);
  } else {
    console.log(`${hours}:${minutes}`);
  }
}

timeWithMinutes(["1", "46"]);
timeWithMinutes(["0", "01"]);
timeWithMinutes(["23", "59"]);
timeWithMinutes(["11", "08"]);
timeWithMinutes(["12", "49"]);
