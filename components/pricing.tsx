import React from "react";
import { Button } from "@/components/ui/button";

const tiers = [
  {
    name: "Developer",
    price: "$0",
    description: "Perfect for testing and prototyping.",
    features: [
      "1,000 free requests per month",
      "Shared CPU inference",
      "Community support",
      "Access to base models only"
    ],
    cta: "Start Free",
    popular: false
  },
  {
    name: "Pro",
    price: "$49",
    description: "For production applications and small teams.",
    features: [
      "100,000 requests per month",
      "Dedicated GPU scaling",
      "Priority email support",
      "Access to fine-tuned models"
    ],
    cta: "Upgrade to Pro",
    popular: true
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "For organizations requiring custom scale.",
    features: [
      "Unlimited volume",
      "Private multi-region hosting",
      "Dedicated SLA support",
      "Custom weights & fine-tuning"
    ],
    cta: "Contact Sales",
    popular: false
  }
];

export function Pricing() {
  return (
    <section className="py-16 px-6 max-w-5xl mx-auto border-b border-border">
      <div className="space-y-8">
        <div className="text-center space-y-2">
          <h2 className="text-3xl font-bold tracking-tight">Simple Pricing</h2>
          <p className="text-muted-foreground">Choose the plan that fits your integration needs.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 pt-4">
          {tiers.map((tier, idx) => (
            <div
              key={idx}
              className={`p-6 rounded-lg border flex flex-col justify-between ${
                tier.popular
                  ? "border-primary ring-1 ring-primary/20 bg-background"
                  : "border-border bg-card text-card-foreground"
              }`}
            >
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between items-center">
                    <h3 className="font-semibold text-lg">{tier.name}</h3>
                    {tier.popular && (
                      <span className="text-xs bg-primary text-primary-foreground px-2.5 py-0.5 rounded-full font-medium">
                        Popular
                      </span>
                    )}
                  </div>
                  <p className="text-sm text-muted-foreground mt-1">{tier.description}</p>
                </div>
                <div className="flex items-baseline gap-1">
                  <span className="text-3xl font-bold">{tier.price}</span>
                  {tier.price !== "Custom" && <span className="text-sm text-muted-foreground">/mo</span>}
                </div>
                <ul className="space-y-2 text-sm text-muted-foreground pt-4 border-t border-border">
                  {tier.features.map((feature, fIdx) => (
                    <li key={fIdx} className="flex items-center gap-2">
                      <span className="text-primary font-bold">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="pt-6">
                <Button className="w-full" variant={tier.popular ? "default" : "outline"}>
                  {tier.cta}
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
