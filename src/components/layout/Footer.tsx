import Link from "next/link";
import { Palette, Github, Twitter, Instagram } from "lucide-react";

export function Footer() {
    return (
        <footer className="bg-white border-t border-gray-100 pt-16 pb-8">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
                    <div className="md:col-span-1">
                        <div className="flex items-center gap-2 mb-6">
                            <Palette size={24} className="text-primary" />
                            <span className="text-2xl font-serif font-bold italic">Monet.ai</span>
                        </div>
                        <p className="text-gray-500 mb-6 max-w-xs">
                            Transforming complex knowledge into breathtaking visual stories through the fusion of AI and art.
                        </p>
                        <div className="flex items-center gap-4">
                            <Twitter size={20} className="text-gray-400 hover:text-primary cursor-pointer transition-colors" />
                            <Instagram size={20} className="text-gray-400 hover:text-primary cursor-pointer transition-colors" />
                            <Github size={20} className="text-gray-400 hover:text-primary cursor-pointer transition-colors" />
                        </div>
                    </div>

                    <div>
                        <h4 className="font-serif font-bold mb-6">Product</h4>
                        <ul className="space-y-4">
                            <li><Link href="/features" className="text-gray-500 hover:text-primary transition-colors">Features</Link></li>
                            <li><Link href="/pricing" className="text-gray-500 hover:text-primary transition-colors">Pricing</Link></li>
                            <li><Link href="/create" className="text-gray-500 hover:text-primary transition-colors">Create</Link></li>
                            <li><Link href="/api" className="text-gray-500 hover:text-primary transition-colors">API</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-serif font-bold mb-6">Company</h4>
                        <ul className="space-y-4">
                            <li><Link href="/about" className="text-gray-500 hover:text-primary transition-colors">About Us</Link></li>
                            <li><Link href="/blog" className="text-gray-500 hover:text-primary transition-colors">Blog</Link></li>
                            <li><Link href="/careers" className="text-gray-500 hover:text-primary transition-colors">Careers</Link></li>
                            <li><Link href="/privacy" className="text-gray-500 hover:text-primary transition-colors">Privacy</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-serif font-bold mb-6">Support</h4>
                        <ul className="space-y-4">
                            <li><Link href="/help" className="text-gray-500 hover:text-primary transition-colors">Help Center</Link></li>
                            <li><Link href="/community" className="text-gray-500 hover:text-primary transition-colors">Community</Link></li>
                            <li><Link href="/contact" className="text-gray-500 hover:text-primary transition-colors">Contact</Link></li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-gray-100 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
                    <p className="text-sm text-gray-400">© 2024 Monet.ai. All rights reserved.</p>
                    <div className="hand-drawn text-primary text-2xl">
                        Made with heart and code.
                    </div>
                </div>
            </div>
        </footer>
    );
}
