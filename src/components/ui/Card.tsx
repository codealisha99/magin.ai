"use client";

import * as React from "react";
import { motion, HTMLMotionProps } from "framer-motion";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

interface CardProps extends HTMLMotionProps<"div"> {
    variant?: "default" | "glass" | "pastel-rose" | "pastel-sage" | "pastel-sky" | "pastel-gold";
    hover?: boolean;
}

const Card = React.forwardRef<HTMLDivElement, CardProps>(
    ({ className, variant = "default", hover = true, children, ...props }, ref) => {
        const variants = {
            default: "bg-white border border-gray-100",
            glass: "glass",
            "pastel-rose": "bg-pastel-rose",
            "pastel-sage": "bg-pastel-sage",
            "pastel-sky": "bg-pastel-sky",
            "pastel-gold": "bg-pastel-gold",
        };

        return (
            <motion.div
                ref={ref}
                whileHover={hover ? { y: -5, transition: { duration: 0.2 } } : undefined}
                className={cn(
                    "rounded-2xl p-6 soft-shadow transition-all",
                    variants[variant],
                    className
                )}
                {...props}
            >
                {children}
            </motion.div>
        );
    }
);

Card.displayName = "Card";

export { Card };
