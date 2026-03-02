"use client";

import { useState, useRef, useEffect } from "react";
import {
    BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer,
    RadarChart, Radar, PolarGrid, PolarAngleAxis,
    LineChart, Line, CartesianGrid, Legend,
    PieChart, Pie, Cell
} from "recharts";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

// Note: Ported from visual-knowledge-engine.jsx with minor adjustments for Next.js/Tailwind context.
// The original file used document.head injections which we'll keep for fidelity in this test route.

export default function VKEPage() {
    const [topic, setTopic] = useState("Penguin");
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState<any>(null);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        // Inject Fonts
        const fontLink = document.createElement("link");
        fontLink.rel = "stylesheet";
        fontLink.href = "https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Mono:wght@300;400;500&family=Playfair+Display:ital,wght@0,700;1,400&display=swap";
        document.head.appendChild(fontLink);

        // Initial fetch
        handleSearch("Penguin");

        return () => {
            // Cleanup if needed, though global styles and fonts are usually fine to persist
        };
    }, []);

    const handleSearch = async (searchTopic: string) => {
        setLoading(true);
        setError(null);
        try {
            const summary = await fetchWikiSummary(searchTopic);
            const sections = await fetchWikiSections(searchTopic);
            const links = await fetchWikiLinks(searchTopic);
            const categories = await fetchWikiCategories(searchTopic);

            const processed = processData(summary, sections, links, categories);
            setData({ summary, processed });
        } catch (err: any) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    // Helper functions from the original file
    const WIKI_API = "https://en.wikipedia.org/w/api.php";

    async function wikiGet(params: any) {
        const url = new URL(WIKI_API);
        url.search = new URLSearchParams({ ...params, format: "json", origin: "*" }).toString();
        const res = await fetch(url.toString());
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        return res.json();
    }

    async function fetchWikiSummary(topic: string) {
        const data = await wikiGet({
            action: "query",
            titles: topic,
            prop: "extracts|description|pageimages",
            exintro: "1",
            explaintext: "1",
            exsentences: "10",
            piprop: "thumbnail",
            pithumbsize: "400",
            redirects: "1",
        });
        const pages = data?.query?.pages || {};
        const page = Object.values(pages)[0] as any;
        if (!page || page.missing !== undefined) throw new Error("Page not found");
        return {
            extract: page.extract || "",
            description: page.description || topic,
            title: page.title || topic,
            thumbnail: page.thumbnail?.source || null,
        };
    }

    async function fetchWikiSections(topic: string) {
        const data = await wikiGet({
            action: "parse",
            page: topic,
            prop: "sections",
            redirects: "1",
        });
        return data?.parse?.sections || [];
    }

    async function fetchWikiLinks(topic: string) {
        const data = await wikiGet({
            action: "query",
            titles: topic,
            prop: "links",
            pllimit: "40",
            plnamespace: "0",
            redirects: "1",
        });
        const pages = data?.query?.pages || {};
        const page = Object.values(pages)[0] as any;
        return (page?.links || []).map((l: any) => l.title).filter((t: string) => !t.includes(":")).slice(0, 30);
    }

    async function fetchWikiCategories(topic: string) {
        const data = await wikiGet({
            action: "query",
            titles: topic,
            prop: "categories",
            cllimit: "30",
            redirects: "1",
        });
        const pages = data?.query?.pages || {};
        const page = Object.values(pages)[0] as any;
        const BAD = ["article", "cs1", "cs2", "wikipedia", "webarchive", "dmy", "mdy", "use ", "good", "featured", "all ", "pages", "template"];
        return (page?.categories || [])
            .map((c: any) => c.title.replace("Category:", ""))
            .filter((c: string) => !BAD.some(b => c.toLowerCase().includes(b)));
    }

    function processData(summary: any, sections: any, links: any, categories: any) {
        const text = summary.extract || "";
        const words = text.split(/\s+/).map((w: string) => w.replace(/[^a-zA-Z]/g, "").toLowerCase())
            .filter((w: string) => w.length > 5 && !["their", "which", "these", "about", "there", "where", "after", "other", "would", "could", "should", "because", "between", "through", "within", "without", "during", "before", "under", "with", "from", "that", "this", "were", "have", "been", "they", "also", "more", "some", "into", "than", "then", "when", "what", "will"].includes(w));

        const freq: any = {};
        words.forEach((w: string) => { freq[w] = (freq[w] || 0) + 1; });
        const topWords = Object.entries(freq).sort((a: any, b: any) => b[1] - a[1]).slice(0, 20).map(([w, c]) => ({ word: w, count: c }));

        const sectionData = sections.slice(0, 12).map((s: any) => ({
            name: s.line.length > 20 ? s.line.slice(0, 20) + "…" : s.line,
            depth: parseInt(s.toclevel) || 1,
            index: parseInt(s.index) || 0
        }));

        const yearRegex = /\b(1[0-9]{3}|20[0-2][0-9])\b/g;
        const yearMatches = [...new Set([...text.matchAll(yearRegex)].map(m => parseInt(m[0])))].sort((a, b) => a - b);
        const sentences = text.match(/[^.!?]+[.!?]+/g) || [];
        const timeline = yearMatches.slice(0, 10).map(year => {
            const sentence = sentences.find(s => s.includes(year.toString())) || "";
            return { year, event: sentence.trim().slice(0, 120) };
        }).filter(t => t.event);

        const mindmapLinks = links.slice(0, 16);

        return { topWords, sectionData, timeline, mindmapLinks, categories: categories.slice(0, 20) };
    }

    return (
        <div className="bg-[#050508] min-h-screen text-[#e8e8f0] font-sans selection:bg-[#7fff6e]/30">
            <Navbar />

            <main className="pt-32 pb-20 px-6 max-w-7xl mx-auto">
                <header className="mb-16 text-center">
                    <h1 className="text-6xl font-black mb-6 tracking-tighter">
                        VISUAL <span className="text-[#7fff6e]">KNOWLEDGE</span> ENGINE
                    </h1>
                    <p className="text-[#6b6b80] font-mono text-sm max-w-xl mx-auto uppercase tracking-widest">
                        Ported from training set — Real-time Wikipedia Data Synthesis
                    </p>
                </header>

                <div className="flex gap-4 mb-12 max-w-2xl mx-auto">
                    <input
                        type="text"
                        value={topic}
                        onChange={(e) => setTopic(e.target.value)}
                        placeholder="Enter a topic..."
                        className="flex-1 bg-[#111119] border border-[#1e1e2e] rounded-2xl px-6 py-4 text-white focus:border-[#7fff6e]/50 outline-none transition-all"
                    />
                    <button
                        onClick={() => handleSearch(topic)}
                        disabled={loading}
                        className="bg-[#7fff6e] text-black font-bold px-8 py-4 rounded-2xl hover:scale-105 transition-all disabled:opacity-50"
                    >
                        {loading ? "SYNTHESIZING..." : "SYNTHESIZE"}
                    </button>
                </div>

                {error && (
                    <div className="bg-red-500/10 border border-red-500/20 text-red-500 p-6 rounded-2xl mb-12 font-mono text-sm">
                        ERROR: {error}
                    </div>
                )}

                {data && !loading && (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {/* Summary Card */}
                        <div className="lg:col-span-2 bg-[#111119] border border-[#1e1e2e] rounded-3xl p-8 relative overflow-hidden group">
                            <div className="absolute top-0 left-0 w-2 h-full bg-[#7fff6e]" />
                            <h3 className="text-[#6b6b80] font-mono text-[0.65rem] uppercase tracking-widest mb-4">Executive Summary</h3>
                            <p className="text-lg leading-relaxed text-[#e8e8f0]/90 italic">
                                "{data.summary.extract.slice(0, 450)}..."
                            </p>
                        </div>

                        {/* Categories */}
                        <div className="bg-[#111119] border border-[#1e1e2e] rounded-3xl p-8">
                            <h3 className="text-[#6b6b80] font-mono text-[0.65rem] uppercase tracking-widest mb-4">Taxonomy</h3>
                            <div className="flex flex-wrap gap-2">
                                {data.processed.categories.slice(0, 8).map((cat: string, i: number) => (
                                    <span key={i} className="bg-[#1e1e2e] text-[#6b6b80] text-[0.65rem] font-mono px-3 py-1.5 rounded-full hover:text-[#7fff6e] hover:border-[#7fff6e]/30 border border-transparent transition-all cursor-default">
                                        {cat}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* Timeline Section */}
                        <div className="bg-[#111119] border border-[#1e1e2e] rounded-3xl p-8 lg:row-span-2">
                            <h3 className="text-[#6b6b80] font-mono text-[0.65rem] uppercase tracking-widest mb-6">Historical Vector</h3>
                            <div className="space-y-8 relative before:absolute before:left-[7px] before:top-0 before:bottom-0 before:w-px before:bg-gradient-to-b before:from-[#7fff6e] before:to-transparent">
                                {data.processed.timeline.map((item: any, i: number) => (
                                    <div key={i} className="relative pl-8">
                                        <div className="absolute left-0 top-1.5 w-4 h-4 rounded-full bg-[#050508] border-2 border-[#7fff6e] shadow-[0_0_10px_#7fff6e]" />
                                        <div className="text-[#7fff6e] font-mono text-xs mb-1">{item.year}</div>
                                        <p className="text-sm text-[#e8e8f0]/80 leading-snug">{item.event}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Data Visuals - Word Cloud simulation */}
                        <div className="lg:col-span-2 bg-[#111119] border border-[#1e1e2e] rounded-3xl p-8">
                            <h3 className="text-[#6b6b80] font-mono text-[0.65rem] uppercase tracking-widest mb-6">Semantic Density</h3>
                            <div className="flex flex-wrap gap-4 items-center justify-center">
                                {data.processed.topWords.map((w: any, i: number) => (
                                    <span
                                        key={i}
                                        style={{
                                            fontSize: `${Math.max(0.8, (w.count / data.processed.topWords[0].count) * 2.5)}rem`,
                                            color: ["#7fff6e", "#ff6ef0", "#6eaaff", "#ffcc6e"][i % 4]
                                        }}
                                        className="font-bold opacity-80 hover:opacity-100 transition-all cursor-default"
                                    >
                                        {w.word}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* Section Depth Chart */}
                        <div className="lg:col-span-2 bg-[#111119] border border-[#1e1e2e] rounded-3xl p-8 h-[400px]">
                            <h3 className="text-[#6b6b80] font-mono text-[0.65rem] uppercase tracking-widest mb-6">Article Architecture</h3>
                            <ResponsiveContainer width="100%" height="100%">
                                <BarChart data={data.processed.sectionData}>
                                    <XAxis dataKey="name" stroke="#6b6b80" fontSize={10} hide />
                                    <YAxis stroke="#6b6b80" fontSize={10} />
                                    <Tooltip
                                        contentStyle={{ backgroundColor: '#111119', border: '1px solid #1e1e2e', borderRadius: '12px' }}
                                        itemStyle={{ color: '#7fff6e' }}
                                    />
                                    <Bar dataKey="depth" fill="#7fff6e" radius={[4, 4, 0, 0]} />
                                </BarChart>
                            </ResponsiveContainer>
                        </div>
                    </div>
                )}

                {!data && !loading && (
                    <div className="flex flex-col items-center justify-center py-32 opacity-20 filter grayscale">
                        <div className="w-24 h-24 border-2 border-dashed border-[#6b6b80] rounded-full mb-8 animate-spin-slow" />
                        <p className="font-mono text-sm tracking-widest">AWAITING INPUT PARAMETERS</p>
                    </div>
                )}
            </main>

            <Footer />
        </div>
    );
}
