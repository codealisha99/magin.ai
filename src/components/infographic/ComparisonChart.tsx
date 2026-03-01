"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface ComparisonItem {
    id: number;
    label: string;
    value: string;
    image: string;
}

interface ComparisonGroup {
    title: string;
    items: ComparisonItem[];
}

interface ComparisonChartProps {
    title: string;
    subtitle: string;
    groups: ComparisonGroup[];
}

export function ComparisonChart({
    title, subtitle, groups
}: ComparisonChartProps) {
    return (
        <section className="py-24 px-8 bg-white rounded-[3rem] border border-gray-100 soft-shadow">
            <div className="text-center mb-16">
                <h2 className="text-5xl font-serif mb-4">{title}</h2>
                <p className="hand-drawn text-2xl text-secondary">{subtitle}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                {groups.map((group, groupIdx) => (
                    <div key={groupIdx} className="space-y-8">
                        <h3 className="font-serif text-3xl italic border-b border-gray-100 pb-4">{group.title}</h3>
                        <div className="grid grid-cols-2 gap-6">
                            {group.items.map((item, itemIdx) => (
                                <motion.div
                                    key={item.id}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: itemIdx * 0.1 }}
                                    className="p-4 rounded-2xl bg-gray-50 flex flex-col items-center text-center space-y-4 hover:bg-secondary/5 transition-colors cursor-pointer"
                                >
                                    <div className="relative w-full aspect-square bg-white rounded-xl overflow-hidden mb-2">
                                        <Image
                                            src={item.image}
                                            alt={item.label}
                                            fill
                                            className="object-contain p-2"
                                        />
                                    </div>
                                    <div className="space-y-1">
                                        <p className="text-sm font-bold uppercase tracking-wider text-gray-400">{item.label}</p>
                                        <p className="font-serif text-xl">{item.value}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
