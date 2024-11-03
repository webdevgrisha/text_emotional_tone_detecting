import "./SenetenseAnalysis.css";
import { getSentimentTone, sentimentToEmotionColor } from "../analysisFuncs";

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
  const tone = getSentimentTone(score, magnitude);
  const toneColor = sentimentToEmotionColor(score, magnitude);

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
