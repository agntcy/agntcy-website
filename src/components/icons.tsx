import { cn } from "lib/utils";

const ArrowIcon = ({
  width = 48,
  height = 48,
  className,
  pathData,
}: {
  width?: string | number;
  height?: string | number;
  className?: string;
  pathData: string;
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("", className)}
    >
      <path d={pathData} fill="#FBAB2C" />
    </svg>
  );
};

export const ArrowRight = (props: {
  width?: string | number;
  height?: string | number;
  className?: string;
}) => (
  <ArrowIcon
    {...props}
    pathData="M10.1965 28.8001C9.92646 28.8001 9.65646 28.6901 9.45646 28.4701C9.08646 28.0601 9.11646 27.4301 9.52646 27.0601L21.6565 16.0001L9.52646 4.94012C9.11646 4.57012 9.08646 3.94012 9.45646 3.53012C9.82646 3.12012 10.4665 3.09012 10.8665 3.46012L24.6165 16.0001L10.8665 28.5401C10.6765 28.7101 10.4365 28.8001 10.1965 28.8001Z"
  />
);

export const ArrowLeft = (props: {
  width?: string | number;
  height?: string | number;
  className?: string;
}) => (
  <ArrowIcon
    {...props}
    pathData="M21.47 28.8001C21.23 28.8001 20.99 28.7101 20.8 28.5401L7.04004 16.0001L20.8 3.46012C21.21 3.09012 21.84 3.12012 22.21 3.53012C22.58 3.94012 22.55 4.57012 22.14 4.94012L10.01 16.0001L22.14 27.0601C22.55 27.4301 22.58 28.0601 22.21 28.4701C22.01 28.6901 21.74 28.8001 21.47 28.8001Z"
  />
);

export const ArrowLongRight = ({ size = 55, color = "currentColor" }) => {
  return (
    <svg
      stroke={color}
      fill={color}
      strokeWidth="0"
      viewBox="0 0 512 512"
      height={size}
      width={size}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M295.6 163.7c-5.1 5-5.1 13.3-.1 18.4l60.8 60.9H124.9c-7.1 0-12.9 5.8-12.9 13s5.8 13 12.9 13h231.3l-60.8 60.9c-5 5.1-4.9 13.3.1 18.4 5.1 5 13.2 5 18.3-.1l82.4-83c1.1-1.2 2-2.5 2.7-4.1.7-1.6 1-3.3 1-5 0-3.4-1.3-6.6-3.7-9.1l-82.4-83c-4.9-5.2-13.1-5.3-18.2-.3z"></path>
    </svg>
  );
};
