async function readJsonFile(fileName) {
  try {
    const response = await fetch(`output/${fileName}`);
    const data = await response.json();
    return data;
  } catch (err) {
    console.error(err);
  }
}

function visualiseExtraRunsPerTeam(data) {
  Highcharts.chart('extraRunsPerTeam', {
    chart: {
      type: 'column',
    },
    title: {
      text: 'Extra Runs',
    },
    xAxis: {
      categories: Object.keys(data),
      title: {
        text: 'Team',
      },
    },
    yAxis: {
      title: {
        text: 'Runs',
      },
    },
    series: [
      {
        name: 'Runs',
        data: Object.values(data),
      },
    ],
  });
}

function visualiseMatchesPerYear(data) {
  Highcharts.chart('matchesPerYear', {
    chart: {
      type: 'column',
    },
    title: {
      text: 'Matches Per Year',
    },
    xAxis: {
      categories: Object.keys(data),
      title: {
        text: 'Year',
      },
    },
    yAxis: {
      title: {
        text: 'Matches',
      },
    },
    series: [
      {
        name: 'No of Matches',
        data: Object.values(data),
      },
    ],
  });
}

function visualiseBowlerWithBestEconomySuperOver(data) {
  Highcharts.chart('bowlerWithBestEconomySuperOver', {
    chart: {
      type: 'column',
    },
    title: {
      text: 'Bowler With the Best Economy in Super Over',
    },
    xAxis: {
      categories: [data.bowler],
      title: {
        text: 'Bowler',
      },
    },
    yAxis: {
      title: {
        text: 'economy',
      },
    },
    series: [
      {
        name: 'Economy',
        data: [parseFloat(data.economy)],
      },
    ],
  });
}

function visualiseTenEconomicalBowlers(data) {
  const categories = data.map((entry) => entry.bowler);
  const economyData = data.map((entry) => parseFloat(entry.economyRate));

  Highcharts.chart('tenEconomicalBowlers', {
    chart: {
      type: 'column',
    },
    title: {
      text: 'Ten Economical Bowlers',
    },
    xAxis: {
      categories: categories,
      title: {
        text: 'Bowler',
      },
    },
    yAxis: {
      title: {
        text: 'economy',
      },
    },
    series: [
      {
        name: 'Economy',
        data: economyData,
      },
    ],
  });
}

function visualiseHighestPlayerOfMatchPerSeason(data) {
  const years = Object.keys(data);
  const players = years.map(
    (year) => `${year} - ${data[year].players.join(', ')}`,
  );
  const awards = years.map((year) => data[year].awards);

  Highcharts.chart('highestPlayerOfMatchPerSeason', {
    chart: {
      type: 'column',
    },
    title: {
      text: 'Highest Player Of Match Per Season',
    },
    xAxis: {
      categories: players, // Combine years and players in the x-axis
      title: {
        text: 'Year - Player',
      },
    },
    yAxis: {
      title: {
        text: 'Awards',
      },
    },
    series: [
      {
        name: 'Awards',
        data: awards,
      },
    ],
  });
}

function visualizeMatchesPerTeamPerYear(data) {
  const years = Object.keys(data);
  const teams = [
    ...new Set(Object.values(data).flatMap((matches) => Object.keys(matches))),
  ];

  const seriesData = teams.map((team) => ({
    name: team,
    data: years.map((year) => data[year][team] || 0),
  }));

  Highcharts.chart('matchesWonPerTeamPerYear', {
    chart: {
      type: 'column',
    },
    title: {
      text: 'Matches Won Team Per Year',
    },
    xAxis: {
      categories: years,
      title: {
        text: 'Year',
      },
    },
    yAxis: {
      title: {
        text: 'Matches',
      },
    },
    series: seriesData,
  });
}

function visualiseMostDismissals(data) {
  Highcharts.chart('mostDismissals', {
    chart: {
      type: 'column',
    },
    title: {
      text: 'Most Dismissals',
    },
    xAxis: {
      categories: [data.mostFrequentDismissal.bowler],
      title: {
        text: 'Dismissed',
      },
    },
    yAxis: {
      title: {
        text: 'Frequency',
      },
    },
    series: [
      {
        name: 'Frequency',
        data: [data.frequency],
      },
    ],
  });
}

function visualiseTeamsWhoWonTossAndMatch(data) {
  Highcharts.chart('teamsWhoWonTossAndMatch', {
    chart: {
      type: 'column',
    },
    title: {
      text: 'Teams Who Won The Toss And The Match',
    },
    xAxis: {
      categories: Object.keys(data),
      title: {
        text: 'Team',
      },
    },
    yAxis: {
      title: {
        text: 'Frequency',
      },
    },
    series: [
      {
        name: 'Frequency',
        data: Object.values(data),
      },
    ],
  });
}

function visualiseStrikeRateBatsman(data){
  const years = Object.keys(data);
  const strikeRates = years.map((year) => parseFloat(data[year]));

  Highcharts.chart('strikeRateBatsman', {
    chart: {
      type: 'column',
    },
    title: {
      text: 'Strike Rate of DA Warner',
    },
    xAxis: {
      categories: years,
      title: {
        text: 'Years',
      },
    },
    yAxis: {
      title: {
        text: 'Strike Rate',
      },
    },
    series: [
      {
        name: 'Strike Rate',
        data: strikeRates,
      },
    ],
  });
}

readJsonFile('extraRunsPerTeam.json')
  .then((data) => {
    visualiseExtraRunsPerTeam(data);
  })
  .catch((err) => {
    console.log(err);
  });

readJsonFile('matchesPerYear.json')
  .then((data) => {
    visualiseMatchesPerYear(data);
  })
  .catch((err) => {
    console.log(err);
  });

readJsonFile('bowlerWithBestEconomySuperOver.json')
  .then((data) => {
    visualiseBowlerWithBestEconomySuperOver(data);
  })
  .catch((err) => {
    console.log(err);
  });

readJsonFile('tenEconomicalBowlers.json')
  .then((data) => {
    visualiseTenEconomicalBowlers(data);
  })
  .catch((err) => {
    console.log(err);
  });

readJsonFile('highestPlayerOfMatchPerSeason.json')
  .then((data) => {
    visualiseHighestPlayerOfMatchPerSeason(data);
  })
  .catch((err) => {
    console.log(err);
  });

readJsonFile('matchesWonPerTeamPerYear.json')
  .then((data) => {
    visualizeMatchesPerTeamPerYear(data);
  })
  .catch((err) => {
    console.log(err);
  });

readJsonFile('mostDismissals.json')
  .then((data) => {
    visualiseMostDismissals(data);
  })
  .catch((err) => {
    console.log(err);
  });

readJsonFile('teamsWhoWonTossAndMatch.json')
  .then((data) => {
    visualiseTeamsWhoWonTossAndMatch(data);
  })
  .catch((err) => {
    console.log(err);
  });

readJsonFile('strikeRateBatsman.json')
  .then((data) => {
    console.log(data)
    visualiseStrikeRateBatsman(data)
  })
  .catch((err) => {
    console.log(err)
  })
