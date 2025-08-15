export const PROJECT_TYPE_OPTIONS = [
  {
    value: "hackathon" as const,
    label: "Hackathon (24-48 hours)",
    description: "Ultra-fast development with time-boxed 2-hour blocks",
    timeframe: "24-48 hours",
  },
  {
    value: "mvp" as const,
    label: "MVP Sprint (1-4 weeks)",
    description: "Minimum viable product with weekly sprints",
    timeframe: "1-4 weeks",
  },
  {
    value: "prototype" as const,
    label: "Prototype (1-2 months)",
    description: "Feature-rich prototype with bi-weekly planning",
    timeframe: "1-2 months",
  },
  {
    value: "full-project" as const,
    label: "Full Project (3+ months)",
    description: "Complete project with monthly milestone planning",
    timeframe: "3+ months",
  },
];
