import { faqData } from "@/lib/contact";

import { Accordion } from "@/components/ui/accordion";

import { FAQItem } from "./FAQItem";

export function FAQSection() {
  return (
    <section className="py-12 md:py-24">
      <div className="container max-w-4xl mx-auto">
        <div className="mb-16 text-center px-4 md:px-8">
          <h2 className="text-2xl md:text-4xl font-bold">{faqData.heading}</h2>

          <p className="mt-6 text-sm md:text-lg text-muted-foreground">
            {faqData.description}
          </p>
        </div>

        <Accordion type="single" collapsible className="w-full">
          {faqData.faqs.map((faq, index) => (
            <FAQItem key={faq.question} faq={faq} value={`faq-${index}`} />
          ))}
        </Accordion>
      </div>
    </section>
  );
}
