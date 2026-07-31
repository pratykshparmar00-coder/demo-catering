import React from 'react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Button Primitive
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'dark';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  className,
  children,
  ...props
}) => {
  const baseStyles = "inline-flex items-center justify-center font-semibold rounded-xl transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer active:scale-[0.98]";
  
  const variants = {
    primary: "bg-ninja-orange text-white hover:bg-ninja-orangeHover focus:ring-ninja-orange shadow-md shadow-orange-500/20",
    secondary: "bg-ninja-lightOrange text-ninja-orange hover:bg-orange-100 border border-orange-200 focus:ring-orange-300",
    outline: "border-2 border-gray-300 text-gray-700 hover:border-ninja-orange hover:text-ninja-orange focus:ring-ninja-orange bg-white",
    ghost: "text-gray-600 hover:bg-gray-100 hover:text-gray-900 focus:ring-gray-300",
    dark: "bg-ninja-dark text-white hover:bg-gray-800 focus:ring-gray-900 shadow-md"
  };

  const sizes = {
    sm: "text-xs px-3 py-1.5 gap-1.5",
    md: "text-sm px-4 py-2.5 gap-2",
    lg: "text-base px-6 py-3.5 gap-2.5 font-bold"
  };

  return (
    <button className={cn(baseStyles, variants[variant], sizes[size], className)} {...props}>
      {children}
    </button>
  );
};

// Card Primitive
export const Card: React.FC<{ className?: string; children: React.ReactNode }> = ({ className, children }) => (
  <div className={cn("bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow p-5", className)}>
    {children}
  </div>
);

// Badge Primitive
export const Badge: React.FC<{ children: React.ReactNode; variant?: 'orange' | 'green' | 'blue' | 'gray'; className?: string }> = ({
  children,
  variant = 'orange',
  className
}) => {
  const styles = {
    orange: "bg-orange-100 text-ninja-orange border-orange-200",
    green: "bg-emerald-100 text-emerald-700 border-emerald-200",
    blue: "bg-blue-100 text-blue-700 border-blue-200",
    gray: "bg-gray-100 text-gray-700 border-gray-200"
  };
  return (
    <span className={cn("inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold border", styles[variant], className)}>
      {children}
    </span>
  );
};
