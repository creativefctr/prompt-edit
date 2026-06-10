"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import {
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContents,
  TabsContent,
} from "@/components/animate-ui/components/radix/tabs";
import { Sparkles, Video, Image as ImageIcon, FileText, Music, ArrowRight, Layers } from "lucide-react";

interface AIModel {
  name: string;
  provider: string;
  price: string;
  iconBg: string;
  iconColor: string;
  avatarText: string;
  speed: string;
}

interface TemplatePack {
  title: string;
  category: string;
  count: string;
  desc: string;
  iconBg: string;
  iconColor: string;
}

// --- Data Lists ---
const videoModels: AIModel[] = [
  { name: "Sora", provider: "OpenAI", price: "$0.50 / gen", iconBg: "bg-red-500/10 dark:bg-red-500/20", iconColor: "text-red-600 dark:text-red-400", avatarText: "SR", speed: "High Quality" },
  { name: "Runway Gen-3", provider: "Runway", price: "$0.20 / gen", iconBg: "bg-orange-500/10 dark:bg-orange-500/20", iconColor: "text-orange-600 dark:text-orange-400", avatarText: "RW", speed: "Cinematic" },
  { name: "Luma Dream Machine", provider: "Luma AI", price: "$0.15 / gen", iconBg: "bg-amber-500/10 dark:bg-amber-500/20", iconColor: "text-amber-600 dark:text-amber-400", avatarText: "LM", speed: "Fast" },
];

const imageModels: AIModel[] = [
  { name: "Midjourney v6", provider: "Midjourney", price: "$0.03 / img", iconBg: "bg-blue-500/10 dark:bg-blue-500/20", iconColor: "text-blue-600 dark:text-blue-400", avatarText: "MJ", speed: "Photoreal" },
  { name: "DALL-E 3", provider: "OpenAI", price: "$0.04 / img", iconBg: "bg-cyan-500/10 dark:bg-cyan-500/20", iconColor: "text-cyan-600 dark:text-cyan-400", avatarText: "DE", speed: "Creative" },
  { name: "Stable Diffusion 3.5", provider: "Stability AI", price: "$0.01 / img", iconBg: "bg-teal-500/10 dark:bg-teal-500/20", iconColor: "text-teal-600 dark:text-teal-400", avatarText: "SD", speed: "Ultra Fast" },
  { name: "Flux.1 Pro", provider: "Black Forest", price: "$0.02 / img", iconBg: "bg-emerald-500/10 dark:bg-emerald-500/20", iconColor: "text-emerald-600 dark:text-emerald-400", avatarText: "FX", category: "image", speed: "Pro Details" } as unknown as AIModel, // Flux had category inside it in previous file
];

const textModels: AIModel[] = [
  { name: "GPT-4o", provider: "OpenAI", price: "$5.00 / M tokens", iconBg: "bg-purple-500/10 dark:bg-purple-500/20", iconColor: "text-purple-600 dark:text-purple-400", avatarText: "GP", speed: "Smartest" },
  { name: "Claude 3.5 Sonnet", provider: "Anthropic", price: "$3.00 / M tokens", iconBg: "bg-pink-500/10 dark:bg-pink-500/20", iconColor: "text-pink-600 dark:text-pink-400", avatarText: "CL", speed: "Coding/Reason" },
  { name: "Gemini 1.5 Pro", provider: "Google", price: "$1.25 / M tokens", iconBg: "bg-indigo-500/10 dark:bg-indigo-500/20", iconColor: "text-indigo-600 dark:text-indigo-400", avatarText: "GE", speed: "Large Context" },
];

const audioModels: AIModel[] = [
  { name: "Suno v4", provider: "Suno AI", price: "$0.05 / gen", iconBg: "bg-fuchsia-500/10 dark:bg-fuchsia-500/20", iconColor: "text-fuchsia-600 dark:text-fuchsia-400", avatarText: "SU", speed: "Vocal/Music" },
  { name: "Udio v1.5", provider: "Udio AI", price: "$0.04 / gen", iconBg: "bg-rose-500/10 dark:bg-rose-500/20", iconColor: "text-rose-600 dark:text-rose-400", avatarText: "UD", speed: "Stereo" },
  { name: "ElevenLabs Reader", provider: "ElevenLabs", price: "$0.015 / 1k chars", iconBg: "bg-sky-500/10 dark:bg-sky-500/20", iconColor: "text-sky-600 dark:text-sky-400", avatarText: "EL", speed: "Ultra Real" },
];

const templatePacks: TemplatePack[] = [
  {
    title: "Cinematic LUTs Pack",
    category: "Luts & Presets",
    count: "50+ Assets",
    desc: "Give your footage a premium, Hollywood-grade color style instantly.",
    iconBg: "bg-violet-500/10 dark:bg-violet-500/20",
    iconColor: "text-violet-600 dark:text-violet-400",
  },
  {
    title: "Creator SFX Library",
    category: "Audio Assets",
    count: "120+ Sounds",
    desc: "Transitions, sweeps, hits, and ambience sounds for fast pacing.",
    iconBg: "bg-rose-500/10 dark:bg-rose-500/20",
    iconColor: "text-rose-600 dark:text-rose-400",
  },
  {
    title: "Motion Text Animations",
    category: "Video Effects",
    count: "80+ Templates",
    desc: "Polished titles, slide-ins, and lower-thirds to keep viewers engaged.",
    iconBg: "bg-emerald-500/10 dark:bg-emerald-500/20",
    iconColor: "text-emerald-600 dark:text-emerald-400",
  },
];

// --- Reusable Sub-components (Scoped to file) ---

function ModelCard({ model }: { model: AIModel }) {
  return (
    <div className="group/item flex items-center justify-between py-3 px-4 rounded-xl border border-border bg-background/50 hover:bg-muted/20 hover:border-primary/30 transition-all duration-300 relative">
      <div className="flex items-center gap-3">
        <div className={`w-10 h-10 rounded-xl flex items-center justify-center font-bold text-xs select-none shadow-sm ${model.iconBg} ${model.iconColor} transition-transform duration-300 group-hover/item:scale-105`}>
          {model.avatarText}
        </div>
        <div>
          <h4 className="font-semibold text-sm text-foreground transition-colors group-hover/item:text-primary">
            {model.name}
          </h4>
          <p className="text-[11px] text-muted-foreground">{model.provider}</p>
        </div>
      </div>
      <div className="text-right">
        <p className="text-xs font-bold text-foreground">{model.price}</p>
        <span className="text-[10px] text-muted-foreground bg-muted px-1.5 py-0.5 rounded border border-border/50">
          {model.speed}
        </span>
      </div>
    </div>
  );
}

function MoreCard({ count, label, suffix }: { count: number; label: string; suffix: string }) {
  return (
    <div className="flex flex-col items-center justify-center py-3 px-4 rounded-xl border border-dashed border-border/80 bg-background/20 hover:bg-muted/10 hover:border-primary/40 transition-all duration-300 cursor-pointer group/more">
      <div className="text-center">
        <p className="text-sm font-semibold text-muted-foreground group-hover/more:text-primary transition-colors">
          + {count} More{suffix}
        </p>
        <p className="text-[10px] text-muted-foreground/80 mt-0.5 leading-snug">{label}</p>
      </div>
    </div>
  );
}

function ModelGrid({ models, moreCount, moreLabel }: { models: AIModel[]; moreCount: number; moreLabel: string }) {
  return (
    <div className="grid grid-cols-1 gap-3 animate-in fade-in slide-in-from-bottom-2 duration-300">
      {models.map((model) => (
        <ModelCard key={model.name} model={model} />
      ))}
      <MoreCard count={moreCount} label={moreLabel} suffix=" Models" />
    </div>
  );
}

function TemplatePackCard({ pack }: { pack: TemplatePack }) {
  return (
    <div className="group/temp-item flex flex-col justify-between p-4 rounded-xl border border-border bg-gradient-to-b from-background to-background/40 hover:border-primary/30 transition-all duration-300 shadow-sm relative overflow-hidden">
      {/* Card Header Row */}
      <div className="flex items-center justify-between mb-2.5">
        <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full ${pack.iconBg} ${pack.iconColor}`}>
          {pack.category}
        </span>
        <span className="text-xs font-bold text-foreground bg-muted px-2 py-0.5 rounded border border-border/50">
          {pack.count}
        </span>
      </div>

      {/* Details Row */}
      <div>
        <h4 className="font-semibold text-sm text-foreground transition-colors group-hover/temp-item:text-primary">
          {pack.title}
        </h4>
        <p className="text-[11px] text-muted-foreground mt-1 line-clamp-2 leading-relaxed">
          {pack.desc}
        </p>
      </div>
    </div>
  );
}

// --- Main Hero Component ---

export function Hero() {
  return (
    <section className="relative overflow-hidden py-16 lg:py-24 px-6 border-b border-border bg-background">
      {/* Subtle Background Glows */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full bg-primary/10 blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-96 h-96 rounded-full bg-secondary/10 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        {/* Left Column - Content */}
        <div className="col-span-12 lg:col-span-5 flex flex-col items-start text-left space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/20 bg-primary/5 text-xs text-primary font-medium hover:bg-primary/10 transition-colors cursor-default">
            <Sparkles className="size-3.5 animate-pulse" />
            <span>Built for Content Creators</span>
          </div>

          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl text-foreground leading-tight">
            The All-in-One AI Marketplace for{" "}
            <span className="bg-gradient-to-r from-primary to-violet-500 bg-clip-text text-transparent">
              Content Creators
            </span>
          </h1>

          <p className="text-lg text-muted-foreground max-w-lg leading-relaxed">
            Create AI Images, Videos, Voiceovers, Ads, Music & More — Without Expensive Monthly Subscriptions! Access all top models from a single pay-per-operation dashboard.
          </p>

          <div className="flex flex-wrap gap-4 w-full sm:w-auto">
            <Button size="lg" className="w-full sm:w-auto shadow-lg shadow-primary/25 hover:shadow-primary/35 transition-all duration-300">
              Start Creating <ArrowRight className="size-4 ml-1.5" />
            </Button>
            <Button variant="outline" size="lg" className="w-full sm:w-auto hover:bg-muted/50 transition-colors">
              See What’s Included
            </Button>
          </div>

          <div className="flex items-center gap-6 pt-4 border-t border-border w-full">
            <div>
              <p className="text-2xl font-bold text-foreground">16+</p>
              <p className="text-xs text-muted-foreground">Foundation Models</p>
            </div>
            <div className="h-8 w-px bg-border" />
            <div>
              <p className="text-2xl font-bold text-foreground">17,000+</p>
              <p className="text-xs text-muted-foreground">Tempalte Assets</p>
            </div>
          </div>
        </div>

        {/* Right Column - Box containing interactive tabs & grids */}
        <div className="col-span-12 lg:col-span-7 flex justify-center lg:justify-end w-full">
          <div className="w-full max-w-2xl rounded-2xl border border-border/80 bg-card/60 backdrop-blur-md py-6 px-8 shadow-2xl relative overflow-hidden group h-[500px] flex flex-col justify-between transition-all duration-300">
            {/* Corner Decorative Lights */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 blur-3xl rounded-full opacity-50 group-hover:opacity-80 transition-opacity" />

            <Tabs defaultValue="video" className="w-full h-full flex flex-col justify-between">
              <div className="relative w-full h-12 mb-4 flex items-center justify-center">
                <TabsList className="grid w-full grid-cols-5 p-1">
                  <TabsTrigger value="video" className="flex flex-col sm:flex-row items-center justify-center gap-1 py-1 sm:py-1.5 text-[10px] sm:text-xs font-semibold">
                    <Video className="size-3.5" />
                    <span>Video</span>
                  </TabsTrigger>
                  <TabsTrigger value="image" className="flex flex-col sm:flex-row items-center justify-center gap-1 py-1 sm:py-1.5 text-[10px] sm:text-xs font-semibold">
                    <ImageIcon className="size-3.5" />
                    <span>Image</span>
                  </TabsTrigger>
                  <TabsTrigger value="text" className="flex flex-col sm:flex-row items-center justify-center gap-1 py-1 sm:py-1.5 text-[10px] sm:text-xs font-semibold">
                    <FileText className="size-3.5" />
                    <span>Text</span>
                  </TabsTrigger>
                  <TabsTrigger value="audio" className="flex flex-col sm:flex-row items-center justify-center gap-1 py-1 sm:py-1.5 text-[10px] sm:text-xs font-semibold">
                    <Music className="size-3.5" />
                    <span>Audio</span>
                  </TabsTrigger>
                  <TabsTrigger value="templates" className="flex flex-col sm:flex-row items-center justify-center gap-1 py-1 sm:py-1.5 text-[10px] sm:text-xs font-semibold">
                    <Layers className="size-3.5" />
                    <span>Templates</span>
                  </TabsTrigger>
                </TabsList>
              </div>

              <TabsContents className="flex-1 flex flex-col justify-start">
                {/* Video Tab */}
                <TabsContent value="video" className="outline-none">
                  <ModelGrid models={videoModels} moreCount={8} moreLabel="Explore video tools" />
                </TabsContent>

                {/* Image Tab */}
                <TabsContent value="image" className="outline-none">
                  <ModelGrid models={imageModels} moreCount={15} moreLabel="Explore image tools" />
                </TabsContent>

                {/* Text Tab */}
                <TabsContent value="text" className="outline-none">
                  <ModelGrid models={textModels} moreCount={20} moreLabel="Explore writing tools" />
                </TabsContent>

                {/* Audio Tab */}
                <TabsContent value="audio" className="outline-none">
                  <ModelGrid models={audioModels} moreCount={12} moreLabel="Explore audio tools" />
                </TabsContent>

                {/* Templates Tab */}
                <TabsContent value="templates" className="outline-none">
                  <div className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 animate-in fade-in slide-in-from-bottom-2 duration-300">
                      {templatePacks.map((pack) => (
                        <TemplatePackCard key={pack.title} pack={pack} />
                      ))}
                      <MoreCard count={45} label="LUTs, sound effects & assets" suffix=" Packs" />
                    </div>
                  </div>
                </TabsContent>
              </TabsContents>
            </Tabs>
          </div>
        </div>
      </div>
    </section>
  );
}
