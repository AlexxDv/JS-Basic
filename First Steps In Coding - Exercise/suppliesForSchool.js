function suppliesForSchool(imput) {

    let chemicals = Number(imput[0]) * 5.80;
    let markers = Number(imput[1]) * 7.20;
    let bordcleaner = Number(imput[2]) * 1.20;
    let percentageReduction = Number(imput[3]) / 100;
    console.log(((chemicals + markers + bordcleaner) - (chemicals + markers + bordcleaner) * percentageReduction));
}

suppliesForSchool(["2 ", "3 ", "4 ", "25 "]);
suppliesForSchool(["4 ", "2 ", "5 ", "13 "]);
