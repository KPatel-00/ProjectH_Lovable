
import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Globe, Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin, UserPlus, MessageCircle, ThumbsUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const Footer = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // Function to check if user is on a "tenant" page (or authenticated, for demo)
  const isTenant = location.pathname.startsWith("/tenant") || location.pathname.startsWith("/applications");

  const footerSections = [{
    title: 'Platform',
    links: [{
      label: 'Browse Listings',
      href: '/listings'
    }, {
      label: 'List Property',
      href: '/list-property'
    }, {
      label: 'How It Works',
      href: '#'
    }, {
      label: 'Pricing',
      href: '#'
    }, {
      label: 'Mobile App',
      href: '#'
    }]
  }, {
    title: 'Support',
    links: [{
      label: 'Help Center',
      href: '/contact'
    }, {
      label: 'Contact Us',
      href: '/contact'
    }, {
      label: 'Safety Tips',
      href: '#'
    }, {
      label: 'Report Issue',
      href: '#'
    }, {
      label: 'Community Guidelines',
      href: '#'
    }]
  }, {
    title: 'Company',
    links: [{
      label: 'About Us',
      href: '#'
    }, {
      label: 'Careers',
      href: '#'
    }, {
      label: 'Press',
      href: '#'
    }, {
      label: 'Investor Relations',
      href: '#'
    }, {
      label: 'Blog',
      href: '#'
    }, {
      label: 'Admin',
      href: '/admin/dashboard'
    }]
  }, {
    title: 'Legal',
    links: [{
      label: 'Terms of Service',
      href: '#'
    }, {
      label: 'Privacy Policy',
      href: '#'
    }, {
      label: 'Cookie Policy',
      href: '#'
    }, {
      label: 'Accessibility',
      href: '#'
    }, {
      label: 'Sitemap',
      href: '#'
    }]
  }];
  const socialLinks = [{
    icon: Facebook,
    href: 'https://facebook.com',
    label: 'Facebook'
  }, {
    icon: Twitter,
    href: 'https://twitter.com',
    label: 'Twitter'
  }, {
    icon: Instagram,
    href: 'https://instagram.com',
    label: 'Instagram'
  }, {
    icon: Linkedin,
    href: 'https://linkedin.com',
    label: 'LinkedIn'
  }];

  const handleLinkClick = (href: string) => {
    if (/^(https?:)?\/\//.test(href)) {
      // External link (starts with 'http', 'https', or '//')
      window.open(href, '_blank', 'noopener,noreferrer');
    } else if (href !== '#') {
      // Internal navigation via React Router SPA style
      navigate(href);
    }
  };

  // Tenant only: Handlers for the new actions
  const handleSupport = () => {
    handleLinkClick('/contact');
  };
  const handleInvite = () => {
    window.alert('Invite a friend link copied! (functionality demo)');
  };
  const handleFeedback = () => {
    window.alert('Thank you for providing feedback! (functionality demo)');
  };

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Newsletter subscription submitted');
  };

  return (
    <footer className="bg-background border-t border-border">
      {/* Tenant Logged-in Features */}
      {isTenant && (
        <div className="border-b border-border bg-muted/30 py-4">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row gap-2 sm:gap-4 items-center justify-center">
            <Button variant="secondary" className="gap-2" onClick={handleSupport}>
              <MessageCircle size={18} />
              Contact Support
            </Button>
            <Button variant="secondary" className="gap-2" onClick={handleInvite}>
              <UserPlus size={18} />
              Invite a Friend
            </Button>
            <Button variant="secondary" className="gap-2" onClick={handleFeedback}>
              <ThumbsUp size={18} />
              Give Feedback
            </Button>
          </div>
        </div>
      )}

      {/* Main Footer Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-6 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center space-x-3 cursor-pointer" onClick={() => navigate('/')}>
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold">R</span>
              </div>
              <span className="text-2xl font-bold text-foreground">RentConnect</span>
            </div>
            <p className="text-muted-foreground leading-relaxed max-w-md">
              Connecting landlords and tenants through innovative technology, making the rental process simple, secure, and seamless for everyone.
            </p>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-muted-foreground">
                <Mail className="w-5 h-5" />
                <span>hello@rentconnect.com</span>
              </div>
              <div className="flex items-center space-x-3 text-muted-foreground">
                <Phone className="w-5 h-5" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3 text-muted-foreground">
                <MapPin className="w-5 h-5" />
                <span>San Francisco, CA</span>
              </div>
            </div>
            <div className="flex space-x-4">
              {socialLinks.map(social => (
                <button
                  key={social.label}
                  onClick={() => handleLinkClick(social.href)}
                  className="w-10 h-10 bg-muted rounded-lg flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-200 hover:scale-110"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </button>
              ))}
            </div>
          </div>
          {/* Footer Links */}
          {footerSections.map(section => (
            <div key={section.title} className="space-y-4">
              <h4 className="font-semibold text-foreground text-lg">
                {section.title}
              </h4>
              <ul className="space-y-3">
                {section.links.map(link => (
                  <li key={link.label}>
                    <button
                      onClick={() => handleLinkClick(link.href)}
                      className="text-muted-foreground hover:text-foreground transition-colors duration-200 hover:underline text-left"
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      {/* Bottom Bar */}
      <div className="border-t border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <div className="text-muted-foreground text-sm">
              © 2025 RentConnect. All rights reserved.
            </div>
            <div className="flex items-center space-x-6">
              <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-foreground">
                <Globe className="w-4 h-4 mr-2" />
                English
              </Button>
              <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                <button onClick={() => handleLinkClick('#')} className="hover:text-foreground transition-colors">
                  Privacy
                </button>
                <button onClick={() => handleLinkClick('#')} className="hover:text-foreground transition-colors">
                  Terms
                </button>
                <button onClick={() => handleLinkClick('#')} className="hover:text-foreground transition-colors">
                  Cookies
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
