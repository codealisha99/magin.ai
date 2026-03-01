"use client";

import { motion } from "framer-motion";

export function ProgressBar({ progress }: { progress: number }) {
    return (
        <div className="space-y-4">
            <div className="flex items-center justify-between mb-2">
                <p className="text-sm font-bold text-gray-500 uppercase tracking-widest">Synthesis Engine Status</p>
                <p className="text-2xl font-serif italic text-primary">{Math.round(progress)}%</p>
            </div>
            <div className="h-4 bg-gray-100 rounded-full overflow-hidden border border-gray-100 p-0.5">
                <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${progress}%` }}
                    transition={{ type: "spring", bounce: 0, duration: 0.5 }}
                    className="h-full bg-primary rounded-full relative"
                >
                    <motion.div
                        animate={{ x: ["0%", "100%"], opacity: [0, 1, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                        className="absolute top-0 left-0 h-full w-20 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                    />
                </motion.div>
            </div>
        </div>
    );
}
