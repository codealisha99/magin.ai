"use client";

import { motion } from "framer-motion";
import * as LucideIcons from "lucide-react";

interface StatCardProps {
    label: string;
    value: string;
    icon: string;
    color: string;
    bg: string;
}

export function StatCard({ label, value, icon, color, bg }: StatCardProps) {
    // @ts-ignore
    const Icon = LucideIcons[icon];

    return (
        <motion.div
            whileHover={{ y: -10 }}
            className={`p-10 rounded-[2.5rem] ${bg} flex flex-col items-center justify-center text-center soft-shadow relative overflow-hidden group`}
        >
            <div className={`absolute -top-4 -right-4 w-24 h-24 bg-white/20 rounded-full blur-2xl group-hover:scale-150 transition-transform`} />

            <div className={`w-16 h-16 rounded-2xl bg-white flex items-center justify-center ${color} mb-6 shadow-sm`}>
                {Icon && <Icon size={32} />}
            </div>

            <p className="text-5xl font-serif font-bold text-primary mb-2 tracking-tighter">{value}</p>
            <p className="text-sm font-bold text-gray-500 uppercase tracking-widest">{label}</p>
        </motion.div>
    );
}
