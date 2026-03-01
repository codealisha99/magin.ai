import { Card } from "@/components/ui/Card";
import { BookOpen, Palette, Zap, Globe, Shield, Users } from "lucide-react";

const FEATURES = [
    {
        title: "Deep Research engine",
        description: "Fetches information from academic papers, trusted news, and public datasets to ensure accuracy.",
        icon: BookOpen,
        color: "text-blue-500",
        bg: "bg-blue-50"
    },
    {
        title: "Artistic Synthesis",
        description: "Our AI doesn't just list facts; it crafts a narrative flow that tells a compelling story.",
        icon: Palette,
        color: "text-rose-500",
        bg: "bg-rose-50"
    },
    {
        title: "Instant Generation",
        description: "Go from a single sentence to a full-page visual story in less than 60 seconds.",
        icon: Zap,
        color: "text-amber-500",
        bg: "bg-amber-50"
    },
    {
        title: "Interactive Web Export",
        description: "Share your infographics as interactive web pages that users can zoom and explore.",
        icon: Globe,
        color: "text-emerald-500",
        bg: "bg-emerald-50"
    },
    {
        title: "Verified Citations",
        description: "Every fact includes its source. High confidence scores and cross-checked data points.",
        icon: Shield,
        color: "text-purple-500",
        bg: "bg-purple-50"
    },
    {
        title: "Team Collaboration",
        description: "Build knowledge worlds together with real-time editing and shared workspaces.",
        icon: Users,
        color: "text-indigo-500",
        bg: "bg-indigo-50"
    }
];

export function FeatureGrid() {
    return (
        <section className="py-24 px-6 bg-[#fdfbf7]">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-serif mb-4">Precision meets <span className="italic text-secondary">creativity.</span></h2>
                    <p className="text-gray-500 text-lg">Powerful tools designed for researchers, students, and creators.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {FEATURES.map((feature, i) => (
                        <Card key={i} className="group hover:border-primary/20 transition-all border-2 border-transparent">
                            <div className={`${feature.bg} ${feature.color} w-12 h-12 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                                <feature.icon size={24} />
                            </div>
                            <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                            <p className="text-gray-500 leading-relaxed">{feature.description}</p>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}
