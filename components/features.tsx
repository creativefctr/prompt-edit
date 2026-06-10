"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import LogoLoop from "./LogoLoop";
import { 
  Sparkles, 
  Video, 
  Layers, 
  Film, 
  Palette, 
  Volume2, 
  ArrowRight,
  Tv,
  UserRound,
  Send,
  Wand2,
  Play,
  Megaphone,
  Clapperboard,
  Smartphone,
  Mic,
  Fingerprint,
  Shuffle,
  Music,
  Settings
} from "lucide-react";

interface FeatureListItem {
  icon: React.ComponentType<{ className?: string }>;
  text: string;
  linkHref: string;
}

interface FeatureTheme {
  badge: string;
  cardDefault: string;
  cardHover: string;
  cardHoverShadow: string;
  iconDefault: string;
  iconHover: string;
  textDefault: string;
  textHover: string;
  boxDefault: string;
  boxHoverBorder: string;
  boxHoverShadow: string;
  buttonHover: string;
  titleGradient: string;
}

interface FeatureSection {
  tag: string;
  title: string;
  copy: string;
  items: FeatureListItem[];
  videoSrc: string;
  ctaText: string;
  ctaHref: string;
  theme: FeatureTheme;
}

const featuresData: FeatureSection[] = [
  {
    tag: "IMAGE TOOLS",
    title: "AI-Powered Graphic & Photo Generation",
    copy: "Create studio-grade image content on a pay-as-you-go credit model. From marketing creatives to custom models, access state-of-the-art visual generation instantly.",
    videoSrc: "/animation/image.mp4",
    items: [
      { icon: UserRound, text: "AI Clones", linkHref: "#" },
      { icon: Send, text: "Social Media Posts", linkHref: "#" },
      { icon: Palette, text: "Graphic Design", linkHref: "#" },
      { icon: Wand2, text: "Image Editing", linkHref: "#" },
      { icon: Play, text: "Youtube Thumbnails", linkHref: "#" },
      { icon: Megaphone, text: "Online Ads", linkHref: "#" }
    ],
    ctaText: "Explore Image Generation Tools",
    ctaHref: "#pricing",
    theme: {
      badge: "text-sky-400 bg-sky-500/10 border-sky-500/20",
      cardDefault: "border-sky-500/15 bg-sky-500/[0.03]",
      cardHover: "hover:border-sky-400/40 hover:bg-sky-500/[0.08]",
      cardHoverShadow: "hover:shadow-[0_0_20px_-5px_rgba(56,189,248,0.2)]",
      iconDefault: "text-sky-400/70",
      iconHover: "group-hover/card:text-sky-300 group-hover/card:scale-110",
      textDefault: "text-slate-200/90",
      textHover: "group-hover/card:text-sky-200",
      boxDefault: "border-sky-500/20 bg-card/40",
      boxHoverBorder: "group-hover/box:border-sky-400/40",
      boxHoverShadow: "group-hover/box:shadow-[0_0_40px_-10px_rgba(56,189,248,0.25)]",
      buttonHover: "hover:text-sky-400 hover:border-sky-500/40 hover:bg-sky-500/5",
      titleGradient: "bg-gradient-to-r from-white via-slate-100 to-sky-300"
    }
  },
  {
    tag: "VIDEO TOOLS",
    title: "Cinematic Text-to-Video & Motion Creation",
    copy: "Construct cinematic animations, advertisements, and clips without rendering delays or monthly limits. Access advanced AI video synthesis from your timeline.",
    videoSrc: "/animation/video.mp4",
    items: [
      { icon: Video, text: "Clone Videos", linkHref: "#" },
      { icon: Sparkles, text: "Visual Effects", linkHref: "#" },
      { icon: Clapperboard, text: "Cinematic Films", linkHref: "#" },
      { icon: Tv, text: "Video Ads", linkHref: "#" },
      { icon: Smartphone, text: "Reels & Tiktoks", linkHref: "#" },
      { icon: Play, text: "Youtube Videos", linkHref: "#" }
    ],
    ctaText: "Try AI Video Synthesis",
    ctaHref: "#pricing",
    theme: {
      badge: "text-violet-400 bg-violet-500/10 border-violet-500/20",
      cardDefault: "border-violet-500/15 bg-violet-500/[0.03]",
      cardHover: "hover:border-violet-400/40 hover:bg-violet-500/[0.08]",
      cardHoverShadow: "hover:shadow-[0_0_20px_-5px_rgba(139,92,246,0.2)]",
      iconDefault: "text-violet-400/70",
      iconHover: "group-hover/card:text-violet-300 group-hover/card:scale-110",
      textDefault: "text-slate-200/90",
      textHover: "group-hover/card:text-violet-200",
      boxDefault: "border-violet-500/20 bg-card/40",
      boxHoverBorder: "group-hover/box:border-violet-400/40",
      boxHoverShadow: "group-hover/box:shadow-[0_0_40px_-10px_rgba(139,92,246,0.25)]",
      buttonHover: "hover:text-violet-400 hover:border-violet-500/40 hover:bg-violet-500/5",
      titleGradient: "bg-gradient-to-r from-white via-slate-100 to-violet-300"
    }
  },
  {
    tag: "AUDIO TOOLS",
    title: "AI Voiceovers & Audio Synthesis",
    copy: "Generate hyper-realistic voiceovers, replicate speech profiles, swap vocal characters, or construct soundtrack ambient soundscapes instantly.",
    videoSrc: "/animation/audio.mp4",
    items: [
      { icon: Mic, text: "AI Voiceovers", linkHref: "#" },
      { icon: Fingerprint, text: "AI Voice Clones", linkHref: "#" },
      { icon: Shuffle, text: "Voice Swaps", linkHref: "#" },
      { icon: Volume2, text: "AI sound effects", linkHref: "#" },
      { icon: Music, text: "AI Music Generation", linkHref: "#" },
      { icon: Settings, text: "Audio Plugins", linkHref: "#" }
    ],
    ctaText: "Synthesize Voice & Audio",
    ctaHref: "#pricing",
    theme: {
      badge: "text-pink-400 bg-pink-500/10 border-pink-500/20",
      cardDefault: "border-pink-500/15 bg-pink-500/[0.03]",
      cardHover: "hover:border-pink-400/40 hover:bg-pink-500/[0.08]",
      cardHoverShadow: "hover:shadow-[0_0_20px_-5px_rgba(236,72,153,0.2)]",
      iconDefault: "text-pink-400/70",
      iconHover: "group-hover/card:text-pink-300 group-hover/card:scale-110",
      textDefault: "text-slate-200/90",
      textHover: "group-hover/card:text-pink-200",
      boxDefault: "border-pink-500/20 bg-card/40",
      boxHoverBorder: "group-hover/box:border-pink-400/40",
      boxHoverShadow: "group-hover/box:shadow-[0_0_40px_-10px_rgba(236,72,153,0.25)]",
      buttonHover: "hover:text-pink-400 hover:border-pink-500/40 hover:bg-pink-500/5",
      titleGradient: "bg-gradient-to-r from-white via-slate-100 to-pink-300"
    }
  }
];

const featuresLogos = [
  { src: "/logos/gpt.svg", alt: "GPT-4", title: "OpenAI GPT" },
  { src: "/logos/claude-color.svg", alt: "Claude", title: "Anthropic Claude" },
  { src: "/logos/gemini-color.svg", alt: "Gemini", title: "Google Gemini" },
  { src: "/logos/dalle-color.svg", alt: "DALL-E", title: "DALL-E" },
  { src: "/logos/midjourney.svg", alt: "Midjourney", title: "Midjourney" },
  { src: "/logos/flux.svg", alt: "Flux", title: "Flux" },
  { src: "/logos/sora-color.svg", alt: "Sora", title: "Sora" },
  { src: "/logos/runway.svg", alt: "Runway", title: "Runway" },
  { src: "/logos/luma-color.svg", alt: "Luma", title: "Luma" },
  { src: "/logos/elevenlabs.svg", alt: "ElevenLabs", title: "ElevenLabs" },
  { src: "/logos/suno.svg", alt: "Suno", title: "Suno" },
  { src: "/logos/udio-color.svg", alt: "Udio", title: "Udio" },
];

function FeaturesLogoLoop() {
  return (
    <div className="w-full max-w-lg mx-auto mt-4 px-4 overflow-hidden">
      <LogoLoop
        logos={featuresLogos}
        speed={40}
        direction="left"
        logoHeight={24}
        gap={36}
        pauseOnHover={true}
        scaleOnHover={true}
        fadeOut={true}
        fadeOutColor="var(--background)"
        ariaLabel="Supported AI Models"
        className="opacity-45 hover:opacity-90 transition-opacity duration-300 [&_img]:brightness-0 [&_img]:invert"
      />
    </div>
  );
}

export function FeaturesBlock() {
  return (
    <section className="relative py-20 lg:py-28 overflow-hidden bg-background border-b border-border">
      <div className="max-w-6xl mx-auto px-6 space-y-48 lg:space-y-64">
        {featuresData.map((section, idx) => {
          const isEven = idx % 2 === 0;
          return (
            <div 
              key={section.title}
              className="space-y-16 lg:space-y-20"
            >
              {/* Row Heading (Centered above columns) */}
              <div className="text-center max-w-3xl mx-auto flex flex-col items-center space-y-4">
                <span className={cn(
                  "text-[11px] font-bold uppercase tracking-[0.15em] px-3 py-1 rounded-full border transition-colors duration-300",
                  section.theme.badge
                )}>
                  {section.tag}
                </span>
                <h3 className={cn(
                  "text-2xl font-bold tracking-tight sm:text-3xl lg:text-4xl bg-clip-text text-transparent pb-1",
                  section.theme.titleGradient
                )}>
                  {section.title}
                </h3>
                <p className="text-sm sm:text-base text-muted-foreground max-w-2xl leading-relaxed">
                  {section.copy}
                </p>
                <FeaturesLogoLoop />

                  {/* Customized Center-aligned CTA */}
                  <div className="flex justify-center pt-2 sm:pt-4">
                      <Button
                          asChild
                          variant="outline"
                          size="sm"
                          className={cn("group transition-all duration-300", section.theme.buttonHover)}
                      >
                          <a href={section.ctaHref}>
                              <span>{section.ctaText}</span>
                              <ArrowRight className="size-4 ml-1.5 transition-transform duration-300 group-hover:translate-x-1" strokeWidth={2.5} />
                          </a>
                      </Button>
                  </div>
              </div>

              {/* Columns Grid: Using custom mathematical ratios to align square cards and 16:9 mockup box exactly in height */}
              <div 
                className={cn(
                  "grid grid-cols-1 gap-4 items-stretch",
                  isEven ? "lg:grid-cols-[27fr_32fr]" : "lg:grid-cols-[32fr_27fr]"
                )}
              >
                {/* 6-Cards Grid Column */}
                <div 
                  className={cn(
                    "w-full flex flex-col justify-between",
                    isEven ? "lg:order-first" : "lg:order-last"
                  )}
                >
                  {/* Grid of 6 equal-size square cards */}
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 w-full h-full">
                    {section.items.map((item) => {
                      const Icon = item.icon;
                      return (
                        <a 
                          key={item.text} 
                          href={item.linkHref}
                          className={cn(
                            "aspect-square w-full rounded-2xl border transition-all duration-300 flex flex-col items-center justify-center p-2.5 sm:p-3.5 text-center group/card cursor-pointer",
                            section.theme.cardDefault,
                            section.theme.cardHover,
                            section.theme.cardHoverShadow
                          )}
                        >
                          {/* Card Icon */}
                          <Icon className={cn(
                            "size-5 sm:size-6 md:size-7 transition-all duration-300 mb-2 sm:mb-3 flex-shrink-0",
                            section.theme.iconDefault,
                            section.theme.iconHover
                          )} />
                          
                          {/* Card Text */}
                          <span className={cn(
                            "text-[10px] sm:text-xs md:text-sm font-bold transition-colors leading-snug max-w-full px-1 text-center",
                            section.theme.textDefault,
                            section.theme.textHover
                          )}>
                            {item.text}
                          </span>
                        </a>
                      );
                    })}
                  </div>
                </div>

                {/* Empty Box Placeholder Column (Even/Odd flipped) */}
                <div 
                  className={cn(
                    "w-full flex justify-center items-center",
                    isEven ? "lg:order-last" : "lg:order-first"
                  )}
                >
                  {/* Premium Glassmorphism Box - matches grid height and remains a perfect 16:9 box */}
                  <div className={cn(
                    "h-full w-auto aspect-[16/9] rounded-2xl border backdrop-blur-md shadow-2xl relative overflow-hidden group/box max-w-full mx-auto transition-all duration-500",
                    section.theme.boxDefault,
                    section.theme.boxHoverShadow
                  )}>
                    {/* Decorative Border Glow Layer */}
                    <div className={cn(
                      "absolute inset-0 rounded-2xl border border-transparent transition-all duration-500 z-10 pointer-events-none",
                      section.theme.boxHoverBorder
                    )} />
                    
                    {/* Full-width and height looping, muted video player */}
                    <video 
                      src={section.videoSrc}
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
