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
      {/* N Left Stem */}
      <path
        d="M 110 80 C 110 68.95 118.95 60 130 60 L 170 60 C 181.05 60 190 68.95 190 80 L 190 420 C 190 431.05 181.05 440 170 440 L 130 440 C 118.95 440 110 431.05 110 420 Z"
        fill={fillColor}
      />
      {/* N Right Stem */}
      <path
        d="M 310 80 C 310 68.95 318.95 60 330 60 L 370 60 C 381.05 60 390 68.95 390 80 L 390 420 C 390 431.05 381.05 440 370 440 L 330 440 C 318.95 440 310 431.05 310 420 Z"
        fill={fillColor}
      />
      {/* N Diagonal */}
      <path
        d="M 130 60 L 190 60 L 370 440 L 310 440 Z"
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
