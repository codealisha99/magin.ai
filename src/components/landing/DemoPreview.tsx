"use client";

import { motion } from "framer-motion";
import { Search, Loader2, CheckCircle2, FileText, Image as ImageIcon, Layout } from "lucide-react";
import { useState, useEffect } from "react";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";

const STAGES = [
    { id: 1, label: "Analyzing Topic", icon: Search, color: "bg-pastel-sky" },
    { id: 2, label: "Fetching Research", icon: FileText, color: "bg-pastel-sage" },
    { id: 3, label: "Generating Visuals", icon: ImageIcon, color: "bg-pastel-rose" },
    { id: 4, label: "Structuring Story", icon: Layout, color: "bg-pastel-gold" },
];

export function DemoPreview() {
    const [currentStage, setCurrentStage] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentStage((prev) => (prev + 1) % (STAGES.length + 1));
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    return (
        <section className="py-24 px-6 bg-white">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl mb-6">See the <span className="text-secondary italic">magic</span> unfold.</h2>
                    <p className="text-gray-500 max-w-2xl mx-auto text-lg">
                        Our intelligent engine researches, synthesizes, and illustrates your topic into a visual narrative.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-center">
                    <div className="lg:col-span-2 space-y-4">
                        {STAGES.map((stage, idx) => (
                            <motion.div
                                key={stage.id}
                                animate={{
                                    opacity: currentStage >= idx ? 1 : 0.4,
                                    x: currentStage === idx ? 10 : 0,
                                }}
                                className={`flex items-center gap-4 p-4 rounded-2xl transition-all ${currentStage === idx ? "bg-white shadow-md border-l-4 border-primary" : ""
                                    }`}
                            >
                                <div className={`${stage.color} p-3 rounded-xl text-primary`}>
                                    <stage.icon size={20} />
                                </div>
                                <div className="flex-1">
                                    <p className="font-bold text-sm">{stage.label}</p>
                                    <p className="text-xs text-gray-400">Step {stage.id} of 4</p>
                                </div>
                                {currentStage > idx ? (
                                    <CheckCircle2 className="text-green-500" size={20} />
                                ) : currentStage === idx ? (
                                    <Loader2 className="animate-spin text-primary" size={20} />
                                ) : null}
                            </motion.div>
                        ))}
                    </div>

                    <div className="lg:col-span-3">
                        <Card className="h-[400px] relative overflow-hidden flex items-center justify-center bg-[#fdfbf7] border-2 border-gray-100">
                            <motion.div
                                key={currentStage}
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="text-center p-12"
                            >
                                {currentStage === 0 && (
                                    <div className="space-y-6">
                                        <p className="hand-drawn text-3xl text-primary">"The History of Jazz"</p>
                                        <div className="w-48 h-1 bg-gray-100 mx-auto rounded-full overflow-hidden">
                                            <motion.div
                                                initial={{ width: 0 }}
                                                animate={{ width: "100%" }}
                                                transition={{ duration: 2 }}
                                                className="h-full bg-primary"
                                            />
                                        </div>
                                        <p className="text-sm text-gray-400 uppercase tracking-widest">Typing...</p>
                                    </div>
                                )}

                                {currentStage === 1 && (
                                    <div className="grid grid-cols-2 gap-4">
                                        {[1, 2, 3, 4].map((i) => (
                                            <div key={i} className="h-16 bg-pastel-sky/30 rounded-lg animate-pulse" />
                                        ))}
                                        <p className="col-span-2 text-sm text-gray-400 mt-4 italic">Searching 40+ academic sources...</p>
                                    </div>
                                )}

                                {currentStage === 2 && (
                                    <div className="grid grid-cols-3 gap-2">
                                        {[1, 2, 3].map((i) => (
                                            <div key={i} className="aspect-square bg-pastel-rose/30 rounded-lg flex items-center justify-center">
                                                <ImageIcon className="text-accent/50" />
                                            </div>
                                        ))}
                                        <p className="col-span-3 text-sm text-gray-400 mt-4">Sketching custom illustrations...</p>
                                    </div>
                                )}

                                {currentStage === 3 && (
                                    <div className="space-y-4 text-left">
                                        <div className="w-full h-8 bg-pastel-gold/30 rounded" />
                                        <div className="w-3/4 h-8 bg-pastel-gold/30 rounded" />
                                        <div className="w-1/2 h-8 bg-pastel-gold/30 rounded" />
                                        <p className="text-sm text-gray-400 mt-4">Designing narrative flow...</p>
                                    </div>
                                )}

                                {currentStage === 4 && (
                                    <motion.div
                                        initial={{ y: 20, opacity: 0 }}
                                        animate={{ y: 0, opacity: 1 }}
                                        className="space-y-4"
                                    >
                                        <CheckCircle2 size={48} className="mx-auto text-green-500 mb-4" />
                                        <h3 className="text-2xl font-serif">Infographic Ready!</h3>
                                        <p className="text-gray-500 mb-6">A visual masterpiece on Jazz History is complete.</p>
                                        <Button variant="primary" size="md">View Result</Button>
                                    </motion.div>
                                )}
                            </motion.div>
                        </Card>
                    </div>
                </div>
            </div>
        </section>
    );
}
