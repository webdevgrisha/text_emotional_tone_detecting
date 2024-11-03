interface SentimentResult {
    tone: string;
    color: string;
};

function getSentimentTone(score: number, magnitude: number): SentimentResult {
    if (score <= -0.75 && magnitude >= 1.5) {
        return { tone: "Strong Negative", color: "rgb(153, 0, 0)" };
    } else if (score < -0.5 && score > -0.75 && magnitude >= 1.0) {
        return { tone: "Moderate Negative", color: "rgb(180, 0, 50)" };
    } else if (score < -0.25 && score >= -0.5) {
        return { tone: "Slightly Negative", color: "rgb(170, 85, 0)" };
    } else if (score >= -0.25 && score <= 0.25) {
        return { tone: "Neutral", color: "rgb(128, 128, 128)" };
    } else if (score > 0.25 && score <= 0.5) {
        return { tone: "Slightly Positive", color: "rgb(200, 255, 150)" };
    } else if (score > 0.5 && score <= 0.75) {
        return { tone: "Moderate Positive", color: "rgb(100, 255, 100)" };
    } else if (score > 0.75 && magnitude >= 1.5) {
        return { tone: "Strong Positive", color: "rgb(0, 255, 255)" };
    }

    return { tone: "Undefined Tone", color: "rgb(128, 128, 128)" };
}

function sentimentToEmotionColor(score: number, magnitude: number): string {
    // Нормализуем score от [-1, 1] к диапазону [0, 1] для удобства
    const normalizedScore = (score + 1) / 2;

    // Задаем базовые цвета для трех основных эмоциональных категорий
    const positiveColor = { r: 255, g: 223, b: 0 };      // Положительные: Жёлто-оранжевый
    const neutralColor = { r: 128, g: 128, b: 128 };     // Нейтральные: Серый
    const negativeColor = { r: 128, g: 0, b: 255 };      // Отрицательные: Фиолетовый

    let r, g, b;

    if (score > 0) {
        // Положительные эмоции (от нейтрального к жёлто-оранжевому)
        r = Math.round((1 - normalizedScore) * neutralColor.r + normalizedScore * positiveColor.r);
        g = Math.round((1 - normalizedScore) * neutralColor.g + normalizedScore * positiveColor.g);
        b = Math.round((1 - normalizedScore) * neutralColor.b + normalizedScore * positiveColor.b);
    } else if (score < 0) {
        // Отрицательные эмоции (от нейтрального к фиолетовому)
        r = Math.round((1 - normalizedScore) * negativeColor.r + normalizedScore * neutralColor.r);
        g = Math.round((1 - normalizedScore) * negativeColor.g + normalizedScore * neutralColor.g);
        b = Math.round((1 - normalizedScore) * negativeColor.b + normalizedScore * neutralColor.b);
    } else {
        // Нейтральные эмоции (значение score около 0)
        r = neutralColor.r;
        g = neutralColor.g;
        b = neutralColor.b;
    }

    // Применяем фактор насыщенности (saturation factor) на основе magnitude
    // Увеличиваем значимость magnitude, используя более агрессивное масштабирование
    const saturationFactor = Math.min(1, magnitude / 3); // Более интенсивная насыщенность
    const finalR = Math.round(r * saturationFactor + neutralColor.r * (1 - saturationFactor));
    const finalG = Math.round(g * saturationFactor + neutralColor.g * (1 - saturationFactor));
    const finalB = Math.round(b * saturationFactor + neutralColor.b * (1 - saturationFactor));

    return `rgb(${finalR}, ${finalG}, ${finalB})`;
}




export {
    getSentimentTone,
    sentimentToEmotionColor
}