import React from "react";
import { ChevronDown } from "lucide-react";

interface FaqItem {
  q: string;
  a: React.ReactNode;
}

const faqs: FaqItem[] = [
  {
    q: "What is PromptEdit.com?",
    a: (
      <div className="space-y-3">
        <p>Think of PromptEdit like a "grocery store for AI tools"</p>
        <p>
          PromptEdit allow you to access all of your favorite AI tools in one
          place, WITHOUT having to subscribe to each tool individually.
        </p>
        <p>
          You "pay" for the AI tools by simply purchasing and using credits. No
          subscription required, just pay for what you use.
        </p>
        <p>
          Any time new, revolutionary AI tools come out, we make sure to add
          them to our site, so you can use them.
        </p>
      </div>
    )
  },
  {
    q: "Can I use what I create for social media or commercial videos?",
    a: (
      <div className="space-y-3">
        <p className="font-semibold text-foreground">Absolutely!</p>
        <p>
          Everything you create or download during your active membership is
          cleared for use in all commercial projects! You pay one fee for
          everything, we do not charge extra for commercial licensing.
        </p>
      </div>
    )
  },
  {
    q: "Is there a difference in quality between AI tools on PromptEdit.com and the same tool on the companies main website?",
    a: (
      <p>
        There is no quality difference whatsoever. By using PromptEdit.com you
        are simply accessing the same tool on a "pay-per-use" basis compared to
        paying through a subscription on the tool's main site.
      </p>
    )
  },
  {
    q: "What is Content Creator Templates?",
    a: (
      <div className="space-y-3">
        <p>
          Content Creator Templates is the world's most affordable library of
          100,000+ royalty-free video editing templates you actually want to
          use.
        </p>
        <p>
          With a subscription to PromptEdit.com you get full, unlimited access
          to the Content Creator Templates Library!
        </p>
        <p>The library includes:</p>
        <ul className="list-disc pl-5 space-y-1">
          <li>Color Grading Presets</li>
          <li>Title & text templates</li>
          <li>Visual Effects</li>
          <li>Presets</li>
          <li>Project templates</li>
          <li>Animations</li>
          <li>Sound effects</li>
          <li>Motion background</li>
          <li>and much more!</li>
        </ul>
      </div>
    )
  },
  {
    q: "Do any limits apply to downloads?",
    a: (
      <div className="space-y-3">
        <p className="font-semibold text-foreground">No limits apply to downloads!</p>
        <p>
          With your one login you get unlimited downloads of all the templates
          on the site.
        </p>
        <p>However, per our User Terms and Privacy Policy, please remember:</p>
        <ul className="list-disc pl-5 space-y-1">
          <li>The subscription is for an individual.</li>
          <li>
            No robots allowed. So that means no sharing of accounts or use of
            automated tools to scrape and download items.
          </li>
        </ul>
      </div>
    )
  },
  {
    q: "Will the templates work in my editing platform?",
    a: (
      <div className="space-y-3">
        <p>
          Yes, the templates on Content Creator Templates are compatible with all
          video editing platforms. This means you can download them and use in
          whatever program you already have.
        </p>
        <p>
          That being said, there are some custom templates made for specific
          video editing platforms as well.
        </p>
      </div>
    )
  },
  {
    q: "Can I cancel at anytime?",
    a: (
      <p>
        Absolutely, there are no long term contracts here, whenever you feel like
        this isn't the right deal for you, email us at{" "}
        <a href="mailto:support@contentcreator.com" className="underline hover:text-foreground">
          support@contentcreator.com
        </a>{" "}
        and we'll cancel your membership immediately. You can also cancel directly
        through the site.
      </p>
    )
  },
  {
    q: "What happens to the templates I've downloaded if I cancel?",
    a: (
      <div className="space-y-3">
        <p className="font-semibold text-foreground">
          Any videos you created during your membership will be cleared for life!
        </p>
        <p>
          After you cancel your membership, you can no longer use the video
          templates for future projects.
        </p>
      </div>
    )
  }
];

export function Faq() {
  return (
    <section className="py-16 px-6 max-w-3xl mx-auto">
      <div className="space-y-8">
        <div className="text-center space-y-2">
          <h2 className="text-3xl font-bold tracking-tight">Commonly Asked Questions</h2>
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
                <ChevronDown className="size-5 text-muted-foreground transition-transform duration-300 group-open:rotate-180" />
              </summary>
              <div className="mt-4 text-muted-foreground text-sm leading-relaxed transition-opacity duration-300 group-open:opacity-100">
                {faq.a}
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

