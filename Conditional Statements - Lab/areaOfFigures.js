function areaOfFigures(input) {
  const type = input[0];
  const a = Number(input[1]);
  const b = Number(input[2]);

  if (type === "square") {
    result = a * a;
  } else if (type === "rectangle") {
    const b = Number(input[2]);
    result = a * b;
  } else if (type === "circle") {
    result = Math.PI * a * a;
  } else {
    result = (a * b) / 2;
  }
  console.log(result.toFixed(3));
}

areaOfFigures(["circle", "6"]);
