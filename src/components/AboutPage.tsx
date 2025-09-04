import React, { useState, useEffect } from 'react';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { 
  Award,
  BookOpen,
  Users,
  Heart,
  Star,
  Calendar,
  CheckCircle,
  TrendingUp,
  Zap,
  Shield,
  ArrowRight,
  GraduationCap,
  Building,
  Medal,
  Target
} from 'lucide-react';
import { motion } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface AboutPageProps {
  onPageChange: (page: string) => void;
}

export function AboutPage({ onPageChange }: AboutPageProps) {
  const [activeTimelineItem, setActiveTimelineItem] = useState(0);
  const [healthImpactStats, setHealthImpactStats] = useState({
    weightLoss: 0,
    bloodSugar: 0,
    energy: 0,
    confidence: 0
  });

  const timeline = [
    {
      year: '2016',
      title: 'Started Journey',
      description: 'Graduated with Master\'s in Nutrition Science from University of Health Sciences',
      icon: GraduationCap
    },
    {
      year: '2017',
      title: 'First Clinic',
      description: 'Opened first nutrition clinic, focusing on weight management and diabetes care',
      icon: Building
    },
    {
      year: '2019',
      title: 'Specialized Training',
      description: 'Completed advanced certifications in PCOS management and sports nutrition',
      icon: Award
    },
    {
      year: '2021',
      title: 'Digital Expansion',
      description: 'Launched online consultations and personalized meal planning platform',
      icon: Zap
    },
    {
      year: '2024',
      title: 'WellnessHub',
      description: 'Founded WellnessHub, serving 1000+ clients with comprehensive wellness solutions',
      icon: Medal
    }
  ];

  const credentials = [
    { title: 'Registered Dietitian', organization: 'Commission on Dietetic Registration' },
    { title: 'Certified Diabetes Educator', organization: 'Certification Board for Diabetes Care' },
    { title: 'Sports Nutrition Specialist', organization: 'International Society of Sports Nutrition' },
    { title: 'PCOS Nutrition Specialist', organization: 'PCOS Challenge Organization' }
  ];

  const achievements = [
    { icon: Users, number: '1000+', label: 'Clients Transformed' },
    { icon: Star, number: '4.9', label: 'Average Rating' },
    { icon: Award, number: '15+', label: 'Certifications' },
    { icon: Heart, number: '95%', label: 'Success Rate' }
  ];

  const healthImpactData = [
    { label: 'Average Weight Loss', value: 25, suffix: 'lbs', color: 'text-green-600' },
    { label: 'Blood Sugar Improvement', value: 40, suffix: '%', color: 'text-blue-600' },
    { label: 'Energy Level Increase', value: 85, suffix: '%', color: 'text-yellow-600' },
    { label: 'Confidence Boost', value: 92, suffix: '%', color: 'text-purple-600' }
  ];

  useEffect(() => {
    const animateStats = () => {
      healthImpactData.forEach((item, index) => {
        let current = 0;
        const increment = item.value / 50;
        const timer = setInterval(() => {
          current += increment;
          if (current >= item.value) {
            current = item.value;
            clearInterval(timer);
          }
          setHealthImpactStats(prev => ({
            ...prev,
            [index === 0 ? 'weightLoss' : 
             index === 1 ? 'bloodSugar' :
             index === 2 ? 'energy' : 'confidence']: Math.floor(current)
          }));
        }, 30);
      });
    };

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          animateStats();
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );

    const infographicElement = document.getElementById('health-impact-infographic');
    if (infographicElement) {
      observer.observe(infographicElement);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveTimelineItem(prev => (prev + 1) % timeline.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [timeline.length]);

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
              Meet Your Nutrition Expert
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white">
              Transforming Lives Through
              <span className="block bg-gradient-to-r from-green-600 to-green-500 bg-clip-text text-transparent">
                Science-Based Nutrition
              </span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              With over 8 years of experience and 1000+ successful transformations, 
              I'm dedicated to helping you achieve lasting health and wellness.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Dietitian Profile Card */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Card className="overflow-hidden shadow-2xl">
                <div className="relative">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1675270690434-aa99f4871e8a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBudXRyaXRpb25pc3QlMjBjb25zdWx0YXRpb24lMjBtb2Rlcm4lMjBvZmZpY2V8ZW58MXx8fHwxNzU2OTY5NTI1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                    alt="Dr. Sarah Mitchell - Professional Nutritionist in modern consultation office"
                    className="w-full h-80 object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-green-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    Available Today
                  </div>
                </div>
                <CardContent className="p-8">
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Dr. Sarah Mitchell</h3>
                      <p className="text-green-600 dark:text-green-400 font-medium">Registered Dietitian & Wellness Expert</p>
                    </div>
                    
                    <div className="flex items-center space-x-2">
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                      <span className="text-sm text-gray-600 dark:text-gray-400">(4.9/5 from 500+ reviews)</span>
                    </div>

                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                      Passionate about empowering individuals to achieve optimal health through personalized 
                      nutrition strategies and sustainable lifestyle changes.
                    </p>

                    <div className="grid grid-cols-2 gap-4">
                      {achievements.map((achievement, index) => (
                        <div key={achievement.label} className="text-center p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                          <achievement.icon className="w-6 h-6 mx-auto mb-2 text-green-600 dark:text-green-400" />
                          <div className="font-bold text-gray-900 dark:text-white">{achievement.number}</div>
                          <div className="text-xs text-gray-600 dark:text-gray-400">{achievement.label}</div>
                        </div>
                      ))}
                    </div>

                    <Button 
                      onClick={() => onPageChange('contact')}
                      className="w-full bg-green-600 hover:bg-green-700 text-white"
                    >
                      Schedule Consultation
                      <Calendar className="w-4 h-4 ml-2" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              className="space-y-8"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div>
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                  Credentials & Certifications
                </h2>
                <div className="space-y-4">
                  {credentials.map((credential, index) => (
                    <motion.div
                      key={credential.title}
                      className="flex items-start space-x-4 p-4 bg-green-50 dark:bg-green-900/20 rounded-lg"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                    >
                      <div className="w-10 h-10 bg-green-600 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Award className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 dark:text-white">{credential.title}</h4>
                        <p className="text-sm text-gray-600 dark:text-gray-400">{credential.organization}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Philosophy</h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  I believe that sustainable health comes from understanding your body's unique needs 
                  and creating realistic, enjoyable eating patterns that fit your lifestyle. My approach 
                  combines evidence-based nutrition science with compassionate support to help you build 
                  a positive relationship with food and achieve lasting results.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              My Professional Journey
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              A timeline of growth, learning, and impact in the nutrition field
            </p>
          </motion.div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-green-200 dark:bg-green-800" />
            
            <div className="space-y-12">
              {timeline.map((item, index) => (
                <motion.div
                  key={item.year}
                  className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    <Card className={`${activeTimelineItem === index ? 'ring-2 ring-green-500 shadow-lg' : ''} transition-all duration-300`}>
                      <CardContent className="p-6">
                        <div className="flex items-center space-x-3 mb-3">
                          <div className="w-10 h-10 bg-green-600 rounded-lg flex items-center justify-center">
                            <item.icon className="w-5 h-5 text-white" />
                          </div>
                          <div>
                            <h3 className="font-bold text-gray-900 dark:text-white">{item.title}</h3>
                            <Badge variant="outline" className="text-green-600 border-green-600">
                              {item.year}
                            </Badge>
                          </div>
                        </div>
                        <p className="text-gray-600 dark:text-gray-300">{item.description}</p>
                      </CardContent>
                    </Card>
                  </div>
                  
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-green-600 rounded-full border-4 border-white dark:border-gray-800" />
                  
                  <div className="w-1/2" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories Visual Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white dark:from-gray-800 dark:to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Real Transformations, Real People
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              See the power of personalized nutrition in action
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Family Wellness */}
            <motion.div
              className="relative group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              whileHover={{ y: -8 }}
            >
              <div className="relative rounded-2xl overflow-hidden shadow-lg group-hover:shadow-xl transition-all duration-300">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1578496780896-7081cc23c111?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHxoYXBweSUyMGhlYWx0aHklMjBmYW1pbHklMjBlYXRpbmclMjB0b2dldGhlcnxlbnwxfHx8fDE3NTY5Njk1MzJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Happy healthy family eating together"
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <div className="flex items-center space-x-2 mb-2">
                    <Users className="w-5 h-5" />
                    <Badge className="bg-green-600 text-white">Family Wellness</Badge>
                  </div>
                  <h3 className="font-heading text-lg">Building Healthy Families</h3>
                  <p className="text-sm opacity-90">Sustainable habits for everyone</p>
                </div>
              </div>
            </motion.div>

            {/* Weight Loss Success */}
            <motion.div
              className="relative group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              whileHover={{ y: -8 }}
            >
              <div className="relative rounded-2xl overflow-hidden shadow-lg group-hover:shadow-xl transition-all duration-300">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1604480132715-bd70038b74df?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHx3ZWlnaHQlMjBsb3NzJTIwdHJhbnNmb3JtYXRpb24lMjBiZWZvcmUlMjBhZnRlciUyMGhlYWx0aHl8ZW58MXx8fHwxNzU2OTY5NTMyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Weight loss transformation success story"
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <div className="flex items-center space-x-2 mb-2">
                    <Target className="w-5 h-5" />
                    <Badge className="bg-blue-600 text-white">Weight Management</Badge>
                  </div>
                  <h3 className="font-heading text-lg">Lasting Transformations</h3>
                  <p className="text-sm opacity-90">Science-based weight solutions</p>
                </div>
              </div>
            </motion.div>

            {/* Supplement Science */}
            <motion.div
              className="relative group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              whileHover={{ y: -8 }}
            >
              <div className="relative rounded-2xl overflow-hidden shadow-lg group-hover:shadow-xl transition-all duration-300">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1662673143520-721ed4fbe965?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHxudXRyaXRpb25hbCUyMHN1cHBsZW1lbnRzJTIwdml0YW1pbnMlMjB3ZWxsbmVzc3xlbnwxfHx8fDE3NTY5Njk1MzJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Nutritional supplements and vitamins for wellness"
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <div className="flex items-center space-x-2 mb-2">
                    <Zap className="w-5 h-5" />
                    <Badge className="bg-purple-600 text-white">Supplement Guidance</Badge>
                  </div>
                  <h3 className="font-heading text-lg">Targeted Nutrition</h3>
                  <p className="text-sm opacity-90">Personalized supplement plans</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Health Impact Infographic */}
      <section id="health-impact-infographic" className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Our Health Impact
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Real results our clients achieve through personalized nutrition
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {healthImpactData.map((item, index) => (
              <motion.div
                key={item.label}
                className="text-center"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="p-6 h-full">
                  <CardContent className="space-y-4">
                    <div className="relative w-24 h-24 mx-auto">
                      <svg className="w-24 h-24 transform -rotate-90" viewBox="0 0 36 36">
                        <path
                          d="M18 2.0845
                            a 15.9155 15.9155 0 0 1 0 31.831
                            a 15.9155 15.9155 0 0 1 0 -31.831"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          className="text-gray-200 dark:text-gray-700"
                        />
                        <path
                          d="M18 2.0845
                            a 15.9155 15.9155 0 0 1 0 31.831
                            a 15.9155 15.9155 0 0 1 0 -31.831"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeDasharray={`${
                            (index === 0 ? healthImpactStats.weightLoss : 
                             index === 1 ? healthImpactStats.bloodSugar :
                             index === 2 ? healthImpactStats.energy : 
                             healthImpactStats.confidence) / item.value * 100
                          }, 100`}
                          className={item.color}
                        />
                      </svg>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className={`text-2xl font-bold ${item.color}`}>
                          {index === 0 ? healthImpactStats.weightLoss : 
                           index === 1 ? healthImpactStats.bloodSugar :
                           index === 2 ? healthImpactStats.energy : 
                           healthImpactStats.confidence}{item.suffix}
                        </span>
                      </div>
                    </div>
                    <h3 className="font-semibold text-gray-900 dark:text-white">{item.label}</h3>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="mt-16 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Card className="max-w-3xl mx-auto p-8 bg-gradient-to-r from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20">
              <CardContent className="space-y-6">
                <div className="flex items-center justify-center space-x-3">
                  <TrendingUp className="w-8 h-8 text-green-600" />
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                    Evidence-Based Results
                  </h3>
                </div>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  These results represent the average improvements our clients experience within 
                  6 months of following our personalized nutrition programs. Individual results 
                  may vary based on starting point, adherence, and personal health factors.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button 
                    onClick={() => onPageChange('services')}
                    className="bg-green-600 hover:bg-green-700 text-white"
                  >
                    View Our Programs
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                  <Button 
                    variant="outline"
                    onClick={() => onPageChange('contact')}
                    className="border-green-600 text-green-600 hover:bg-green-50 dark:hover:bg-green-900/20"
                  >
                    Start Your Transformation
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
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
              Ready to Transform Your Health?
            </h2>
            <p className="text-xl text-green-100 max-w-3xl mx-auto">
              Let's work together to create a personalized nutrition plan that fits your lifestyle and goals.
            </p>
            <Button 
              size="lg"
              onClick={() => onPageChange('contact')}
              className="bg-white text-green-600 hover:bg-green-50 px-8 py-4 text-lg"
            >
              Book Your Consultation
              <Calendar className="w-5 h-5 ml-2" />
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}