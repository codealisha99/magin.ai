"use client";

import { motion } from "framer-motion";

export function NavigationDots() {
    return (
        <div className="flex flex-col gap-3 items-center py-4 px-2 glass rounded-full">
            {[1, 2, 3, 4, 5].map((i) => (
                <motion.div
                    key={i}
                    className={`w-2 h-2 rounded-full transition-colors ${i === 1 ? "bg-primary" : "bg-gray-200"}`}
                    whileHover={{ scale: 1.5 }}
                />
            ))}
        </div>
    );
}
