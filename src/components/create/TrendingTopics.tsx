"use client";

import { Badge } from "@/components/ui/Badge";
import { motion } from "framer-motion";

const TRENDING = [
    "Evolution of Life", "Cyberpunk Cities", "Ancient Egypt", "Future of Robotics",
    "Great Artists", "Space Exploration", "Philosophy 101", "Global Economy"
];

export function TrendingTopics({ onSelect }: { onSelect: (v: string) => void }) {
    return (
        <div className="flex flex-wrap gap-3">
            {TRENDING.map((topic, i) => (
                <motion.button
                    key={topic}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => onSelect(topic)}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: i * 0.1 }}
                >
                    <Badge variant="pastel-sky" className="px-4 py-2 cursor-pointer text-sm font-medium">
                        {topic}
                    </Badge>
                </motion.button>
            ))}
        </div>
    );
}
