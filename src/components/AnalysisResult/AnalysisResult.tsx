import "./AnalysisResult.css";
import { AnalysisData } from "../../interfaces";
import {
  getSentimentTone,
  negativeColorInterpolation,
  positiveColorInterpolation,
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
  const primaryToneColor =
    score >= 0
      ? positiveColorInterpolation(score)
      : negativeColorInterpolation(score);

  console.log("primaryToneColor: ", primaryToneColor);

  return (
    <section className="analysis-result">
      <header className="total-result">
        <h2>
          Primary tone -
          <i style={{ color: primaryTone.color }}> {primaryTone.tone}</i>
        </h2>
        <span
          className="emotional-color"
          style={{ backgroundColor: primaryToneColor }}
        ></span>
      </header>

      <div className="emotional-scale">
        <span className="gradient"></span>
        <ul className="emotions">
          {emotions.map((emotion, index) => {
            return <li key={index}>{emotion}</li>;
          })}
        </ul>
      </div>

      <MagnitudeVisualisation magnitude={magnitude} />

      <div className="sentences">
        {sentences.map(({ text, sentiment }, index) => {
          const { score } = sentiment;

          return (
            <SenetenseAnalysis
              key={index}
              index={index + 1}
              text={text.content}
              score={score}
              magnitude={0}
            />
          );
        })}
      </div>
    </section>
  );
}

export default AnalysisResult;
