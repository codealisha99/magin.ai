"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { MoreVertical, Share2, Clock } from "lucide-react";

const SAVED_ITEMS = [
    { id: 1, title: "The History of Jazz", date: "2 hours ago", color: "bg-pastel-rose", status: "Completed" },
    { id: 2, title: "Quantum Physics for Cats", date: "1 day ago", color: "bg-pastel-sky", status: "Draft" },
    { id: 3, title: "The Renaissance Era", date: "3 days ago", color: "bg-pastel-sage", status: "Completed" },
    { id: 4, title: "Future of AI Art", date: "1 week ago", color: "bg-pastel-gold", status: "Completed" },
    { id: 5, title: "Blockchain Explained", date: "2 weeks ago", color: "bg-pastel-sky", status: "Archived" },
    { id: 6, title: "Life of a Honeybee", date: "1 month ago", color: "bg-pastel-rose", status: "Completed" },
];

export function InfographicGrid({ view }: { view: string }) {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SAVED_ITEMS.map((item, i) => (
                <motion.div
                    key={item.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                >
                    <Card className="group relative overflow-hidden bg-white hover:border-primary/20 transition-all border-2 border-transparent">
                        <div className={`aspect-[4/5] rounded-xl mb-4 ${item.color} flex items-center justify-center relative overflow-hidden`}>
                            {/* Mock preview content */}
                            <div className="text-primary/20 font-serif text-8xl rotate-12 opacity-50 select-none">
                                {item.title.charAt(0)}
                            </div>

                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
                                <button className="bg-white text-primary px-4 py-2 rounded-lg font-bold text-sm shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-all">
                                    View Masterpiece
                                </button>
                            </div>
                        </div>

                        <div className="space-y-3">
                            <div className="flex items-center justify-between">
                                <Badge variant={item.status === "Completed" ? "pastel-sage" : "pastel-gold"} className="text-[10px]">
                                    {item.status}
                                </Badge>
                                <button className="text-gray-300 hover:text-primary transition-colors">
                                    <MoreVertical size={18} />
                                </button>
                            </div>

                            <h3 className="font-bold text-lg group-hover:text-primary transition-colors">{item.title}</h3>

                            <div className="flex items-center justify-between text-xs text-gray-400">
                                <div className="flex items-center gap-1">
                                    <Clock size={12} />
                                    {item.date}
                                </div>
                                <div className="flex items-center gap-1">
                                    <Share2 size={12} />
                                    Shared
                                </div>
                            </div>
                        </div>
                    </Card>
                </motion.div>
            ))}
        </div>
    );
}
