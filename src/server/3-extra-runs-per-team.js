function getExtraRunsPerTeam(deliveries, matches){

    // Filtering only 2016 matches.
    const matches2016 = matches.filter((match) => match.season == 2016)


    if(!matches2016){
        console.log("No matches found for 2016.");
        return;
    }


    // Making sure we only get deliveries of 2016.
    const deliveries2016 = deliveries.filter((delivery) => {
        const match = matches2016.find((match) => match.id == delivery.match_id);
        return match !== undefined;
    });
    

    const extraRunsPerTeam = {}

    // Adding the extra runs per team.
    deliveries2016.forEach((delivery) => {
        const bowlingTeam = delivery.bowling_team
        const extraRuns = parseInt(delivery.extra_runs, 10)

        if(extraRuns > 0){

            if(!extraRunsPerTeam[bowlingTeam]){
                extraRunsPerTeam[bowlingTeam] = extraRuns
            
            } else {
                extraRunsPerTeam[bowlingTeam] += extraRuns
            }
        }
    });

    return extraRunsPerTeam;
}

module.exports = { getExtraRunsPerTeam }