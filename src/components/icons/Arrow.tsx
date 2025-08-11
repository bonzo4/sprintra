interface ArrowProps {
  dir: "up" | "down" | "left" | "right";
}

export default function Arrow({ dir }: ArrowProps) {
  return (
    <svg
      className={`h-4 w-4 text-slate-400 transition-transform ${
        dir === "up"
          ? "rotate-180"
          : dir === "left"
            ? "rotate-270"
            : dir === "right"
              ? "rotate-90"
              : ""
      }`}
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M19 9l-7 7-7-7"
      />
    </svg>
  );
}
