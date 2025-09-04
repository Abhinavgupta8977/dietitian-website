import React, { useState, useEffect } from 'react';
import { Button } from './ui/button';
import { 
  Menu, 
  X, 
  Moon, 
  Sun, 
  ChevronDown,
  Leaf,
  Users,
  BookOpen,
  Calendar,
  Phone,
  Sparkles
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface NavigationProps {
  currentPage: string;
  onPageChange: (page: string) => void;
  isDark: boolean;
  onThemeToggle: () => void;
}

export function Navigation({ currentPage, onPageChange, isDark, onThemeToggle }: NavigationProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showServicesDropdown, setShowServicesDropdown] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: 'Home', icon: Sparkles },
    { id: 'about', label: 'About', icon: Users },
    { 
      id: 'services', 
      label: 'Programs', 
      icon: BookOpen,
      hasDropdown: true,
      dropdown: [
        { id: 'weight-loss', label: 'Weight Management' },
        { id: 'muscle-gain', label: 'Athletic Performance' },
        { id: 'diabetes', label: 'Metabolic Health' },
        { id: 'pcos', label: 'Hormonal Balance' },
        { id: 'wellness', label: 'Holistic Wellness' }
      ]
    },
    { id: 'blog', label: 'Resources', icon: BookOpen },
    { id: 'contact', label: 'Contact', icon: Phone }
  ];

  return (
    <>
      <motion.nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled 
            ? 'bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl shadow-soft border-b border-orange-100/20 dark:border-orange-900/20' 
            : 'bg-transparent'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
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

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <div key={item.id} className="relative">
                  {item.hasDropdown ? (
                    <div
                      className="relative"
                      onMouseEnter={() => setShowServicesDropdown(true)}
                      onMouseLeave={() => setShowServicesDropdown(false)}
                    >
                      <button className="flex items-center space-x-1 font-heading text-gray-700 dark:text-gray-300 hover:text-orange-600 dark:hover:text-orange-400 transition-all duration-300 group">
                        <span>{item.label}</span>
                        <ChevronDown className="w-4 h-4 group-hover:rotate-180 transition-transform duration-300" />
                      </button>
                      
                      <AnimatePresence>
                        {showServicesDropdown && (
                          <motion.div
                            className="absolute top-full left-0 mt-3 w-64 bg-white/90 dark:bg-gray-900/90 backdrop-blur-xl rounded-2xl shadow-soft-lg border border-orange-100/20 dark:border-orange-900/20 py-3"
                            initial={{ opacity: 0, y: 15, scale: 0.95 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: 15, scale: 0.95 }}
                            transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                          >
                            {item.dropdown?.map((dropdownItem) => (
                              <button
                                key={dropdownItem.id}
                                onClick={() => {
                                  onPageChange('services');
                                  setShowServicesDropdown(false);
                                }}
                                className="w-full text-left px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-green-50 dark:hover:bg-green-900/20 hover:text-green-600 dark:hover:text-green-400 transition-colors duration-200"
                              >
                                {dropdownItem.label}
                              </button>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <button
                      onClick={() => onPageChange(item.id)}
                      className={`font-heading text-gray-700 dark:text-gray-300 hover:text-orange-600 dark:hover:text-orange-400 transition-all duration-300 relative group ${
                        currentPage === item.id ? 'text-orange-600 dark:text-orange-400' : ''
                      }`}
                    >
                      {item.label}
                      <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-orange-500 to-orange-600 transition-all duration-300 ${
                        currentPage === item.id ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0 group-hover:opacity-100 group-hover:scale-x-100'
                      }`}></span>
                    </button>
                  )}
                </div>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="hidden md:flex items-center space-x-4">
              <Button
                variant="ghost"
                size="icon"
                onClick={onThemeToggle}
                className="rounded-full"
              >
                {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </Button>
              <Button 
                onClick={() => onPageChange('contact')}
                className="btn-premium px-6 py-2.5 rounded-xl font-heading"
              >
                Book Consultation
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center space-x-2">
              <Button
                variant="ghost"
                size="icon"
                onClick={onThemeToggle}
                className="rounded-full"
              >
                {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </Button>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="rounded-full"
              >
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              className="md:hidden bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="px-4 py-6 space-y-4">
                {navItems.map((item) => (
                  <div key={item.id}>
                    <button
                      onClick={() => {
                        onPageChange(item.id);
                        setIsMenuOpen(false);
                      }}
                      className={`flex items-center space-x-3 w-full text-left py-2 text-gray-700 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-400 transition-colors duration-200 ${
                        currentPage === item.id ? 'text-green-600 dark:text-green-400' : ''
                      }`}
                    >
                      <item.icon className="w-5 h-5" />
                      <span>{item.label}</span>
                    </button>
                    {item.hasDropdown && (
                      <div className="ml-8 mt-2 space-y-2">
                        {item.dropdown?.map((dropdownItem) => (
                          <button
                            key={dropdownItem.id}
                            onClick={() => {
                              onPageChange('services');
                              setIsMenuOpen(false);
                            }}
                            className="block text-sm text-gray-600 dark:text-gray-400 hover:text-green-600 dark:hover:text-green-400 transition-colors duration-200"
                          >
                            {dropdownItem.label}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
                <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
                  <Button 
                    onClick={() => {
                      onPageChange('contact');
                      setIsMenuOpen(false);
                    }}
                    className="w-full bg-green-600 hover:bg-green-700 text-white"
                  >
                    Book Consultation
                  </Button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* Bottom Navigation for Mobile */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 z-50">
        <div className="flex items-center justify-around py-2">
          {navItems.slice(0, 4).map((item) => (
            <button
              key={item.id}
              onClick={() => onPageChange(item.id)}
              className={`flex flex-col items-center p-2 transition-colors duration-200 ${
                currentPage === item.id 
                  ? 'text-green-600 dark:text-green-400' 
                  : 'text-gray-600 dark:text-gray-400'
              }`}
            >
              <item.icon className="w-5 h-5" />
              <span className="text-xs mt-1">{item.label}</span>
            </button>
          ))}
        </div>
      </div>
    </>
  );
}