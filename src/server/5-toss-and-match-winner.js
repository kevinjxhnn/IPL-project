function findTeamsWhoWonTossAndMatch(matches){

    const tossAndMatchWinners = {};

    // For each match, counting when the match winner and the toss winner are the same.
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