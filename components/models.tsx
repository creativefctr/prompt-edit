import React from "react";
import { Button } from "@/components/ui/button";

interface Model {
  name: string;
  type: string;
  latency: string;
  status: string;
}

const placeholderModels: Model[] = [
  { name: "Llama 3 70B", type: "Chat / LLM", latency: "12ms", status: "Active" },
  { name: "Stable Diffusion 3", type: "Image Generation", latency: "450ms", status: "Active" },
  { name: "Whisper Large v3", type: "Speech to Text", latency: "80ms", status: "Active" },
];

export function Models() {
  return (
    <section className="py-16 px-6 max-w-5xl mx-auto border-b border-border">
      <div className="space-y-8">
        <div className="text-center space-y-2">
          <h2 className="text-3xl font-bold tracking-tight">Supported Models</h2>
          <p className="text-muted-foreground">Select from our library of optimized foundation models.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {placeholderModels.map((model, idx) => (
            <div key={idx} className="p-6 rounded-lg border border-border bg-card text-card-foreground hover:shadow-sm transition-shadow">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="font-semibold text-lg">{model.name}</h3>
                  <p className="text-sm text-muted-foreground">{model.type}</p>
                </div>
                <span className="text-xs bg-emerald-50 text-emerald-700 dark:bg-emerald-950/35 dark:text-emerald-400 px-2 py-0.5 rounded-full font-medium">
                  {model.status}
                </span>
              </div>
              <div className="text-sm space-y-1 mb-6 text-muted-foreground">
                <p>Latency: <strong className="text-foreground">{model.latency}</strong></p>
                <p>Uptime: <strong className="text-foreground">99.9%</strong></p>
              </div>
              <Button className="w-full" variant="outline" size="sm">
                Test Playground
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
