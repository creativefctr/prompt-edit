"use client";

import React, { useState } from "react";

const codeSnippets = {
  javascript: `import { Client } from "@aether/sdk";

const client = new Client({ apiKey: "YOUR_API_KEY" });
const response = await client.models.generate({
  model: "llama-3-70b",
  prompt: "Hello world!"
});

console.log(response.text);`,
  python: `from aether import Client

client = Client(api_key="YOUR_API_KEY")
response = client.models.generate(
    model="llama-3-70b",
    prompt="Hello world!"
)

print(response.text)`,
  curl: `curl https://api.aether.ai/v1/generate \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "model": "llama-3-70b",
    "prompt": "Hello world!"
  }'`
};

type Language = keyof typeof codeSnippets;

export function Library() {
  const [lang, setLang] = useState<Language>("javascript");

  return (
    <section className="py-16 px-6 max-w-4xl mx-auto border-b border-border">
      <div className="space-y-8">
        <div className="text-center space-y-2">
          <h2 className="text-3xl font-bold tracking-tight">Developer Library</h2>
          <p className="text-muted-foreground">Integrate foundation models into your app with standard SDKs.</p>
        </div>

        <div className="border border-border rounded-lg overflow-hidden bg-zinc-950 text-zinc-50">
          <div className="flex border-b border-zinc-800 bg-zinc-900 px-4 py-2 gap-2">
            {(Object.keys(codeSnippets) as Language[]).map((tab) => (
              <button
                key={tab}
                onClick={() => setLang(tab)}
                className={`px-3 py-1.5 rounded text-sm font-medium transition-colors ${
                  lang === tab ? "bg-zinc-800 text-zinc-100" : "text-zinc-400 hover:text-zinc-200"
                }`}
              >
                {tab === "javascript" ? "JavaScript" : tab === "python" ? "Python" : "cURL"}
              </button>
            ))}
          </div>
          <div className="p-6 overflow-x-auto font-mono text-sm leading-relaxed text-zinc-300">
            <pre><code>{codeSnippets[lang]}</code></pre>
          </div>
        </div>
      </div>
    </section>
  );
}
