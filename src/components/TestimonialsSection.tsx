
import React from 'react';
import { Star } from 'lucide-react';

const TestimonialsSection = () => {
  const testimonials = [
    {
      text: "Found my perfect apartment in just 2 days!",
      author: "Sarah M.",
      rating: 5
    },
    {
      text: "The verification process gave me confidence in my choice.",
      author: "Michael K.",
      rating: 5
    },
    {
      text: "Excellent support throughout the entire rental process.",
      author: "Anna L.",
      rating: 5
    }
  ];

  return (
    <section className="py-24 bg-muted/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <span className="editorial-subhead text-editorial-xl font-editorial-semibold">4.8/5</span>
            <span className="editorial-body text-muted-foreground">(2,847 reviews)</span>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl p-8 shadow-sm border border-border"
            >
              <div className="flex mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="callout text-foreground mb-6 italic">
                "{testimonial.text}"
              </p>
              <p className="ui-label text-muted-foreground">
                — {testimonial.author}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <p className="ui-label text-muted-foreground mb-8">Trusted by</p>
          <div className="flex items-center justify-center gap-12 text-muted-foreground">
            <span className="editorial-subhead font-editorial-semibold text-editorial-lg">TechCrunch</span>
            <span className="editorial-subhead font-editorial-semibold text-editorial-lg">Forbes</span>
            <span className="editorial-subhead font-editorial-semibold text-editorial-lg">Handelsblatt</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
