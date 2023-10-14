function findTeamsWhoWonTossAndMatch(matches){

    const tossAndMatchWinners = {};

    matches.forEach((match) => {
        
        const tossWinner = match.toss_winner
        const winner = match.winner

        if(tossWinner == winner){
            if(tossAndMatchWinners[winner]){
                tossAndMatchWinners[winner]++
            
            } else {
                tossAndMatchWinners[winner] = 1

            }
        }
    })

    return tossAndMatchWinners
}

module.exports = { findTeamsWhoWonTossAndMatch }