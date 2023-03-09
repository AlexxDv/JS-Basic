function lunchBreak(input) {
    const showTitle = input[0];
    const minutesPerEpisode = Number(input[1]);
    const lunchMinutes = Number(input[2]);

    const timeForLunch = lunchMinutes / 8;
    const timeForRelax = lunchMinutes / 4;
    const timeLeft = lunchMinutes - timeForLunch - timeForRelax

    if (timeLeft >= minutesPerEpisode) {
        let episodeMinutesLeft = timeLeft - minutesPerEpisode
        console.log(`You have enough time to watch ${showTitle} and left with ${Math.ceil(episodeMinutesLeft)} minutes free time.`)
    } else {
        let minutesNeeded = minutesPerEpisode - timeLeft
        console.log(`You don't have enough time to watch ${showTitle}, you need ${Math.ceil(minutesNeeded)} more minutes.`)
    }

}
lunchBreak(["Game of Thrones", "51", "82"]);

