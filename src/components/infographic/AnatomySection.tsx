"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface Callout {
    id: number;
    title: string;
    description: string;
    x: number; // percentage from left
    y: number; // percentage from top
    side: "left" | "right";
}

interface AnatomySectionProps {
    title: string;
    subtitle: string;
    description: string;
    image: string;
    callouts: Callout[];
    bgColor?: string;
}

export function AnatomySection({
    title, subtitle, description, image, callouts, bgColor = "bg-sky-50"
}: AnatomySectionProps) {
    return (
        <section className={`py-24 px-8 rounded-[3rem] ${bgColor} relative overflow-hidden`}>
            {/* Header */}
            <div className="max-w-3xl mb-16 relative z-10">
                <div className="inline-block px-4 py-1 rounded-full bg-white/50 text-xs font-bold uppercase tracking-widest mb-4">
                    Inside Study
                </div>
                <h2 className="text-6xl font-serif mb-6 leading-tight">{title}</h2>
                <p className="hand-drawn text-2xl text-secondary mb-8">{subtitle}</p>
                <div className="prose prose-lg text-gray-600">
                    <p>{description}</p>
                </div>
            </div>

            {/* Diagram Container */}
            <div className="relative aspect-[16/9] w-full max-w-6xl mx-auto">
                <Image
                    src={image}
                    alt={title}
                    fill
                    className="object-contain drop-shadow-2xl"
                />

                {/* Callouts */}
                {callouts.map((callout) => (
                    <motion.div
                        key={callout.id}
                        initial={{ opacity: 0, x: callout.side === "left" ? -20 : 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: callout.id * 0.1 }}
                        className="absolute z-20"
                        style={{
                            left: `${callout.x}%`,
                            top: `${callout.y}%`,
                            transform: `translate(${callout.side === "left" ? "-100%" : "0"}, -50%)`,
                        }}
                    >
                        <div className={`flex items-start gap-4 ${callout.side === "left" ? "flex-row-reverse text-right" : "flex-row text-left"} max-w-[200px]`}>
                            {/* Connector Circle */}
                            <div className="w-4 h-4 rounded-full bg-primary ring-4 ring-white shrink-0 mt-1" />

                            {/* Content */}
                            <div className="space-y-1">
                                <h4 className="font-serif font-bold text-lg leading-tight">{callout.title}</h4>
                                <p className="text-sm text-gray-500 leading-relaxed">{callout.description}</p>
                            </div>
                        </div>

                        {/* Hand-drawn line simulation (CSS) */}
                        <div
                            className={`absolute top-3 w-16 h-px bg-primary/30 ${callout.side === "left" ? "right-4" : "left-4"}`}
                            style={{
                                transform: `rotate(${callout.side === "left" ? "45deg" : "-45deg"})`,
                                transformOrigin: callout.side === "left" ? "right" : "left"
                            }}
                        />
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
