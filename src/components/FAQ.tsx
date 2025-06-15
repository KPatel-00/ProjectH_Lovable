
import React from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { useT } from "@/i18n";

// FAQ redesign: clean, borderless, wide center, modern colors
const FAQ = () => {
  const t = useT();
  const faqs = [
    {
      q: t("faqHowDoesItWork") || "How does RentConnect work?",
      a: t("faqHowDoesItWorkAnswer") || "Easily browse listings, connect with landlords, apply, and get updates all in one platform."
    },
    {
      q: t("faqIsItFree") || "Is it free to use?",
      a: t("faqIsItFreeAnswer") || "Yes, it's free for tenants. Landlords only pay a small listing fee."
    },
    {
      q: t("faqIsMyDataSafe") || "Is my personal data safe?",
      a: t("faqIsMyDataSafeAnswer") || "Absolutely! We use encrypted storage and never share your private data without permission."
    },
    {
      q: t("faqHowDoIList") || "How do I list my property?",
      a: t("faqHowDoIListAnswer") || "Create an account, click 'List Property', and follow the step-by-step process to publish your rental."
    },
  ];

  return (
    <section className="container mx-auto px-3 pb-16">
      <div className="text-center mb-10">
        <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-2">Frequently Asked Questions</h2>
        <p className="text-muted-foreground">Still have questions? <span className="underline cursor-pointer">Contact us</span> anytime.</p>
      </div>
      <Accordion
        type="single"
        collapsible
        className="mx-auto w-full max-w-2xl bg-background rounded-xl shadow border border-border divide-y divide-border overflow-hidden"
      >
        {faqs.map((faq, i) => (
          <AccordionItem value={`faq${i}`} key={i}>
            <AccordionTrigger className="px-5 py-4 text-lg font-semibold hover:text-primary transition-colors">
              {faq.q}
            </AccordionTrigger>
            <AccordionContent className="px-5 pb-6 pt-1 text-muted-foreground bg-muted/50">
              {faq.a}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
};

export default FAQ;
