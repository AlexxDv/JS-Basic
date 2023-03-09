function renovation(input) {
  let index = 0;
  let heightOfTheWall = Number(input[index]);
  index++;
  let widthOfTheWall = Number(input[index]);
  index++;
  let freeOfPaintPercentage = Number(input[index]);
  index++;
  let work = input[index];
  index++;

  let freeOfPaintNumber = (100 - freeOfPaintPercentage) / 100;
  let areaForPaint = Math.ceil(
    heightOfTheWall * widthOfTheWall * 4 * freeOfPaintNumber
  );

  while (work !== "Tired!") {
    let currentPaint = Number(work);
    areaForPaint -= currentPaint;

    if (areaForPaint < 0) {
      console.log(
        `All walls are painted and you have ${Math.abs(
          areaForPaint
        )} l paint left!`
      );
      break;
    } else if (areaForPaint === 0) {
      console.log("All walls are painted! Great job, Pesho!");
      break;
    }
    work = input[index];
    index++;
  }
  if (work === "Tired!") {
    console.log(`${areaForPaint} quadratic m left.`);
  }
}
// renovation(["3", "5", "10", "2", "3", "4", "Tired!"]);
renovation(["2", "3", "25", "6", "7", "6"]);
