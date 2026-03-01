export interface InfographicData {
    topic: string;
    edition: string;
    sections: {
        index: number;
        title: string;
        subtitle: string;
        content: string;
        image: string;
        color: string;
    }[];
    anatomy?: {
        title: string;
        subtitle: string;
        description: string;
        image: string;
        callouts: {
            id: number;
            title: string;
            description: string;
            x: number;
            y: number;
            side: "left" | "right";
        }[];
    };
    comparisons?: {
        title: string;
        subtitle: string;
        groups: {
            title: string;
            items: { id: number; label: string; value: string; image: string }[];
        }[];
    };
    timeline: {
        title: string;
        items: { year: string; label: string; desc: string }[];
    };
    stats: {
        label: string;
        value: string;
        icon: string;
        color: string;
        bg: string;
    }[];
}

export const MOCK_DATA: Record<string, InfographicData> = {
    "The Secret Life of Penguins": {
        topic: "The Secret Life of Penguins",
        edition: "Natural History — Storybook Edition",
        sections: [
            {
                index: 1,
                title: "The Penguin Village",
                subtitle: "A community in the cold",
                content: "In the heart of the Antarctic, penguins have built a complex society. From communal kitchens to shared nurseries, their 'villages' are models of cooperation and survival in the harshest climate on Earth.",
                image: "/images/penguin_village.png",
                color: "bg-pastel-sky"
            },
            {
                index: 2,
                title: "Daily Rituals",
                subtitle: "Culture in the workshop",
                content: "Beyond survival, penguins engage in rich cultural traditions. They gather in 'workshops' to share stories, pass down navigational wisdom, and maintain the social bonds that keep the village thriving.",
                image: "/images/penguin_rituals.png",
                color: "bg-pastel-sage"
            }
        ],
        anatomy: {
            title: "Inside a Penguin",
            subtitle: "Perfectly adapted for the deep",
            description: "Zooming along underwater at speeds faster than an Olympic swimmer, the streamlined body of a penguin is superbly adapted to 'flying' underwater. Millions of years of evolution have created a biological masterpiece.",
            image: "/images/penguin_anatomy.png",
            callouts: [
                { id: 1, title: "Black and White", description: "On land, a penguin's black back soaks up the sun's warmth, while its white front reflects heat away.", x: 20, y: 30, side: "left" },
                { id: 2, title: "Heavy Bones", description: "A penguin's bones are solid and heavy, which help it to dive under the water.", x: 50, y: 20, side: "left" },
                { id: 3, title: "Salty Sneeze", description: "Special glands behind its eyes get rid of extra salt from its blood through its nose.", x: 85, y: 40, side: "right" },
                { id: 4, title: "Warm Layer", description: "Penguins have a thick blanket of fat, called blubber, under their skin to keep them warm.", x: 45, y: 75, side: "right" }
            ]
        },
        comparisons: {
            title: "Surprising Penguins",
            subtitle: "A study in variety and form",
            groups: [
                {
                    title: "Penguin Sizes",
                    items: [
                        { id: 1, label: "Emperor", value: "1.3m", image: "/images/penguin_rituals.png" },
                        { id: 2, label: "King", value: "1m", image: "/images/penguin_village.png" },
                        { id: 3, label: "Little Blue", value: "35cm", image: "/images/penguin_rituals.png" }
                    ]
                },
                {
                    title: "Beaks & Feet",
                    items: [
                        { id: 4, label: "Deep-Diver", value: "Hooked", image: "/images/penguin_village.png" },
                        { id: 5, label: "Fast-Fisher", value: "Sharp", image: "/images/penguin_rituals.png" },
                        { id: 6, label: "Waddler", value: "Webbed", image: "/images/penguin_village.png" }
                    ]
                }
            ]
        },
        timeline: {
            title: "A Year in the Ice",
            items: [
                { year: "March", label: "The Long March", desc: "Thousands of penguins begin their trek inland to the breeding grounds." },
                { year: "June", label: "The Midwinter Vigil", desc: "Males huddle together to protect eggs during the brutal Antarctic night." },
                { year: "October", label: "The First Waddle", desc: "Chicks hatch into a world of white, ready for their first fishing lessons." }
            ]
        },
        stats: [
            { label: "Fishing Success Rate", value: "82%", icon: "Fish", color: "text-sky-500", bg: "bg-pastel-sky" },
            { label: "Average Colony Size", value: "1,200", icon: "Users", color: "text-indigo-500", bg: "bg-pastel-sage" },
            { label: "Waddle Velocity", value: "2.5 mph", icon: "Timer", color: "text-amber-500", bg: "bg-pastel-gold" }
        ]
    },
    "The History of Jazz": {
        topic: "The History of Jazz",
        edition: "Musical Heritage — Storybook Edition",
        sections: [
            {
                index: 1,
                title: "The Rhythm of New Orleans",
                subtitle: "Where it all began",
                content: "In the vibrant streets of New Orleans, a new sound was born. It was a blend of spirituals, blues, and ragtime.",
                image: "/sample-section-1.png",
                color: "bg-pastel-rose"
            },
            {
                index: 2,
                title: "The Global Symphony",
                subtitle: "Spreading the melody",
                content: "From the smoky clubs of Harlem to the grand halls of Europe, Jazz became the voice of a generation. It transcended boundaries, fostering cultural diplomacy and social change.",
                image: "/sample-section-2.png",
                color: "bg-pastel-sage"
            }
        ],
        timeline: {
            title: "A Centennial of Sound",
            items: [
                { year: "1910s", label: "New Orleans Beginnings", desc: "The 'Dixieland' style emerges as the first recognizable form." },
                { year: "1940s", label: "Bebop Revolution", desc: "Parker and Gillespie introduce complex harmonies." },
                { year: "1960s", label: "Free Jazz & Fusion", desc: "Miles Davis breaks barriers with electronic instruments." }
            ]
        },
        stats: [
            { label: "Influenced Genres", value: "45+", icon: "Music", color: "text-rose-500", bg: "bg-pastel-rose" },
            { label: "Key Origin Cities", value: "12", icon: "MapPin", color: "text-sky-500", bg: "bg-pastel-sky" },
            { label: "Verified Citations", value: "156", icon: "Book", color: "text-amber-500", bg: "bg-pastel-gold" }
        ]
    }
};

export const DEFAULT_DATA: InfographicData = {
    topic: "Knowledge Synthesis",
    edition: "Premium Insight — Storybook Edition",
    sections: [
        {
            index: 1,
            title: "Core Concepts",
            subtitle: "Foundational knowledge",
            content: "Synthesizing complex information into a clear visual narrative is the hallmark of Monet.ai. We analyze thousands of data points to bring you the essential truth.",
            image: "/sample-section-1.png",
            color: "bg-pastel-sky"
        },
        {
            index: 2,
            title: "Global Impact",
            subtitle: "Wider perspectives",
            content: "Understanding the broader implications of any topic allows for more informed decision-making and a deeper appreciation of our interconnected world.",
            image: "/sample-section-2.png",
            color: "bg-pastel-sage"
        }
    ],
    timeline: {
        title: "Journey Through Time",
        items: [
            { year: "Phase 1", label: "Discovery", desc: "Initial research and data gathering phase." },
            { year: "Phase 2", label: "Analysis", desc: "Deep dive into the patterns and connections." },
            { year: "Phase 3", label: "Synthesis", desc: "Bringing it all together into a visual story." }
        ]
    },
    stats: [
        { label: "Data points analyzed", value: "10k+", icon: "Database", color: "text-sky-500", bg: "bg-pastel-sky" },
        { label: "Accuracy Score", value: "99%", icon: "ShieldCheck", color: "text-green-500", bg: "bg-pastel-sage" },
        { label: "Processing Speed", value: "Fast", icon: "Zap", color: "text-amber-500", bg: "bg-pastel-gold" }
    ]
};
