const fs = require("fs")
const csv = require("csv-parser")
const { getNumberOfMatchesPerYear } = require("./src/server/1-matches-per-year")

const matchFilePath = "./src/data/matches.csv"
const deliveriesFilePath = "./src/data/deliveries.csv"

const outputPath1 = "./src/public/output/matchesPerYear.json"

const matches = []
const deliveries = []

fs.createReadStream(matchFilePath).pipe(csv({}))
    .on('data', (data) => matches.push(data))
    .on('end', () => {
        const matchesPerYear = getNumberOfMatchesPerYear(matches)

        fs.writeFile(outputPath1, JSON.stringify(matchesPerYear), (error) => {
            if(error) {
                console.error("Error writing JSON file", error)
            } else {
                console.log("JSON data written to ", outputPath1)
            }
        })
       
    })



