function onTime(input) {
  const examHour = Number(input[0]);
  const examMin = Number(input[1]);
  const arivalHour = Number(input[2]);
  const arivalMin = Number(input[3]);

  const examTotal = examHour * 60 + examMin;
  const arivalTotal = arivalHour * 60 + arivalMin;

  let difference = examTotal - arivalTotal;
  let differenceTotal = Math.abs(examTotal - arivalTotal);
 
  let min = differenceTotal % 60;
  let hours = Math.floor(differenceTotal / 60);

  if (difference >= 0 && difference <= 59) {
    if (difference > 0 && difference < 10) {
      console.log("On time");
      console.log(`${min} minutes before the start`);
    } else if (difference >= 10 && difference <= 30) {
      console.log("On time");
      console.log(`${min} minutes before the start`);
    } else if (difference > 30 && difference <= 59) {
      console.log("Early");
      console.log(`${min} minutes before the start`);
    } else {
      console.log("On time");
    }
  } else if (difference > 59) {
    if (min < 10) {
      console.log("Early");
      console.log(`${hours}:0${min} hours before the start`);
    } else {
      console.log("Early");
      console.log(`${hours}:${min} hours before the start`);
    }
  } else {
    if (differenceTotal <= 59) {
      console.log("Late");
      console.log(`${min} minutes after the start`);
    } else if (differenceTotal > 59) {
      if (min < 10) {
        console.log("Late");
        console.log(`${hours}:0${min} hours after the start`);
      } else {
        console.log("Late");
        console.log(`${hours}:${min} hours after the start`);
      }
    }
  }
}
onTime(["9", "30", "9", "50"]);
onTime(["9", "00", "10", "30"]);
onTime(["10", "00", "10", "00"]);
onTime(["9", "00", "8", "30"]);
onTime(["14", "00", "13", "55"]);
onTime(["11", "30", "10", "55"]);
onTime(["16", "00", "15", "00"]);
onTime(["11", "30", "8", "12"]);
onTime(["11", "30", "12", "29"]);
