function getNumberOfMatchesPerYear(matches) {
  const matchesPerYear = {};

  // Filtering through each math and getting the count.
  matches.forEach((element) => {
    const year = element.season;

    if (matchesPerYear[year]) {
      matchesPerYear[year] += 1;
    } else {
      matchesPerYear[year] = 1;
    }
  });

  return matchesPerYear;
}

module.exports = { getNumberOfMatchesPerYear };
