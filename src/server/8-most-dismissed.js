function findMostDismissals(deliveries) {
    const dismissalData = {};

    deliveries.forEach((delivery) => {
        const batsman = delivery.batsman;
        const bowler = delivery.bowler;
        const dismissalKind = delivery.dismissal_kind;

        if (dismissalKind && dismissalKind !== 'run out') {
            const key = `${batsman} dismissed by ${bowler}`;

            if (dismissalData[key]) {
                dismissalData[key]++;
            } else {
                dismissalData[key] = 1;
            }
        }
    });

    console.log(dismissalData)

    const maxDismissal = Object.keys(dismissalData).reduce((a, b) =>
        dismissalData[a] > dismissalData[b] ? a : b
    );

    return { mostFrequentDismissal: maxDismissal, frequency: dismissalData[maxDismissal] };
}

module.exports = { findMostDismissals }
