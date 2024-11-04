interface SentimentResult {
    tone: string;
    color: string;
};

function getSentimentTone(score: number): SentimentResult {
    if (score <= -0.75) {
        return { tone: "Strong Negative", color: "rgb(153, 0, 0)" };
    } else if (score <= -0.5) {
        return { tone: "Moderate Negative", color: "rgb(180, 0, 50)" };
    } else if (score < -0.25) {
        return { tone: "Slightly Negative", color: "rgb(170, 85, 0)" };
    } else if (score >= -0.25 && score <= 0.25) {
        return { tone: "Neutral", color: "rgb(128, 128, 128)" };
    } else if (score > 0.25 && score <= 0.5) {
        return { tone: "Slightly Positive", color: "rgb(200, 255, 150)" };
    } else if (score > 0.5 && score <= 0.75) {
        return { tone: "Moderate Positive", color: "rgb(100, 255, 100)" };
    } else if (score > 0.75) {
        return { tone: "Strong Positive", color: "rgb(0, 255, 255)" };
    }

    return { tone: "Undefined Tone", color: "rgb(128, 128, 128)" };
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
    getSentimentTone,
    negativeColorInterpolation,
    positiveColorInterpolation
}