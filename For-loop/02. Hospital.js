function hostiptal(input) {
  let index = 0;
  let timePeriod = Number(input[index]);
  index++;

  let doctors = 7;
  let treated = 0;
  let unTreated = 0;

  for (let i = 1; i <= timePeriod; i++) {
    let patients = Number(input[index]);
    index++;

    i % 3 === 0 && treated < unTreated ? doctors++ : doctors;

    if (doctors - patients >= 0) {
      treated += patients;
    } else {
      unTreated += patients - doctors;
      treated += doctors;
    }
  }
  console.log(`Treated patients: ${treated}.`);
  console.log(`Untreated patients: ${unTreated}.`);
}
hostiptal(["4", "7", "27", "9", "1"]);
hostiptal(["6", "25", "25", "25", "25", "25", "2"]);
