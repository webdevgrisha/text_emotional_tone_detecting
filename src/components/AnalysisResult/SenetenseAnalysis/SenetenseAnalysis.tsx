import "./SenetenseAnalysis.css";
import {
  getSentimentTone,
  negativeColorInterpolation,
  positiveColorInterpolation,
} from "../analysisFuncs";

interface SenetenseAnalysisProps {
  text: string;
  index: number;
  score: number;
  magnitude: number;
}

function SenetenseAnalysis({
  text,
  index,
  score,
  magnitude,
}: SenetenseAnalysisProps) {
  const tone = getSentimentTone(score);
  const toneColor =
    score >= 0
      ? positiveColorInterpolation(score)
      : negativeColorInterpolation(score);

  return (
    <div className="sentense-analysis">
      <p className="text">
        {index}: {text}
      </p>
      <p className="tone" style={{ color: tone.color }}>
        {tone.tone}
      </p>
      <span
        className="emotional-color"
        style={{ backgroundColor: toneColor }}
      ></span>
    </div>
  );
}

export default SenetenseAnalysis;
