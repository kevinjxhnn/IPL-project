function getHighestPlayerOfMatch(matches) {
    const playerOfTheMatchYear = {};

    matches.forEach((match) => {
        const year = match.season;
        const playerOfTheMatch = match.player_of_match;

        if (playerOfTheMatch) {
            if (playerOfTheMatchYear[year]) {
                if (playerOfTheMatchYear[year][playerOfTheMatch]) {
                    playerOfTheMatchYear[year][playerOfTheMatch]++;
                } else {
                    playerOfTheMatchYear[year][playerOfTheMatch] = 1;
                }
            } else {
                playerOfTheMatchYear[year] = { [playerOfTheMatch]: 1 };
            }
        }
    });

    const result = {};

    for (const season in playerOfTheMatchYear) {
        const seasonData = playerOfTheMatchYear[season];
        const maxPlayer = Object.keys(seasonData).reduce((a, b) => (seasonData[a] > seasonData[b] ? a : b));
        result[season] = { player: maxPlayer, awards: seasonData[maxPlayer] };
    }

    return result; 
}


module.exports = { getHighestPlayerOfMatch }