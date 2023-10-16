function getMatchesWonPerTeamPerYear(result){

    const matchesWonPerTeamPerYear = {}

    result.forEach((element) => {
        
        const year = element.season
        const winner = element.winner

        if(year && winner){

            // Initialize the year entry if it doesn't exist
            if(!matchesWonPerTeamPerYear[year]){
                matchesWonPerTeamPerYear[year] = {}
            }

            // If the team's entry for the season doesn't exist, initialize it to 1, otherwise, increment the count

            if(!matchesWonPerTeamPerYear[year][winner]){
                matchesWonPerTeamPerYear[year][winner] = 1
            
            } else {
                matchesWonPerTeamPerYear[year][winner] += 1
            }
        }
    });

    return matchesWonPerTeamPerYear
}

module.exports = { getMatchesWonPerTeamPerYear }