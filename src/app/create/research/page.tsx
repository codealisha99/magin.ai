"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ResearchStage } from "@/components/research/ResearchStage";
import { SourceCard } from "@/components/research/SourceCard";
import { ProgressBar } from "@/components/research/ProgressBar";
import { CitationList } from "@/components/research/CitationList";
import { useState, useEffect } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { Search, Database, Layout, Maximize, Palette, Sparkles, CheckCircle } from "lucide-react";

const STAGES = [
    { id: "research", label: "AI Research: Gathering domain expertise", icon: Search, color: "bg-pastel-sky" },
    { id: "structure", label: "Structure: Organizing narrative flow", icon: Database, color: "bg-pastel-sage" },
    { id: "planner", label: "Scene Planner: Designing visual compositions", icon: Layout, color: "bg-pastel-rose" },
    { id: "layout", label: "Layout Engine: Editorial precision placement", icon: Maximize, color: "bg-pastel-gold" },
    { id: "style", label: "Style Model: Applying artistic aesthetics", icon: Palette, color: "bg-secondary/10" },
    { id: "cleanup", label: "Vector Cleanup: Refining visual elements", icon: Sparkles, color: "bg-primary/10" },
];

import { Suspense } from "react";

function ResearchContent() {
    const router = useRouter();
    const searchParams = useSearchParams();
    const topic = searchParams.get("topic") || "General Topic";

    const [currentStageIdx, setCurrentStageIdx] = useState(0);
    const [progress, setProgress] = useState(0);
    const [completed, setCompleted] = useState(false);

    useEffect(() => {
        if (completed) {
            const timer = setTimeout(() => {
                router.push(`/infographic/demo?topic=${encodeURIComponent(topic)}`);
            }, 2000);
            return () => clearTimeout(timer);
        }

        const stageCount = STAGES.length;
        const stageDuration = 4000; // 4 seconds per stage

        const interval = setInterval(() => {
            setProgress((prev) => {
                const next = prev + (100 / (stageCount * (stageDuration / 100)));
                if (next >= 100) {
                    clearInterval(interval);
                    setCompleted(true);
                    return 100;
                }

                const newStage = Math.floor((next / 100) * stageCount);
                if (newStage !== currentStageIdx && newStage < stageCount) {
                    setCurrentStageIdx(newStage);
                }

                return next;
            });
        }, 100);

        return () => clearInterval(interval);
    }, [currentStageIdx, completed, topic, router]);

    return (
        <div className="bg-[#fdfbf7] min-h-screen flex flex-col">
            <Navbar />

            <main className="flex-1 pt-32 pb-20 px-6">
                <div className="max-w-5xl mx-auto">
                    <div className="text-center mb-12">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white shadow-sm text-sm font-medium mb-6"
                        >
                            <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                            <span>Synthesizing: {topic}</span>
                        </motion.div>
                        <h1 className="text-4xl font-serif">Building your <span className="italic text-secondary">masterpiece...</span></h1>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                        <div className="lg:col-span-2 space-y-8">
                            <div className="bg-white rounded-3xl p-8 soft-shadow border border-gray-100">
                                <ProgressBar progress={progress} />

                                <div className="mt-12 space-y-6">
                                    {STAGES.map((stage, idx) => (
                                        <ResearchStage
                                            key={stage.id}
                                            label={stage.label}
                                            icon={stage.icon}
                                            color={stage.color}
                                            status={idx < currentStageIdx ? "complete" : idx === currentStageIdx ? "active" : "pending"}
                                        />
                                    ))}
                                </div>
                            </div>

                            {completed && (
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="bg-green-50 border border-green-100 rounded-2xl p-6 flex items-center gap-4"
                                >
                                    <div className="bg-green-500 text-white p-2 rounded-full">
                                        <CheckCircle size={24} />
                                    </div>
                                    <div>
                                        <p className="font-bold text-green-900">Synthesis Complete!</p>
                                        <p className="text-green-700 text-sm">Redirecting to your interactive infographic...</p>
                                    </div>
                                </motion.div>
                            )}
                        </div>

                        <div className="space-y-8">
                            <div className="space-y-6">
                                <h3 className="font-serif font-bold text-xl uppercase tracking-widest text-xs text-gray-400">Live Sources</h3>
                                <AnimatePresence>
                                    {[1, 2, 3].map((i) => (
                                        currentStageIdx >= 0 && (
                                            <SourceCard key={i} index={i} stage={currentStageIdx} />
                                        )
                                    ))}
                                </AnimatePresence>
                            </div>

                            <div className="space-y-6">
                                <h3 className="font-serif font-bold text-xl uppercase tracking-widest text-xs text-gray-400">Knowledge Network</h3>
                                <CitationList count={Math.floor((progress / 100) * 12)} />
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}

export default function ResearchPage() {
    return (
        <Suspense fallback={
            <div className="min-h-screen flex items-center justify-center bg-[#fdfbf7]">
                <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-primary"></div>
            </div>
        }>
            <ResearchContent />
        </Suspense>
    );
}
