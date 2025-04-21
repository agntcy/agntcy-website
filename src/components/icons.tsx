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

export const ArrowRight = (props: { width?: string | number; height?: string | number; className?: string }) => (
  <ArrowIcon
    {...props}
    pathData="M10.1965 28.8001C9.92646 28.8001 9.65646 28.6901 9.45646 28.4701C9.08646 28.0601 9.11646 27.4301 9.52646 27.0601L21.6565 16.0001L9.52646 4.94012C9.11646 4.57012 9.08646 3.94012 9.45646 3.53012C9.82646 3.12012 10.4665 3.09012 10.8665 3.46012L24.6165 16.0001L10.8665 28.5401C10.6765 28.7101 10.4365 28.8001 10.1965 28.8001Z"
  />
);

export const ArrowLeft = (props: { width?: string | number; height?: string | number; className?: string }) => (
  <ArrowIcon
    {...props}
    pathData="M21.47 28.8001C21.23 28.8001 20.99 28.7101 20.8 28.5401L7.04004 16.0001L20.8 3.46012C21.21 3.09012 21.84 3.12012 22.21 3.53012C22.58 3.94012 22.55 4.57012 22.14 4.94012L10.01 16.0001L22.14 27.0601C22.55 27.4301 22.58 28.0601 22.21 28.4701C22.01 28.6901 21.74 28.8001 21.47 28.8001Z"
  />
);
