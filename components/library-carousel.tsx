'use client';

import * as React from 'react';
import { MotionCarousel } from '@/components/animate-ui/components/community/motion-carousel';
import { EmblaOptionsType } from 'embla-carousel';
import { Palette, Volume2, Type, Layers, Film, Music, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import MagicRings from './MagicRings';

interface SlideItem {
  id: number;
  title: string;
  category: string;
  count: string;
  tagColor: string;
  bgColor: string;
  borderColor: string;
  glowColor: string;
  icon: React.ReactNode;
  imagePath: string;
}

const TEMPLATE_PACKS: SlideItem[] = [
  {
    id: 1,
    title: "Teal & Orange Hollywood LUTs",
    category: "LUTs",
    count: "4,000+ Color Presets",
    tagColor: "bg-violet-500/10 text-violet-400 border-violet-500/20",
    bgColor: "bg-[#0c0d14]",
    borderColor: "border-violet-500/30 group-hover:border-violet-500/60",
    glowColor: "from-violet-500/10 to-transparent",
    icon: <Palette className="w-5 h-5 text-violet-400" />,
    imagePath: "/packs/teal-orange-luts.png"
  },
  {
    id: 2,
    title: "Warm Autumn Film Presets",
    category: "LUTs",
    count: "1,200+ Film Grades",
    tagColor: "bg-violet-500/10 text-violet-400 border-violet-500/20",
    bgColor: "bg-[#120d0f]",
    borderColor: "border-violet-500/30 group-hover:border-violet-500/60",
    glowColor: "from-violet-500/10 to-transparent",
    icon: <Palette className="w-5 h-5 text-violet-400" />,
    imagePath: "/packs/warm-autumn-presets.png"
  },
  {
    id: 3,
    title: "Cinematic Transition SFX",
    category: "Sound Effects",
    count: "60,000+ Audio FX",
    tagColor: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
    bgColor: "bg-[#080d0a]",
    borderColor: "border-emerald-500/30 group-hover:border-emerald-500/60",
    glowColor: "from-emerald-500/10 to-transparent",
    icon: <Volume2 className="w-5 h-5 text-emerald-400" />,
    imagePath: "/packs/cinematic-transitions.png"
  },
  {
    id: 4,
    title: "Futuristic UI & Sci-Fi SFX",
    category: "Sound Effects",
    count: "8,000+ Sci-Fi Elements",
    tagColor: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
    bgColor: "bg-[#060c0f]",
    borderColor: "border-emerald-500/30 group-hover:border-emerald-500/60",
    glowColor: "from-emerald-500/10 to-transparent",
    icon: <Volume2 className="w-5 h-5 text-emerald-400" />,
    imagePath: "/packs/futuristic-ui-sfx.png"
  },
  {
    id: 5,
    title: "Cyberpunk Kinetic Titles",
    category: "Text Animation",
    count: "3,000+ Text Templates",
    tagColor: "bg-cyan-500/10 text-cyan-400 border-cyan-500/20",
    bgColor: "bg-[#080c10]",
    borderColor: "border-cyan-500/30 group-hover:border-cyan-500/60",
    glowColor: "from-cyan-500/10 to-transparent",
    icon: <Type className="w-5 h-5 text-cyan-400" />,
    imagePath: "/packs/cyberpunk-titles.png"
  },
  {
    id: 6,
    title: "Minimalist Lower Thirds",
    category: "Text Animation",
    count: "500+ Clean Layouts",
    tagColor: "bg-cyan-500/10 text-cyan-400 border-cyan-500/20",
    bgColor: "bg-[#070b0e]",
    borderColor: "border-cyan-500/30 group-hover:border-cyan-500/60",
    glowColor: "from-cyan-500/10 to-transparent",
    icon: <Type className="w-5 h-5 text-cyan-400" />,
    imagePath: "/packs/minimalist-lower-thirds.png"
  },
  {
    id: 7,
    title: "VCR Vintage Grain & Dust",
    category: "Overlays",
    count: "2,000+ Visual Overlays",
    tagColor: "bg-amber-500/10 text-amber-400 border-amber-500/20",
    bgColor: "bg-[#110e08]",
    borderColor: "border-amber-500/30 group-hover:border-amber-500/60",
    glowColor: "from-amber-500/10 to-transparent",
    icon: <Layers className="w-5 h-5 text-amber-400" />,
    imagePath: "/packs/vcr-vintage-grain.png"
  },
  {
    id: 8,
    title: "Light Leaks & Lens Flares",
    category: "Overlays",
    count: "850+ Cinematic Flares",
    tagColor: "bg-amber-500/10 text-amber-400 border-amber-500/20",
    bgColor: "bg-[#141009]",
    borderColor: "border-amber-500/30 group-hover:border-amber-500/60",
    glowColor: "from-amber-500/10 to-transparent",
    icon: <Layers className="w-5 h-5 text-amber-400" />,
    imagePath: "/packs/light-leaks.png"
  },
  {
    id: 9,
    title: "Fluid 3D Liquid Loops",
    category: "Backgrounds",
    count: "5,000+ Motion Backgrounds",
    tagColor: "bg-rose-500/10 text-rose-400 border-rose-500/20",
    bgColor: "bg-[#12090c]",
    borderColor: "border-rose-500/30 group-hover:border-rose-500/60",
    glowColor: "from-rose-500/10 to-transparent",
    icon: <Film className="w-5 h-5 text-rose-400" />,
    imagePath: "/packs/fluid-loops.png"
  },
  {
    id: 10,
    title: "Cyberpunk Grid Backdrops",
    category: "Backgrounds",
    count: "1,500+ Retrowave Loops",
    tagColor: "bg-rose-500/10 text-rose-400 border-rose-500/20",
    bgColor: "bg-[#10070b]",
    borderColor: "border-rose-500/30 group-hover:border-rose-500/60",
    glowColor: "from-rose-500/10 to-transparent",
    icon: <Film className="w-5 h-5 text-rose-400" />,
    imagePath: "/packs/cyberpunk-grid.png"
  },
  {
    id: 11,
    title: "Lofi Ambient Beats",
    category: "Music Generation",
    count: "Unlimited Music Tracks",
    tagColor: "bg-pink-500/10 text-pink-400 border-pink-500/20",
    bgColor: "bg-[#100812]",
    borderColor: "border-pink-500/30 group-hover:border-pink-500/60",
    glowColor: "from-pink-500/10 to-transparent",
    icon: <Music className="w-5 h-5 text-pink-400" />,
    imagePath: "/packs/lofi-ambient-beats.png"
  },
  {
    id: 12,
    title: "Epic Orchestral Builds",
    category: "Music Generation",
    count: "100+ High-Impact Themes",
    tagColor: "bg-pink-500/10 text-pink-400 border-pink-500/20",
    bgColor: "bg-[#140810]",
    borderColor: "border-pink-500/30 group-hover:border-pink-500/60",
    glowColor: "from-pink-500/10 to-transparent",
    icon: <Music className="w-5 h-5 text-pink-400" />,
    imagePath: "/packs/epic-orchestral.png"
  }
];

function LibraryCarousel() {
  const OPTIONS: EmblaOptionsType = { 
    loop: true,
    align: 'center',
  };

  const renderSlide = (item: SlideItem, index: number, isActive: boolean) => {
    return (
      <a 
        href="#pricing"
        className={`w-full h-full rounded-2xl border ${item.bgColor} ${item.borderColor} transition-all duration-300 flex flex-col justify-between overflow-hidden relative group p-6 md:p-6 cursor-pointer block`}
      >
        {/* Top Radial Glow */}
        <div className={`absolute top-0 inset-x-0 h-40 bg-gradient-to-b ${item.glowColor} pointer-events-none rounded-t-2xl`} />

        {/* Top Section: Category Tag (Centered) */}
        <div className="flex justify-center w-full z-10">
          <span className={`text-[12px] md:text-[10px] font-semibold uppercase tracking-wider px-3 md:px-2.5 py-1.5 md:py-1 rounded-full border ${item.tagColor}`}>
            {item.category}
          </span>
        </div>

        {/* Middle Section: 3D Product Box Image */}
        <div className="flex-1 relative flex items-center justify-center p-0 md:p-4 min-h-0">
          <img 
            src={item.imagePath} 
            alt={item.title} 
            className="w-full h-full md:h-32 md:w-auto object-contain transition-transform duration-300 group-hover:scale-105" 
          />
        </div>

        {/* Bottom Section: Pack Details */}
        <div className="space-y-1.5 md:space-y-1 z-10 text-center">
          <h3 className="text-base md:text-sm font-bold text-zinc-100 group-hover:text-white transition-colors line-clamp-2">
            {item.title}
          </h3>
          <p className="text-xs md:text-[11px] text-zinc-500 font-medium">
            {item.count}
          </p>
        </div>
      </a>
    );
  };

  return (
    <section id="templates" className="py-24 bg-[#030303] border-y border-zinc-900 overflow-hidden relative">
      {/* Background Magic Rings */}
      <div className="absolute inset-0 w-full h-full pointer-events-none select-none z-0">
        <MagicRings
          color="#a855f7" // Vibrant Violet (matching title gradient)
          colorTwo="#f43f5e" // Vibrant Rose (matching title gradient)
          ringCount={6}
          speed={0.8}
          attenuation={10}
          lineThickness={2.2}
          baseRadius={0.35}
          radiusStep={0.1}
          scaleRate={0.1}
          opacity={0.55} // increased opacity to make it more vibrant/less dull
          blur={0}
          noiseAmount={0.08}
          rotation={0}
          ringGap={1.5}
          fadeIn={0.7}
          fadeOut={0.5}
          followMouse={false}
          mouseInfluence={0.2}
          hoverScale={1.2}
          parallax={0.05}
          clickBurst={false}
        />
      </div>

      <div className="max-w-6xl mx-auto px-6 mb-8 text-center space-y-4 relative z-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-[11px] font-semibold text-zinc-400 tracking-wide uppercase">
          <span className="w-1.5 h-1.5 rounded-full bg-violet-500 animate-pulse" />
          Content Creator Templates
        </div>
        <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-white max-w-2xl mx-auto leading-tight">
          Over <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-pink-400 to-rose-400">100,000+ Premium Assets</span> At Your Fingertips
        </h2>
        <p className="text-zinc-400 text-sm md:text-base mx-auto font-medium">
          Get unlimited, instant access to Hollywood-grade templates, sounds, overlays, and color LUTs with your PromptEdit subscription.
        </p>
        <p className="text-[12px] text-zinc-500 font-medium">
          ⚡ Available exclusively as part of the <span className="text-zinc-300 font-semibold">PromptEdit Creator Subscription</span> ($39/mo, cancel anytime).
        </p>
      </div>

      {/* Centered Explore Templates CTA */}
      <div className="text-center flex flex-col items-center gap-4 px-6 mb-16 relative z-10">
        <Button asChild size="lg" className="group">
          <a href="#pricing">
            <span>Explore All 100,000+ Templates</span>
            <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
          </a>
        </Button>
      </div>

      <div className="max-w-7xl mx-auto px-0 sm:px-6 relative z-10">
        <MotionCarousel
          slides={TEMPLATE_PACKS}
          options={OPTIONS}
          renderSlide={renderSlide}
          hideDots={true}
          slideClassName="h-auto aspect-[3/4]"
          containerClassName="[--slide-size:75vw] [--slide-spacing:16px] [--viewport-width:100%] sm:[--slide-size:180px] sm:[--viewport-width:calc(2*(var(--slide-size)+var(--slide-spacing)))] md:[--slide-size:200px] lg:[--slide-size:220px] lg:[--viewport-width:calc(4*(var(--slide-size)+var(--slide-spacing)))]"
        />
      </div>
    </section>
  );
}

export default LibraryCarousel;
