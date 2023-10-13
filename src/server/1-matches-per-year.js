function getNumberOfMatchesPerYear(result){
    const matchesPerYear = {}

    result.forEach(element => {
        const year = element.season

        if(matchesPerYear[year]){
            matchesPerYear[year] += 1

        } else {
            matchesPerYear[year] = 1

        }

    });

    return matchesPerYear;
}

module.exports =  { getNumberOfMatchesPerYear }
