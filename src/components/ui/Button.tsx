"use client";

import * as React from "react";
import { motion, HTMLMotionProps } from "framer-motion";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

interface ButtonProps extends Omit<HTMLMotionProps<"button">, "children"> {
    variant?: "primary" | "secondary" | "outline" | "ghost" | "pastel";
    size?: "sm" | "md" | "lg" | "icon";
    isLoading?: boolean;
    children?: React.ReactNode;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant = "primary", size = "md", isLoading, children, ...props }, ref) => {
        const variants = {
            primary: "bg-primary text-white hover:bg-primary/90 shadow-md",
            secondary: "bg-secondary text-white hover:bg-secondary/90 shadow-md",
            outline: "border-2 border-primary text-primary hover:bg-primary/5",
            ghost: "text-primary hover:bg-primary/5",
            pastel: "bg-pastel-gold text-primary hover:bg-pastel-gold/80 shadow-sm",
        };

        const sizes = {
            sm: "px-3 py-1.5 text-sm rounded-md",
            md: "px-6 py-3 text-base rounded-lg",
            lg: "px-8 py-4 text-lg rounded-xl font-semibold",
            icon: "p-2 rounded-full",
        };

        return (
            <motion.button
                ref={ref}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={cn(
                    "inline-flex items-center justify-center transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary disabled:opacity-50 disabled:pointer-events-none",
                    variants[variant],
                    sizes[size],
                    className
                )}
                {...props}
            >
                {isLoading ? (
                    <div className="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
                ) : null}
                {children}
            </motion.button>
        );
    }
);

Button.displayName = "Button";

export { Button };
