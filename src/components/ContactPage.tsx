import React, { useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Label } from './ui/label';
import { 
  Phone,
  Mail,
  MapPin,
  Clock,
  MessageCircle,
  Send,
  CheckCircle,
  Calendar,
  User,
  FileText,
  Heart,
  Star,
  Building,
  Wifi,
  Shield,
  Zap
} from 'lucide-react';
import { motion } from 'motion/react';

interface ContactPageProps {
  onPageChange: (page: string) => void;
}

export function ContactPage({ onPageChange }: ContactPageProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
    preferredTime: '',
    urgency: 'normal'
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showLiveChat, setShowLiveChat] = useState(false);
  const [chatMessages, setChatMessages] = useState([
    {
      id: 1,
      sender: 'assistant',
      message: 'Hey there! 👋 Ready to start your glow-up journey? I\'m here to help you find the perfect wellness plan. What\'s on your mind?',
      timestamp: new Date()
    }
  ]);
  const [newMessage, setNewMessage] = useState('');

  const services = [
    'Glow-Up Transformation',
    'Diabetes & Blood Sugar Support',
    'PCOS & Hormone Balance',
    'Athletic Performance Nutrition',
    'Family Wellness Plans',
    'Custom Meal Planning',
    'Other (tell us what you need!)'
  ];

  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone',
      details: '+1 (555) 123-4567',
      subtitle: 'Mon-Fri 9AM-6PM, Sat 9AM-2PM',
      color: 'text-green-600'
    },
    {
      icon: Mail,
      title: 'Email',
      details: 'hello@nutriglow.co',
      subtitle: 'We respond within 4 hours',
      color: 'text-blue-600'
    },
    {
      icon: MapPin,
      title: 'Office',
      details: '123 Wellness St, Health City, HC 12345',
      subtitle: 'Virtual consultations available',
      color: 'text-purple-600'
    },
    {
      icon: Clock,
      title: 'Hours',
      details: 'Monday - Friday: 9AM - 6PM',
      subtitle: 'Saturday: 9AM - 2PM, Sunday: Closed',
      color: 'text-orange-600'
    }
  ];

  const officeFeatures = [
    { icon: Wifi, label: 'Free WiFi' },
    { icon: Shield, label: 'Private Consultations' },
    { icon: Building, label: 'Modern Facility' },
    { icon: Zap, label: 'Quick Service' }
  ];

  const quickQuestions = [
    'What nutrition programs do you offer?',
    'How much do consultations cost?',
    'Do you accept insurance?',
    'Can I book a virtual appointment?',
    'What should I bring to my first visit?'
  ];

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    // In a real app, you would send this data to your backend
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: '',
        message: '',
        preferredTime: '',
        urgency: 'normal'
      });
    }, 3000);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      const userMessage = {
        id: chatMessages.length + 1,
        sender: 'user',
        message: newMessage,
        timestamp: new Date()
      };
      
      setChatMessages(prev => [...prev, userMessage]);
      setNewMessage('');

      // Simulate assistant response
      setTimeout(() => {
        const responses = [
          "Thanks for your question! I'd be happy to help you with that. Let me connect you with our nutrition specialist.",
          "That's a great question! Our team can provide detailed information about that during your consultation.",
          "I understand your concern. Our registered dietitians have extensive experience helping clients with similar needs.",
          "Excellent! I can help you schedule a consultation to discuss this in detail with Dr. Sarah Mitchell."
        ];
        
        const assistantMessage = {
          id: chatMessages.length + 2,
          sender: 'assistant',
          message: responses[Math.floor(Math.random() * responses.length)],
          timestamp: new Date()
        };
        
        setChatMessages(prev => [...prev, assistantMessage]);
      }, 1000);
    }
  };

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
              Get In Touch
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white">
              Ready to
              <span className="block bg-gradient-to-r from-green-600 to-green-500 bg-clip-text text-transparent">
                Glow Up? ✨
              </span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Let's chat about your wellness goals! Our expert team provides personalized 
              nutrition that actually works with your real life (no boring diets, we promise).
            </p>
          </motion.div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Card className="shadow-xl">
                <CardHeader>
                  <CardTitle className="text-2xl text-gray-900 dark:text-white flex items-center">
                    <Calendar className="w-6 h-6 mr-3 text-green-600" />
                    Book Your Consultation
                  </CardTitle>
                  <p className="text-gray-600 dark:text-gray-300">
                    Fill out the form below and we'll get back to you within 4 hours to schedule your appointment.
                  </p>
                </CardHeader>
                <CardContent>
                  {isSubmitted ? (
                    <motion.div
                      className="text-center py-12"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5 }}
                    >
                      <div className="w-16 h-16 bg-green-100 dark:bg-green-900/20 rounded-full flex items-center justify-center mx-auto mb-4">
                        <CheckCircle className="w-8 h-8 text-green-600" />
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                        Thank You!
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300 mb-4">
                        Your consultation request has been submitted successfully. We'll contact you within 4 hours to confirm your appointment.
                      </p>
                      <Badge className="bg-green-100 text-green-700 px-4 py-2">
                        ✨ Confirmation email sent
                      </Badge>
                    </motion.div>
                  ) : (
                    <form onSubmit={handleFormSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <Label htmlFor="name" className="flex items-center">
                            <User className="w-4 h-4 mr-2 text-green-600" />
                            Full Name *
                          </Label>
                          <Input
                            id="name"
                            name="name"
                            type="text"
                            value={formData.name}
                            onChange={handleInputChange}
                            required
                            className="border-gray-200 dark:border-gray-700 focus:border-green-500"
                            placeholder="Enter your full name"
                          />
                        </div>
                        
                        <div className="space-y-2">
                          <Label htmlFor="email" className="flex items-center">
                            <Mail className="w-4 h-4 mr-2 text-green-600" />
                            Email Address *
                          </Label>
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            required
                            className="border-gray-200 dark:border-gray-700 focus:border-green-500"
                            placeholder="your.email@example.com"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <Label htmlFor="phone" className="flex items-center">
                            <Phone className="w-4 h-4 mr-2 text-green-600" />
                            Phone Number
                          </Label>
                          <Input
                            id="phone"
                            name="phone"
                            type="tel"
                            value={formData.phone}
                            onChange={handleInputChange}
                            className="border-gray-200 dark:border-gray-700 focus:border-green-500"
                            placeholder="+1 (555) 123-4567"
                          />
                        </div>
                        
                        <div className="space-y-2">
                          <Label htmlFor="service" className="flex items-center">
                            <Heart className="w-4 h-4 mr-2 text-green-600" />
                            Service Interested In *
                          </Label>
                          <select
                            id="service"
                            name="service"
                            value={formData.service}
                            onChange={handleInputChange}
                            required
                            className="w-full px-3 py-2 border border-gray-200 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:border-green-500 focus:outline-none"
                          >
                            <option value="">Select a service</option>
                            {services.map(service => (
                              <option key={service} value={service}>{service}</option>
                            ))}
                          </select>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <Label htmlFor="preferredTime" className="flex items-center">
                            <Clock className="w-4 h-4 mr-2 text-green-600" />
                            Preferred Time
                          </Label>
                          <select
                            id="preferredTime"
                            name="preferredTime"
                            value={formData.preferredTime}
                            onChange={handleInputChange}
                            className="w-full px-3 py-2 border border-gray-200 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:border-green-500 focus:outline-none"
                          >
                            <option value="">Select preferred time</option>
                            <option value="morning">Morning (9AM - 12PM)</option>
                            <option value="afternoon">Afternoon (12PM - 4PM)</option>
                            <option value="evening">Evening (4PM - 6PM)</option>
                            <option value="flexible">I'm flexible</option>
                          </select>
                        </div>
                        
                        <div className="space-y-2">
                          <Label htmlFor="urgency">Urgency Level</Label>
                          <select
                            id="urgency"
                            name="urgency"
                            value={formData.urgency}
                            onChange={handleInputChange}
                            className="w-full px-3 py-2 border border-gray-200 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:border-green-500 focus:outline-none"
                          >
                            <option value="normal">Normal (within a week)</option>
                            <option value="soon">Soon (within 3 days)</option>
                            <option value="urgent">Urgent (within 24 hours)</option>
                          </select>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="message" className="flex items-center">
                          <FileText className="w-4 h-4 mr-2 text-green-600" />
                          Tell Us About Your Goals
                        </Label>
                        <Textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleInputChange}
                          rows={4}
                          className="border-gray-200 dark:border-gray-700 focus:border-green-500"
                          placeholder="Share your health goals, dietary restrictions, or any specific concerns you'd like to discuss..."
                        />
                      </div>

                      <Button
                        type="submit"
                        className="w-full bg-green-600 hover:bg-green-700 text-white py-3 text-lg"
                      >
                        Schedule My Consultation
                        <Send className="w-5 h-5 ml-2" />
                      </Button>

                      <p className="text-sm text-gray-600 dark:text-gray-400 text-center">
                        By submitting this form, you agree to our privacy policy and terms of service.
                      </p>
                    </form>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Contact Details */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl text-gray-900 dark:text-white">
                    Contact Information
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <div key={info.title} className="flex items-start space-x-4">
                      <div className={`w-10 h-10 bg-gray-100 dark:bg-gray-800 rounded-lg flex items-center justify-center ${info.color}`}>
                        <info.icon className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 dark:text-white">{info.title}</h4>
                        <p className="text-gray-700 dark:text-gray-300">{info.details}</p>
                        <p className="text-sm text-gray-500 dark:text-gray-400">{info.subtitle}</p>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </motion.div>

            {/* Live Chat */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl text-gray-900 dark:text-white flex items-center">
                    <MessageCircle className="w-5 h-5 mr-2 text-green-600" />
                    Live Chat Support
                  </CardTitle>
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-sm text-green-600 dark:text-green-400">Online now</span>
                  </div>
                </CardHeader>
                <CardContent>
                  {!showLiveChat ? (
                    <div className="space-y-4">
                      <p className="text-gray-600 dark:text-gray-300">
                        Have a quick question? Start a chat with our support team for immediate assistance.
                      </p>
                      <div className="space-y-2">
                        <h5 className="font-medium text-gray-900 dark:text-white">Common Questions:</h5>
                        {quickQuestions.map((question, index) => (
                          <button
                            key={index}
                            onClick={() => setShowLiveChat(true)}
                            className="w-full text-left p-2 text-sm bg-gray-50 dark:bg-gray-800 rounded hover:bg-green-50 dark:hover:bg-green-900/20 transition-colors"
                          >
                            {question}
                          </button>
                        ))}
                      </div>
                      <Button
                        onClick={() => setShowLiveChat(true)}
                        className="w-full bg-green-600 hover:bg-green-700 text-white"
                      >
                        Start Live Chat
                        <MessageCircle className="w-4 h-4 ml-2" />
                      </Button>
                    </div>
                  ) : (
                    <div className="space-y-4">
                      <div className="h-64 bg-gray-50 dark:bg-gray-800 rounded-lg p-4 overflow-y-auto space-y-3">
                        {chatMessages.map((msg) => (
                          <div
                            key={msg.id}
                            className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                          >
                            <div
                              className={`max-w-xs px-3 py-2 rounded-lg text-sm ${
                                msg.sender === 'user'
                                  ? 'bg-green-600 text-white'
                                  : 'bg-white dark:bg-gray-700 text-gray-900 dark:text-white border border-gray-200 dark:border-gray-600'
                              }`}
                            >
                              {msg.message}
                            </div>
                          </div>
                        ))}
                      </div>
                      <div className="flex space-x-2">
                        <Input
                          value={newMessage}
                          onChange={(e) => setNewMessage(e.target.value)}
                          placeholder="Type your message..."
                          onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                          className="flex-1"
                        />
                        <Button
                          onClick={handleSendMessage}
                          className="bg-green-600 hover:bg-green-700 text-white"
                        >
                          <Send className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            </motion.div>

            {/* Office Features */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl text-gray-900 dark:text-white">
                    Our Office
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    {officeFeatures.map((feature, index) => (
                      <div key={feature.label} className="flex items-center space-x-2">
                        <feature.icon className="w-4 h-4 text-green-600" />
                        <span className="text-sm text-gray-700 dark:text-gray-300">{feature.label}</span>
                      </div>
                    ))}
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                    Our modern wellness center provides a comfortable, private environment for all consultations.
                  </p>
                  <Button
                    variant="outline"
                    onClick={() => onPageChange('about')}
                    className="w-full border-green-600 text-green-600 hover:bg-green-50 dark:hover:bg-green-900/20"
                  >
                    Virtual Tour
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>

        {/* Google Maps Section */}
        <motion.div
          className="mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Card className="overflow-hidden">
            <CardHeader>
              <CardTitle className="text-2xl text-gray-900 dark:text-white flex items-center">
                <MapPin className="w-6 h-6 mr-3 text-green-600" />
                Find Us
              </CardTitle>
              <p className="text-gray-600 dark:text-gray-300">
                Located in the heart of Health City, easily accessible by public transport and with free parking available.
              </p>
            </CardHeader>
            <CardContent className="p-0">
              <div className="w-full h-96 bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    Google Maps Integration
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    Interactive map would be embedded here in production
                  </p>
                  <div className="space-y-2 text-sm text-gray-500 dark:text-gray-400">
                    <p>123 Wellness St, Health City, HC 12345</p>
                    <p>Free parking available</p>
                    <p>Wheelchair accessible</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Testimonial */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Card className="max-w-2xl mx-auto bg-gradient-to-r from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20">
            <CardContent className="p-8">
              <div className="flex justify-center space-x-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <blockquote className="text-lg text-gray-700 dark:text-gray-300 italic mb-4">
                "The consultation process was seamless and the personalized approach made all the difference. 
                Dr. Sarah truly cares about her clients' success."
              </blockquote>
              <div className="font-semibold text-gray-900 dark:text-white">Emma Thompson</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Weight Loss Program Client</div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}