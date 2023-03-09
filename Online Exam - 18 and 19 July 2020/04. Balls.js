function balls(input) {
    let index = 0;
    let numberOfBalls = Number(input[index++]);
    let sum = 0;
    let otherColor = 0;
    let red = 0;
    let orange = 0;
    let yellow = 0;
    let white = 0;
    let black = 0;
   
    for (let i = 0; i < numberOfBalls; i++) {
        let color = input[index++];
        switch (color) {
            case "red": sum += 5; red++; break;
            case "orange": sum += 10; orange++; break;
            case "yellow": sum += 15; yellow++; break;
            case "white": sum += 20; white++; break;
            case "black": sum = Math.floor(sum / 2); black++; break;
            default: otherColor++; break;
        }
    }
console.log(`Total points: ${sum}`);
console.log(`Red balls: ${red}`);
console.log(`Orange balls: ${orange}`);
console.log(`Yellow balls: ${yellow}`);
console.log(`White balls: ${white}`);
console.log(`Other colors picked: ${otherColor}`)
console.log(`Divides from black balls: ${black}`)
}
// balls(["3", "white", "black", "pink"]);
balls(["5", "red", "red", "ddd", "ddd", "ddd"]);
