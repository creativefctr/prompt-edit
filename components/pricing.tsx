import React from "react";
import { Button } from "@/components/ui/button";
import { Check, Sparkles, Command, ArrowRight } from "lucide-react";

export function Pricing() {
  return (
    <section id="pricing" className="py-24 px-6 border-b border-border bg-background">
      <div className="max-w-5xl mx-auto space-y-16">
        
        {/* Section Header */}
        <div className="text-center space-y-4 max-w-3xl mx-auto mb-12">
          <p className="text-sm font-bold text-primary tracking-wider uppercase bg-primary/10 border border-primary/20 inline-block px-3 py-1 rounded-full">
            Affordable Credits-Based Pricing
          </p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-foreground tracking-tight">
            The Most Affordable AI Marketplace
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Access the best AI tools without the need for multiple subscriptions. Just pay as you go, or save even more with a membership.
          </p>
        </div>

        {/* Pricing Layout - Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto items-stretch">
          
          {/* Package 1: Credit Pack */}
          <div className="rounded-2xl border border-border bg-background shadow-xl p-8 flex flex-col h-full">
            <div className="size-12 rounded-xl bg-muted border flex items-center justify-center mb-6 shadow-sm">
              <Sparkles className="size-6 text-foreground" strokeWidth={1.5} />
            </div>
            <h3 className="text-2xl font-bold text-foreground">Credit Pack</h3>
            <p className="text-muted-foreground mt-2">Save on Credits</p>
            
            <div className="mt-6 flex items-baseline gap-1">
              <span className="text-5xl font-extrabold text-foreground tracking-tight">$98</span><br />
              <span className="text-muted-foreground font-medium">One-time payment</span>
            </div>
            
            <Button variant="outline" size="lg" className="w-full mt-8 bg-background hover:bg-muted group">
              Buy Credit Pack
              <ArrowRight className="-mr-2 ml-2 size-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Button>
            
            <div className="w-full h-px bg-border my-8" />
            
            <ul className="space-y-4">
              <li className="flex gap-3 text-foreground font-medium">
                <Check className="size-5 shrink-0 text-foreground" strokeWidth={2} /> 
                Get $110 Worth of AI Credits Today
              </li>
              <li className="flex gap-3 text-foreground font-medium">
                <Check className="size-5 shrink-0 text-foreground" strokeWidth={2} /> 
                Save 10% when you claim offer
              </li>
              <li className="flex gap-3 text-foreground font-medium">
                <Check className="size-5 shrink-0 text-foreground" strokeWidth={2} /> 
                Use your credits on any AI tool
              </li>
              <li className="flex gap-3 text-foreground font-medium">
                <Check className="size-5 shrink-0 text-foreground" strokeWidth={2} /> 
                Includes Nano Banana Pro, Grok & more
              </li>
              <li className="flex gap-3 text-foreground font-medium">
                <Check className="size-5 shrink-0 text-foreground" strokeWidth={2} /> 
                No subscriptions required
              </li>
            </ul>
          </div>

          {/* Package 2: Creator Membership */}
          <div className="rounded-2xl border border-border bg-muted/30 flex flex-col h-full overflow-hidden">
            <div className="p-8 pb-0 flex-1">
              <div className="flex justify-between items-start mb-6">
                <div className="size-12 rounded-xl bg-background border flex items-center justify-center shadow-sm">
                  <Command className="size-6 text-foreground" strokeWidth={1.5} />
                </div>
                <span className="bg-red-600 text-white text-xs font-bold px-3 py-1 rounded-full tracking-wide">
                  Best Value
                </span>
              </div>
              
              <h3 className="text-2xl font-bold text-foreground">Creator Membership</h3>
              <p className="text-muted-foreground mt-2">Save on Everything</p>
              
              <div className="mt-6 flex items-baseline gap-1">
                <span className="text-5xl font-extrabold text-foreground tracking-tight">$39</span>
                <span className="text-muted-foreground font-medium">/ month</span>
              </div>
              
              <Button size="lg" className="w-full mt-8 group">
                Subscribe to Creator Membership
                <ArrowRight className="-mr-2 ml-2 size-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Button>
              
              <div className="w-full h-px bg-border my-8" />
              
              <ul className="space-y-4 mb-8">
                <li className="flex gap-3 text-foreground font-medium">
                  <Check className="size-5 shrink-0 text-foreground" strokeWidth={2} /> 
                  $49 Worth of AI Credits every month
                </li>
                <li className="flex gap-3 text-foreground font-medium">
                  <Check className="size-5 shrink-0 text-foreground" strokeWidth={2} /> 
                  10% off anytime you purchase more
                </li>
                <li className="flex gap-3 text-foreground font-medium">
                  <Check className="size-5 shrink-0 text-foreground" strokeWidth={2} /> 
                  Lifetime 20% boost on monthly credits
                </li>
                <li className="flex gap-3 text-muted-foreground italic text-sm mt-4">
                  *easily cancel at any time
                </li>
              </ul>
            </div>
            
            <div className="bg-background/60 backdrop-blur-sm p-8 border-t border-border">
              <ul className="space-y-4">
                <li className="flex gap-3 font-medium text-foreground items-center">
                  <div className="size-1.5 rounded-full bg-foreground shrink-0" /> 
                  Access our Content Creator Templates
                </li>
                <li className="flex gap-3 font-medium text-foreground items-center">
                  <div className="size-1.5 rounded-full bg-foreground shrink-0" /> 
                  Faster generation speeds
                </li>
                <li className="flex gap-3 font-medium text-foreground items-center">
                  <div className="size-1.5 rounded-full bg-foreground shrink-0" /> 
                  Run multiple generations at once
                </li>
              </ul>
            </div>
          </div>

        </div>

        {/* Money Back Guarantee */}
        <div className="max-w-4xl mx-auto mt-16 text-center bg-card/50 border border-border rounded-3xl p-8 sm:p-10 shadow-sm relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent pointer-events-none" />
          
          <div className="relative z-10 flex justify-center mb-8">
            <div className="relative flex items-center justify-center size-20 rounded-2xl bg-background border border-amber-500/20 shadow-md">
              <div className="absolute inset-0 rounded-2xl bg-amber-500/10" />
              <svg
                className="size-10 text-amber-500 relative z-10"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"
                  fill="url(#shield-gradient)"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M9 12l2 2 4-4"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <defs>
                  <linearGradient id="shield-gradient" x1="4" y1="2" x2="20" y2="22" gradientUnits="userSpaceOnUse">
                    <stop stopColor="currentColor" stopOpacity="0.25" />
                    <stop offset="1" stopColor="currentColor" stopOpacity="0.05" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </div>

          <h4 className="text-xl font-bold text-foreground mb-3 relative z-10">
            Backed by our 100% Money Back Satisfaction Guarantee
          </h4>
          <p className="text-muted-foreground leading-relaxed relative z-10">
            PromptEdit has been built on customer satisfaction. You can cancel your membership anytime, and if you're within 30 days of signing up we'll even refund your purchase. AI credits that have already been spent are non-refundable.
          </p>
        </div>
      </div>
    </section>
  );
}


