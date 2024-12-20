import "./MagnitudeVisualisation.css";

interface MagnitudeVisualisationProps {
  showTitle?: boolean;
  scale?: number;
  magnitude: number;
  width: number;
  height: number;
}

function MagnitudeVisualisation({
  showTitle = true,
  scale = 0.01,
  magnitude = 0.1,
  width = 10000,
  height = 100,
}: MagnitudeVisualisationProps) {
  const period: number = (2 * Math.PI / scale) / magnitude;
  const waveSpeed: number = Math.round(magnitude);

  const style: React.CSSProperties = {
    "--period": `-${Math.trunc(period)}px`,
    "--wave-speed": `${waveSpeed || 1}s`,
  } as React.CSSProperties;

  const points = [];

  for (let x = 0; x <= width; x++) {
    const normalizedX = x * magnitude * scale;
    const y = Math.sin(normalizedX) * -1 * (height / 2 - 5) + height / 2;

    points.push(`${x},${y}`);
  }

  return (
    <div className="magnitude-container" style={style}>
      {showTitle && <h4>Magnitude: {magnitude}</h4>}
      <div className="wave-wrapper">
        <svg width={width} height={height}>
          <polyline
            fill="none"
            stroke="#2596be"
            strokeWidth="2"
            points={points.join(" ")}
          />
        </svg>
      </div>
    </div>
  );
}

export default MagnitudeVisualisation;
