function cinema(input) {
    const premiere = 12.00;
    const normal = 7.50;
    const discount = 5.00;

    const type = input[0];
    const rows = Number(input[1]);
    const columns = Number(input[2]);
    let all = rows * columns;

    let income = 0;

    switch (type) {
        case "Premiere": income = premiere * all; break;
        case "Normal": income = normal * all; break;
        case "Discount": income = discount * all; break;
    }
    
    
 console.log(`${income.toFixed(2)} leva`)
}
cinema(["Premiere", "10", "12"]);
cinema(["Normal", "21", "13"]);
cinema(["Discount", "12", "30"]);
