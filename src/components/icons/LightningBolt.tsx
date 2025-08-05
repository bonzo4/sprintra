interface LightningBoltProps {
  size: number;
  pulse?: boolean;
}

export default function LightningBolt({
  size,
  pulse = false,
}: LightningBoltProps) {
  return (
    <svg
      className={`h-${size} w-${size} ${pulse ? "animate-pulse" : ""}`}
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M13 10V3L4 14h7v7l9-11h-7z"
      />
    </svg>
  );
}
