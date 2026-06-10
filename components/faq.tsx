import React from "react";

const faqs = [
  {
    q: "How does the pricing scaling work?",
    a: "Our Developer plan is free up to 1,000 monthly requests. Upgrading to the Pro plan allows you to make up to 100,000 requests, and additional usage is charged on a simple pay-as-you-go per-request rate."
  },
  {
    q: "Can I host my own custom fine-tuned weights?",
    a: "Yes! On our Enterprise plan, we support custom model deployments. You can securely upload your fine-tuned weights or connect your cloud storage provider."
  },
  {
    q: "What is the average response latency?",
    a: "Response latency depends on the selected model and parameters. Base LLM inferences typically begin streaming responses under 50ms, while image generation can take up to 2 seconds."
  }
];

export function Faq() {
  return (
    <section className="py-16 px-6 max-w-3xl mx-auto">
      <div className="space-y-8">
        <div className="text-center space-y-2">
          <h2 className="text-3xl font-bold tracking-tight">Frequently Asked Questions</h2>
          <p className="text-muted-foreground">Find answers to common questions about the platform.</p>
        </div>

        <div className="space-y-4 pt-4">
          {faqs.map((faq, idx) => (
            <details
              key={idx}
              className="group border border-border rounded-lg bg-card text-card-foreground p-6 [&_summary::-webkit-details-marker]:hidden cursor-pointer"
            >
              <summary className="flex justify-between items-center font-medium focus:outline-none">
                <span>{faq.q}</span>
                <span className="transition-transform duration-300 group-open:rotate-180">
                  ↓
                </span>
              </summary>
              <p className="mt-4 text-muted-foreground text-sm leading-relaxed transition-opacity duration-300 group-open:opacity-100">
                {faq.a}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
