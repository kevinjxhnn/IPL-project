function toFindBowlerWithTheBestEconomySuperOver(deliveries) {
    // Filtering the super overs.
    const superOvers = deliveries.filter((delivery) => delivery.is_super_over == '1');

    if (superOvers.length === 0) {
        return "No super over";
    }

    const bowlerData = {};

    superOvers.forEach((delivery) => {
        const bowler = delivery.bowler;
        const runsGiven = parseInt(delivery.total_runs, 10);
        const isWideOrNoBall = delivery.wide_runs > 0 || delivery.noball_runs > 0;

        if (!bowlerData[bowler]) {
            bowlerData[bowler] = { runs: 0, balls: 0 };
        }

        bowlerData[bowler].runs += runsGiven;

        if (!isWideOrNoBall) {
            bowlerData[bowler].balls += 1;
        }
    });

    const bowlersEconomy = {};

    // Calculating the economy rate.
    for (const bowler in bowlerData) {
        const runsConceded = bowlerData[bowler].runs;
        const ballsBowled = bowlerData[bowler].balls;
        const economyRate = ((runsConceded / ballsBowled) * 6).toFixed(2);
        bowlersEconomy[bowler] = economyRate;
    }

    console.log(bowlersEconomy)

    let bestBowler = null;
    let bestEconomy = Infinity;

    // Finding out bowler with the best economy in super over.
    for (const bowler in bowlersEconomy) {
        if (parseFloat(bowlersEconomy[bowler]) < parseFloat(bestEconomy)) {
            bestBowler = bowler;
            bestEconomy = bowlersEconomy[bowler];
        }
    }

    return { "bowler": bestBowler, "economy": bestEconomy };
}

module.exports = { toFindBowlerWithTheBestEconomySuperOver };
