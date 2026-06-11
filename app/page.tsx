import React from "react";
import { Hero } from "@/components/hero";
import { FeaturesBlock } from "@/components/features";
import LibraryCarousel from "@/components/library-carousel";
import { Pricing } from "@/components/pricing";
import { Faq } from "@/components/faq";
import { TestimonialsSection } from "@/components/testimonials-section";
import { Navbar } from "@/components/navbar";
import { AiPlugin } from "@/components/ai-plugin";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground font-sans">
      <Navbar />

      {/* Main Sections */}
      <main className="flex-1">
        <Hero />
        <FeaturesBlock />
        <LibraryCarousel />
        <AiPlugin />
        <TestimonialsSection />
        <Pricing />
        <Faq />
      </main>

      {/* Footer Placeholder */}
      <footer className="border-t border-border bg-muted/30">
        <div className="max-w-6xl mx-auto px-6 py-12 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} PromptEdit Inc. All rights reserved.
          </div>
          <div className="flex gap-6 text-xs text-muted-foreground">
            <a href="#" className="hover:text-foreground transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-foreground transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-foreground transition-colors">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
