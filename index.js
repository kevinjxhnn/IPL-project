const fs = require("fs")
const csv = require("csv-parser")
const { getNumberOfMatchesPerYear } = require("./src/server/1-matches-per-year")
const { getMatchesWonPerTeamPerYear } = require("./src/server/2-matches-won-per-team-per-year")
const { getExtraRunsPerTeam } = require("./src/server/3-extra-runs-per-team")
const { getTenEconomincalBowler } = require("./src/server/4-top-ten-economical-bowler")
const { findTeamsWhoWonTossAndMatch } = require("./src/server/5-toss-and-match-winner")
const { getHighestPlayerOfMatch } = require("./src/server/6-highest-player-of-match")
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



const matches = []
const deliveries = []

fs.createReadStream(matchFilePath).pipe(csv({}))
    .on('data', (data) => matches.push(data))
    .on('end', () => {
        const matchesPerYear = getNumberOfMatchesPerYear(matches)

        fs.writeFile(outputPath1, JSON.stringify(matchesPerYear, null, 2), (error) => {
            if(error) {
                console.error("Error writing JSON file for problem 1", error)
            } else {
                console.log("JSON data written to ", outputPath1)
            }
        })

        const matchesWonPerTeamPerYear = getMatchesWonPerTeamPerYear(matches)

        fs.writeFile(outputPath2, JSON.stringify(matchesWonPerTeamPerYear, null, 2), (error) => {
            if(error) {
                console.error("Error writing JSON file for problem 2", error)
            } else {
                console.log("JSON data written to ", outputPath2)
            }
        })

        fs.createReadStream(deliveriesFilePath).pipe(csv({}))
            .on('data', (data) => deliveries.push(data))
            .on('end', () => {

                const extraRunsPerTeam = getExtraRunsPerTeam(deliveries, matches)

                fs.writeFile(outputPath3, JSON.stringify(extraRunsPerTeam, null, 2), (error) => {
                    if(error) {
                        console.error("Error writing JSON file for problem 3", error)
                    } else {
                        console.log("JSON data written to ", outputPath3)
                    }
                })
                

                const tenEconomicalBowlers = getTenEconomincalBowler(matches, deliveries)

                fs.writeFile(outputPath4, JSON.stringify(tenEconomicalBowlers, null, 2), (error) => {
                    if(error) {
                        console.error("Error writing JSON file for problem 4", error)
                    } else {
                        console.log("JSON data written to ", outputPath4)
                    }
                })

                const teamsWhoWonTossAndMatch = findTeamsWhoWonTossAndMatch(matches)

                fs.writeFile(outputPath5, JSON.stringify(teamsWhoWonTossAndMatch, null, 2), (error) => {
                    if(error) {
                        console.error("Error writing JSON file for problem 5", error)
                    } else {
                        console.log("JSON data written to ", outputPath5)
                    }
                })
                
                const highestPlayerOfMatchPerSeason = getHighestPlayerOfMatch(matches)
                
                fs.writeFile(outputPath6, JSON.stringify(highestPlayerOfMatchPerSeason, null, 2), (error) => {
                    if(error) {
                        console.error("Error writing JSON file for problem 6", error)
                    } else {
                        console.log("JSON data written to ", outputPath6)
                    }
                })

                const strikeRateBatsman = getStrikeRateBatsman(matches, deliveries, "DA Warner")

                fs.writeFile(outputPath7, JSON.stringify(strikeRateBatsman, null, 2), (error) => {
                    if(error) {
                        console.error("Error writing JSON file for problem 7", error)
                    } else {
                        console.log("JSON data written to ", outputPath7)
                    }
                })

                const mostDismissals = findMostDismissals(deliveries) 

                fs.writeFile(outputPath8, JSON.stringify(mostDismissals, null, 2), (error) => {
                    if(error) {
                        console.error("Error writing JSON file for problem 8", error)
                    } else {
                        console.log("JSON data written to ", outputPath8)
                    }
                })

                const bowlerWithBestEconomySuperOver = toFindBowlerWithTheBestEconomySuperOver(deliveries)

                fs.writeFile(outputPath9, JSON.stringify(bowlerWithBestEconomySuperOver, null, 2), (error) => {
                    if(error) {
                        console.error("Error writing JSON file for problem 9", error)
                    } else {
                        console.log("JSON data written to ", outputPath9)
                    }
                })

            })
            
           
            
    })




