const { default: expect } = require("expect")
const { getHighestPlayerOfMatch } = require("../src/server/6-highest-player-of-match")


const matches = [
    { 'player_of_match': 'Yuvraj Singh', 'season': '2017' },
    { 'player_of_match': 'Yuvraj Singh', 'season': '2017' },
    { 'player_of_match': 'Yuvraj Singh', 'season': '2017' },
    { 'player_of_match': 'Yuvraj Singh', 'season': '2017' },
    { 'player_of_match': 'SV Samson', 'season': '2015' },
    { 'player_of_match': 'CJ Anderson', 'season': '2016' },
    { 'player_of_match': 'CJ Anderson', 'season': '2016' },
    { 'player_of_match': 'SV Samson', 'season': '2015' },
    { 'player_of_match': 'Yuvraj Singh', 'season': '2017' },
    { 'player_of_match': 'CJ Anderson', 'season': '2016' },
];

const expected = {
    '2015': { 'player': 'SV Samson', 'awards': 2 },
    '2016': { 'player': 'CJ Anderson', 'awards': 3 },
    '2017': { 'player': 'Yuvraj Singh', 'awards': 5 },
};



test('Returns the highest player of the match for each season', () => {
    expect(getHighestPlayerOfMatch(matches)).toEqual(expected)
})