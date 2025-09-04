import React, { useState } from 'react';
import { Button } from './ui/button';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Switch } from './ui/switch';
import { 
  Check,
  Star,
  Zap,
  Heart,
  Target,
  Users,
  Calendar,
  Phone,
  Video,
  FileText,
  TrendingUp,
  Shield,
  Award,
  Clock,
  CheckCircle,
  X
} from 'lucide-react';
import { motion } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface ServicesPageProps {
  onPageChange: (page: string) => void;
}

export function ServicesPage({ onPageChange }: ServicesPageProps) {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [isYearly, setIsYearly] = useState(false);
  const [hoveredPlan, setHoveredPlan] = useState<string | null>(null);

  const categories = [
    { id: 'all', label: 'All Programs', count: 12 },
    { id: 'weight-loss', label: 'Weight Loss', count: 4 },
    { id: 'muscle-gain', label: 'Muscle Gain', count: 3 },
    { id: 'diabetes', label: 'Diabetes', count: 2 },
    { id: 'pcos', label: 'PCOS', count: 2 },
    { id: 'wellness', label: 'General Wellness', count: 3 }
  ];

  const plans = [
    {
      id: 'basic',
      name: 'Essential',
      category: ['weight-loss', 'wellness'],
      popular: false,
      monthlyPrice: 79,
      yearlyPrice: 790,
      description: 'Perfect for getting started with professional nutrition guidance',
      features: [
        'Initial consultation (60 min)',
        'Personalized meal plan',
        'Weekly check-ins',
        'Email support',
        'Basic progress tracking',
        'Recipe database access'
      ],
      color: 'border-gray-200 dark:border-gray-700',
      buttonColor: 'bg-gray-600 hover:bg-gray-700'
    },
    {
      id: 'professional',
      name: 'Professional',
      category: ['weight-loss', 'muscle-gain', 'diabetes'],
      popular: true,
      monthlyPrice: 149,
      yearlyPrice: 1490,
      description: 'Our most comprehensive program for serious health transformation',
      features: [
        'Everything in Essential',
        'Bi-weekly video consultations',
        'Custom supplement recommendations',
        'Meal prep guidance',
        'Advanced progress analytics',
        'Priority support',
        'Habit coaching sessions',
        'Shopping lists & meal timing'
      ],
      color: 'border-green-500 ring-2 ring-green-500',
      buttonColor: 'bg-green-600 hover:bg-green-700'
    },
    {
      id: 'premium',
      name: 'Premium',
      category: ['diabetes', 'pcos', 'muscle-gain'],
      popular: false,
      monthlyPrice: 249,
      yearlyPrice: 2490,
      description: 'Intensive support for complex health conditions and specialized goals',
      features: [
        'Everything in Professional',
        'Weekly 1-on-1 video calls',
        'Lab work analysis',
        'Specialized condition protocols',
        'Family meal planning',
        '24/7 support access',
        'Quarterly health assessments',
        'Coordination with healthcare team'
      ],
      color: 'border-purple-500',
      buttonColor: 'bg-purple-600 hover:bg-purple-700'
    }
  ];

  const comparisonFeatures = [
    { category: 'Consultations', features: [
      { name: 'Initial Assessment', basic: '60 min', professional: '90 min', premium: '120 min' },
      { name: 'Follow-up Sessions', basic: 'Weekly (30 min)', professional: 'Bi-weekly (45 min)', premium: 'Weekly (60 min)' },
      { name: 'Video Calls', basic: false, professional: true, premium: true },
      { name: 'Emergency Support', basic: false, professional: false, premium: true }
    ]},
    { category: 'Meal Planning', features: [
      { name: 'Custom Meal Plans', basic: true, professional: true, premium: true },
      { name: 'Recipe Database', basic: 'Basic (100+)', professional: 'Extended (500+)', premium: 'Premium (1000+)' },
      { name: 'Meal Prep Guides', basic: false, professional: true, premium: true },
      { name: 'Family Meal Plans', basic: false, professional: false, premium: true }
    ]},
    { category: 'Monitoring & Support', features: [
      { name: 'Progress Tracking', basic: 'Basic', professional: 'Advanced Analytics', premium: 'Comprehensive Reports' },
      { name: 'Lab Work Review', basic: false, professional: false, premium: true },
      { name: 'Supplement Guidance', basic: false, professional: true, premium: 'Custom Protocols' },
      { name: 'Support Response Time', basic: '24-48 hours', professional: '12-24 hours', premium: '2-4 hours' }
    ]}
  ];

  const filteredPlans = selectedCategory === 'all' 
    ? plans 
    : plans.filter(plan => plan.category.includes(selectedCategory));

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-wellness-gradient dark:bg-wellness-gradient-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center space-y-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Badge className="bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 px-4 py-2">
              Personalized Nutrition Programs
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white">
              Choose Your
              <span className="block bg-gradient-to-r from-green-600 to-green-500 bg-clip-text text-transparent">
                Wellness Journey
              </span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Discover the perfect nutrition program tailored to your goals, lifestyle, and health needs. 
              All plans include personalized support from our expert team.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Service Categories Visual Showcase */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Specialized Programs
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Each program is designed with your specific health goals and lifestyle in mind
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Weight Management */}
            <motion.div
              className="group relative"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              whileHover={{ y: -8 }}
            >
              <div className="relative rounded-2xl overflow-hidden shadow-lg group-hover:shadow-xl transition-all duration-300">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1604480132715-bd70038b74df?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHx3ZWlnaHQlMjBsb3NzJTIwdHJhbnNmb3JtYXRpb24lMjBiZWZvcmUlMjBhZnRlciUyMGhlYWx0aHl8ZW58MXx8fHwxNzU2OTY5NTMyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Weight loss transformation success"
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <h3 className="font-heading text-xl mb-2">Weight Management</h3>
                  <p className="text-sm opacity-90 mb-3">Sustainable weight loss and maintenance programs</p>
                  <div className="flex items-center justify-between">
                    <Badge className="bg-green-600 text-white">4 Programs</Badge>
                    <span className="text-sm">From $79/month</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Metabolic Health */}
            <motion.div
              className="group relative"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              whileHover={{ y: -8 }}
            >
              <div className="relative rounded-2xl overflow-hidden shadow-lg group-hover:shadow-xl transition-all duration-300">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1644172949364-3fcfd25604b8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHxtZWRpdGVycmFuZWFuJTIwZGlldCUyMGhlYWx0aHklMjBwbGF0ZSUyMGJhbGFuY2VkJTIwbnV0cml0aW9ufGVufDF8fHx8MTc1Njk2OTUzMXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Healthy balanced Mediterranean diet plate"
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <h3 className="font-heading text-xl mb-2">Metabolic Health</h3>
                  <p className="text-sm opacity-90 mb-3">Diabetes, PCOS, and thyroid management</p>
                  <div className="flex items-center justify-between">
                    <Badge className="bg-blue-600 text-white">3 Programs</Badge>
                    <span className="text-sm">From $149/month</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Athletic Performance */}
            <motion.div
              className="group relative"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              whileHover={{ y: -8 }}
            >
              <div className="relative rounded-2xl overflow-hidden shadow-lg group-hover:shadow-xl transition-all duration-300">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1608138279038-8dd61d909bd0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHx3ZWxsbmVzcyUyMGxpZmVzdHlsZSUyMHdvbWFuJTIwZXhlcmNpc2luZyUyMG91dGRvb3JzfGVufDF8fHx8MTc1Njk2OTUyNnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Athletic performance and wellness lifestyle"
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <h3 className="font-heading text-xl mb-2">Athletic Performance</h3>
                  <p className="text-sm opacity-90 mb-3">Sports nutrition and muscle building</p>
                  <div className="flex items-center justify-between">
                    <Badge className="bg-purple-600 text-white">2 Programs</Badge>
                    <span className="text-sm">From $149/month</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Family Wellness */}
            <motion.div
              className="group relative"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              whileHover={{ y: -8 }}
            >
              <div className="relative rounded-2xl overflow-hidden shadow-lg group-hover:shadow-xl transition-all duration-300">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1578496780896-7081cc23c111?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHxoYXBweSUyMGhlYWx0aHklMjBmYW1pbHklMjBlYXRpbmclMjB0b2dldGhlcnxlbnwxfHx8fDE3NTY5Njk1MzJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Happy healthy family eating together"
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <h3 className="font-heading text-xl mb-2">Family Wellness</h3>
                  <p className="text-sm opacity-90 mb-3">Healthy habits for the whole family</p>
                  <div className="flex items-center justify-between">
                    <Badge className="bg-orange-600 text-white">2 Programs</Badge>
                    <span className="text-sm">From $179/month</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Specialized Nutrition */}
            <motion.div
              className="group relative"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              whileHover={{ y: -8 }}
            >
              <div className="relative rounded-2xl overflow-hidden shadow-lg group-hover:shadow-xl transition-all duration-300">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1662673143520-721ed4fbe965?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHxudXRyaXRpb25hbCUyMHN1cHBsZW1lbnRzJTIwdml0YW1pbnMlMjB3ZWxsbmVzc3xlbnwxfHx8fDE3NTY5Njk1MzJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Nutritional supplements and vitamins"
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <h3 className="font-heading text-xl mb-2">Specialized Nutrition</h3>
                  <p className="text-sm opacity-90 mb-3">Custom supplements and targeted protocols</p>
                  <div className="flex items-center justify-between">
                    <Badge className="bg-red-600 text-white">Premium Only</Badge>
                    <span className="text-sm">From $249/month</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Science-Based Approach */}
            <motion.div
              className="group relative"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              whileHover={{ y: -8 }}
            >
              <div className="relative rounded-2xl overflow-hidden shadow-lg group-hover:shadow-xl transition-all duration-300">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1684259498900-afdea87b1a97?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHxudXRyaXRpb24lMjBzY2llbmNlJTIwbGFib3JhdG9yeSUyMGZvb2QlMjB0ZXN0aW5nfGVufDF8fHx8MTc1Njk2OTUzMXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Nutrition science and research laboratory"
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <h3 className="font-heading text-xl mb-2">Evidence-Based</h3>
                  <p className="text-sm opacity-90 mb-3">Research-backed nutrition strategies</p>
                  <div className="flex items-center justify-between">
                    <Badge className="bg-indigo-600 text-white">All Plans</Badge>
                    <span className="text-sm">Included</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-12 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-6 lg:space-y-0">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Filter by Category</h3>
              <div className="flex flex-wrap gap-3">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`px-4 py-2 rounded-lg border transition-all duration-200 ${
                      selectedCategory === category.id
                        ? 'bg-green-600 text-white border-green-600'
                        : 'bg-gray-50 dark:bg-gray-800 text-gray-700 dark:text-gray-300 border-gray-200 dark:border-gray-600 hover:border-green-500'
                    }`}
                  >
                    {category.label}
                    <span className="ml-2 text-xs opacity-75">({category.count})</span>
                  </button>
                ))}
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <span className="text-sm text-gray-600 dark:text-gray-400">Monthly</span>
              <Switch
                checked={isYearly}
                onCheckedChange={setIsYearly}
                className="data-[state=checked]:bg-green-600"
              />
              <span className="text-sm text-gray-600 dark:text-gray-400">
                Yearly <Badge className="ml-1 bg-green-100 text-green-700">Save 20%</Badge>
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPlans.map((plan, index) => (
              <motion.div
                key={plan.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                onHoverStart={() => setHoveredPlan(plan.id)}
                onHoverEnd={() => setHoveredPlan(null)}
                className="relative"
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                    <Badge className="bg-green-600 text-white px-4 py-1 rounded-full">
                      <Star className="w-3 h-3 mr-1" />
                      Most Popular
                    </Badge>
                  </div>
                )}
                
                <Card className={`h-full transition-all duration-300 ${plan.color} ${
                  hoveredPlan === plan.id ? 'transform scale-105 shadow-xl' : 'shadow-lg'
                }`}>
                  <CardHeader className="text-center pb-4">
                    <CardTitle className="text-2xl font-bold text-gray-900 dark:text-white">
                      {plan.name}
                    </CardTitle>
                    <p className="text-gray-600 dark:text-gray-400 mt-2">{plan.description}</p>
                    
                    <div className="mt-6">
                      <div className="flex items-center justify-center">
                        <span className="text-4xl font-bold text-gray-900 dark:text-white">
                          ${isYearly ? plan.yearlyPrice : plan.monthlyPrice}
                        </span>
                        <span className="text-gray-600 dark:text-gray-400 ml-2">
                          /{isYearly ? 'year' : 'month'}
                        </span>
                      </div>
                      {isYearly && (
                        <p className="text-sm text-green-600 dark:text-green-400 mt-1">
                          Save ${(plan.monthlyPrice * 12) - plan.yearlyPrice} annually
                        </p>
                      )}
                    </div>
                  </CardHeader>
                  
                  <CardContent className="space-y-6">
                    <ul className="space-y-3">
                      {plan.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start space-x-3">
                          <Check className="w-5 h-5 text-green-600 dark:text-green-400 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <Button 
                      onClick={() => onPageChange('contact')}
                      className={`w-full ${plan.buttonColor} text-white transition-all duration-200`}
                    >
                      Get Started
                      <Calendar className="w-4 h-4 ml-2" />
                    </Button>
                    
                    <div className="text-center">
                      <button 
                        onClick={() => onPageChange('contact')}
                        className="text-sm text-green-600 dark:text-green-400 hover:underline"
                      >
                        Schedule Free Consultation
                      </button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Compare All Plans
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Detailed breakdown of what's included in each program
            </p>
          </motion.div>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b border-gray-200 dark:border-gray-700">
                  <th className="text-left p-4 font-semibold text-gray-900 dark:text-white">Features</th>
                  <th className="text-center p-4 font-semibold text-gray-900 dark:text-white">Essential</th>
                  <th className="text-center p-4 font-semibold text-green-600 dark:text-green-400">
                    Professional
                    <Badge className="ml-2 bg-green-100 text-green-700">Popular</Badge>
                  </th>
                  <th className="text-center p-4 font-semibold text-purple-600 dark:text-purple-400">Premium</th>
                </tr>
              </thead>
              <tbody>
                {comparisonFeatures.map((section, sectionIndex) => (
                  <React.Fragment key={section.category}>
                    <tr className="bg-gray-50 dark:bg-gray-800">
                      <td colSpan={4} className="p-4 font-semibold text-gray-900 dark:text-white">
                        {section.category}
                      </td>
                    </tr>
                    {section.features.map((feature, featureIndex) => (
                      <motion.tr
                        key={feature.name}
                        className="border-b border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800/50"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.3, delay: featureIndex * 0.05 }}
                      >
                        <td className="p-4 text-gray-700 dark:text-gray-300">{feature.name}</td>
                        <td className="p-4 text-center">
                          {typeof feature.basic === 'boolean' ? (
                            feature.basic ? (
                              <Check className="w-5 h-5 text-green-600 mx-auto" />
                            ) : (
                              <X className="w-5 h-5 text-gray-400 mx-auto" />
                            )
                          ) : (
                            <span className="text-gray-700 dark:text-gray-300">{feature.basic}</span>
                          )}
                        </td>
                        <td className="p-4 text-center">
                          {typeof feature.professional === 'boolean' ? (
                            feature.professional ? (
                              <Check className="w-5 h-5 text-green-600 mx-auto" />
                            ) : (
                              <X className="w-5 h-5 text-gray-400 mx-auto" />
                            )
                          ) : (
                            <span className="text-gray-700 dark:text-gray-300">{feature.professional}</span>
                          )}
                        </td>
                        <td className="p-4 text-center">
                          {typeof feature.premium === 'boolean' ? (
                            feature.premium ? (
                              <Check className="w-5 h-5 text-green-600 mx-auto" />
                            ) : (
                              <X className="w-5 h-5 text-gray-400 mx-auto" />
                            )
                          ) : (
                            <span className="text-gray-700 dark:text-gray-300">{feature.premium}</span>
                          )}
                        </td>
                      </motion.tr>
                    ))}
                  </React.Fragment>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-12 text-center">
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              Not sure which plan is right for you? Let's discuss your goals in a free consultation.
            </p>
            <Button 
              onClick={() => onPageChange('contact')}
              size="lg"
              className="bg-green-600 hover:bg-green-700 text-white"
            >
              Schedule Free Consultation
              <Phone className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* Our Process Visual */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Your Transformation Journey
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              A proven 4-step process that leads to lasting results
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: 1,
                title: 'Assessment',
                description: 'Comprehensive health and lifestyle evaluation',
                image: 'https://images.unsplash.com/photo-1675270690434-aa99f4871e8a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBudXRyaXRpb25pc3QlMjBjb25zdWx0YXRpb24lMjBtb2Rlcm4lMjBvZmZpY2V8ZW58MXx8fHwxNzU2OTY5NTI1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
                color: 'bg-blue-500'
              },
              {
                step: 2,
                title: 'Plan Creation',
                description: 'Personalized nutrition and lifestyle plan',
                image: 'https://images.unsplash.com/photo-1738220542905-6e477c1f1c38?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFsdGh5JTIwbnV0cml0aW9uJTIwbWVhbCUyMHByZXAlMjBjb2xvcmZ1bCUyMHZlZ2V0YWJsZXN8ZW58MXx8fHwxNzU2OTY5NTI0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
                color: 'bg-green-500'
              },
              {
                step: 3,
                title: 'Implementation',
                description: 'Guided support as you start your journey',
                image: 'https://images.unsplash.com/photo-1641543729583-6961dc65b95a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvcmdhbmljJTIwZnJlc2glMjBpbmdyZWRpZW50cyUyMGhlYWx0aHklMjBjb29raW5nfGVufDF8fHx8MTc1Njk2OTUyNXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
                color: 'bg-orange-500'
              },
              {
                step: 4,
                title: 'Optimization',
                description: 'Continuous refinement for best results',
                image: 'https://images.unsplash.com/photo-1608138279038-8dd61d909bd0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHx3ZWxsbmVzcyUyMGxpZmVzdHlsZSUyMHdvbWFuJTIwZXhlcmNpc2luZyUyMG91dGRvb3JzfGVufDF8fHx8MTc1Njk2OTUyNnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
                color: 'bg-purple-500'
              }
            ].map((step, index) => (
              <motion.div
                key={step.step}
                className="relative text-center group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                {/* Connection line */}
                {index < 3 && (
                  <div className="hidden lg:block absolute top-20 left-full w-8 h-0.5 bg-gray-300 dark:bg-gray-600 z-0"></div>
                )}
                
                <div className="relative">
                  {/* Step number */}
                  <div className={`w-16 h-16 mx-auto mb-4 ${step.color} rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    {step.step}
                  </div>
                  
                  {/* Image */}
                  <div className="w-24 h-24 mx-auto mb-4 rounded-2xl overflow-hidden shadow-md group-hover:shadow-lg transition-shadow duration-300">
                    <ImageWithFallback
                      src={step.image}
                      alt={step.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  
                  {/* Content */}
                  <h3 className="text-xl font-heading text-gray-900 dark:text-white mb-2">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Additional Services
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Enhance your nutrition program with specialized add-ons
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: FileText,
                title: 'Lab Work Analysis',
                description: 'Comprehensive review of blood work and biomarkers',
                price: 'From $75',
                color: 'text-blue-600'
              },
              {
                icon: Users,
                title: 'Group Coaching',
                description: 'Join our supportive community programs',
                price: 'From $49/month',
                color: 'text-purple-600'
              },
              {
                icon: Clock,
                title: 'Emergency Support',
                description: '24/7 access for urgent nutrition questions',
                price: 'From $25/month',
                color: 'text-red-600'
              },
              {
                icon: TrendingUp,
                title: 'Advanced Analytics',
                description: 'Detailed progress tracking and reporting',
                price: 'From $39/month',
                color: 'text-green-600'
              },
              {
                icon: Video,
                title: 'Cooking Classes',
                description: 'Virtual cooking sessions and meal prep tips',
                price: 'From $59/session',
                color: 'text-orange-600'
              },
              {
                icon: Shield,
                title: 'Insurance Billing',
                description: 'We handle insurance claims and reimbursements',
                price: 'No extra cost',
                color: 'text-indigo-600'
              }
            ].map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-6 text-center">
                    <div className={`w-16 h-16 mx-auto mb-4 rounded-xl bg-gray-100 dark:bg-gray-800 flex items-center justify-center ${service.color}`}>
                      <service.icon className="w-8 h-8" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                      {service.description}
                    </p>
                    <div className="text-lg font-bold text-green-600 dark:text-green-400">
                      {service.price}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-green-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Start Your Transformation Today
            </h2>
            <p className="text-xl text-green-100 max-w-3xl mx-auto">
              Every journey begins with a single step. Let's take that step together towards a healthier, happier you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg"
                onClick={() => onPageChange('contact')}
                className="bg-white text-green-600 hover:bg-green-50 px-8 py-4 text-lg"
              >
                Book Free Consultation
                <Calendar className="w-5 h-5 ml-2" />
              </Button>
              <Button 
                size="lg"
                variant="outline"
                onClick={() => onPageChange('about')}
                className="border-white text-white hover:bg-white/10 px-8 py-4 text-lg"
              >
                Meet Your Nutritionist
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}