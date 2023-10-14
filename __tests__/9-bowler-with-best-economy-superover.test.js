
const { default: expect } = require("expect")
const { toFindBowlerWithTheBestEconomySuperOver } = require("../src/server/9-bowler-with-best-economy-superover")

const deliveries = [
    { 'is_super_over': '1', 'bowler': 'Bowler1', 'total_runs': '10' },
    { 'is_super_over': '1', 'bowler': 'Bowler2', 'total_runs': '5' },
    { 'is_super_over': '1', 'bowler': 'Bowler1', 'total_runs': '8' },
    { 'is_super_over': '1', 'bowler': 'Bowler2', 'total_runs': '7' },
    { 'is_super_over': '1', 'bowler': 'Bowler3', 'total_runs': '12' },
];


const expected = {
    "bowler": "Bowler2",
    "economy": "36.00"
}


test('Returns the extra runs per team', () => {
    expect(toFindBowlerWithTheBestEconomySuperOver(deliveries)).toEqual(expected)
})