const { default: expect } = require("expect")
const { getStrikeRateBatsman } = require("../src/server/7-strike-rate-batsman")


const matches = [
  {
    id: '3',
    season: '2016',
    city: 'Kolkata',
    date: '2015-05-24',
    team1: 'Mumbai Indians',
    team2: 'Chennai Super Kings',
    toss_winner: 'Chennai Super Kings',
    toss_decision: 'field',
    result: 'normal',
    dl_applied: '0',
    winner: 'Mumbai Indians',
    win_by_runs: '41',
    win_by_wickets: '0',
    player_of_match: 'RG Sharma',
    venue: 'Eden Gardens',
    umpire1: 'HDPK Dharmasena',
    umpire2: 'RK Illingworth',
    umpire3: ''
  }
]

const deliveries = [
    {
        match_id: '1',
        inning: '2',
        batting_team: 'Royal Challengers Bangalore',
        bowling_team: 'Sunrisers Hyderabad',
        over: '18',
        ball: '4',
        batsman: 'STR Binny',
        non_striker: 'Sachin Baby',
        bowler: 'B Kumar',
        is_super_over: '0',
        wide_runs: '0',
        bye_runs: '0',
        legbye_runs: '0',
        noball_runs: '0',
        penalty_runs: '0',
        batsman_runs: '0',
        extra_runs: '0',
        total_runs: '0',
        player_dismissed: '',
        dismissal_kind: '',
        fielder: ''
      },
      {
        match_id: '3',
        inning: '2',
        batting_team: 'Royal Challengers Bangalore',
        bowling_team: 'Sunrisers Hyderabad',
        over: '20',
        ball: '6',
        batsman: 'Iqbal Abdulla',
        non_striker: 'Sachin Baby',
        bowler: 'B Kumar',
        is_super_over: '0',
        wide_runs: '0',
        bye_runs: '0',
        legbye_runs: '0',
        noball_runs: '0',
        penalty_runs: '0',
        batsman_runs: '1',
        extra_runs: '0',
        total_runs: '4',
        player_dismissed: '',
        dismissal_kind: '',
        fielder: ''
      }
    ]

const expected = {"2016": "100.00"}

test('Returns the strike rate per season of the batsman', () => {
    expect(getStrikeRateBatsman(matches, deliveries,'Iqbal Abdulla')).toEqual(expected)
})