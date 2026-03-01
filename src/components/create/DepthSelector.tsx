"use client";

import { motion } from "framer-motion";
import { Info } from "lucide-react";

const DEPTHS = [
    { id: "basic", label: "Basic", desc: "Overview & key facts" },
    { id: "detailed", label: "Detailed", desc: "Narrative, data & history" },
    { id: "research", label: "Research", desc: "Academic depth & citations" },
];

export function DepthSelector({ value, onChange }: { value: string; onChange: (v: string) => void }) {
    return (
        <div className="grid grid-cols-1 gap-3">
            {DEPTHS.map((depth) => (
                <button
                    key={depth.id}
                    onClick={() => onChange(depth.id)}
                    className={`flex items-center justify-between p-4 rounded-2xl border-2 transition-all group ${value === depth.id
                            ? "border-primary bg-white shadow-md"
                            : "border-gray-100 hover:border-gray-200"
                        }`}
                >
                    <div className="text-left">
                        <p className={`font-bold ${value === depth.id ? "text-primary" : "text-gray-500"}`}>
                            {depth.label}
                        </p>
                        <p className="text-xs text-gray-400">{depth.desc}</p>
                    </div>
                    <div className={`p-2 rounded-full transition-colors ${value === depth.id ? "bg-primary text-white" : "bg-gray-100 text-gray-400 group-hover:bg-gray-200"
                        }`}>
                        <Info size={14} />
                    </div>
                </button>
            ))}
        </div>
    );
}
