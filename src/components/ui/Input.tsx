import React, { forwardRef } from "react";

interface InputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "size"> {
  label?: string;
  error?: string;
  helper?: string;
  variant?: "default" | "outlined" | "filled" | "minimal";
  size?: "xs" | "sm" | "md" | "lg";
  isLoading?: boolean;
  fullWidth?: boolean;
  containerClassName?: string;
}

const sizeClasses = {
  xs: "px-3 py-1.5 text-sm",
  sm: "px-3 py-2 text-sm",
  md: "px-4 py-3 text-base",
  lg: "px-5 py-4 text-lg",
};

const variantClasses = {
  default:
    "bg-slate-800 border border-slate-700 focus:border-sprintra-blue-500 focus:ring-sprintra-blue-500/20",
  outlined:
    "bg-transparent border-2 border-slate-600 focus:border-sprintra-blue-500 focus:ring-sprintra-blue-500/20",
  filled:
    "bg-slate-700/50 border border-transparent focus:border-sprintra-blue-500 focus:ring-sprintra-blue-500/20",
  minimal:
    "bg-transparent border-0 border-b-2 border-slate-600 rounded-none focus:border-sprintra-blue-500 focus:ring-0 focus:ring-transparent px-0",
};

const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      label,
      error,
      helper,
      variant = "default",
      size = "md",
      fullWidth = false,
      containerClassName = "",
      className = "",
      type = "text",
      disabled,
      ...props
    },
    ref,
  ) => {
    const baseClasses =
      "rounded-lg text-white placeholder-slate-400 transition-all duration-200 focus:outline-none focus:ring-2";
    const sizeClass = sizeClasses[size];
    const variantClass = variantClasses[variant];
    const widthClass = fullWidth ? "w-full" : "flex-1";

    const inputClasses = `
    ${baseClasses}
    ${sizeClass}
    ${variantClass}
    ${widthClass}
    ${error ? "border-red-500 focus:border-red-500 focus:ring-red-500/20" : ""}
    ${disabled ? "opacity-50 cursor-not-allowed bg-slate-800/50" : ""}
    ${className}
  `
      .trim()
      .replace(/\s+/g, " ");

    return (
      <div className={`${fullWidth ? "w-full" : ""} ${containerClassName}`}>
        {label && (
          <label className="mb-2 block text-sm font-medium text-slate-300">
            {label}
            {props.required && <span className="ml-1 text-red-400">*</span>}
          </label>
        )}

        <div className="relative">
          <input
            ref={ref}
            type={type}
            disabled={disabled}
            className={inputClasses}
            {...props}
          />
        </div>

        {(error || helper) && (
          <div className="mt-1">
            {error && (
              <p className="flex items-center space-x-1 text-xs text-red-400">
                <svg
                  className="h-3 w-3"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>{error}</span>
              </p>
            )}
            {helper && !error && (
              <p className="text-xs text-slate-400">{helper}</p>
            )}
          </div>
        )}
      </div>
    );
  },
);

Input.displayName = "Input";

export default Input;
