"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { Download } from "lucide-react";
import { Button } from "@/components/ui/button";

export function AiPlugin() {
  return (
    <section id="ai-plugin" className="relative py-10 lg:py-28 overflow-hidden bg-background border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-12 items-start">
          {/* Text Content */}
          <div className="space-y-8 order-1 lg:order-2 flex flex-col items-center lg:items-start text-center lg:text-left">
            <div className="space-y-4">
              <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl pb-1 text-slate-100">
                Access <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 via-emerald-300 to-teal-300">PromptEdit AI Tools</span> Within Your Editing Software
              </h2>
              <p className="text-base sm:text-lg text-muted-foreground max-w-xl leading-relaxed">
                No need to open a browser window. The plugins open inside of your favorite editing software, allowing you to generate AI creations and instantly add them to any project.
              </p>
            </div>

            <div className="space-y-6 flex flex-col items-center lg:items-start w-full">
              <div className="flex flex-col gap-4 items-start">
                <div className="flex items-center gap-4">
                  <div className="size-12 flex items-center justify-center rounded-xl bg-card border shadow-sm">
                    <img src="/logos/adobe-premiere-svgrepo-com.svg" alt="Adobe Premiere" className="size-7" />
                  </div>
                  <span className="text-xl font-bold text-slate-200">Adobe Premiere</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="size-12 flex items-center justify-center rounded-xl bg-card border shadow-sm">
                    <img src="/logos/after-effects-svgrepo-com.svg" alt="Adobe After Effects" className="size-7" />
                  </div>
                  <span className="text-xl font-bold text-slate-200">Adobe After Effects</span>
                </div>
              </div>

              <div className="pt-2">
                <Button variant="outline" size="lg" className="group">
                  <Download className="mr-2 size-4 transition-transform group-hover:-translate-y-0.5" />
                  Download Plugin
                </Button>
              </div>
            </div>
          </div>

          {/* Window Mockup */}
          <div className="w-full flex justify-center lg:justify-start order-2 lg:order-1">
            <div className="w-full aspect-[4/3] rounded-2xl border bg-card/40 backdrop-blur-md shadow-2xl relative overflow-hidden flex flex-col">
              {/* Window Header */}
              <div className="h-10 border-b border-white/5 bg-white/5 flex items-center px-4 gap-2 z-10 relative">
                <div className="size-3 rounded-full bg-rose-500/80"></div>
                <div className="size-3 rounded-full bg-amber-500/80"></div>
                <div className="size-3 rounded-full bg-emerald-500/80"></div>
              </div>
              {/* Window Body with stretched plugin.png */}
              <div className="flex-1 relative bg-black/20 overflow-hidden">
                <img 
                  src="/plugin.png" 
                  alt="Plugin Interface Preview" 
                  className="w-full h-full object-fill"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
