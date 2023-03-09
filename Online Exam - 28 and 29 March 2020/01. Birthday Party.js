function bdayParty(arg1) {
    let rent = Number(arg1);
    let cake = rent * 0.2;
    let beverages = cake * 0.55;
    let animator = rent / 3;
    let party = rent + cake + beverages + animator;

    console.log(party)
}