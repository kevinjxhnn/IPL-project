const fs = require("fs")
const csv = require("csv-parser")
const { getNumberOfMatchesPerYear } = require("./src/server/1-matches-per-year")
const { getMatchesWonPerTeamPerYear } = require("./src/server/2-matches-won-per-team-per-year")
const { getExtraRunsPerTeam } = require("./src/server/3-extra-runs-per-team")
const { getTenEconomicalBowler } = require("./src/server/4-top-ten-economical-bowler")
const { findTeamsWhoWonTossAndMatch } = require("./src/server/5-toss-and-match-winner")
const { getHighestPOTMAwardsPerSeason } = require("./src/server/6-highest-player-of-match")
const { getStrikeRateBatsman } = require("./src/server/7-strike-rate-batsman")
const { findMostDismissals } = require("./src/server/8-most-dismissed")
const { toFindBowlerWithTheBestEconomySuperOver } = require("./src/server/9-bowler-with-best-economy-superover")

const matchFilePath = "./src/data/matches.csv"
const deliveriesFilePath = "./src/data/deliveries.csv"

const outputPath1 = "./src/public/output/matchesPerYear.json"
const outputPath2 = "./src/public/output/matchesWonPerTeamPerYear.json"
const outputPath3 = "./src/public/output/extraRunsPerTeam.json"
const outputPath4 = "./src/public/output/tenEconomicalBowlers.json"
const outputPath5 = "./src/public/output/teamsWhoWonTossAndMatch.json"
const outputPath6 = "./src/public/output/highestPlayerOfMatchPerSeason.json"
const outputPath7 = "./src/public/output/strikeRateBatsman.json"
const outputPath8 = "./src/public/output/mostDismissals.json"
const outputPath9 = "./src/public/output/bowlerWithBestEconomySuperOver.json"



function writeJSONToFile(filePath, data, description) {
    fs.writeFile(filePath, JSON.stringify(data, null, 2), (error) => {
        if (error) {
            console.error(`Error writing JSON file for ${description}`, error);
        } else {
            console.log(`JSON data written to ${filePath}`);
        }
    });
}

const matches = [];
const deliveries = [];

fs.createReadStream(matchFilePath)
    .pipe(csv({}))
    .on("data", (data) => matches.push(data))
    .on("end", () => {
        // Problem 1: Get the number of matches per year.
        const matchesPerYear = getNumberOfMatchesPerYear(matches);
        writeJSONToFile(outputPath1, matchesPerYear, "problem 1");

        // Problem 2: Get matches won per team per year.
        const matchesWonPerTeamPerYear = getMatchesWonPerTeamPerYear(matches);
        writeJSONToFile(outputPath2, matchesWonPerTeamPerYear, "problem 2");

        fs.createReadStream(deliveriesFilePath)
            .pipe(csv({}))
            .on("data", (data) => deliveries.push(data))
            .on("end", () => {
                // Problem 3: Get extra runs per team.
                const extraRunsPerTeam = getExtraRunsPerTeam(deliveries, matches);
                writeJSONToFile(outputPath3, extraRunsPerTeam, "problem 3");

                // Problem 4: Get the top ten economical bowlers.
                const tenEconomicalBowlers = getTenEconomicalBowler(matches, deliveries);
                writeJSONToFile(outputPath4, tenEconomicalBowlers, "problem 4");

                // Problem 5: Find teams who won the toss and the match.
                const teamsWhoWonTossAndMatch = findTeamsWhoWonTossAndMatch(matches);
                writeJSONToFile(outputPath5, teamsWhoWonTossAndMatch, "problem 5");

                // Problem 6: Get the player with the most Player of the Match awards per season.
                const highestPlayerOfMatchPerSeason = getHighestPOTMAwardsPerSeason(matches);
                writeJSONToFile(outputPath6, highestPlayerOfMatchPerSeason, "problem 6");

                // Problem 7: Get the strike rate of a specific batsman.
                const strikeRateBatsman = getStrikeRateBatsman(matches, deliveries, "DA Warner");
                writeJSONToFile(outputPath7, strikeRateBatsman, "problem 7");

                // Problem 8: Find the player with the most dismissals.
                const mostDismissals = findMostDismissals(deliveries);
                writeJSONToFile(outputPath8, mostDismissals, "problem 8");

                // Problem 9: Find the bowler with the best economy rate in Super Overs.
                const bowlerWithBestEconomySuperOver = toFindBowlerWithTheBestEconomySuperOver(deliveries);
                writeJSONToFile(outputPath9, bowlerWithBestEconomySuperOver, "problem 9");
            });
    });