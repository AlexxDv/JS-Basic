function fishTank(imput) {
  const lengthCM = Number(imput[0]);
  const widthCM = Number(imput[1]);
  const heightCM = Number(imput[2]);
  const percentage = Number(imput[3]) / 100;

  const volumeOfAquarium = lengthCM * widthCM * heightCM;
  const volumeInLiters = volumeOfAquarium * 0.001;
  const totalLt = volumeInLiters * (1 - percentage)

  console.log(totalLt)
}

fishTank(["85 ", "75 ", "47 ", "17 "]);
fishTank(["105 ", "77 ", "89 ", "18.5 "]);
