
import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Globe, Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin, UserPlus, MessageCircle, ThumbsUp } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Footer = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const isTenant = location.pathname.startsWith("/tenant") || location.pathname.startsWith("/applications");

  const footerSections = [{
    title: 'Platform',
    links: [
      { label: 'Browse Listings', href: '/listings' },
      { label: 'List Property', href: '/list-property' },
      { label: 'How It Works', href: '#' },
      { label: 'Pricing', href: '#' },
      { label: 'Mobile App', href: '#' }
    ]
  }, {
    title: 'Support',
    links: [
      { label: 'Help Center', href: '/contact' },
      { label: 'Contact Us', href: '/contact' },
      { label: 'Safety Tips', href: '#' },
      { label: 'Report Issue', href: '#' },
      { label: 'Community Guidelines', href: '#' }
    ]
  }, {
    title: 'Company',
    links: [
      { label: 'About Us', href: '#' },
      { label: 'Careers', href: '#' },
      { label: 'Press', href: '#' },
      { label: 'Investor Relations', href: '#' },
      { label: 'Blog', href: '#' },
      { label: 'Admin', href: '/admin/dashboard' }
    ]
  }, {
    title: 'Legal',
    links: [
      { label: 'Terms of Service', href: '#' },
      { label: 'Privacy Policy', href: '#' },
      { label: 'Cookie Policy', href: '#' },
      { label: 'Accessibility', href: '#' },
      { label: 'Sitemap', href: '#' }
    ]
  }];
  const socialLinks = [
    { icon: Facebook, href: 'https://facebook.com', label: 'Facebook' },
    { icon: Twitter, href: 'https://twitter.com', label: 'Twitter' },
    { icon: Instagram, href: 'https://instagram.com', label: 'Instagram' },
    { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' }
  ];

  const handleLinkClick = (href: string) => {
    if (/^(https?:)?\/\//.test(href)) {
      window.open(href, '_blank', 'noopener,noreferrer');
    } else if (href !== '#') {
      navigate(href);
    }
  };

  // Tenant only actions
  const handleSupport = () => handleLinkClick('/contact');
  const handleInvite = () => window.alert('Invite a friend link copied! (functionality demo)');
  const handleFeedback = () => window.alert('Thank you for providing feedback! (functionality demo)');

  return (
    <footer className="bg-background border-t border-border pt-0 pb-0 mt-0 animate-fade-in">
      {isTenant && (
        <div className="border-b border-border bg-muted/40 py-4">
          <div className="container mx-auto flex flex-col sm:flex-row gap-3 items-center justify-center">
            <Button variant="secondary" className="gap-2 rounded-lg font-semibold" onClick={handleSupport}>
              <MessageCircle size={18} /> Contact Support
            </Button>
            <Button variant="secondary" className="gap-2 rounded-lg font-semibold" onClick={handleInvite}>
              <UserPlus size={18} /> Invite a Friend
            </Button>
            <Button variant="secondary" className="gap-2 rounded-lg font-semibold" onClick={handleFeedback}>
              <ThumbsUp size={18} /> Give Feedback
            </Button>
          </div>
        </div>
      )}
      <div className="container mx-auto py-12 px-4 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-10">
        <div className="col-span-2 space-y-5 flex flex-col">
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => navigate('/')}>
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center shadow-sm">
              <span className="text-primary-foreground font-bold text-2xl">R</span>
            </div>
            <span className="text-2xl font-bold tracking-tight text-foreground">RentConnect</span>
          </div>
          <p className="text-muted-foreground max-w-md text-base leading-relaxed">
            Connecting landlords and tenants through innovative technology, making the rental process simple, secure, and seamless.
          </p>
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-muted-foreground">
              <Mail className="w-5 h-5" /><span>hello@rentconnect.com</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <Phone className="w-5 h-5" /><span>+1 (555) 123-4567</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <MapPin className="w-5 h-5" /><span>San Francisco, CA</span>
            </div>
          </div>
          <div className="flex gap-3 mt-2">
            {socialLinks.map(social => (
              <button
                key={social.label}
                onClick={() => handleLinkClick(social.href)}
                className="w-9 h-9 rounded-lg flex items-center justify-center text-muted-foreground bg-muted hover:bg-primary hover:text-primary-foreground transition shadow"
                aria-label={social.label}
              >
                <social.icon className="w-5 h-5" />
              </button>
            ))}
          </div>
        </div>
        {footerSections.map(section => (
          <div key={section.title} className="space-y-3">
            <h4 className="font-semibold text-foreground text-base mb-1">{section.title}</h4>
            <ul className="space-y-2">
              {section.links.map(link => (
                <li key={link.label}>
                  <button
                    onClick={() => handleLinkClick(link.href)}
                    className="text-muted-foreground hover:text-primary hover:underline transition-colors duration-150 text-left font-medium"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="border-t border-border">
        <div className="container mx-auto py-6 px-4 flex flex-col sm:flex-row justify-between items-center">
          <div className="text-muted-foreground text-sm">© 2025 RentConnect. All rights reserved.</div>
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-primary gap-2">
              <Globe className="w-4 h-4" /> English
            </Button>
            <div className="flex items-center gap-3 text-sm text-muted-foreground">
              <button onClick={() => handleLinkClick('#')} className="hover:text-primary transition-colors">Privacy</button>
              <button onClick={() => handleLinkClick('#')} className="hover:text-primary transition-colors">Terms</button>
              <button onClick={() => handleLinkClick('#')} className="hover:text-primary transition-colors">Cookies</button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
