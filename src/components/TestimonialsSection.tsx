
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
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <span className="text-lg font-semibold">4.8/5</span>
            <span className="text-muted-foreground">(2,847 reviews)</span>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow-sm border border-border"
            >
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-foreground mb-4 italic">"{testimonial.text}"</p>
              <p className="text-sm font-semibold text-muted-foreground">— {testimonial.author}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">Trusted by</p>
          <div className="flex items-center justify-center gap-8 text-muted-foreground">
            <span className="font-semibold">TechCrunch</span>
            <span className="font-semibold">Forbes</span>
            <span className="font-semibold">Handelsblatt</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
