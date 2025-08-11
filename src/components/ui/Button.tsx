import React from "react";
import { cn } from "@/lib/utils";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?:
    | "primary"
    | "secondary"
    | "outline"
    | "ghost"
    | "nav"
    | "link"
    | "danger";
  size?: "xs" | "sm" | "md" | "lg" | "xl";
  gradient?: "blue" | "orange" | "blue-orange" | "orange-blue";
  fullWidth?: boolean;
  isLoading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  children: React.ReactNode;
  rounded?: "sm" | "md" | "lg" | "xl" | "full";
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = "primary",
      size = "md",
      gradient,
      fullWidth = false,
      leftIcon,
      rightIcon,
      children,
      disabled,
      rounded = "lg",
      ...props
    },
    ref,
  ) => {
    const baseClasses = [
      "group relative inline-flex items-center justify-center font-medium transition-all",
      "focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-900",
      "disabled:opacity-50 disabled:cursor-not-allowed hover:cursor-pointer",
      fullWidth && "w-full",
    ];

    const variants = {
      primary: gradient
        ? (() => {
            switch (gradient) {
              case "blue":
                return "from-sprintra-blue-600 to-sprintra-blue-700 hover:from-sprintra-blue-700 hover:to-sprintra-blue-800 hover:shadow-sprintra-blue-500/25 bg-gradient-to-r text-white shadow-xl hover:shadow-2xl focus:ring-sprintra-blue-500";
              case "orange":
                return "from-sprintra-orange-500 to-sprintra-orange-600 hover:from-sprintra-orange-600 hover:to-sprintra-orange-700 hover:shadow-sprintra-orange-500/25 bg-gradient-to-r text-white shadow-lg hover:shadow-xl focus:ring-sprintra-orange-500";
              case "blue-orange":
                return "from-sprintra-blue-600 to-sprintra-orange-600 hover:from-sprintra-blue-700 hover:to-sprintra-orange-700 hover:shadow-sprintra-blue-500/25 bg-gradient-to-r text-white shadow-2xl focus:ring-sprintra-blue-500";
              case "orange-blue":
                return "from-sprintra-orange-600 to-sprintra-blue-600 hover:from-sprintra-orange-700 hover:to-sprintra-blue-700 bg-gradient-to-r text-white shadow-xl focus:ring-sprintra-orange-500";
              default:
                return "from-sprintra-blue-600 to-sprintra-blue-700 hover:from-sprintra-blue-700 hover:to-sprintra-blue-800 bg-gradient-to-r text-white focus:ring-sprintra-blue-500";
            }
          })()
        : "bg-sprintra-blue-600 hover:bg-sprintra-blue-700 text-white focus:ring-sprintra-blue-500",
      secondary:
        "bg-slate-700 hover:bg-slate-600 text-white focus:ring-slate-500",
      outline:
        "border-2 border-slate-600 hover:border-sprintra-orange-400 text-slate-300 hover:text-white focus:ring-sprintra-orange-500",
      ghost:
        "text-slate-300 hover:bg-slate-700/50 hover:text-white focus:ring-slate-500",
      nav: "bg-sprintra-blue-600/20 text-sprintra-blue-400 hover:bg-sprintra-blue-600/30 focus:ring-sprintra-blue-500",
      link: "text-slate-300 underline underline-offset-4 hover:text-white focus:ring-slate-500",
      danger: "bg-red-600 hover:bg-red-700 text-white focus:ring-red-500",
    };

    const sizes = {
      xs: "px-3 py-2 text-xs",
      sm: "px-4 py-2 text-sm",
      md: "px-6 py-3 text-base",
      lg: "px-8 py-3 text-lg",
      xl: "px-12 py-5 text-xl",
    };

    const roundings = {
      sm: "rounded",
      md: "rounded-md",
      lg: "rounded-lg",
      xl: "rounded-xl",
      full: "rounded-full",
    };

    const classes = cn(
      baseClasses,
      variants[variant],
      sizes[size],
      roundings[rounded],
      className,
    );

    return (
      <button className={classes} ref={ref} disabled={disabled} {...props}>
        {disabled ? (
          <div className="flex items-center space-x-2">
            <div className="h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent"></div>
            <span>Loading...</span>
          </div>
        ) : (
          <span className="flex items-center space-x-2">
            {leftIcon && <span>{leftIcon}</span>}
            <span className="relative z-10">{children}</span>
            {rightIcon && <span>{rightIcon}</span>}
          </span>
        )}

        {/* Hover overlay for gradient buttons */}
        {gradient && (
          <div
            className={cn(
              "from-sprintra-blue-500 to-sprintra-orange-500 absolute inset-0 bg-gradient-to-r opacity-0 transition-opacity group-hover:opacity-20",
              roundings[rounded],
            )}
          ></div>
        )}
      </button>
    );
  },
);

Button.displayName = "Button";

export default Button;
