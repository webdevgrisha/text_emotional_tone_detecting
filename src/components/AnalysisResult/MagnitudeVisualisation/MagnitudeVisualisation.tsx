import './MagnitudeVisualisation.css'

function MagnitudeVisualisation({
  magnitude = 0.1,
  width = 1000,
  height = 100,
}) {
  const points = [];

  for (let x = 0; x <= width; x += 0.1) {
    const normalizedX = x * magnitude * 0.01;
    const y = Math.sin(normalizedX) * (height / 2 - 5) + height / 1.3;
    points.push(`${x},${y}`);
  }

  return (
    <div className="magnitude-container">
      <h4>Magnitude: {magnitude}</h4>
      <svg width="100%" height="auto">
        <polyline
          fill="none"
          stroke="#2596be"
          strokeWidth="2"
          points={points.join(" ")}
        />
      </svg>
    </div>
  );
}

export default MagnitudeVisualisation;
