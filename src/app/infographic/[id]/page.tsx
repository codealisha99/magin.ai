"use client";

import { motion, useScroll, useSpring } from "framer-motion";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SectionBlock } from "@/components/infographic/SectionBlock";
import { TimelineSection } from "@/components/infographic/TimelineSection";
import { StatCard } from "@/components/infographic/StatCard";
import { ExportPanel } from "@/components/infographic/ExportPanel";
import { NavigationDots } from "@/components/infographic/NavigationDots";
import { AnatomySection } from "@/components/infographic/AnatomySection";
import { ComparisonChart } from "@/components/infographic/ComparisonChart";
import { useSearchParams } from "next/navigation";
import { useState, Suspense } from "react";
import { Badge } from "@/components/ui/Badge";
import { Maximize2, Minimize2, Share2, Download } from "lucide-react";
import { MOCK_DATA, DEFAULT_DATA } from "@/lib/mock-data";

function InfographicContent() {
    const searchParams = useSearchParams();
    const topic = searchParams.get("topic") || "The Secret Life of Penguins";
    const data = MOCK_DATA[topic] || { ...DEFAULT_DATA, topic };

    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    const [isDetailed, setIsDetailed] = useState(false);

    return (
        <div className="bg-[#fdfbf7] min-h-screen">
            <Navbar />

            {/* Scroll Progress Indicator */}
            <motion.div
                className="fixed top-20 left-0 right-0 h-1.5 bg-secondary origin-left z-40"
                style={{ scaleX }}
            />

            <main className="max-w-5xl mx-auto px-6 pt-32 pb-20 relative">
                {/* Floating Controls */}
                <div className="fixed bottom-12 right-12 flex flex-col gap-4 z-50">
                    <ExportPanel />
                    <NavigationDots />
                </div>

                {/* Infographic Header */}
                <header className="text-center mb-24">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="inline-block mb-6"
                    >
                        <Badge variant="pastel-gold" className="px-6 py-2 text-sm uppercase tracking-tighter font-bold">
                            {data.edition}
                        </Badge>
                    </motion.div>
                    <h1 className="text-7xl md:text-8xl font-serif mb-8 leading-[1.1]">
                        {topic}
                    </h1>
                    <p className="hand-drawn text-3xl text-secondary mb-12">
                        A visual narrative by Monet.ai
                    </p>
                    <div className="flex justify-center gap-4">
                        <button
                            onClick={() => setIsDetailed(!isDetailed)}
                            className="flex items-center gap-2 bg-white border border-gray-100 px-6 py-3 rounded-xl soft-shadow font-bold hover:bg-gray-50 transition-all"
                        >
                            {isDetailed ? <Minimize2 size={18} /> : <Maximize2 size={18} />}
                            {isDetailed ? "Switch to Summary" : "Expand All Details"}
                        </button>
                    </div>
                </header>

                {/* Sections */}
                <div className="space-y-32">
                    {data.sections.map((section, idx) => (
                        <SectionBlock
                            key={section.index}
                            index={section.index}
                            title={section.title}
                            subtitle={section.subtitle}
                            content={section.content}
                            image={section.image}
                            color={section.color}
                            isDetailed={isDetailed}
                            reverse={idx % 2 !== 0}
                        />
                    ))}

                    {data.anatomy && (
                        <AnatomySection
                            title={data.anatomy.title}
                            subtitle={data.anatomy.subtitle}
                            description={data.anatomy.description}
                            image={data.anatomy.image}
                            callouts={data.anatomy.callouts}
                        />
                    )}

                    {data.comparisons && (
                        <ComparisonChart
                            title={data.comparisons.title}
                            subtitle={data.comparisons.subtitle}
                            groups={data.comparisons.groups}
                        />
                    )}

                    <TimelineSection
                        title={data.timeline.title}
                        items={data.timeline.items}
                    />

                    <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {data.stats.map((stat, idx) => (
                            <StatCard
                                key={idx}
                                label={stat.label}
                                value={stat.value}
                                icon={stat.icon}
                                color={stat.color}
                                bg={stat.bg}
                            />
                        ))}
                    </section>
                </div>

                {/* Infographic Footer */}
                <div className="mt-32 pt-20 border-t border-gray-100 text-center">
                    <h2 className="text-4xl font-serif mb-8 italic">Ready to share your discovery?</h2>
                    <div className="flex justify-center gap-6">
                        <button className="flex items-center gap-3 bg-primary text-white px-8 py-4 rounded-2xl font-bold shadow-lg shadow-primary/20 hover:scale-105 transition-transform">
                            <Download size={20} />
                            Export as PDF
                        </button>
                        <button className="flex items-center gap-3 bg-white border-2 border-primary text-primary px-8 py-4 rounded-2xl font-bold hover:bg-primary/5 transition-colors">
                            <Share2 size={20} />
                            Share Live Link
                        </button>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}

export default function InfographicPage() {
    return (
        <Suspense fallback={
            <div className="min-h-screen flex items-center justify-center bg-[#fdfbf7]">
                <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-primary"></div>
            </div>
        }>
            <InfographicContent />
        </Suspense>
    );
}
