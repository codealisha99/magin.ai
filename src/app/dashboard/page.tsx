"use client";

import { motion } from "framer-motion";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { DashboardSidebar } from "@/components/dashboard/DashboardSidebar";
import { InfographicGrid } from "@/components/dashboard/InfographicGrid";
import { DashboardHeader } from "@/components/dashboard/DashboardHeader";
import { useState } from "react";

export default function DashboardPage() {
    const [view, setView] = useState("all");

    return (
        <div className="bg-[#fdfbf7] min-h-screen flex flex-col">
            <Navbar />

            <main className="flex-1 pt-32 pb-20 px-6">
                <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12">
                    {/* Sidebar */}
                    <aside className="lg:w-64 flex-shrink-0">
                        <DashboardSidebar currentView={view} onSetView={setView} />
                    </aside>

                    {/* Content */}
                    <section className="flex-1 space-y-8">
                        <DashboardHeader title={view === "all" ? "My Library" : view.charAt(0).toUpperCase() + view.slice(1)} />
                        <InfographicGrid view={view} />
                    </section>
                </div>
            </main>

            <Footer />
        </div>
    );
}
