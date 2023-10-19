function findMostDismissals(deliveries) {
  const dismissalData = {};

  deliveries.forEach((delivery) => {
    const batsman = delivery.batsman;
    const bowler = delivery.bowler;
    const dismissalKind = delivery.dismissal_kind;

    // Calculating the count of the most dismissal
    if (dismissalKind && dismissalKind !== "run out") {
      const key = { batsman, bowler }; // Change the key to an object

      const keyString = JSON.stringify(key); 

      if (dismissalData[keyString]) {
        dismissalData[keyString]++;
      } else {
        dismissalData[keyString] = 1;
      }
    }
  });

  const maxDismissal = Object.keys(dismissalData).reduce((a, b) =>
    dismissalData[a] > dismissalData[b] ? a : b
  );

  return {
    mostFrequentDismissal: JSON.parse(maxDismissal), 
    frequency: dismissalData[maxDismissal],
  };
}

module.exports = { findMostDismissals };
