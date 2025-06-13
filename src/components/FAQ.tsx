
import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "How do I apply for a property?",
      answer: "Simply click on any property listing, review the details, and click 'Apply Now'. You'll need to provide basic information and documentation. Most applications are processed within 24-48 hours."
    },
    {
      question: "Are all listings verified?",
      answer: "We verify all landlord identities and property ownership documents. Properties marked with a 'Verified' badge have undergone additional quality checks including photo verification and legal document review."
    },
    {
      question: "What happens after I book a property?",
      answer: "After booking, you'll receive a confirmation email with next steps. The landlord will contact you within 24 hours to arrange viewing (if needed) and discuss lease terms. Payment and move-in coordination follows."
    },
    {
      question: "Is there a fee for tenants?",
      answer: "RentConnect is completely free for tenants. You only pay rent and security deposit directly to your landlord. No hidden fees or commissions."
    },
    {
      question: "Can I schedule property viewings?",
      answer: "Yes! Most landlords offer flexible viewing times. You can request a viewing through the property listing page, and the landlord will contact you to arrange a convenient time."
    },
    {
      question: "What if I have issues with my landlord?",
      answer: "Our support team is here to help mediate any disputes. We also provide resources on tenant rights and can connect you with local tenant advocacy groups if needed."
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">Frequently Asked Questions</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Everything you need to know about finding and renting your next home
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-background rounded-lg border border-border px-6"
              >
                <AccordionTrigger className="text-left hover:no-underline">
                  <span className="font-medium text-foreground">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
