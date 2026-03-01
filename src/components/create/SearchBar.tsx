"use client";

import { Search } from "lucide-react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const PLACEHOLDERS = [
    "The History of Jazz",
    "The Secret Life of Penguins",
    "How Quantum Computing Works",
    "Ancient Rome Architecture",
    "The Mystery of Black Holes",
];

export function SearchBar({ value, onChange }: { value: string; onChange: (v: string) => void }) {
    const [placeholderIdx, setPlaceholderIdx] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setPlaceholderIdx((prev) => (prev + 1) % PLACEHOLDERS.length);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="relative group">
            <div className="absolute inset-y-0 left-6 flex items-center pointer-events-none text-gray-400 group-focus-within:text-primary transition-colors">
                <Search size={24} />
            </div>
            <input
                type="text"
                value={value}
                onChange={(e) => onChange(e.target.value)}
                className="w-full h-20 pl-16 pr-6 rounded-3xl bg-white border-2 border-transparent shadow-lg focus:border-primary focus:outline-none text-xl placeholder-transparent transition-all"
            />

            {!value && (
                <div className="absolute inset-y-0 left-16 flex items-center pointer-events-none">
                    <AnimatePresence mode="wait">
                        <motion.span
                            key={placeholderIdx}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            className="text-gray-400 text-xl"
                        >
                            e.g. {PLACEHOLDERS[placeholderIdx]}
                        </motion.span>
                    </AnimatePresence>
                </div>
            )}
        </div>
    );
}
