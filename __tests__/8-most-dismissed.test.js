const { default: expect } = require("expect")
const { findMostDismissals } = require("../src/server/8-most-dismissed")



const deliveries = [
    {
        batsman: 'PlayerA',
        bowler: 'PlayerX',
        dismissal_kind: 'caught',
    },
    {
        batsman: 'PlayerB',
        bowler: 'PlayerY',
        dismissal_kind: 'bowled',
    },
    {
        batsman: 'PlayerC',
        bowler: 'PlayerX',
        dismissal_kind: 'lbw',
    },
    {
        batsman: 'PlayerA',
        bowler: 'PlayerX',
        dismissal_kind: 'run out',
    },
    {
        batsman: 'PlayerX',
        bowler: 'PlayerY',
        dismissal_kind: 'caught',
    },
    {
        batsman: 'PlayerA',
        bowler: 'PlayerX',
        dismissal_kind: 'caught',
    },
    {
        batsman: 'PlayerC',
        bowler: 'PlayerY',
        dismissal_kind: 'bowled',
    },
];


const expected = {
    "frequency": 2,
    "mostFrequentDismissal": "PlayerA dismissed by PlayerX"
}


test('Return the most dismissals', () => {
    expect(findMostDismissals(deliveries)).toEqual(expected)
})