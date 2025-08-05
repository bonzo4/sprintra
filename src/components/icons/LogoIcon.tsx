interface LogoIconProps {
  size?: "xs" | "sm" | "md" | "lg" | "xl";
}

const sizeConfig = {
  xs: "h-3 w-3",
  sm: "h-5 w-5",
  md: "h-6 w-6",
  lg: "h-7 w-7",
  xl: "h-9 w-9",
};

export default function LogoIcon({ size }: LogoIconProps) {
  return (
    <svg
      className={`text-white ${size ? sizeConfig[size] : ""}`}
      fill="currentColor"
      viewBox="0 0 24 24"
    >
      <path d="M13 10V3L4 14h7v7l9-11h-7z" />
    </svg>
  );
}
