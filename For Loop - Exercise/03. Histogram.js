function histogram(input) {
  let index = 0;
  let totalNum = Number(input[index++]);
  let p1 = 0;
  let p2 = 0;
  let p3 = 0;
  let p4 = 0;
  let p5 = 0;

  for (let i = 1; i <= totalNum; i++) {
    let num = Number(input[index++]);

    if (num < 200) {
      p1++;
    } else if (num >= 200 && num <= 399) {
      p2++;
    } else if (num >= 400 && num <= 599) {
      p3++;
    } else if (num >= 600 && num <= 799) {
      p4++;
    } else {
      p5++;
    }
  }
  let pro1 = ((p1 / totalNum) * 100).toFixed(2);
  let pro2 = ((p2 / totalNum) * 100).toFixed(2);
  let pro3 = ((p3 / totalNum) * 100).toFixed(2);
  let pro4 = ((p4 / totalNum) * 100).toFixed(2);
  let pro5 = ((p5 / totalNum) * 100).toFixed(2);

  console.log(`${pro1}%`);
  console.log(`${pro2}%`);
  console.log(`${pro3}%`);
  console.log(`${pro4}%`);
  console.log(`${pro5}%`);
}
histogram([
  "14",
  "53",
  "7",
  "56",
  "180",
  "450",
  "920",
  "12",
  "7",
  "150",
  "250",
  "680",
  "2",
  "600",
  "200",
]);