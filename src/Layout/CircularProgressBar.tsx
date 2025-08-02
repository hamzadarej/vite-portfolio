import { FC } from "react";

interface Props {
  strokeWidth?: number;
  sqSize?: number;
  percentage: number;
  inView: boolean;
}

const CircularProgressBar: FC<Props> = (props) => {
  const { strokeWidth = 8, sqSize = 160, percentage, inView } = props;
  const radius = (sqSize - strokeWidth) / 2;
  const viewBox = `0 0 ${sqSize} ${sqSize}`;
  const dashArray = radius * Math.PI * 2;
  const percentageValue = inView ? percentage : 0;
  const dashOffset = dashArray - (dashArray * (percentageValue || 0)) / 100;
  const statusMessage = `${percentageValue}%`;

  return (
    <svg width={sqSize} height={sqSize} viewBox={viewBox}>
      <circle
        className="fill-none stroke-white"
        cx={sqSize / 2}
        cy={sqSize / 2}
        r={radius}
        strokeWidth={`${strokeWidth}px`}
      />
      <circle
        className="fill-none stroke-black transition-all ease-in duration-500"
        cx={sqSize / 2}
        cy={sqSize / 2}
        r={radius}
        strokeLinecap="round"
        strokeWidth={`${strokeWidth}px`}
        transform={`rotate(-90 ${sqSize / 2} ${sqSize / 2})`}
        style={{
          strokeDasharray: dashArray,
          strokeDashoffset: dashOffset,
        }}
      />
      <text
        x="50%"
        y="50%"
        dy=".3em"
        textAnchor="middle"
        color="red"
        fill="#172554"
        className="text-3xl font-semibold"
      >
        {statusMessage}
      </text>
    </svg>
  );
};
export default CircularProgressBar;
