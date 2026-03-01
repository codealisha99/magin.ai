"use client";

import { motion } from "framer-motion";
import { Loader2, CheckCircle2, Circle } from "lucide-react";
import { LucideIcon } from "lucide-react";

interface ResearchStageProps {
    label: string;
    icon: LucideIcon;
    color: string;
    status: "pending" | "active" | "complete";
}

export function ResearchStage({ label, icon: Icon, color, status }: ResearchStageProps) {
    return (
        <div className={`flex items-center gap-4 transition-all duration-500 ${status === "pending" ? "opacity-30" : "opacity-100"}`}>
            <div className={`${color} p-4 rounded-2xl text-primary transition-transform duration-500 ${status === "active" ? "scale-110 shadow-lg" : "scale-100"}`}>
                <Icon size={24} />
            </div>

            <div className="flex-1">
                <p className={`font-bold transition-colors ${status === "active" ? "text-primary text-lg" : "text-gray-500"}`}>
                    {label}
                </p>
                <p className="text-xs text-gray-400">
                    {status === "complete" ? "Verified" : status === "active" ? "In progress..." : "Queued"}
                </p>
            </div>

            <div className="flex items-center justify-center w-8">
                {status === "active" ? (
                    <Loader2 className="animate-spin text-primary" size={20} />
                ) : status === "complete" ? (
                    <CheckCircle2 className="text-green-500" size={20} />
                ) : (
                    <Circle className="text-gray-200" size={20} />
                )}
            </div>
        </div>
    );
}
