import React from "react";

const testimonials = [
  {
    quote: "Integrating these models saved us months of development and significantly reduced inference latency.",
    author: "Jane Doe",
    role: "CTO at TechCorp"
  },
  {
    quote: "The developer documentation and SDK quality are top-notch. High availability is exactly as advertised.",
    author: "John Smith",
    role: "Lead Engineer at StartupX"
  }
];

export function SocialProof() {
  return (
    <section className="py-16 px-6 max-w-5xl mx-auto border-b border-border">
      <div className="space-y-8">
        <div className="text-center space-y-2">
          <h2 className="text-3xl font-bold tracking-tight">Trusted by Developers</h2>
          <p className="text-muted-foreground">What engineering teams are saying about our platform.</p>
        </div>

        {/* Fictional Logo Placeholders */}
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 opacity-50 py-4">
          <span className="text-xl font-bold tracking-wider">ACME</span>
          <span className="text-xl font-bold tracking-wider">GLOBEX</span>
          <span className="text-xl font-bold tracking-wider">INITECH</span>
          <span className="text-xl font-bold tracking-wider">UMBRELLA</span>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 gap-8 pt-4">
          {testimonials.map((t, idx) => (
            <div key={idx} className="p-6 rounded-lg border border-border bg-muted/40 flex flex-col justify-between">
              <p className="italic text-muted-foreground mb-4">"{t.quote}"</p>
              <div>
                <h4 className="font-semibold text-sm">{t.author}</h4>
                <p className="text-xs text-muted-foreground">{t.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
