const fs = require("fs")
const csv = require("csv-parser")
const { getNumberOfMatchesPerYear } = require("./src/server/1-matches-per-year")
const { getMatchesWonPerTeamPerYear } = require("./src/server/2-matches-won-per-team-per-year")

const matchFilePath = "./src/data/matches.csv"

const outputPath1 = "./src/public/output/matchesPerYear.json"
const outputPath2 = "./src/public/output/matchesWonPerTeamPerYear.json"

const matches = []

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
       
        
    })



