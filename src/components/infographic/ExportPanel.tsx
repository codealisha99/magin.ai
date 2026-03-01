"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Download, FileText, Globe, Presentation, Share2 } from "lucide-react";
import { useState } from "react";

export function ExportPanel() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="relative">
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 10 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 10 }}
                        className="absolute bottom-full mb-4 right-0 w-64 bg-white rounded-2xl shadow-2xl border border-gray-100 p-4 space-y-2 z-50"
                    >
                        <h4 className="font-serif font-bold text-sm mb-4 border-b border-gray-100 pb-2 uppercase tracking-widest text-gray-400">Export Options</h4>
                        <button className="w-full flex items-center gap-3 p-3 rounded-xl hover:bg-pastel-sky transition-colors text-sm font-medium">
                            <FileText size={18} className="text-secondary" />
                            Download PDF
                        </button>
                        <button className="w-full flex items-center gap-3 p-3 rounded-xl hover:bg-pastel-sage transition-colors text-sm font-medium">
                            <Presentation size={18} className="text-primary" />
                            Keynote / PowerPoint
                        </button>
                        <button className="w-full flex items-center gap-3 p-3 rounded-xl hover:bg-pastel-rose transition-colors text-sm font-medium">
                            <Globe size={18} className="text-accent" />
                            Publish to Web
                        </button>
                    </motion.div>
                )}
            </AnimatePresence>

            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-14 h-14 rounded-full bg-primary text-white shadow-xl flex items-center justify-center hover:scale-110 transition-transform active:scale-95"
            >
                <Share2 size={24} />
            </button>
        </div>
    );
}
