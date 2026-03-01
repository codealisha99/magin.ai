"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { ArrowRight, Sparkles } from "lucide-react";

export function Hero() {
    return (
        <section className="relative pt-32 pb-20 px-6 overflow-hidden">
            {/* Background ambient elements */}
            <div className="absolute top-0 left-0 w-full h-full -z-10 overflow-hidden">
                <motion.div
                    animate={{
                        scale: [1, 1.1, 1],
                        opacity: [0.3, 0.5, 0.3],
                    }}
                    transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-pastel-rose rounded-full blur-3xl opacity-30"
                />
                <motion.div
                    animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.2, 0.4, 0.2],
                    }}
                    transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-pastel-sky rounded-full blur-3xl opacity-20"
                />
            </div>

            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-pastel-gold text-primary text-sm font-semibold mb-6 soft-shadow">
                        <Sparkles size={16} />
                        <span>Where Intelligence Meets Art</span>
                    </div>

                    <h1 className="text-6xl md:text-7xl lg:text-8xl font-serif leading-[1.1] mb-8">
                        Turn <span className="italic text-secondary">Knowledge</span> Into <span className="font-script text-accent">Art.</span>
                    </h1>

                    <p className="text-xl text-gray-500 mb-10 max-w-xl leading-relaxed">
                        Transform any topic into a deeply researched, visually stunning, and hand-illustrated infographic in seconds. Designed for the curious mind.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4">
                        <Link href="/create">
                            <Button variant="primary" size="lg" className="group w-full sm:w-auto">
                                Start Creating
                                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                            </Button>
                        </Link>
                        <Link href="/gallery">
                            <Button variant="outline" size="lg" className="w-full sm:w-auto">
                                Explore Gallery
                            </Button>
                        </Link>
                    </div>

                    <div className="mt-12 flex items-center gap-4 text-sm text-gray-400">
                        <div className="flex -space-x-2">
                            {[1, 2, 3, 4].map((i) => (
                                <div key={i} className="w-8 h-8 rounded-full border-2 border-white bg-pastel-sage flex items-center justify-center text-[10px] font-bold text-primary">
                                    {String.fromCharCode(64 + i)}
                                </div>
                            ))}
                        </div>
                        <p>Joined by 2,000+ creators this month</p>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, delay: 0.2 }}
                    className="relative"
                >
                    <div className="relative rounded-3xl overflow-hidden soft-shadow border-8 border-white">
                        <Image
                            src="/hero-illustration.png"
                            alt="Monet.ai Creative Studio"
                            width={800}
                            height={800}
                            className="w-full h-auto"
                            priority
                        />
                        {/* Overlay floating elements */}
                        <motion.div
                            animate={{ y: [0, -10, 0] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute top-4 right-4 bg-white/90 backdrop-blur px-4 py-2 rounded-xl shadow-lg border border-white/20"
                        >
                            <p className="text-xs font-bold text-primary italic">"Simply Breathtaking"</p>
                        </motion.div>
                    </div>

                    {/* Decorative hand-drawn element */}
                    <div className="absolute -bottom-6 -left-6 hand-drawn text-accent -rotate-12 bg-white px-4 py-2 rounded-lg shadow-sm">
                        Hand-illustrated
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
