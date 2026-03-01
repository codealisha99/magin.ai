"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Badge } from "@/components/ui/Badge";

interface SectionBlockProps {
    index: number;
    title: string;
    subtitle: string;
    content: string;
    image: string;
    color: string;
    isDetailed: boolean;
    reverse?: boolean;
}

export function SectionBlock({
    index, title, subtitle, content, image, color, isDetailed, reverse
}: SectionBlockProps) {
    return (
        <motion.section
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className={`flex flex-col ${reverse ? "md:flex-row-reverse" : "md:flex-row"} gap-12 items-center`}
        >
            <div className="flex-1 space-y-6">
                <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center font-serif text-xl font-bold">
                        {index}
                    </div>
                    <div className="h-px flex-1 bg-gray-100" />
                </div>

                <h2 className="text-5xl font-serif">{title}</h2>
                <p className="hand-drawn text-2xl text-secondary">{subtitle}</p>

                <div className="prose prose-lg text-gray-500 max-w-none">
                    <p>{content}</p>
                    <AnimatePresence>
                        {isDetailed && (
                            <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: "auto", opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                className="overflow-hidden"
                            >
                                <p className="mt-4 pt-4 border-t border-dashed border-gray-200 italic">
                                    Deep Dive: The technical aspects of this section involve complex layering of research data and historical context. Every note and date has been verified against multiple academic sources to ensure the integrity of the narrative.
                                </p>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>

            <div className="flex-1 w-full">
                <motion.div
                    whileHover={{ scale: 1.02 }}
                    className={`relative aspect-square rounded-[2rem] overflow-hidden soft-shadow border-8 border-white ${color}`}
                >
                    <Image
                        src={image}
                        alt={title}
                        fill
                        className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
                </motion.div>
            </div>
        </motion.section>
    );
}
