"use client";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PricingPreview } from "@/components/landing/PricingPreview";
import { Badge } from "@/components/ui/Badge";
import { Check, HelpCircle } from "lucide-react";

const COMPARISON = [
    { feature: "Visual Masterpieces", free: "3 / mo", pro: "Unlimited", ent: "Unlimited" },
    { feature: "Research Quality", free: "Standard", pro: "Academic", ent: "Enterprise" },
    { feature: "Asset Library", free: "Basic", pro: "Premium", ent: "Custom & Premium" },
    { feature: "Export Formats", free: "Web", pro: "Web, PDF, Present", ent: "All + API" },
    { feature: "Team Access", free: "No", pro: "No", ent: "Yes" },
    { feature: "Custom Styles", free: "No", pro: "No", ent: "Yes" },
    { feature: "Support", free: "Community", pro: "Priority", ent: "Dedicated" },
];

export default function PricingPage() {
    return (
        <div className="bg-[#fdfbf7] min-h-screen">
            <Navbar />

            <main className="pt-32 pb-20 px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <Badge variant="pastel-gold" className="px-4 py-1 text-sm mb-6">Pricing Plans</Badge>
                        <h1 className="text-5xl md:text-6xl font-serif mb-6">Simple, transparent <span className="italic text-secondary">pricing.</span></h1>
                        <p className="text-gray-500 text-lg max-w-2xl mx-auto">
                            Empowering everyone from students to global research teams with the power of visual intelligence.
                        </p>
                    </div>

                    <PricingPreview />

                    {/* Detailed Comparison */}
                    <section className="py-24">
                        <h2 className="text-3xl font-serif text-center mb-16">Compare features</h2>
                        <div className="bg-white rounded-[2rem] overflow-hidden soft-shadow border border-gray-100">
                            <table className="w-full text-left">
                                <thead>
                                    <tr className="bg-gray-50/50 border-b border-gray-100">
                                        <th className="px-8 py-6 font-bold text-sm uppercase tracking-widest text-gray-400">Feature</th>
                                        <th className="px-8 py-6 font-bold text-sm uppercase tracking-widest text-gray-400">Free</th>
                                        <th className="px-8 py-6 font-bold text-sm uppercase tracking-widest text-primary">Pro</th>
                                        <th className="px-8 py-6 font-bold text-sm uppercase tracking-widest text-gray-400">Enterprise</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-100">
                                    {COMPARISON.map((row, i) => (
                                        <tr key={i} className="hover:bg-gray-50/30 transition-colors">
                                            <td className="px-8 py-6 flex items-center gap-2">
                                                <span className="font-medium">{row.feature}</span>
                                                <HelpCircle size={14} className="text-gray-300" />
                                            </td>
                                            <td className="px-8 py-6 text-gray-500">{row.free}</td>
                                            <td className="px-8 py-6 font-bold text-primary">{row.pro}</td>
                                            <td className="px-8 py-6 text-gray-500">{row.ent}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </section>

                    {/* FAQ Preview */}
                    <section className="bg-primary text-white p-12 rounded-[2.5rem] flex flex-col md:flex-row items-center justify-between gap-8">
                        <div className="max-w-xl">
                            <h2 className="text-3xl font-serif mb-4 italic">Have more questions?</h2>
                            <p className="text-white/70">
                                Our team is happy to help you choose the right plan for your vision. We offer special discounts for non-profits and registered students.
                            </p>
                        </div>
                        <button className="bg-white text-primary px-8 py-4 rounded-xl font-bold hover:bg-gray-100 transition-colors whitespace-nowrap">
                            Contact our Team
                        </button>
                    </section>
                </div>
            </main>

            <Footer />
        </div>
    );
}
