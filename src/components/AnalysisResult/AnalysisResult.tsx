import "./AnalysisResult.css";
import { AnalysisData } from "../../interfaces";
import {
  getSentimentTone,
  negativeColorInterpolation,
  positiveColorInterpolation,
} from "./analysisFuncs";
import SenetenseAnalysis from "./SenetenseAnalysis/SenetenseAnalysis";

interface AnalysisResultProps {
  result: null | AnalysisData;
}

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
      <div className="sentences">
        {sentences.map(({ text, sentiment }, index) => {
          const { magnitude, score } = sentiment;

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
