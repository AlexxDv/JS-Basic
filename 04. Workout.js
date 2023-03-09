function workout(input) {
  let index = 0;
  let kmWanted = 1000;

  let totalDaysForRun = Number(input[index]);
  index++;
  let kmForTheFirstDay = Number(input[index]);
  index++;
  let total = 0;
  let avg = kmForTheFirstDay

  for (let i = 1; i <= totalDaysForRun; i++) {
    let procent = Number(input[index]);
    index++;
    let procentToNumber = (100 + procent) / 100;
    currDay = avg * procentToNumber
    avg = currDay
    total += currDay

}
total += kmForTheFirstDay
let diff = Math.ceil(Math.abs(total - kmWanted))

if (total>=kmWanted) {
    console.log(`You've done a great job running ${diff} more kilometers!`);
} else {
    console.log(`Sorry Mrs. Ivanova, you need to run ${diff} more kilometers`);
}

}
// workout(["5", "30", "10", "15", "20", "5", "12"]);
workout(["4", "100", "30", "50", "60", "80"]);
