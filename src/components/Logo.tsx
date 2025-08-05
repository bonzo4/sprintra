import LogoIcon from "./icons/LogoIcon";

interface LogoProps {
  size?: "xs" | "sm" | "md" | "lg" | "xl";
  variant?: "default" | "minimal" | "text-only" | "icon-only";
  showPulse?: boolean;
  onClick?: () => void;
  className?: string;
  iconClassName?: string;
  textClassName?: string;
}

const sizeConfig = {
  xs: {
    container: "space-x-2",
    icon: "h-6 w-6",
    pulse: "h-2 w-2 -top-0.5 -right-0.5",
    text: "text-lg font-bold",
  },
  sm: {
    container: "space-x-2",
    icon: "h-8 w-8",
    pulse: "h-3 w-3 -top-1 -right-1",
    text: "text-xl font-bold",
  },
  md: {
    container: "space-x-3",
    icon: "h-10 w-10",
    pulse: "h-4 w-4 -top-1 -right-1",
    text: "text-2xl font-bold",
  },
  lg: {
    container: "space-x-4",
    icon: "h-12 w-12",
    pulse: "h-5 w-5 -top-1 -right-1",
    text: "text-3xl font-bold",
  },
  xl: {
    container: "space-x-5",
    icon: "h-16 w-16",
    pulse: "h-6 w-6 -top-1 -right-1",
    text: "text-4xl font-bold",
  },
};

export default function Logo({
  size = "md",
  variant = "default",
  showPulse = true,
  onClick,
  className = "",
  iconClassName = "",
  textClassName = "",
}: LogoProps) {
  const config = sizeConfig[size];
  const isClickable = !!onClick;

  const containerClasses = `flex items-center ${config.container} ${
    isClickable ? "cursor-pointer transition-opacity hover:opacity-80" : ""
  } ${className}`;

  const iconElement = (
    <div className="relative">
      <div
        className={`from-sprintra-blue-500 to-sprintra-blue-600 flex items-center justify-center rounded-full bg-gradient-to-br ${config.icon} ${iconClassName}`}
      >
        <LogoIcon size={size} />
      </div>
      {showPulse && variant !== "minimal" && (
        <div
          className={`bg-sprintra-orange-500 absolute animate-pulse rounded-full opacity-80 ${config.pulse}`}
        ></div>
      )}
    </div>
  );

  const textElement = (
    <span
      className={`from-sprintra-blue-400 to-sprintra-orange-400 bg-gradient-to-r bg-clip-text text-transparent ${config.text} ${textClassName}`}
    >
      Sprintra
    </span>
  );

  const content = () => {
    switch (variant) {
      case "icon-only":
        return iconElement;
      case "text-only":
        return textElement;
      case "minimal":
        return (
          <>
            <div className="relative">
              <div
                className={`from-sprintra-blue-500 to-sprintra-blue-600 flex items-center justify-center rounded-full bg-gradient-to-br ${config.icon} ${iconClassName}`}
              >
                <LogoIcon size={size} />
              </div>
            </div>
            {textElement}
          </>
        );
      default:
        return (
          <>
            {iconElement}
            {textElement}
          </>
        );
    }
  };

  if (isClickable) {
    return (
      <button onClick={onClick} className={containerClasses}>
        {content()}
      </button>
    );
  }

  return <div className={containerClasses}>{content()}</div>;
}
