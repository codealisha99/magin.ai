"use client";

import { Search, List, LayoutGrid, Filter } from "lucide-react";

export function DashboardHeader({ title }: { title: string }) {
    return (
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 border-b border-gray-100">
            <div>
                <h2 className="text-3xl font-serif font-bold">{title}</h2>
                <p className="text-gray-400 text-sm">You have 12 visual stories in your library.</p>
            </div>

            <div className="flex items-center gap-4">
                <div className="relative">
                    <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                    <input
                        type="text"
                        placeholder="Search your library..."
                        className="pl-10 pr-4 py-2 rounded-xl bg-white border border-gray-100 focus:outline-none focus:border-primary/30 w-full md:w-64 transition-all"
                    />
                </div>

                <div className="flex bg-white rounded-xl border border-gray-100 p-1">
                    <button className="p-2 bg-gray-50 rounded-lg text-primary">
                        <LayoutGrid size={18} />
                    </button>
                    <button className="p-2 text-gray-400 hover:text-primary transition-colors">
                        <List size={18} />
                    </button>
                </div>

                <button className="p-2 bg-white border border-gray-100 rounded-xl text-gray-400 hover:text-primary transition-colors flex items-center gap-2 px-4 font-medium text-sm">
                    <Filter size={18} />
                    Filter
                </button>
            </div>
        </div>
    );
}
