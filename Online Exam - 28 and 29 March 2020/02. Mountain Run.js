function mountainRun(input) {
  let index = 0;
  let recordInSeconds = Number(input[index++]);
  let distanceInMeters = Number(input[index++]);
  let secondsForOneMeter = Number(input[index++]);
  let delaysTimes = Math.floor(distanceInMeters / 50);
  let delaysSecond = delaysTimes * 30;
  let speed = distanceInMeters * secondsForOneMeter + delaysSecond;
  let diff = Math.abs(speed - recordInSeconds).toFixed(2)

  if (speed < recordInSeconds) {
    console.log(`Yes! The new record is ${speed.toFixed(2)} seconds.`)
  } else {
    console.log(`No! He was ${diff} seconds slower.`)
  }
}
mountainRun(["10164", "1400", "25"]);
mountainRun(["5554.36", "1340", "3.23"]);
mountainRun(["1377", "389", "3"]);
