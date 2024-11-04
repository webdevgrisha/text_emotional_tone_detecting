interface SentimentColor {
    [key: string]: string
}

const sentimentColor: SentimentColor = {
    "Strong Negative": "rgb(178, 34, 34)",
    "Moderate Negative": "rgb(220, 70, 70)",
    "Slightly Negative": "rgb(245, 150, 120)",
    "Neutral": "rgb(169, 169, 169)",
    "Slightly Positive": "rgb(144, 238, 144)",
    "Moderate Positive": "rgb(60, 179, 113)",
    "Strong Positive": "rgb(34, 139, 34)",
}

function getSentimentTone(score: number): string {
    if (score <= -0.75) {
        return "Strong Negative";
    } else if (score <= -0.5) {
        return "Moderate Negative";
    } else if (score < -0.25) {
        return "Slightly Negative";
    } else if (score >= -0.25 && score <= 0.25) {
        return "Neutral";
    } else if (score > 0.25 && score <= 0.5) {
        return "Slightly Positive";
    } else if (score > 0.5 && score <= 0.75) {
        return "Moderate Positive";
    } else if (score > 0.75) {
        return "Strong Positive";
    }

    return "Undefined Tone";
}

// formual: a + (b - a) * x
// - x from zero to one
// - a and b are the starting and ending colours

// (255, 0, 0) -> (128, 128, 128);
//      0      ->       1

// r = 127 * x + 128
// g = b = 128 − 128 * x
function negativeColorInterpolation(score: number): string {
    const emotionScore = Math.abs(score);

    const r = Math.round(127 * emotionScore + 128);
    const g = Math.round(128 - 128 * emotionScore);
    const b = g;


    return `rgb(${r}, ${g}, ${b})`;
}


// (128, 128, 128) -> (0, 255, 0)
//        0        ->      1

// g = 127 * x + 128
// r = b = 128 − 128 * x
function positiveColorInterpolation(score: number): string {
    const g = Math.round(127 * score + 128);
    const r = Math.round(128 - 128 * score);
    const b = r;

    return `rgb(${r}, ${g}, ${b})`;
}


export {
    sentimentColor,
    getSentimentTone,
    negativeColorInterpolation,
    positiveColorInterpolation
}