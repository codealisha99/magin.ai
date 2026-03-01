"use client";

import { motion } from "framer-motion";
import { ExternalLink, ShieldCheck } from "lucide-react";

const SOURCES = [
    { name: "Academic Journal of Art & Tech", url: "nature.com/articles", confidence: 98 },
    { name: "Global History Collective", url: "history.org/vault", confidence: 95 },
    { name: "Visual Narrative Archives", url: "storytelling.edu", confidence: 92 },
    { name: "Data Science Institute", url: "data.gov/research", confidence: 99 },
];

export function SourceCard({ index, stage }: { index: number; stage: number }) {
    const source = SOURCES[(index + stage) % SOURCES.length];

    return (
        <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm flex items-start gap-3"
        >
            <div className="w-8 h-8 rounded bg-gray-50 flex items-center justify-center text-[10px] font-bold text-gray-400">
                {source.name.charAt(0)}
            </div>
            <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between mb-1">
                    <p className="font-bold text-xs truncate uppercase tracking-tight">{source.name}</p>
                    <ExternalLink size={10} className="text-gray-300" />
                </div>
                <div className="flex items-center gap-2">
                    <div className="flex items-center gap-1 text-[10px] text-green-600 font-bold">
                        <ShieldCheck size={10} />
                        {source.confidence}% Conf.
                    </div>
                    <span className="text-[10px] text-gray-300 truncate">{source.url}</span>
                </div>
            </div>
        </motion.div>
    );
}
