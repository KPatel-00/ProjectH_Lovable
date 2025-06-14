import React from 'react';
import { Shield, Clock, Star, Search, Home, Users, MessageSquare, CreditCard } from 'lucide-react';
const Features = () => {
  const features = [{
    icon: Search,
    title: 'Smart Search',
    description: 'Advanced filters and AI-powered recommendations to find your perfect match.',
    gradient: 'from-blue-500 to-cyan-500'
  }, {
    icon: Shield,
    title: 'Verified Listings',
    description: 'All properties and users are thoroughly verified for your safety and peace of mind.',
    gradient: 'from-green-500 to-emerald-500'
  }, {
    icon: Clock,
    title: 'Instant Booking',
    description: 'Book viewings and secure properties instantly with our streamlined process.',
    gradient: 'from-purple-500 to-pink-500'
  }, {
    icon: Star,
    title: 'Top-Rated Service',
    description: '5-star customer service with dedicated support throughout your journey.',
    gradient: 'from-orange-500 to-red-500'
  }, {
    icon: MessageSquare,
    title: 'Direct Communication',
    description: 'Chat directly with landlords and tenants through our secure messaging system.',
    gradient: 'from-indigo-500 to-blue-500'
  }, {
    icon: CreditCard,
    title: 'Secure Payments',
    description: 'Safe and secure payment processing with multiple payment options.',
    gradient: 'from-teal-500 to-green-500'
  }];
  return;
};
export default Features;