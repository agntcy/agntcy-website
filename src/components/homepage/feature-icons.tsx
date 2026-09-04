import { cn } from "lib/utils";

type FeatureIconProps = {
  className?: string;
};

const iconProps = {
  width: 32,
  height: 32,
  fill: "none" as const,
  xmlns: "http://www.w3.org/2000/svg",
  "aria-hidden": true as const,
  viewBox: "0 0 24 24",
};

export const featureIconClassName = (className?: string) =>
  cn("mb-5 h-[32px] w-[32px] shrink-0", className);

const FeatureIcon = ({
  className,
  d,
}: FeatureIconProps & { d: string }) => (
  <svg {...iconProps} className={featureIconClassName(className)}>
    <path d={d} fill="#FBAF45" />
  </svg>
);

export const DirIcon = ({ className }: FeatureIconProps) => (
  <FeatureIcon
    className={className}
    d="M16.5,12C19,12 21,14 21,16.5C21,17.38 20.75,18.21 20.31,18.9L23.39,22L22,23.39L18.88,20.32C18.19,20.75 17.37,21 16.5,21C14,21 12,19 12,16.5C12,14 14,12 16.5,12M16.5,14A2.5,2.5 0 0,0 14,16.5A2.5,2.5 0 0,0 16.5,19A2.5,2.5 0 0,0 19,16.5A2.5,2.5 0 0,0 16.5,14M19,8H3V18H10.17C10.34,18.72 10.63,19.39 11,20H3C1.89,20 1,19.1 1,18V6C1,4.89 1.89,4 3,4H9L11,6H19A2,2 0 0,1 21,8V11.81C20.42,11.26 19.75,10.81 19,10.5V8Z"
  />
);

export const SlimIcon = ({ className }: FeatureIconProps) => (
  <FeatureIcon
    className={className}
    d="M20 5H9C7.9 5 7 5.9 7 7V21L11 17H20C21.1 17 22 16.1 22 15V7C22 5.9 21.1 5 20 5M20 15H10.2L9 16.2V7H20V15M3 7C2.4 7 2 7.4 2 8S2.4 9 3 9H5V7H3M2 11C1.4 11 1 11.4 1 12S1.4 13 2 13H5V11H2M1 15C.4 15 0 15.4 0 16C0 16.6 .4 17 1 17H5V15H1Z"
  />
);

export const ShadiIcon = ({ className }: FeatureIconProps) => (
  <FeatureIcon
    className={className}
    d="M21,11C21,16.55 17.16,21.74 12,23C6.84,21.74 3,16.55 3,11V5L12,1L21,5V11M12,21C15.75,20 19,15.54 19,11.22V6.3L12,3.18L5,6.3V11.22C5,15.54 8.25,20 12,21M11,14H13V17H16V12H18L12,7L6,12H8V17H11V14"
  />
);

export const AgentBridgeIcon = ({ className }: FeatureIconProps) => (
  <FeatureIcon
    className={className}
    d="M3 1C1.89 1 1 1.89 1 3V14C1 15.11 1.89 16 3 16H14C15.11 16 16 15.11 16 14V11H14V14H3V3H14V5H16V3C16 1.89 15.11 1 14 1M9 7C7.89 7 7 7.89 7 9V12H9V9H20V20H9V18H7V20C7 21.11 7.89 22 9 22H20C21.11 22 22 21.11 22 20V9C22 7.89 21.11 7 20 7H9"
  />
);

export const IdentityIcon = ({ className }: FeatureIconProps) => (
  <FeatureIcon
    className={className}
    d="M21,11C21,16.55 17.16,21.74 12,23C6.84,21.74 3,16.55 3,11V5L12,1L21,5V11M12,21C15.75,20 19,15.54 19,11.22V6.3L12,3.18L5,6.3V11.22C5,15.54 8.25,20 12,21M12,6A3,3 0 0,1 15,9C15,10.31 14.17,11.42 13,11.83V14H15V16H13V18H11V11.83C9.83,11.42 9,10.31 9,9A3,3 0 0,1 12,6M12,8A1,1 0 0,0 11,9A1,1 0 0,0 12,10A1,1 0 0,0 13,9A1,1 0 0,0 12,8Z"
  />
);

export const ObserveIcon = ({ className }: FeatureIconProps) => (
  <FeatureIcon
    className={className}
    d="M16,11.78L20.24,4.45L21.97,5.45L16.74,14.5L10.23,10.75L5.46,19H22V21H2V3H4V17.54L9.5,8L16,11.78Z"
  />
);
