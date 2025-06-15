
import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Globe, Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin, UserPlus, MessageCircle, ThumbsUp } from 'lucide-react';
import { Button } from '@/components/ui/button';

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

  return (
    <footer className="bg-white border-t border-gray-100">
      {/* Tenant Logged-in Features */}
      {isTenant && (
        <div className="border-b border-gray-100 bg-gray-50/50 py-6">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row gap-3 sm:gap-4 items-center justify-center">
            <Button variant="outline" size="sm" className="gap-2 bg-white border-gray-200" onClick={handleSupport}>
              <MessageCircle size={16} />
              Contact Support
            </Button>
            <Button variant="outline" size="sm" className="gap-2 bg-white border-gray-200" onClick={handleInvite}>
              <UserPlus size={16} />
              Invite a Friend
            </Button>
            <Button variant="outline" size="sm" className="gap-2 bg-white border-gray-200" onClick={handleFeedback}>
              <ThumbsUp size={16} />
              Give Feedback
            </Button>
          </div>
        </div>
      )}

      {/* Main Footer Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-5 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center space-x-3 cursor-pointer" onClick={() => navigate('/')}>
              <div className="w-10 h-10 bg-gray-900 rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-lg">R</span>
              </div>
              <span className="text-2xl font-bold text-gray-900">RentConnect</span>
            </div>
            <p className="text-gray-600 leading-relaxed max-w-md text-base">
              Making rental connections simple and secure. Find your perfect home or reach qualified tenants with ease.
            </p>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-gray-600">
                <Mail className="w-4 h-4" />
                <span className="text-sm">hello@rentconnect.com</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-600">
                <Phone className="w-4 h-4" />
                <span className="text-sm">+49 30 1234 5678</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-600">
                <MapPin className="w-4 h-4" />
                <span className="text-sm">Berlin, Germany</span>
              </div>
            </div>
            <div className="flex space-x-3">
              {socialLinks.map(social => (
                <button
                  key={social.label}
                  onClick={() => handleLinkClick(social.href)}
                  className="w-9 h-9 bg-gray-100 rounded-lg flex items-center justify-center text-gray-600 hover:bg-gray-900 hover:text-white transition-all duration-200"
                  aria-label={social.label}
                >
                  <social.icon className="w-4 h-4" />
                </button>
              ))}
            </div>
          </div>
          
          {/* Footer Links */}
          {footerSections.map(section => (
            <div key={section.title} className="space-y-4">
              <h4 className="font-semibold text-gray-900 text-base">
                {section.title}
              </h4>
              <ul className="space-y-3">
                {section.links.map(link => (
                  <li key={link.label}>
                    <button
                      onClick={() => handleLinkClick(link.href)}
                      className="text-gray-600 hover:text-gray-900 transition-colors duration-200 text-sm text-left"
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
      <div className="border-t border-gray-100 bg-gray-50/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <div className="text-gray-600 text-sm">
              © 2025 RentConnect. All rights reserved.
            </div>
            <div className="flex items-center space-x-6">
              <Button variant="ghost" size="sm" className="text-gray-600 hover:text-gray-900 h-8">
                <Globe className="w-4 h-4 mr-2" />
                English
              </Button>
              <div className="flex items-center space-x-4 text-sm text-gray-600">
                <button onClick={() => handleLinkClick('#')} className="hover:text-gray-900 transition-colors">
                  Privacy
                </button>
                <button onClick={() => handleLinkClick('#')} className="hover:text-gray-900 transition-colors">
                  Terms
                </button>
                <button onClick={() => handleLinkClick('#')} className="hover:text-gray-900 transition-colors">
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
