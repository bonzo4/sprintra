interface CodeIconProps {
  size: number;
}

export default function CodeIcon({ size }: CodeIconProps) {
  return (
    <svg
      className={`h-${size} w-${size} text-white`}
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
      />
    </svg>
  );
}
