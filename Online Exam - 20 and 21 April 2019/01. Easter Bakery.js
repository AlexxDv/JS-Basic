function easterBakery(input) {
    let flourPrice = Number(input[0]);
    let flourKg = Number(input[1]);
    let sugarKg = Number(input[2]);
    let eggsQuantity = Number(input[3]);
    let yeast = Number(input[4]);

    let sugarPrice = flourPrice * 0.75;
    let eggsPrice = flourPrice * 1.1;
    let yeastPrice =  sugarPrice * 0.2;

    let total = flourPrice * flourKg + sugarPrice * sugarKg + eggsPrice * eggsQuantity + yeastPrice * yeast;
    console.log(total.toFixed(2))
}
easterBakery(["50", "10", "3.5", "6", "1"]);
easterBakery(["63.44", "3.57", "6.35", "8", "2"]);
