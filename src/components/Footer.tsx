import React from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { 
  Leaf,
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  ArrowRight,
  Sparkles
} from 'lucide-react';

interface FooterProps {
  onPageChange: (page: string) => void;
}

export function Footer({ onPageChange }: FooterProps) {
  const quickLinks = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About Us' },
    { id: 'services', label: 'Services' },
    { id: 'blog', label: 'Blog' },
    { id: 'contact', label: 'Contact' }
  ];

  const services = [
    'Weight Loss Programs',
    'Nutrition Counseling',
    'Meal Planning',
    'Health Coaching',
    'Diabetes Management'
  ];

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' }
  ];

  return (
    <footer className="bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
      {/* Newsletter Section */}
      <div className="bg-gradient-to-br from-orange-500 via-orange-600 to-orange-700 py-16 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-40 h-40 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-56 h-56 bg-white/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center">
            <div className="mb-6">
              <Sparkles className="w-8 h-8 text-orange-200 mx-auto mb-4" />
              <h3 className="text-3xl lg:text-4xl font-display text-white mb-4">
                Join the Glow Community ✨
              </h3>
              <p className="text-xl font-body text-orange-100 mb-8 max-w-3xl mx-auto leading-relaxed">
                Get the latest wellness tips, science-backed nutrition hacks, and recipes that actually taste good delivered weekly. 
                Plus, snag our free glow-up meal planning guide when you join!
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
              <Input
                type="email"
                placeholder="Your email address"
                className="bg-white/10 border-white/20 text-white placeholder:text-orange-200 focus:bg-white/20 focus:border-white/40 backdrop-blur-sm rounded-xl py-3 font-body"
              />
              <Button 
                className="bg-white text-orange-600 hover:bg-orange-50 hover:text-orange-700 font-heading rounded-xl px-8 py-3 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                Join the Glow ✨
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
            
            <p className="text-sm text-orange-200 mt-4">
              Join 5K+ wellness besties • Unsubscribe anytime • Zero spam, just vibes
            </p>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="py-16 bg-gradient-to-b from-neutral-50 to-white dark:from-neutral-900 dark:to-neutral-800">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="space-y-6">
              <div className="flex items-center space-x-3">
                <div className="relative">
                  <div className="w-10 h-10 bg-gradient-to-br from-orange-400 via-orange-500 to-orange-600 rounded-xl flex items-center justify-center shadow-warm">
                    <Leaf className="w-5 h-5 text-white" />
                  </div>
                  <div className="absolute -top-1 -right-1 w-3 h-3 bg-gradient-to-br from-orange-300 to-orange-400 rounded-full opacity-80"></div>
                </div>
                <div className="flex flex-col">
                  <span className="text-xl font-display text-gradient-primary leading-none">
                    NutriGlow
                  </span>
                  <span className="text-xs text-orange-600/70 dark:text-orange-400/70 font-medium tracking-wider">
                    WELLNESS
                  </span>
                </div>
              </div>
              <p className="text-neutral-600 dark:text-neutral-400 font-body leading-relaxed">
                Your go-to wellness partner for achieving that healthy glow ✨ Evidence-based nutrition that actually fits your lifestyle 
                and helps you level up your health game.
              </p>
              <div className="space-y-2">
                <div className="flex items-center space-x-3 text-sm text-neutral-600 dark:text-neutral-400">
                  <MapPin className="w-4 h-4 text-orange-600" />
                  <span>123 Wellness Boulevard, Nutrition District, ND 12345</span>
                </div>
                <div className="flex items-center space-x-3 text-sm text-neutral-600 dark:text-neutral-400">
                  <Phone className="w-4 h-4 text-orange-600" />
                  <span>+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center space-x-3 text-sm text-neutral-600 dark:text-neutral-400">
                  <Mail className="w-4 h-4 text-orange-600" />
                  <span>hello@nutriglow.co</span>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-heading text-lg text-neutral-800 dark:text-neutral-100 mb-6">Quick Links</h4>
              <ul className="space-y-2">
                {quickLinks.map((link) => (
                  <li key={link.id}>
                    <button
                      onClick={() => onPageChange(link.id)}
                      className="text-neutral-600 dark:text-neutral-400 hover:text-orange-600 dark:hover:text-orange-400 transition-colors duration-200 text-sm font-body"
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="font-heading text-lg text-neutral-800 dark:text-neutral-100 mb-6">Our Services</h4>
              <ul className="space-y-2">
                {services.map((service) => (
                  <li key={service}>
                    <button
                      onClick={() => onPageChange('services')}
                      className="text-neutral-600 dark:text-neutral-400 hover:text-orange-600 dark:hover:text-orange-400 transition-colors duration-200 text-sm font-body"
                    >
                      {service}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Social Media & Contact */}
            <div>
              <h4 className="font-heading text-lg text-neutral-800 dark:text-neutral-100 mb-6">Connect With Us</h4>
              <div className="flex space-x-3 mb-6">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    className="w-10 h-10 bg-neutral-200 dark:bg-neutral-700 rounded-lg flex items-center justify-center text-neutral-600 dark:text-neutral-400 hover:bg-orange-600 hover:text-white transition-all duration-200 hover:scale-110"
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
              <div className="space-y-3">
                <Button
                  onClick={() => onPageChange('contact')}
                  className="w-full btn-premium font-heading rounded-xl"
                >
                  Book Consultation
                </Button>
                <p className="text-xs text-neutral-500 dark:text-neutral-400 font-body">
                  Monday - Friday: 9:00 AM - 6:00 PM<br />
                  Saturday: 9:00 AM - 2:00 PM
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-200 dark:border-gray-800 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-neutral-600 dark:text-neutral-400 font-body">
              © 2024 NutriGlow. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-neutral-600 dark:text-neutral-400 hover:text-orange-600 dark:hover:text-orange-400 transition-colors duration-200 font-body">
                Privacy Policy
              </a>
              <a href="#" className="text-neutral-600 dark:text-neutral-400 hover:text-orange-600 dark:hover:text-orange-400 transition-colors duration-200 font-body">
                Terms of Service
              </a>
              <a href="#" className="text-neutral-600 dark:text-neutral-400 hover:text-orange-600 dark:hover:text-orange-400 transition-colors duration-200 font-body">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}