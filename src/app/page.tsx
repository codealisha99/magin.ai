import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/landing/Hero";
import { DemoPreview } from "@/components/landing/DemoPreview";
import { FeatureGrid } from "@/components/landing/FeatureGrid";
import { PricingPreview } from "@/components/landing/PricingPreview";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <DemoPreview />
      <FeatureGrid />

      <section className="py-24 px-6 bg-primary text-white text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-serif mb-8 italic">Ready to transform your ideas into masterpieces?</h2>
          <p className="text-white/70 text-lg mb-12">
            Join the thousands of researchers and creators who are already using Monet.ai to tell better stories.
          </p>
          <div className="flex justify-center gap-4">
            <button className="bg-white text-primary px-8 py-4 rounded-xl font-bold hover:bg-gray-100 transition-colors">
              Get Started for Free
            </button>
          </div>
        </div>
      </section>

      <PricingPreview />
      <Footer />
    </>
  );
}
