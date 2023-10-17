function getHighestPOTMAwardsPerSeason(matches) {
    const playerOfTheMatchYear = {};

    // Getting the count of each player of the match per season.
    matches.forEach((match) => {
        const year = match.season;
        const playerOfTheMatch = match.player_of_match;

        if(!playerOfTheMatch){
            return
        }

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

    // Calculating the player with the most player of the match titles.
    for (const season in playerOfTheMatchYear) {
        const seasonData = playerOfTheMatchYear[season];
        const maxAwards = Math.max(...Object.values(seasonData));
        const playersWithMaxAwards = Object.keys(seasonData).filter((player) => seasonData[player] === maxAwards);
        result[season] = { players: playersWithMaxAwards, awards: maxAwards };
    }


    return result; 
}


module.exports = { getHighestPOTMAwardsPerSeason }