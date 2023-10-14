function toFindBowlerWithTheBestEconomySuperOver(deliveries){

    const superOvers = deliveries.filter((delivery) => delivery.is_super_over == '1');

    if (superOvers.length === 0) {
        return "No super over";
    }

    const bowlerStats = {};

    // Calculating the runs and overs for each bowler
    superOvers.forEach((delivery) => {
        const bowler = delivery.bowler;
        const runsGiven = parseInt(delivery.total_runs, 10);

        if (!bowlerStats[bowler]) {
            bowlerStats[bowler] = { runs: 0, balls: 0 };
        }

        bowlerStats[bowler].runs += runsGiven;
        bowlerStats[bowler].balls += 1;
    });

    // Calculate the economy rate for each bowler
    const bowlersEconomy = {};
    for (const bowler in bowlerStats) {
        const runsConceded = bowlerStats[bowler].runs;
        const ballsBowled = bowlerStats[bowler].balls;
        const economyRate = ((runsConceded / ballsBowled) * 6).toFixed(2);
        bowlersEconomy[bowler] = economyRate;
    }

    // Find the bowler with the best economy rate
    let bestBowler = null;
    let bestEconomy = Infinity;


    for (const bowler in bowlersEconomy) {
        if (bowlersEconomy[bowler] < bestEconomy) {
            bestBowler = bowler;
            bestEconomy = bowlersEconomy[bowler];
        }
    }

    return { "bowler" : bestBowler , "economy" : bestEconomy}

}

module.exports = { toFindBowlerWithTheBestEconomySuperOver }