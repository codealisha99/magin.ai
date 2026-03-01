"use client";

import { CloudUpload, Link as LinkIcon, FileText } from "lucide-react";
import { motion } from "framer-motion";

export function UploadZone() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <motion.div
                whileHover={{ y: -5 }}
                className="h-40 border-2 border-dashed border-gray-200 rounded-3xl flex flex-col items-center justify-center gap-3 bg-white hover:border-primary/30 transition-all cursor-pointer group"
            >
                <div className="bg-pastel-rose p-3 rounded-2xl text-accent group-hover:scale-110 transition-transform">
                    <CloudUpload size={24} />
                </div>
                <div className="text-center">
                    <p className="text-sm font-bold">Upload Document</p>
                    <p className="text-xs text-gray-400">PDF, DOCX, TXT (Max 10MB)</p>
                </div>
            </motion.div>

            <motion.div
                whileHover={{ y: -5 }}
                className="h-40 border-2 border-dashed border-gray-200 rounded-3xl flex flex-col items-center justify-center gap-3 bg-white hover:border-primary/30 transition-all cursor-pointer group"
            >
                <div className="bg-pastel-sage p-3 rounded-2xl text-primary group-hover:scale-110 transition-transform">
                    <LinkIcon size={24} />
                </div>
                <div className="text-center">
                    <p className="text-sm font-bold">Paste Website URL</p>
                    <p className="text-xs text-gray-400">Link to article or research paper</p>
                </div>
            </motion.div>
        </div>
    );
}
