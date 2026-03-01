"use client";

import { motion } from "framer-motion";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SearchBar } from "@/components/create/SearchBar";
import { TrendingTopics } from "@/components/create/TrendingTopics";
import { DepthSelector } from "@/components/create/DepthSelector";
import { UploadZone } from "@/components/create/UploadZone";
import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { useRouter } from "next/navigation";

export default function CreatePage() {
    const router = useRouter();
    const [topic, setTopic] = useState("");
    const [depth, setDepth] = useState("detailed");

    const handleStart = () => {
        if (!topic) return;
        // Redirect to research simulation
        router.push(`/create/research?topic=${encodeURIComponent(topic)}&depth=${depth}`);
    };

    return (
        <div className="bg-[#fdfbf7] min-h-screen flex flex-col">
            <Navbar />

            <main className="flex-1 pt-32 pb-20 px-6">
                <div className="max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-center mb-12"
                    >
                        <h1 className="text-5xl font-serif mb-6">What would you like to <span className="italic text-secondary">visualize?</span></h1>
                        <p className="text-gray-500 text-lg">Enter any topic, URL, or upload a document to begin the artistic synthesis.</p>
                    </motion.div>

                    <div className="space-y-12">
                        <SearchBar value={topic} onChange={setTopic} />

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                            <div className="space-y-6">
                                <h3 className="font-serif font-bold text-xl">Inspiration</h3>
                                <TrendingTopics onSelect={setTopic} />
                            </div>

                            <div className="space-y-6">
                                <h3 className="font-serif font-bold text-xl">Intelligence Depth</h3>
                                <DepthSelector value={depth} onChange={setDepth} />
                            </div>
                        </div>

                        <div className="space-y-6">
                            <h3 className="font-serif font-bold text-xl">Knowledge Sources (Optional)</h3>
                            <UploadZone />
                        </div>

                        <div className="pt-8 flex justify-center">
                            <Button
                                variant="primary"
                                size="lg"
                                className="w-full max-w-sm h-16 text-xl rounded-2xl"
                                onClick={handleStart}
                                disabled={!topic}
                            >
                                Synthesize Masterpiece
                            </Button>
                        </div>

                        <p className="text-center text-sm text-gray-400">
                            Estimated synthesis time: 45-60 seconds
                        </p>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}
