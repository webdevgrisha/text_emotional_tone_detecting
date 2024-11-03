interface SentenceConfig {
    sentiment: {
        magnitude: number;
        score: number;
    };
    text: {
        content: string;
    };
}

interface AnalysisData {
    documentSentiment: {
        magnitude: number;
        score: number;
    };
    language: "en";
    sentences: SentenceConfig[];
}


export type {
    AnalysisData
}