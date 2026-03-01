"use client";

import { motion, AnimatePresence } from "framer-motion";
import { BookMarked } from "lucide-react";

const FACTS = [
    "Core methodology discovered in 40+ papers.",
    "Historical timeline verified via Archive.org.",
    "Visual metaphors mapped to narrative structure.",
    "Key data points cross-referenced with DBpedia.",
    "Atmospheric illustrations staged by style guide.",
    "Citation graph built with 24 distinct nodes.",
    "Narrative flow optimized for scroll storytelling.",
    "Source reliability verified at 99.4% accuracy.",
    "Entity relationship extraction complete.",
    "Statistical significance confirmed for dataset.",
];

export function CitationList({ count }: { count: number }) {
    return (
        <div className="space-y-3 max-h-[300px] overflow-hidden relative">
            <AnimatePresence>
                {FACTS.slice(0, count).map((fact, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="flex items-center gap-3 p-3 rounded-lg border border-dashed border-gray-200"
                    >
                        <BookMarked size={12} className="text-primary/40 flex-shrink-0" />
                        <p className="text-[11px] text-gray-500 line-clamp-1">{fact}</p>
                    </motion.div>
                ))}
            </AnimatePresence>
            <div className="absolute bottom-0 left-0 w-full h-12 bg-gradient-to-t from-[#fdfbf7] to-transparent pointer-events-none" />
        </div>
    );
}
