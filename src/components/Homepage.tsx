import React, { useState, useEffect } from 'react';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { 
  ArrowRight,
  Play,
  Star,
  ChevronLeft,
  ChevronRight,
  Heart,
  Target,
  Award,
  Users,
  Clock,
  CheckCircle,
  MessageCircle,
  X,
  Zap,
  Shield,
  Sparkles,
  TrendingUp
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface HomepageProps {
  onPageChange: (page: string) => void;
}

export function Homepage({ onPageChange }: HomepageProps) {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [showChatbot, setShowChatbot] = useState(false);
  const [counters, setCounters] = useState({
    clients: 0,
    programs: 0,
    success: 0,
    years: 0
  });

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Weight Loss Success",
      content: "Lost 35 pounds in 6 months with personalized meal plans. The support was incredible!",
      rating: 5,
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b776?w=100&h=100&fit=crop&crop=face"
    },
    {
      name: "Mike Chen",
      role: "Diabetes Management",
      content: "My blood sugar levels are now stable. The nutrition guidance changed my life completely.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face"
    },
    {
      name: "Emily Rodriguez",
      role: "PCOS Support",
      content: "Finally found a program that understands PCOS. My symptoms have improved dramatically.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face"
    }
  ];

  const services = [
    {
      icon: Target,
      title: "Weight Transformation",
      description: "Sustainable, science-based approach to achieving your ideal weight",
      color: "from-orange-500 to-orange-600",
      bgColor: "from-orange-50 to-orange-100 dark:from-orange-900/20 dark:to-orange-800/20"
    },
    {
      icon: Heart,
      title: "Metabolic Health",
      description: "Optimize your metabolism and energy levels naturally",
      color: "from-red-500 to-rose-600",
      bgColor: "from-red-50 to-rose-100 dark:from-red-900/20 dark:to-rose-800/20"
    },
    {
      icon: Award,
      title: "Performance Nutrition",
      description: "Fuel your body for peak athletic and mental performance",
      color: "from-blue-500 to-indigo-600",
      bgColor: "from-blue-50 to-indigo-100 dark:from-blue-900/20 dark:to-indigo-800/20"
    },
    {
      icon: Users,
      title: "Family Wellness",
      description: "Build healthy habits that last for your entire family",
      color: "from-purple-500 to-violet-600",
      bgColor: "from-purple-50 to-violet-100 dark:from-purple-900/20 dark:to-violet-800/20"
    },
    {
      icon: Zap,
      title: "Hormonal Balance",
      description: "PCOS, thyroid, and hormone optimization through nutrition",
      color: "from-emerald-500 to-teal-600",
      bgColor: "from-emerald-50 to-teal-100 dark:from-emerald-900/20 dark:to-teal-800/20"
    },
    {
      icon: Shield,
      title: "Digestive Health",
      description: "Heal your gut and improve overall digestive wellness",
      color: "from-amber-500 to-yellow-600",
      bgColor: "from-amber-50 to-yellow-100 dark:from-amber-900/20 dark:to-yellow-800/20"
    }
  ];

  const stats = [
    { label: "Happy Clients", value: 1000, suffix: "+" },
    { label: "Programs", value: 50, suffix: "+" },
    { label: "Success Rate", value: 95, suffix: "%" },
    { label: "Years Experience", value: 8, suffix: "" }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  useEffect(() => {
    const animateCounters = () => {
      stats.forEach((stat, index) => {
        let current = 0;
        const increment = stat.value / 50;
        const timer = setInterval(() => {
          current += increment;
          if (current >= stat.value) {
            current = stat.value;
            clearInterval(timer);
          }
          setCounters(prev => ({
            ...prev,
            [index === 0 ? 'clients' : index === 1 ? 'programs' : index === 2 ? 'success' : 'years']: Math.floor(current)
          }));
        }, 40);
      });
    };

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          animateCounters();
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );

    const statsElement = document.getElementById('stats-section');
    if (statsElement) {
      observer.observe(statsElement);
    }

    return () => observer.disconnect();
  }, []);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[100vh] flex items-center justify-center overflow-hidden">
        {/* Background with sophisticated layering */}
        <div className="absolute inset-0">
          {/* Base gradient */}
          <div className="absolute inset-0 bg-hero-gradient dark:bg-hero-gradient-dark" />
          
          {/* Layered hero images for visual richness */}
          <div className="absolute inset-0 z-10">
            <div className="absolute inset-0">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1738220542905-6e477c1f1c38?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFsdGh5JTIwbnV0cml0aW9uJTIwbWVhbCUyMHByZXAlMjBjb2xvcmZ1bCUyMHZlZ2V0YWJsZXN8ZW58MXx8fHwxNzU2OTY5NTI0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Colorful healthy meal prep with fresh vegetables"
                className="w-full h-full object-cover opacity-20 dark:opacity-15"
              />
            </div>
            <div className="absolute top-0 right-0 w-1/3 h-2/3">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1727056354589-58ceee08028c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxudXRyaXRpb3VzJTIwc3VwZXJmb29kcyUyMGF2b2NhZG8lMjBzYWxtb24lMjBiZXJyaWVzfGVufDF8fHx8MTc1Njk2OTUyNnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Nutritious superfoods including avocado, salmon, and berries"
                className="w-full h-full object-cover opacity-10 dark:opacity-8 rounded-3xl"
              />
            </div>
            <div className="absolute bottom-0 left-0 w-1/4 h-1/2">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1641543729583-6961dc65b95a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvcmdhbmljJTIwZnJlc2glMjBpbmdyZWRpZW50cyUyMGhlYWx0aHklMjBjb29raW5nfGVufDF8fHx8MTc1Njk2OTUyNXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Fresh organic ingredients for healthy cooking"
                className="w-full h-full object-cover opacity-8 dark:opacity-6 rounded-2xl"
              />
            </div>
          </div>
          
          {/* Overlay with premium gradients */}
          <div className="absolute inset-0 z-20">
            <div className="absolute inset-0 bg-gradient-to-br from-orange-50/80 via-peach-50/60 to-cream-50/90 dark:from-orange-950/60 dark:via-orange-900/40 dark:to-neutral-900/80" />
            <div className="absolute inset-0 bg-gradient-to-t from-white/20 via-transparent to-orange-100/30 dark:from-neutral-900/30 dark:to-orange-950/20" />
          </div>
          
          {/* Decorative elements */}
          <div className="absolute top-20 right-20 w-32 h-32 bg-gradient-to-br from-orange-200/30 to-peach-300/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-40 left-16 w-48 h-48 bg-gradient-to-tl from-orange-100/20 to-cream-200/30 rounded-full blur-3xl animate-pulse delay-1000" />
        </div>
        
        {/* Content */}
        <div className="relative z-30 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.4, 0, 0.2, 1] }}
            className="space-y-10"
          >
            {/* Premium badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Badge className="bg-orange-100/80 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300 px-6 py-3 text-sm font-heading backdrop-blur-sm border border-orange-200/50 dark:border-orange-800/50">
                <Sparkles className="w-4 h-4 mr-2" />
                Trusted by 1000+ Health Enthusiasts
              </Badge>
            </motion.div>
            
            {/* Main headline */}
            <div className="space-y-6">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-display leading-[0.95] text-balance">
                <span className="text-neutral-800 dark:text-neutral-100">Transform Your</span>
                <br />
                <span className="text-gradient-primary">Health Journey</span>
              </h1>
              
              <div className="max-w-2xl mx-auto">
                <p className="text-xl sm:text-2xl font-body text-neutral-600 dark:text-neutral-300 leading-relaxed text-balance">
                  Discover personalized nutrition coaching that adapts to your lifestyle, 
                  goals, and unique needs with evidence-based strategies.
                </p>
              </div>
            </div>
            
            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-4"
            >
              <Button 
                size="lg"
                onClick={() => onPageChange('contact')}
                className="btn-premium px-10 py-4 text-lg font-heading rounded-2xl shadow-warm-lg group min-w-[200px]"
              >
                Start Your Journey
                <ArrowRight className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
              
              <Button 
                size="lg"
                onClick={() => onPageChange('services')}
                className="btn-secondary-premium px-10 py-4 text-lg font-heading rounded-2xl group min-w-[200px]"
              >
                <Play className="w-5 h-5 mr-3 group-hover:scale-110 transition-transform duration-300" />
                Explore Programs
              </Button>
            </motion.div>
            
            {/* Trust indicators */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="pt-8 flex flex-wrap justify-center items-center gap-8 text-sm text-neutral-500 dark:text-neutral-400"
            >
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-orange-500" />
                <span>Science-Based</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-orange-500" />
                <span>Personalized Plans</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-orange-500" />
                <span>Ongoing Support</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
        
        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <div className="w-6 h-10 border-2 border-orange-300 dark:border-orange-600 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-orange-500 rounded-full mt-2 animate-bounce"></div>
          </div>
        </motion.div>
      </section>

      {/* Stats Section */}
      <section id="stats-section" className="py-24 bg-gradient-to-b from-cream-50 to-white dark:from-neutral-900 dark:to-neutral-800">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-16">
            <motion.h2 
              className="text-3xl lg:text-4xl font-display text-neutral-800 dark:text-neutral-100 mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Proven Results, Real Impact
            </motion.h2>
            <motion.p 
              className="text-xl font-body text-neutral-600 dark:text-neutral-300 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Join thousands who have transformed their health with our evidence-based approach
            </motion.p>
          </div>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                className="text-center group"
                initial={{ opacity: 0, y: 30, scale: 0.8 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1, ease: [0.4, 0, 0.2, 1] }}
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-orange-100 to-peach-100 dark:from-orange-900/20 dark:to-orange-800/20 rounded-3xl opacity-0 group-hover:opacity-100 transition-all duration-500 scale-110"></div>
                  <div className="relative bg-white/60 dark:bg-neutral-800/60 backdrop-blur-sm rounded-2xl p-8 shadow-soft group-hover:shadow-warm transition-all duration-500 border border-orange-100/50 dark:border-orange-900/30">
                    <div className="text-4xl lg:text-5xl font-display text-gradient-primary mb-3">
                      {index === 0 ? counters.clients : 
                       index === 1 ? counters.programs :
                       index === 2 ? counters.success :
                       counters.years}{stat.suffix}
                    </div>
                    <div className="text-neutral-600 dark:text-neutral-300 font-heading text-lg">{stat.label}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Lifestyle & Science Section */}
      <section className="py-24 bg-gradient-to-b from-cream-50 to-white dark:from-neutral-900 dark:to-neutral-800 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left: Science & Lifestyle Images */}
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              {/* Main lifestyle image */}
              <div className="relative z-10 rounded-3xl overflow-hidden shadow-warm-lg">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1608138279038-8dd61d909bd0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHx3ZWxsbmVzcyUyMGxpZmVzdHlsZSUyMHdvbWFuJTIwZXhlcmNpc2luZyUyMG91dGRvb3JzfGVufDF8fHx8MTc1Njk2OTUyNnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Woman embracing wellness lifestyle outdoors"
                  className="w-full h-80 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-orange-900/30 via-transparent to-transparent"></div>
              </div>
              
              {/* Floating science image */}
              <motion.div
                className="absolute -top-8 -right-8 w-48 h-32 rounded-2xl overflow-hidden shadow-warm border-4 border-white dark:border-neutral-800"
                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1684259498900-afdea87b1a97?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHxudXRyaXRpb24lMjBzY2llbmNlJTIwbGFib3JhdG9yeSUyMGZvb2QlMjB0ZXN0aW5nfGVufDF8fHx8MTc1Njk2OTUzMXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Nutrition science and food testing laboratory"
                  className="w-full h-full object-cover"
                />
              </motion.div>
              
              {/* Floating healthy plate */}
              <motion.div
                className="absolute -bottom-8 -left-8 w-40 h-32 rounded-2xl overflow-hidden shadow-warm border-4 border-white dark:border-neutral-800"
                initial={{ opacity: 0, scale: 0.8, y: -20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                whileHover={{ scale: 1.05, y: 5 }}
              >
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1644172949364-3fcfd25604b8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHxtZWRpdGVycmFuZWFuJTIwZGlldCUyMGhlYWx0aHklMjBwbGF0ZSUyMGJhbGFuY2VkJTIwbnV0cml0aW9ufGVufDF8fHx8MTc1Njk2OTUzMXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Balanced Mediterranean diet healthy plate"
                  className="w-full h-full object-cover"
                />
              </motion.div>
              
              {/* Decorative elements */}
              <div className="absolute top-16 left-16 w-4 h-4 bg-orange-400 rounded-full animate-pulse"></div>
              <div className="absolute bottom-16 right-16 w-6 h-6 bg-orange-300 rounded-full animate-pulse delay-500"></div>
              <div className="absolute top-1/2 left-4 w-2 h-2 bg-orange-500 rounded-full animate-pulse delay-1000"></div>
            </motion.div>
            
            {/* Right: Content */}
            <motion.div
              className="space-y-8"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="space-y-4">
                <Badge className="bg-orange-100/80 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300 px-4 py-2 font-heading">
                  Science Meets Lifestyle
                </Badge>
                <h2 className="text-4xl lg:text-5xl font-display text-neutral-800 dark:text-neutral-100 leading-tight">
                  Where Evidence-Based
                  <span className="block text-gradient-primary">Meets Real Life</span>
                </h2>
                <p className="text-xl font-body text-neutral-600 dark:text-neutral-300 leading-relaxed">
                  We bridge the gap between cutting-edge nutrition science and practical, 
                  sustainable lifestyle changes that fit your unique circumstances.
                </p>
              </div>
              
              {/* Feature highlights */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  { icon: Zap, title: 'Personalized Plans', desc: 'Tailored to your metabolism' },
                  { icon: Shield, title: 'Science-Backed', desc: 'Evidence-based approaches' },
                  { icon: Heart, title: 'Holistic Wellness', desc: 'Mind, body & lifestyle' },
                  { icon: TrendingUp, title: 'Lasting Results', desc: 'Sustainable transformations' }
                ].map((feature, index) => (
                  <motion.div
                    key={feature.title}
                    className="flex items-start space-x-3 p-4 bg-white/60 dark:bg-neutral-800/60 backdrop-blur-sm rounded-xl border border-orange-100/50 dark:border-orange-900/30"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                    whileHover={{ scale: 1.02, y: -2 }}
                  >
                    <div className="w-10 h-10 bg-gradient-to-br from-orange-400 to-orange-500 rounded-lg flex items-center justify-center flex-shrink-0">
                      <feature.icon className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="font-heading text-neutral-800 dark:text-neutral-100 mb-1">{feature.title}</h3>
                      <p className="text-sm text-neutral-600 dark:text-neutral-400">{feature.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                <Button
                  onClick={() => onPageChange('about')}
                  className="btn-premium px-8 py-3 rounded-xl font-heading group"
                >
                  Discover Our Approach
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-gradient-to-b from-white to-cream-50 dark:from-neutral-800 dark:to-neutral-900">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl lg:text-5xl font-display text-neutral-800 dark:text-neutral-100 mb-6 text-balance">
              Comprehensive Wellness
              <span className="block text-gradient-primary">Solutions</span>
            </h2>
            <p className="text-xl font-body text-neutral-600 dark:text-neutral-300 max-w-3xl mx-auto leading-relaxed">
              Evidence-based nutrition programs designed to address your unique health goals and lifestyle needs
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1, ease: [0.4, 0, 0.2, 1] }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group cursor-pointer"
              >
                <div className={`relative bg-gradient-to-br ${service.bgColor} rounded-3xl p-8 shadow-soft group-hover:shadow-warm-lg transition-all duration-500 border border-white/50 dark:border-neutral-700/50 overflow-hidden`}>
                  {/* Background decoration */}
                  <div className="absolute top-0 right-0 w-32 h-32 opacity-10 group-hover:opacity-20 transition-opacity duration-500">
                    <div className={`w-full h-full bg-gradient-to-br ${service.color} rounded-full blur-2xl transform translate-x-8 -translate-y-8`}></div>
                  </div>
                  
                  <div className="relative z-10">
                    {/* Icon */}
                    <div className={`w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-500`}>
                      <service.icon className="w-8 h-8 text-white" />
                    </div>
                    
                    {/* Content */}
                    <h3 className="text-2xl font-heading text-neutral-800 dark:text-neutral-100 mb-4 text-center">
                      {service.title}
                    </h3>
                    <p className="text-neutral-600 dark:text-neutral-300 font-body text-center leading-relaxed">
                      {service.description}
                    </p>
                    
                    {/* Hover effect */}
                    <div className="mt-6 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                      <div className="flex justify-center">
                        <span className={`inline-flex items-center text-sm font-heading bg-gradient-to-r ${service.color} bg-clip-text text-transparent`}>
                          Learn More
                          <ArrowRight className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" />
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="text-center mt-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Button 
              onClick={() => onPageChange('services')}
              className="btn-premium px-10 py-4 text-lg font-heading rounded-2xl shadow-warm-lg group"
            >
              Explore All Programs
              <ArrowRight className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform duration-300" />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-gradient-to-b from-cream-50 to-orange-50 dark:from-neutral-900 dark:to-neutral-800">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl lg:text-5xl font-display text-neutral-800 dark:text-neutral-100 mb-6">
              Success Stories That
              <span className="block text-gradient-primary">Inspire Change</span>
            </h2>
            <p className="text-xl font-body text-neutral-600 dark:text-neutral-300 max-w-2xl mx-auto">
              Real transformations from real people who chose to invest in their health
            </p>
          </motion.div>

          <div className="relative max-w-5xl mx-auto">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentTestimonial}
                initial={{ opacity: 0, x: 50, scale: 0.95 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: -50, scale: 0.95 }}
                transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
                className="text-center"
              >
                <div className="relative bg-white/80 dark:bg-neutral-800/80 backdrop-blur-xl rounded-3xl p-12 shadow-soft-lg border border-orange-100/50 dark:border-orange-900/20 overflow-hidden">
                  {/* Decorative background elements */}
                  <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-orange-100/30 to-peach-200/30 dark:from-orange-900/20 dark:to-orange-800/20 rounded-full blur-3xl -translate-y-20 translate-x-20"></div>
                  <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-orange-200/20 to-cream-300/30 dark:from-orange-800/10 dark:to-orange-700/20 rounded-full blur-2xl translate-y-16 -translate-x-16"></div>
                  
                  <div className="relative z-10 space-y-8">
                    {/* Star rating */}
                    <div className="flex justify-center space-x-1">
                      {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                        <Star key={i} className="w-6 h-6 fill-orange-400 text-orange-400" />
                      ))}
                    </div>
                    
                    {/* Quote */}
                    <blockquote className="text-2xl lg:text-3xl font-body text-neutral-700 dark:text-neutral-300 italic leading-relaxed max-w-4xl mx-auto text-balance">
                      "{testimonials[currentTestimonial].content}"
                    </blockquote>
                    
                    {/* Client info */}
                    <div className="flex items-center justify-center space-x-6">
                      <div className="relative">
                        <ImageWithFallback
                          src={testimonials[currentTestimonial].image}
                          alt={testimonials[currentTestimonial].name}
                          className="w-16 h-16 rounded-full object-cover shadow-warm"
                        />
                        <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center">
                          <CheckCircle className="w-3 h-3 text-white" />
                        </div>
                      </div>
                      <div className="text-left">
                        <div className="font-heading text-xl text-neutral-800 dark:text-neutral-100">
                          {testimonials[currentTestimonial].name}
                        </div>
                        <div className="text-orange-600 dark:text-orange-400 font-medium">
                          {testimonials[currentTestimonial].role}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation buttons */}
            <button
              onClick={prevTestimonial}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-16 w-14 h-14 bg-white/90 dark:bg-neutral-800/90 backdrop-blur-sm rounded-full shadow-warm flex items-center justify-center text-neutral-600 dark:text-neutral-400 hover:text-orange-600 dark:hover:text-orange-400 transition-all duration-300 hover:scale-110"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <button
              onClick={nextTestimonial}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-16 w-14 h-14 bg-white/90 dark:bg-neutral-800/90 backdrop-blur-sm rounded-full shadow-warm flex items-center justify-center text-neutral-600 dark:text-neutral-400 hover:text-orange-600 dark:hover:text-orange-400 transition-all duration-300 hover:scale-110"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Dots indicator */}
            <div className="flex justify-center space-x-3 mt-12">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`transition-all duration-300 rounded-full ${
                    index === currentTestimonial 
                      ? 'w-10 h-3 bg-gradient-to-r from-orange-500 to-orange-600' 
                      : 'w-3 h-3 bg-neutral-300 dark:bg-neutral-600 hover:bg-orange-300 dark:hover:bg-orange-700'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-orange-500 via-orange-600 to-orange-700 dark:from-orange-700 dark:via-orange-800 dark:to-orange-900"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-orange-900/20 via-transparent to-orange-400/10"></div>
        
        {/* Background image overlay */}
        <div className="absolute inset-0 opacity-10">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1738220542905-6e477c1f1c38?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFsdGh5JTIwbnV0cml0aW9uJTIwbWVhbCUyMHByZXAlMjBjb2xvcmZ1bCUyMHZlZ2V0YWJsZXN8ZW58MXx8fHwxNzU2OTY5NTI0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Healthy nutrition background"
            className="w-full h-full object-cover"
          />
        </div>
        
        {/* Decorative elements with enhanced visual interest */}
        <div className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-48 h-48 bg-white/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-radial from-white/5 to-transparent rounded-full"></div>
        
        {/* Floating elements */}
        <motion.div 
          className="absolute top-16 right-32 w-4 h-4 bg-white/20 rounded-full"
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 3, repeat: Infinity }}
        />
        <motion.div 
          className="absolute bottom-32 left-16 w-6 h-6 bg-white/15 rounded-full"
          animate={{ y: [0, 15, 0] }}
          transition={{ duration: 4, repeat: Infinity, delay: 1 }}
        />
        <motion.div 
          className="absolute top-1/3 left-1/4 w-3 h-3 bg-white/25 rounded-full"
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 2.5, repeat: Infinity, delay: 0.5 }}
        />
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-10"
          >
            <div className="space-y-6">
              <h2 className="text-4xl lg:text-6xl font-display text-white leading-tight text-balance">
                Ready to Transform
                <span className="block text-orange-200">Your Health?</span>
              </h2>
              <p className="text-xl lg:text-2xl font-body text-orange-100 max-w-4xl mx-auto leading-relaxed">
                Join thousands who have discovered sustainable wellness through personalized nutrition coaching. 
                Your transformation starts with a single conversation.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-4">
              <Button 
                size="lg"
                onClick={() => onPageChange('contact')}
                className="bg-white text-orange-600 hover:bg-orange-50 hover:text-orange-700 px-10 py-4 text-lg font-heading rounded-2xl shadow-warm-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 min-w-[220px]"
              >
                Start Your Journey
                <ArrowRight className="w-5 h-5 ml-3" />
              </Button>
              <Button 
                size="lg"
                onClick={() => onPageChange('about')}
                className="bg-transparent border-2 border-white/30 text-white hover:bg-white/10 hover:border-white/50 backdrop-blur-sm px-10 py-4 text-lg font-heading rounded-2xl transition-all duration-300 hover:scale-105 min-w-[220px]"
              >
                Meet Your Coach
              </Button>
            </div>
            
            {/* Trust indicators */}
            <div className="pt-8 flex flex-wrap justify-center items-center gap-8 text-orange-100">
              <div className="flex items-center gap-2">
                <Shield className="w-5 h-5" />
                <span className="font-medium">Money-back guarantee</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5" />
                <span className="font-medium">1000+ success stories</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="w-5 h-5" />
                <span className="font-medium">Evidence-based approach</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Chatbot Widget */}
      <div className="fixed bottom-20 md:bottom-6 right-6 z-40">
        <AnimatePresence>
          {showChatbot && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: 20 }}
              className="mb-4 w-80 bg-white dark:bg-gray-800 rounded-lg shadow-xl border border-gray-200 dark:border-gray-700"
            >
              <div className="p-4 border-b border-gray-200 dark:border-gray-700 flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center">
                    <MessageCircle className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">Wellness Assistant</h4>
                    <p className="text-sm text-green-600">Online now</p>
                  </div>
                </div>
                <button
                  onClick={() => setShowChatbot(false)}
                  className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              <div className="p-4 space-y-3">
                <div className="bg-green-50 dark:bg-green-900/20 p-3 rounded-lg">
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    Hi! I'm here to help you with nutrition questions and guide you to the right program. How can I assist you today?
                  </p>
                </div>
                <div className="space-y-2">
                  <button className="w-full text-left p-2 text-sm bg-gray-50 dark:bg-gray-700 rounded hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors">
                    🍎 What nutrition plan is right for me?
                  </button>
                  <button className="w-full text-left p-2 text-sm bg-gray-50 dark:bg-gray-700 rounded hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors">
                    📅 How do I book a consultation?
                  </button>
                  <button className="w-full text-left p-2 text-sm bg-gray-50 dark:bg-gray-700 rounded hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors">
                    💰 What are your pricing options?
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <button
          onClick={() => setShowChatbot(!showChatbot)}
          className="w-14 h-14 bg-green-600 hover:bg-green-700 text-white rounded-full shadow-lg flex items-center justify-center transition-all duration-300 hover:scale-110"
        >
          {showChatbot ? <X className="w-6 h-6" /> : <MessageCircle className="w-6 h-6" />}
        </button>
      </div>
    </div>
  );
}