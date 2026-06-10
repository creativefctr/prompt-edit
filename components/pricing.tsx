import React from "react";
import { Button } from "@/components/ui/button";
import { Check, Sparkles, Command } from "lucide-react";

export function Pricing() {
  return (
    <section className="py-24 px-6 max-w-5xl mx-auto border-b border-border">
      <div className="space-y-16">
        
        {/* Section Header */}
        <div className="text-center space-y-3">
          <p className="text-sm font-semibold text-muted-foreground tracking-wider uppercase">
            Existing Student Discount
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Prompt Edit Pricing
          </h2>
        </div>

        {/* Pricing Layout - Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto items-stretch">
          
          {/* Package 1: Credit Pack */}
          <div className="rounded-[2rem] border border-border bg-muted/30 p-8 flex flex-col h-full">
            <div className="size-12 rounded-xl bg-background border flex items-center justify-center mb-6 shadow-sm">
              <Sparkles className="size-6 text-foreground" strokeWidth={1.5} />
            </div>
            <h3 className="text-2xl font-bold text-foreground">Credit Pack</h3>
            <p className="text-muted-foreground mt-2">Save on Credits</p>
            
            <div className="mt-6 flex items-baseline gap-1">
              <span className="text-5xl font-extrabold text-foreground tracking-tight">$98</span><br />
              <span className="text-muted-foreground font-medium">One-time payment</span>
            </div>
            
            <Button variant="outline" className="w-full mt-8 rounded-full h-12 font-medium bg-background hover:bg-muted text-base">
              Buy Credit Pack
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
          <div className="rounded-[2rem] border border-border bg-background shadow-xl flex flex-col h-full overflow-hidden">
            <div className="p-8 pb-0 flex-1">
              <div className="flex justify-between items-start mb-6">
                <div className="size-12 rounded-xl bg-muted border flex items-center justify-center shadow-sm">
                  <Command className="size-6 text-foreground" strokeWidth={1.5} />
                </div>
                <span className="bg-red-600 text-white text-xs font-bold px-3 py-1 rounded-full tracking-wide">
                  Trending
                </span>
              </div>
              
              <h3 className="text-2xl font-bold text-foreground">Creator Membership</h3>
              <p className="text-muted-foreground mt-2">Save on Everything</p>
              
              <div className="mt-6 flex items-baseline gap-1">
                <span className="text-5xl font-extrabold text-foreground tracking-tight">$39</span>
                <span className="text-muted-foreground font-medium">/ month</span>
              </div>
              
              <Button className="w-full mt-8 rounded-full h-12 font-medium text-base bg-foreground text-background hover:bg-foreground/90">
                Subscribe to Creator Membership
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
            
            <div className="bg-muted/40 p-8 border-t border-border">
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
      </div>
    </section>
  );
}


