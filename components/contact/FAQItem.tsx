import type { FAQItem as FAQItemType } from "@/types/ContactPage";

import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FAQItemProps {
  faq: FAQItemType;
  value: string;
}

export function FAQItem({ faq, value }: FAQItemProps) {
  return (
    <AccordionItem value={value} className="p-4">
      <AccordionTrigger>{faq.question}</AccordionTrigger>

      <AccordionContent>
        <p className="leading-7 text-muted-foreground">{faq.answer}</p>
      </AccordionContent>
    </AccordionItem>
  );
}
