import "./SenetenseAnalysis.css";
import {
  getSentimentTone,
  negativeColorInterpolation,
  positiveColorInterpolation,
  sentimentColor,
} from "../analysisFuncs";
import MagnitudeVisualisation from "../MagnitudeVisualisation/MagnitudeVisualisation";

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
  const color = sentimentColor[tone];
  const toneColor =
    score >= 0
      ? positiveColorInterpolation(score)
      : negativeColorInterpolation(score);

  return (
    <div className="sentense-analysis">
      <span className="emotional-color" style={{ backgroundColor: toneColor }}>
        {score.toFixed(2)}
      </span>
      <p className="text">
        {index}: {text}
      </p>
      <p className="tone" style={{ color: color }}>
        {tone}
      </p>
      <span className="magnitude-score">
        {magnitude.toFixed(2)}
      </span>
        <MagnitudeVisualisation
          showTitle={false}
          scale={0.1}
          magnitude={magnitude}
          height={40}
          width={10000}
        />
    </div>
  );
}

export default SenetenseAnalysis;
