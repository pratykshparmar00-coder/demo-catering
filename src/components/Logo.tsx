import React from 'react';

interface LogoProps extends React.SVGProps<SVGSVGElement> {
  className?: string;
  fillColor?: string;
  accentColor?: string;
}

export const Logo: React.FC<LogoProps> = ({
  className = "w-8 h-8",
  fillColor = "currentColor",
  accentColor = "#C5A059",
  ...props
}) => {
  return (
    <svg
      width="500"
      height="500"
      viewBox="0 0 500 500"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...props}
    >
      {/* R Stem */}
      <path
        d="M 110 80 C 110 68.95 118.95 60 130 60 L 170 60 C 181.05 60 190 68.95 190 80 L 190 420 C 190 431.05 181.05 440 170 440 L 130 440 C 118.95 440 110 431.05 110 420 Z"
        fill={fillColor}
      />
      {/* R Loop */}
      <path
        d="M 170 60 L 290 60 C 367.32 60 430 122.68 430 200 C 430 277.32 367.32 340 290 340 L 220 340 L 220 260 L 285 260 C 318.14 260 345 233.14 345 200 C 345 166.86 318.14 140 285 140 L 170 140 Z"
        fill={fillColor}
      />
      {/* R Leg */}
      <path
        d="M 225 260 L 335 414 C 345.5 428.7 362.4 437.5 380.5 437.5 L 420 437.5 C 438.2 437.5 447.8 416 435.5 402.6 L 310 260 Z"
        fill={fillColor}
      />
      {/* Luxury Spark Accent */}
      <path
        d="M 400 70 Q 400 110 440 110 Q 400 110 400 150 Q 400 110 360 110 Q 400 110 400 70 Z"
        fill={accentColor}
      />
    </svg>
  );
};
