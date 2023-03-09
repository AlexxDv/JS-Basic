function worldSwimmingRecord(input) {
  const worldRecordInSeconds = Number(input[0]);
  const distanceToSwim = Number(input[1]);
  const timeInSecondsForOneM = Number(input[2]);
  const timesDelayPerMeters = Math.floor(distanceToSwim / 15);
  const secondsDelays = timesDelayPerMeters * 12.5;
  const ivanTime = distanceToSwim * timeInSecondsForOneM + secondsDelays;

  if (ivanTime >= worldRecordInSeconds) {
    let timeNeeded = ivanTime - worldRecordInSeconds;
    console.log(
      `No, he failed! He was ${timeNeeded.toFixed(2)} seconds slower.`
    );
  } else {
    console.log(
      `Yes, he succeeded! The new world record is ${ivanTime.toFixed(
        2
      )} seconds.`
    );
  }
}

worldSwimmingRecord(["10464", "1500", "20"]);
worldSwimmingRecord(["55555.67", "3017", "5.03"]);
