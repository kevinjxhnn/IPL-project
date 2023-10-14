const { default: expect } = require("expect")
const { getMatchesWonPerTeamPerYear } = require("../src/server/2-matches-won-per-team-per-year")

const matchesTest = [
    {'season' : 2008, 'winner': 'RCB'}, 
    {'season' : 2008, 'winner': 'RCB'}, 
    {'season' : 2009, 'winner': 'KKR'}
]

const expected = {
    "2008" : { "RCB" : 2}, 
    "2009" : { "KKR" : 1}
}


test('Returns the number of matches won per team per year', () => {
    expect(getMatchesWonPerTeamPerYear(matchesTest)).toEqual(expected)
})