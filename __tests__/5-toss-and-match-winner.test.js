const { default: expect } = require("expect")
const { findTeamsWhoWonTossAndMatch } = require("../src/server/5-toss-and-match-winner")


const matches = [
    {'toss_winner' : 'Royal Challengers Bangalore', 'winner': 'Royal Challengers Bangalore'}, 
    {'toss_winner' : 'Royal Challengers Bangalore', 'winner': 'Royal Challengers Bangalore'}, 
    {'toss_winner' : 'Deccan Chargers', 'winner': 'Deccan Chargers'},
    {'toss_winner' : 'Deccan Chargers', 'winner': 'Deccan Chargers'}, 
    {'toss_winner' : 'Deccan Chargers', 'winner': 'Royal Challengers Bangalore'}, 
    {'toss_winner' : 'Pune Warriors', 'winner': 'Pune Warriors'},
]

const expected = {
    "Deccan Chargers": 2,
    "Pune Warriors": 1,
    "Royal Challengers Bangalore": 2
}


test('Returns the teams who won the toss and the match', () => {
    expect(findTeamsWhoWonTossAndMatch(matches)).toEqual(expected)
})