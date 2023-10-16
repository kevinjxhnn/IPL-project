function getTenEconomincalBowler(matches, deliveries){

    // Filtering only the matches for 2015.
    const matches2015 = matches.filter((match) => match.season == 2015)


    const bowlerData = {}

    // Calculating the runs and overs for each bowler.
    deliveries.forEach((delivery) => {
        const match = matches2015.find((match) => match.id == delivery.match_id)

        if(match){
            const bowler = delivery.bowler
            const runs = parseInt(delivery.total_runs, 10)
            const isWideOrNoBall = delivery.wide_runs > 0 || delivery.noball_runs > 0 

            if(!bowlerData[bowler]) {
                bowlerData[bowler] = { 'runs' : runs, 'balls' : isWideOrNoBall ? 0 : 1}

            } else {
                bowlerData[bowler].runs += runs
                bowlerData[bowler].balls += isWideOrNoBall ? 0 : 1

            }
        }
    });


    // Calculating the economy rate.
    const economicalBowlers = []

    for(const bowler in bowlerData){
        const {runs, balls} = bowlerData[bowler]

        const economyRate = ((runs/balls) * 6 ).toFixed(2)

        economicalBowlers.push({bowler, economyRate})
    }

    economicalBowlers.sort((a, b) => a.economyRate - b.economyRate)

    return economicalBowlers.slice(0, 10)
}

module.exports = { getTenEconomincalBowler }