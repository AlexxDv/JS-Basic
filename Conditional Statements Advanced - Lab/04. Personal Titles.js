function personalTitles(input) {
  const age = Number(input[0]);
  const gender = input[1];

  if (age >= 16) {
    if (gender === "f") {
      console.log("Ms.");
    } else {
      console.log("Mr.");
    }
  } else {
    if (gender === "m") {
      console.log("Master");
    } else {
      console.log("Miss");
    }
  }
}

personalTitles(["12", "f"]);
personalTitles(["17", "m"]);
personalTitles(["25", "f"]);
personalTitles(["13.5", "m"]);
