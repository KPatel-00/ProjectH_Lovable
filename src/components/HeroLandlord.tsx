import React from 'react';
import { FileText, Users, MessageSquare, BarChart3, ArrowRight, Phone, CheckCircle2, Play, Star, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';
const landlordFeatures = [{
  icon: FileText,
  title: 'Easy listing creation',
  description: 'Create professional listings in minutes with our intuitive form builder'
}, {
  icon: Users,
  title: 'Application management',
  description: 'Review, compare and manage tenant applications from one dashboard'
}, {
  icon: FileText,
  title: 'Document management',
  description: 'Secure document storage and sharing (Coming Soon)',
  comingSoon: true
}, {
  icon: MessageSquare,
  title: 'Communicate with tenants easily',
  description: 'Built-in messaging system for seamless landlord-tenant communication'
}, {
  icon: BarChart3,
  title: 'Dashboard insights',
  description: 'Track views, leads, and performance metrics for your listings'
}];
const landlordStats = [{
  icon: BarChart3,
  text: "93% of listings get leads within 72 hours"
}, {
  icon: Users,
  text: "70% of landlords find a tenant under a week"
}, {
  icon: CheckCircle2,
  text: "Over 2,000 verified landlords"
}];
const landlordReviews = [{
  name: 'Michael Weber',
  title: 'Student Housing Manager',
  review: 'Filled 3 units in under a week! The platform makes tenant screening so much easier.',
  rating: 5
}, {
  name: 'Sarah Müller',
  title: 'Property Owner',
  review: 'Great communication tools and the dashboard gives me all the insights I need.',
  rating: 5
}, {
  name: 'Thomas Schmidt',
  title: 'Real Estate Investor',
  review: 'Professional service and quality tenants. Highly recommend for landlords.',
  rating: 5
}];
type Props = {
  handleCTAClick: (action: string) => void;
};
const HeroLandlord: React.FC<Props> = ({
  handleCTAClick
}) => {
  return <div className="w-full">
      {/* Why List with Us */}
      <div className="mb-16">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-center text-foreground mb-6 leading-tight">
          List Your Property with
          <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            {" "}Confidence
          </span>
        </h1>
        <p className="text-xl text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
          Join thousands of landlords who trust us to connect them with quality tenants.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {landlordFeatures.map(feature => <div key={feature.title} className="bg-background rounded-2xl p-6 shadow-lg border border-border hover:shadow-xl transition-all duration-300 hover:scale-105 group relative">
              {feature.comingSoon && <div className="absolute top-4 right-4 bg-orange-500 text-white text-xs px-2 py-1 rounded-full">
                  Coming Soon
                </div>}
              <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <feature.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>)}
        </div>
      </div>
      {/* Stats bar */}
      <div className="flex flex-col md:flex-row justify-center items-center gap-4 mb-16">
        {landlordStats.map(stat => <div key={stat.text} className="inline-flex items-center bg-background rounded-full px-6 py-3 shadow-lg border border-border" style={{
        minWidth: "280px",
        whiteSpace: "nowrap"
      }}>
            <stat.icon className="w-5 h-5 text-primary mr-2" />
            <span className="font-semibold text-foreground">
              {stat.text}
            </span>
          </div>)}
      </div>
      {/* How to List Video */}
      <div className="mb-16 text-center">
        <h2 className="text-3xl font-bold mb-8">See How Easy It Is</h2>
        <div className="max-w-2xl mx-auto">
          <div className="relative bg-gradient-to-br from-muted to-muted/50 rounded-2xl overflow-hidden aspect-video cursor-pointer group">
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors duration-300"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Play className="w-6 h-6 text-primary ml-1" />
              </div>
            </div>
            <div className="absolute bottom-4 left-4 text-white">
              <div className="text-sm opacity-90">Under 60 seconds</div>
            </div>
          </div>
        </div>
      </div>
      <div className="mb-16 text-center">
        <div className="bg-gradient-to-r from-primary to-secondary rounded-2xl p-8 text-white">
          <h2 className="text-3xl font-bold mb-4">Ready to List Your Property?</h2>
          <p className="text-xl mb-6 opacity-90">Join thousands of successful landlords today</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90" onClick={() => handleCTAClick('list-property')}>
              <ArrowRight className="w-5 h-5 mr-2" />
              List Your Property
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary" onClick={() => handleCTAClick('contact-support')}>
              <Phone className="w-5 h-5 mr-2" />
              Contact Support
            </Button>
          </div>
        </div>
      </div>
      {/* Landlord Reviews */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-center mb-8">What Landlords Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {landlordReviews.map(review => <div key={review.name} className="bg-background rounded-2xl p-6 shadow-lg border border-border">
              <div className="flex items-center mb-4">
                {[...Array(review.rating)].map((_, i) => <Star key={i} className="w-4 h-4 text-yellow-500 fill-current" />)}
              </div>
              <p className="text-muted-foreground mb-4 italic">"{review.review}"</p>
              <div>
                <div className="font-semibold text-foreground">{review.name}</div>
                <div className="text-sm text-muted-foreground">{review.title}</div>
              </div>
            </div>)}
        </div>
      </div>
      {/* Metrics Badge */}
      
    </div>;
};
export default HeroLandlord;