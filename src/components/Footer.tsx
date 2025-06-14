import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Globe, Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
const Footer = () => {
  const navigate = useNavigate();
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
    if (href.startsWith('http')) {
      window.open(href, '_blank', 'noopener,noreferrer');
    } else if (href !== '#') {
      navigate(href);
    }
  };
  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Newsletter subscription submitted');
  };
  return <footer className="bg-background border-t border-border">
      {/* Newsletter Section */}
      <div className="border-b border-border">
        
      </div>

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
              {socialLinks.map(social => <button key={social.label} onClick={() => handleLinkClick(social.href)} className="w-10 h-10 bg-muted rounded-lg flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-200 hover:scale-110" aria-label={social.label}>
                  <social.icon className="w-5 h-5" />
                </button>)}
            </div>
          </div>

          {/* Footer Links */}
          {footerSections.map(section => <div key={section.title} className="space-y-4">
              <h4 className="font-semibold text-foreground text-lg">
                {section.title}
              </h4>
              <ul className="space-y-3">
                {section.links.map(link => <li key={link.label}>
                    <button onClick={() => handleLinkClick(link.href)} className="text-muted-foreground hover:text-foreground transition-colors duration-200 hover:underline text-left">
                      {link.label}
                    </button>
                  </li>)}
              </ul>
            </div>)}
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
    </footer>;
};
export default Footer;