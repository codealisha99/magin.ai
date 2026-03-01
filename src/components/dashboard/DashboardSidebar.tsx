"use client";

import { LayoutGrid, Folder, Star, Clock, Users, Plus } from "lucide-react";

interface SidebarProps {
    currentView: string;
    onSetView: (v: string) => void;
}

export function DashboardSidebar({ currentView, onSetView }: SidebarProps) {
    const MENU = [
        { id: "all", label: "All Masterpieces", icon: LayoutGrid },
        { id: "folders", label: "Folders", icon: Folder },
        { id: "favorites", label: "Favorites", icon: Star },
        { id: "recent", label: "Recently Synthesized", icon: Clock },
        { id: "shared", label: "Shared with Me", icon: Users },
    ];

    return (
        <div className="space-y-8">
            <div>
                <button className="w-full flex items-center justify-between p-4 rounded-2xl bg-primary text-white shadow-lg hover:scale-[1.02] transition-transform active:scale-95 group">
                    <span className="font-bold">Create New</span>
                    <Plus size={20} className="group-hover:rotate-90 transition-transform" />
                </button>
            </div>

            <nav className="space-y-2">
                {MENU.map((item) => (
                    <button
                        key={item.id}
                        onClick={() => onSetView(item.id)}
                        className={`w-full flex items-center gap-3 p-3 rounded-xl font-medium transition-all ${currentView === item.id
                                ? "bg-white text-primary shadow-sm border border-gray-100"
                                : "text-gray-400 hover:text-primary hover:bg-white/50"
                            }`}
                    >
                        <item.icon size={18} />
                        {item.label}
                    </button>
                ))}
            </nav>

            <div className="pt-8 border-t border-gray-100">
                <h4 className="text-[10px] uppercase tracking-widest text-gray-400 font-bold mb-4">My Folders</h4>
                <div className="space-y-2">
                    <button className="w-full flex items-center gap-3 p-2 rounded-lg text-sm text-gray-500 hover:text-primary transition-colors">
                        <div className="w-2 h-2 rounded-full bg-pastel-rose" />
                        Jazz History
                    </button>
                    <button className="w-full flex items-center gap-3 p-2 rounded-lg text-sm text-gray-500 hover:text-primary transition-colors">
                        <div className="w-2 h-2 rounded-full bg-pastel-sky" />
                        Science 101
                    </button>
                    <button className="w-full flex items-center gap-3 p-2 rounded-lg text-sm text-gray-500 hover:text-primary transition-colors">
                        <div className="w-2 h-2 rounded-full bg-pastel-sage" />
                        Art Collection
                    </button>
                </div>
            </div>
        </div>
    );
}
