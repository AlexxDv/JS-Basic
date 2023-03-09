function skeleton(input) {
  let controlMinutes = Number(input[0]);
  let controlSeconds = Number(input[1]);
  let guttersMeter = Number(input[2]);
  let secondsFor100Meters = Number(input[3]);

  let totalControlSeconds = controlMinutes * 60 + controlSeconds;
  let delayTimes = (guttersMeter / 120) * 2.5;
  let contestedTime = (guttersMeter / 100) * secondsFor100Meters - delayTimes;
  let diff = Math.abs(totalControlSeconds - contestedTime).toFixed(3);

  if (totalControlSeconds >= contestedTime) {
    console.log(`Marin Bangiev won an Olympic quota!`);
    console.log(`His time is ${contestedTime.toFixed(3)}.`);
  } else {
    console.log(`No, Marin failed! He was ${diff} second slower.`);
  }
}
skeleton(["2", "12", "1200", "10"]);
skeleton(["1", "20", "1546", "12"]);
