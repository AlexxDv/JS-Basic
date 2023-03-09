function calc(input) {
    let name = input[0];
    let seasons = Number(input[1]);
    let episodes = Number(input[2]);
    let timePerEpisode = Number(input[3]);

    let ads = timePerEpisode * 0.2;
    let totalTime = ads + timePerEpisode
    let specialEpisode = seasons * 10

    let all = totalTime * episodes * seasons + specialEpisode;
    console.log(`Total time needed to watch the ${name} series is ${all} minutes.`)
}
calc(["Lucifer", "3", "18", "55"]);
calc(["Game of Thrones", "7", "10", "50"]);
