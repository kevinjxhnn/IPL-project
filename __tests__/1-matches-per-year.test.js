const { default: expect } = require("expect")
const { getNumberOfMatchesPerYear } = require("../src/server/1-matches-per-year")

const matchesTest = [
    {'season' : 2008, 'city': 'Kolkata'}, 
    {'season' : 2008, 'city': 'Bangalore'}, 
    {'season' : 2009, 'city': 'Delhi'}
]

const expected = {"2008": 2, "2009": 1}


test('Returns the number of matches per year', () => {
    expect(getNumberOfMatchesPerYear(matchesTest)).toEqual(expected)
})