"use client";

import { motion } from "framer-motion";

interface TimelineItem {
    year: string;
    label: string;
    desc: string;
}

export function TimelineSection({ title, items }: { title: string; items: TimelineItem[] }) {
    return (
        <section className="py-12">
            <h3 className="text-3xl font-serif text-center mb-16 uppercase tracking-widest">{title}</h3>

            <div className="relative max-w-3xl mx-auto pl-12 md:pl-0">
                <div className="absolute left-[59px] md:left-1/2 top-0 bottom-0 w-1 bg-pastel-gold -translate-x-1/2" />

                <div className="space-y-16">
                    {items.map((item, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className={`relative flex flex-col ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} items-center gap-8 md:gap-0`}
                        >
                            <div className="md:w-1/2 flex justify-center md:justify-end md:pr-12 text-center md:text-right">
                                {i % 2 === 0 ? (
                                    <div>
                                        <span className="text-4xl font-serif font-bold text-primary">{item.year}</span>
                                        <h4 className="font-bold text-lg mt-2">{item.label}</h4>
                                        <p className="text-sm text-gray-500 max-w-xs ml-auto">{item.desc}</p>
                                    </div>
                                ) : null}
                            </div>

                            <div className="absolute left-[59px] md:left-1/2 w-10 h-10 rounded-full bg-white border-4 border-primary shadow-md -translate-x-1/2 flex items-center justify-center z-10">
                                <div className="w-2 h-2 rounded-full bg-primary" />
                            </div>

                            <div className="md:w-1/2 flex justify-center md:justify-start md:pl-12 text-center md:text-left">
                                {i % 2 !== 0 ? (
                                    <div>
                                        <span className="text-4xl font-serif font-bold text-primary">{item.year}</span>
                                        <h4 className="font-bold text-lg mt-2">{item.label}</h4>
                                        <p className="text-sm text-gray-500 max-w-xs">{item.desc}</p>
                                    </div>
                                ) : null}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
