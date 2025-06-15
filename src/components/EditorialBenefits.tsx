
import React from 'react';
import { CheckCircle2, Shield, Clock, Search, MessageSquare, CreditCard } from 'lucide-react';

const EditorialBenefits = () => {
  const tenantBenefits = [
    {
      icon: Search,
      title: 'Smart Discovery',
      description: 'AI-powered search that learns your preferences and suggests perfect matches.',
    },
    {
      icon: Shield,
      title: 'Verified Properties',
      description: 'Every listing is professionally verified for authenticity and quality.',
    },
    {
      icon: Clock,
      title: 'Instant Applications',
      description: 'Apply to multiple properties with a single, reusable digital profile.',
    }
  ];

  const landlordBenefits = [
    {
      icon: MessageSquare,
      title: 'Quality Tenants',
      description: 'Connect with pre-screened, qualified tenants who match your criteria.',
    },
    {
      icon: CreditCard,
      title: 'Secure Payments',
      description: 'Automated rent collection with built-in insurance and legal protection.',
    },
    {
      icon: CheckCircle2,
      title: 'Easy Management',
      description: 'Streamlined tools for maintenance requests, communications, and documentation.',
    }
  ];

  return (
    <section className="py-32 bg-muted/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* For Tenants */}
        <div className="grid grid-cols-12 gap-8 lg:gap-16 mb-32">
          <div className="col-span-12 lg:col-span-6 relative">
            <div className="h-[600px] rounded-3xl overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=800&h=600&fit=crop"
                alt="Tenant using laptop to search for properties"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          
          <div className="col-span-12 lg:col-span-6 flex flex-col justify-center">
            <div className="lg:pl-16">
              <h6 className="ui-label text-muted-foreground mb-8">For Tenants</h6>
              <h2 className="editorial-headline text-editorial-4xl font-editorial-bold text-foreground mb-12 tracking-editorial-tight">
                Find Your Perfect Home with Confidence
              </h2>
              
              <div className="space-y-12">
                {tenantBenefits.map((benefit, index) => (
                  <div key={index} className="flex gap-6">
                    <div className="w-12 h-12 bg-background rounded-xl flex items-center justify-center flex-shrink-0">
                      <benefit.icon className="w-6 h-6 text-foreground" />
                    </div>
                    <div>
                      <h3 className="editorial-subhead text-editorial-xl font-editorial-semibold text-foreground mb-3">
                        {benefit.title}
                      </h3>
                      <p className="editorial-body text-editorial-base text-muted-foreground leading-editorial-relaxed">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* For Landlords */}
        <div className="grid grid-cols-12 gap-8 lg:gap-16">
          <div className="col-span-12 lg:col-span-6 flex flex-col justify-center order-2 lg:order-1">
            <div className="lg:pr-16">
              <h6 className="ui-label text-muted-foreground mb-8">For Landlords</h6>
              <h2 className="editorial-headline text-editorial-4xl font-editorial-bold text-foreground mb-12 tracking-editorial-tight">
                Maximize Your Property's Potential
              </h2>
              
              <div className="space-y-12">
                {landlordBenefits.map((benefit, index) => (
                  <div key={index} className="flex gap-6">
                    <div className="w-12 h-12 bg-background rounded-xl flex items-center justify-center flex-shrink-0">
                      <benefit.icon className="w-6 h-6 text-foreground" />
                    </div>
                    <div>
                      <h3 className="editorial-subhead text-editorial-xl font-editorial-semibold text-foreground mb-3">
                        {benefit.title}
                      </h3>
                      <p className="editorial-body text-editorial-base text-muted-foreground leading-editorial-relaxed">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <div className="col-span-12 lg:col-span-6 relative order-1 lg:order-2">
            <div className="h-[600px] rounded-3xl overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=600&fit=crop"
                alt="Landlord managing properties on laptop"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EditorialBenefits;
