const { default: expect } = require("expect")
const { getExtraRunsPerTeam } = require("../src/server/3-extra-runs-per-team")


const matches = [
    {'id' : 1, 'season': '2016'}, 
    {'id' : 1, 'season': '2016'}, 
    {'id' : 2, 'season': '2016'}
]

const deliveries = [
    {'match_id' : 1, 'extra_runs': '1', 'bowling_team' : "RCB"}, 
    {'match_id' : 1, 'extra_runs': '4', 'bowling_team' : "RCB"}, 
    {'match_id' : 2, 'extra_runs': '0', 'bowling_team' : "KKR"}
]

const expected = {
    "RCB" : 5
}


test('Returns the number of matches per year', () => {
    expect(getExtraRunsPerTeam(deliveries, matches)).toEqual(expected)
})