"use client";

import * as React from "react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
    variant?: "default" | "outline" | "pastel-rose" | "pastel-sage" | "pastel-sky" | "pastel-gold";
}

function Badge({ className, variant = "default", ...props }: BadgeProps) {
    const variants = {
        default: "bg-primary/10 text-primary",
        outline: "border border-primary text-primary",
        "pastel-rose": "bg-pastel-rose text-primary",
        "pastel-sage": "bg-pastel-sage text-primary",
        "pastel-sky": "bg-pastel-sky text-primary",
        "pastel-gold": "bg-pastel-gold text-primary",
    };

    return (
        <span
            className={cn(
                "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold",
                variants[variant],
                className
            )}
            {...props}
        />
    );
}

export { Badge };
