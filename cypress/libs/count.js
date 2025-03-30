export function calculateAverage(jsonData) {
    // Extract the observations array from the JSON data
    const observations = jsonData.observations;
    console.log(jsonData);
    // Sum the values of "v"
    let sum = 0;
    let count = 0;

    observations.forEach(observation => {
        // Convert the "v" value to a number and add it to the sum
        sum += parseFloat(observation.FXCADUSD.v);
        count++;
    });

    // Calculate and return the average
    return (sum / count).toFixed(3);
}