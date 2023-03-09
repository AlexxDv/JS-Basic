function workingHours(input) {
  const hours = Number(input[0]);
  const day = input[1];

  if (hours >= 10 && hours < 18) {
    if (
      day === "Monday" ||
      day === "Tuesday" ||
      day === "Wednesday" ||
      day === "Thursday" ||
      day === "Friday" ||
      day === "Saturday"
    )
      console.log("open");
      else {
        console.log("closed");
      }
  } else {
    console.log("closed");
  }
}
workingHours(["11", "Monday"]);
workingHours(["19", "Friday"]);
// workingHours(["11", "Sunday"]);
