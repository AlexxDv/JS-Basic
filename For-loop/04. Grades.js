function gradesF(input) {
  let index = 0;
  let totalStudents = Number(input[index]);
  index++;

  let topStudents = 0;
  let between400till499 = 0;
  let between300till399 = 0;
  let fail = 0;
  let allGrades = 0;

  for (let i = 0; i < totalStudents; i++) {
    let grades = Number(input[index]);
    index++;
    allGrades += grades;
    if (grades >= 5) {
      topStudents++;
    } else if (grades >= 4.0 && grades <= 4.99) {
      between400till499++;
    } else if (grades >= 3.0 && grades <= 3.99) {
      between300till399++;
    } else {
      fail++;
    }
  }
  console.log(
    `Top students: ${((topStudents / totalStudents) * 100).toFixed(2)}%`
  );
  console.log(
    `Between 4.00 and 4.99: ${(
      (between400till499 / totalStudents) *
      100
    ).toFixed(2)}%`
  );
  console.log(
    `Between 3.00 and 3.99: ${(
      (between300till399 / totalStudents) *
      100
    ).toFixed(2)}%`
  );
  console.log(`Fail: ${((fail / totalStudents) * 100).toFixed(2)}%`);
  console.log(`Average: ${(allGrades / totalStudents).toFixed(2)}`);
}
gradesF([
  "10",
  "3.00",
  "2.99",
  "5.68",
  "3.01",
  "4",
  "4",
  "6.00",
  "4.50",
  "2.44",
  "5",
]);
