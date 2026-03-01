import { Button } from "@/components/ui/Button";
import { Check } from "lucide-react";
import { Badge } from "@/components/ui/Badge";

const TIERS = [
    {
        name: "Free",
        price: "$0",
        description: "For curious minds exploring visual storytelling.",
        features: ["3 infographics per month", "Standard research depth", "Basic visual library", "Social sharing"],
        cta: "Get Started",
        variant: "outline"
    },
    {
        name: "Pro",
        price: "$19",
        description: "For students, researchers, and professional creators.",
        features: ["Unlimited infographics", "Academic-grade research", "Premium asset library", "PDF & Web export", "No watermarks"],
        cta: "Join Pro",
        variant: "primary",
        popular: true
    },
    {
        name: "Enterprise",
        price: "Custom",
        description: "For teams, studios, and educational institutions.",
        features: ["Custom visual styles", "Team workspaces", "API access", "Priority research queue", "Dedicated support"],
        cta: "Contact Sales",
        variant: "outline"
    }
];

export function PricingPreview() {
    return (
        <section className="py-24 px-6 bg-[#fdfbf7]">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-serif mb-4">Choose your <span className="italic text-secondary">creative</span> path.</h2>
                    <p className="text-gray-500 text-lg">Transparent pricing for every stage of your knowledge journey.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {TIERS.map((tier, i) => (
                        <div
                            key={i}
                            className={`relative bg-white rounded-3xl p-8 border-2 transition-all hover:shadow-xl ${tier.popular ? "border-primary shadow-lg scale-105" : "border-gray-100"
                                }`}
                        >
                            {tier.popular && (
                                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                                    <Badge variant="pastel-gold" className="px-4 py-1 text-sm">Most Popular</Badge>
                                </div>
                            )}

                            <h3 className="text-2xl font-serif font-bold mb-2">{tier.name}</h3>
                            <div className="mb-4">
                                <span className="text-4xl font-bold">{tier.price}</span>
                                {tier.price !== "Custom" && <span className="text-gray-400">/mo</span>}
                            </div>
                            <p className="text-gray-500 text-sm mb-8">{tier.description}</p>

                            <ul className="space-y-4 mb-8">
                                {tier.features.map((feature, idx) => (
                                    <li key={idx} className="flex items-center gap-3 text-sm text-gray-600">
                                        <div className="bg-primary/10 p-1 rounded-full">
                                            <Check size={14} className="text-primary" />
                                        </div>
                                        {feature}
                                    </li>
                                ))}
                            </ul>

                            <Button
                                variant={tier.variant as any}
                                className="w-full"
                                size="md"
                            >
                                {tier.cta}
                            </Button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
