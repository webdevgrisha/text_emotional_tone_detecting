import "./AnalysisResult.css";
import { AnalysisData } from "../../interfaces";
import {
  getSentimentTone,
  negativeColorInterpolation,
  positiveColorInterpolation,
  sentimentColor,
} from "./analysisFuncs";
import SenetenseAnalysis from "./SenetenseAnalysis/SenetenseAnalysis";
import MagnitudeVisualisation from "./MagnitudeVisualisation/MagnitudeVisualisation";

interface AnalysisResultProps {
  result: null | AnalysisData;
}

const emotions: string[] = [
  "Strong Negative",
  "Moderate Negative",
  "Slightly Negative",
  "Neutral",
  "Slightly Positive",
  "Moderate Positive",
  "Strong Positive",
];

function AnalysisResult({ result }: AnalysisResultProps) {
  if (result === null) return null;

  const { documentSentiment, sentences } = result;

  const { magnitude, score } = documentSentiment;

  const primaryTone = getSentimentTone(score);
  const primaryColor = sentimentColor[primaryTone];

  const primaryToneColor =
    score >= 0
      ? positiveColorInterpolation(score)
      : negativeColorInterpolation(score);

  console.log("primaryToneColor: ", primaryToneColor);

  return (
    <section className="analysis-result">
      <header className="total-result">
        <h2>
          Primary tone -<i style={{ color: primaryColor }}> {primaryTone}</i>
        </h2>
        <span
          className="emotional-color"
          style={{ backgroundColor: primaryToneColor }}
        >{score.toFixed(2)}</span>
      </header>

      <div className="emotional-scale">
        <span className="gradient"></span>
        <ul className="emotions">
          {emotions.map((emotion, index) => {
            const color = sentimentColor[emotion];
            return (
              <li key={index} style={{ color: color }}>
                {emotion}
              </li>
            );
          })}
        </ul>
      </div>

      <MagnitudeVisualisation magnitude={magnitude} width={10000} height={100}/>

      <div className="sentences">
        {sentences.map(({ text, sentiment }, index) => {
          const { score, magnitude } = sentiment;

          return (
            <SenetenseAnalysis
              key={index}
              index={index + 1}
              text={text.content}
              score={score}
              magnitude={magnitude}
            />
          );
        })}
      </div>
    </section>
  );
}

export default AnalysisResult;
