import React from "react";
import { Hero } from "@/components/hero";
import { Models } from "@/components/models";
import { Library } from "@/components/library";
import { SocialProof } from "@/components/social-proof";
import { Pricing } from "@/components/pricing";
import { Faq } from "@/components/faq";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground font-sans">
      {/* Header Placeholder */}
      <header className="border-b border-border sticky top-0 bg-background/80 backdrop-blur-sm z-50">
        <div className="max-w-6xl mx-auto h-16 flex items-center justify-between">
          <img src="/logo-dark.png" alt="Prompt Edit Logo" className="w-auto h-3/5" />
          <nav className="hidden md:flex gap-6 text-sm text-muted-foreground font-medium">
            <a href="#" className="hover:text-foreground transition-colors">Features</a>
            <a href="#" className="hover:text-foreground transition-colors">Models</a>
            <a href="#" className="hover:text-foreground transition-colors">Pricing</a>
            <a href="#" className="hover:text-foreground transition-colors">Docs</a>
          </nav>
          <div className="flex items-center gap-4">
            <a href="#" className="text-sm font-medium hover:text-foreground transition-colors">Sign In</a>
            <a href="#" className="text-sm font-medium bg-foreground text-background px-4 py-2 rounded-md hover:opacity-90 transition-opacity">
              Get Started
            </a>
          </div>
        </div>
      </header>

      {/* Main Sections */}
      <main className="flex-1">
        <Hero />
        <Models />
        <Library />
        <SocialProof />
        <Pricing />
        <Faq />
      </main>

      {/* Footer Placeholder */}
      <footer className="border-t border-border bg-muted/30">
        <div className="max-w-6xl mx-auto px-6 py-12 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Aether AI Inc. All rights reserved.
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
