"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Palette, Menu, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/Button";

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4">
            <div className="max-w-7xl mx-auto flex items-center justify-between glass rounded-2xl px-6 py-3">
                <Link href="/" className="flex items-center gap-2 group">
                    <div className="bg-primary text-white p-2 rounded-lg group-hover:rotate-12 transition-transform">
                        <Palette size={20} />
                    </div>
                    <span className="text-xl font-serif font-bold tracking-tight">Monet.ai</span>
                </Link>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-8">
                    <Link href="/gallery" className="text-sm font-medium hover:text-secondary transition-colors">Gallery</Link>
                    <Link href="/pricing" className="text-sm font-medium hover:text-secondary transition-colors">Pricing</Link>
                    <Link href="/dashboard" className="text-sm font-medium hover:text-secondary transition-colors">Library</Link>
                    <Link href="/create">
                        <Button variant="primary" size="sm">
                            Start Creating
                        </Button>
                    </Link>
                </div>

                {/* Mobile Toggle */}
                <button className="md:hidden p-2" onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <X /> : <Menu />}
                </button>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="md:hidden mt-2 glass rounded-2xl p-6 flex flex-col gap-4"
                >
                    <Link href="/gallery" className="text-lg font-medium">Gallery</Link>
                    <Link href="/pricing" className="text-lg font-medium">Pricing</Link>
                    <Link href="/dashboard" className="text-lg font-medium">Library</Link>
                    <Link href="/create" className="w-full">
                        <Button variant="primary" className="w-full">
                            Start Creating
                        </Button>
                    </Link>
                </motion.div>
            )}
        </nav>
    );
}
