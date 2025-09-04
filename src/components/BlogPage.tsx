import React, { useState, useMemo } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Card, CardContent, CardHeader } from './ui/card';
import { Badge } from './ui/badge';
import { 
  Search,
  Filter,
  Calendar,
  Clock,
  User,
  Eye,
  Heart,
  Share2,
  Bookmark,
  TrendingUp,
  Star,
  ChevronRight
} from 'lucide-react';
import { motion } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface BlogPageProps {
  onPageChange: (page: string) => void;
}

export function BlogPage({ onPageChange }: BlogPageProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedTag, setSelectedTag] = useState('all');

  const categories = [
    { id: 'all', label: 'All Categories', count: 24 },
    { id: 'weight-loss', label: 'Weight Loss', count: 8 },
    { id: 'nutrition-tips', label: 'Nutrition Tips', count: 12 },
    { id: 'recipes', label: 'Healthy Recipes', count: 6 },
    { id: 'diabetes', label: 'Diabetes Care', count: 4 },
    { id: 'heart-health', label: 'Heart Health', count: 5 },
    { id: 'meal-prep', label: 'Meal Prep', count: 7 }
  ];

  const tags = [
    'all', 'beginner-friendly', 'quick-tips', 'science-based', 'meal-planning',
    'supplements', 'hydration', 'mindful-eating', 'budget-friendly', 'family-meals'
  ];

  const articles = [
    {
      id: 1,
      title: '10 Essential Meal Prep Tips for Busy Professionals',
      excerpt: 'Learn how to prepare healthy meals efficiently even with a demanding schedule. These proven strategies will save you time and keep you on track.',
      category: 'meal-prep',
      tags: ['meal-planning', 'beginner-friendly', 'quick-tips'],
      author: 'Dr. Sarah Mitchell',
      publishDate: '2024-03-15',
      readTime: '5 min read',
      views: 2840,
      likes: 156,
      image: 'https://images.unsplash.com/photo-1494113311000-c3bb3bae119b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFsdGh5JTIwbWVhbCUyMHByZXAlMjBudXRyaXRpb258ZW58MXx8fHwxNzU2OTI5NDY5fDA&ixlib=rb-4.1.0&q=80&w=1080',
      featured: true
    },
    {
      id: 2,
      title: 'Understanding Diabetes: A Complete Nutrition Guide',
      excerpt: 'Comprehensive strategies for managing blood sugar through smart food choices and timing. Evidence-based approaches that work.',
      category: 'diabetes',
      tags: ['science-based', 'meal-planning'],
      author: 'Dr. Sarah Mitchell',
      publishDate: '2024-03-12',
      readTime: '8 min read',
      views: 1920,
      likes: 89,
      image: 'https://images.unsplash.com/photo-1500420986994-e4ad8f630fee?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWFiZXRlcyUyMG51dHJpdGlvbiUyMGZvb2R8ZW58MXx8fHwxNzU2OTY4Mzg3fDA&ixlib=rb-4.1.0&q=80&w=1080',
      featured: false
    },
    {
      id: 3,
      title: 'Heart-Healthy Foods That Actually Taste Amazing',
      excerpt: 'Discover delicious foods that support cardiovascular health. No more bland "health food" - these options are both nutritious and satisfying.',
      category: 'heart-health',
      tags: ['beginner-friendly', 'family-meals'],
      author: 'Dr. Sarah Mitchell',
      publishDate: '2024-03-10',
      readTime: '6 min read',
      views: 3150,
      likes: 201,
      image: 'https://images.unsplash.com/photo-1725417810899-0d37bf04d647?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFydCUyMGhlYWx0aHklMjBmb29kJTIwbnV0cml0aW9ufGVufDF8fHx8MTc1Njk2ODM5MHww&ixlib=rb-4.1.0&q=80&w=1080',
      featured: true
    },
    {
      id: 4,
      title: 'The Science Behind Portion Control',
      excerpt: 'Understanding hunger cues and practical strategies for eating the right amounts without feeling deprived.',
      category: 'weight-loss',
      tags: ['science-based', 'mindful-eating'],
      author: 'Dr. Sarah Mitchell',
      publishDate: '2024-03-08',
      readTime: '7 min read',
      views: 1680,
      likes: 94,
      image: 'https://images.unsplash.com/photo-1494113311000-c3bb3bae119b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFsdGh5JTIwbWVhbCUyMHByZXAlMjBudXRyaXRpb258ZW58MXx8fHwxNzU2OTI5NDY5fDA&ixlib=rb-4.1.0&q=80&w=1080',
      featured: false
    },
    {
      id: 5,
      title: 'Budget-Friendly Nutrition: Eating Well for Less',
      excerpt: 'Practical tips for maintaining a healthy diet without breaking the bank. Smart shopping and meal planning strategies.',
      category: 'nutrition-tips',
      tags: ['budget-friendly', 'meal-planning', 'beginner-friendly'],
      author: 'Dr. Sarah Mitchell',
      publishDate: '2024-03-05',
      readTime: '5 min read',
      views: 2240,
      likes: 167,
      image: 'https://images.unsplash.com/photo-1725417810899-0d37bf04d647?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFydCUyMGhlYWx0aHklMjBmb29kJTIwbnV0cml0aW9ufGVufDF8fHx8MTc1Njk2ODM5MHww&ixlib=rb-4.1.0&q=80&w=1080',
      featured: false
    },
    {
      id: 6,
      title: '5-Minute Breakfast Ideas for Busy Mornings',
      excerpt: 'Quick, nutritious breakfast options that require minimal preparation but maximum nutrition impact.',
      category: 'recipes',
      tags: ['quick-tips', 'meal-prep', 'beginner-friendly'],
      author: 'Dr. Sarah Mitchell',
      publishDate: '2024-03-03',
      readTime: '4 min read',
      views: 3890,
      likes: 298,
      image: 'https://images.unsplash.com/photo-1494113311000-c3bb3bae119b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFsdGh5JTIwbWVhbCUyMHByZXAlMjBudXRyaXRpb258ZW58MXx8fHwxNzU2OTI5NDY5fDA&ixlib=rb-4.1.0&q=80&w=1080',
      featured: true
    }
  ];

  const popularPosts = [
    { id: 1, title: '10 Essential Meal Prep Tips for Busy Professionals', views: 2840 },
    { id: 3, title: 'Heart-Healthy Foods That Actually Taste Amazing', views: 3150 },
    { id: 6, title: '5-Minute Breakfast Ideas for Busy Mornings', views: 3890 }
  ];

  const recommendedPosts = [
    { id: 2, title: 'Understanding Diabetes: A Complete Nutrition Guide', category: 'diabetes' },
    { id: 4, title: 'The Science Behind Portion Control', category: 'weight-loss' },
    { id: 5, title: 'Budget-Friendly Nutrition: Eating Well for Less', category: 'nutrition-tips' }
  ];

  const filteredArticles = useMemo(() => {
    return articles.filter(article => {
      const matchesSearch = article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           article.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory === 'all' || article.category === selectedCategory;
      const matchesTag = selectedTag === 'all' || article.tags.includes(selectedTag);
      
      return matchesSearch && matchesCategory && matchesTag;
    });
  }, [searchTerm, selectedCategory, selectedTag, articles]);

  const featuredArticles = articles.filter(article => article.featured);

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
              Nutrition Knowledge Hub
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white">
              Expert Insights &
              <span className="block bg-gradient-to-r from-green-600 to-green-500 bg-clip-text text-transparent">
                Practical Tips
              </span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Stay informed with the latest nutrition science, practical tips, and evidence-based strategies 
              for optimal health and wellness.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Search and Filter Bar */}
      <section className="py-8 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 sticky top-16 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-6">
            {/* Search */}
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <Input
                type="text"
                placeholder="Search articles, topics, or keywords..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 bg-gray-50 dark:bg-gray-800 border-gray-200 dark:border-gray-700"
              />
            </div>

            {/* Category Filter */}
            <div className="flex items-center space-x-4">
              <Filter className="w-5 h-5 text-gray-600 dark:text-gray-400" />
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-4 py-2 border border-gray-200 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
              >
                {categories.map(category => (
                  <option key={category.id} value={category.id}>
                    {category.label} ({category.count})
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Tags */}
          <div className="mt-4 flex flex-wrap gap-2">
            {tags.map(tag => (
              <button
                key={tag}
                onClick={() => setSelectedTag(tag)}
                className={`px-3 py-1 rounded-full text-sm transition-colors ${
                  selectedTag === tag
                    ? 'bg-green-600 text-white'
                    : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-green-100 dark:hover:bg-green-900/20'
                }`}
              >
                {tag.replace('-', ' ')}
              </button>
            ))}
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Featured Articles */}
            {!searchTerm && selectedCategory === 'all' && selectedTag === 'all' && (
              <section className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Featured Articles</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {featuredArticles.slice(0, 2).map((article, index) => (
                    <motion.div
                      key={article.id}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                      <Card className="overflow-hidden hover:shadow-lg transition-all duration-300 group cursor-pointer">
                        <div className="relative">
                          <ImageWithFallback
                            src={article.image}
                            alt={article.title}
                            className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                          <Badge className="absolute top-4 left-4 bg-green-600 text-white">
                            Featured
                          </Badge>
                        </div>
                        <CardContent className="p-6">
                          <div className="flex items-center space-x-2 mb-3">
                            <Badge variant="outline" className="text-green-600 border-green-600">
                              {categories.find(cat => cat.id === article.category)?.label}
                            </Badge>
                            <span className="text-sm text-gray-500 dark:text-gray-400">•</span>
                            <span className="text-sm text-gray-500 dark:text-gray-400">{article.readTime}</span>
                          </div>
                          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 line-clamp-2">
                            {article.title}
                          </h3>
                          <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
                            {article.excerpt}
                          </p>
                          <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-4 text-sm text-gray-500 dark:text-gray-400">
                              <div className="flex items-center space-x-1">
                                <Eye className="w-4 h-4" />
                                <span>{article.views}</span>
                              </div>
                              <div className="flex items-center space-x-1">
                                <Heart className="w-4 h-4" />
                                <span>{article.likes}</span>
                              </div>
                            </div>
                            <Button variant="ghost" size="sm" className="text-green-600 hover:text-green-700">
                              Read More
                              <ChevronRight className="w-4 h-4 ml-1" />
                            </Button>
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </section>
            )}

            {/* All Articles */}
            <section>
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                  {searchTerm || selectedCategory !== 'all' || selectedTag !== 'all' 
                    ? `Search Results (${filteredArticles.length})` 
                    : 'Latest Articles'}
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {filteredArticles.map((article, index) => (
                  <motion.div
                    key={article.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <Card className="overflow-hidden hover:shadow-lg transition-all duration-300 group cursor-pointer h-full">
                      <div className="relative">
                        <ImageWithFallback
                          src={article.image}
                          alt={article.title}
                          className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        {article.featured && (
                          <Badge className="absolute top-3 left-3 bg-green-600 text-white">
                            Featured
                          </Badge>
                        )}
                        <div className="absolute top-3 right-3 flex space-x-2">
                          <button className="w-8 h-8 bg-white/90 dark:bg-gray-900/90 rounded-full flex items-center justify-center text-gray-600 dark:text-gray-400 hover:text-green-600 dark:hover:text-green-400 transition-colors">
                            <Bookmark className="w-4 h-4" />
                          </button>
                          <button className="w-8 h-8 bg-white/90 dark:bg-gray-900/90 rounded-full flex items-center justify-center text-gray-600 dark:text-gray-400 hover:text-green-600 dark:hover:text-green-400 transition-colors">
                            <Share2 className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                      <CardContent className="p-5 flex flex-col h-full">
                        <div className="flex items-center space-x-2 mb-3">
                          <Badge variant="outline" className="text-green-600 border-green-600">
                            {categories.find(cat => cat.id === article.category)?.label}
                          </Badge>
                          <span className="text-sm text-gray-500 dark:text-gray-400">•</span>
                          <span className="text-sm text-gray-500 dark:text-gray-400">{article.readTime}</span>
                        </div>
                        <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2 line-clamp-2 flex-grow">
                          {article.title}
                        </h3>
                        <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-2">
                          {article.excerpt}
                        </p>
                        <div className="flex flex-wrap gap-1 mb-4">
                          {article.tags.slice(0, 2).map(tag => (
                            <Badge key={tag} variant="secondary" className="text-xs">
                              {tag.replace('-', ' ')}
                            </Badge>
                          ))}
                        </div>
                        <div className="flex items-center justify-between mt-auto">
                          <div className="flex items-center space-x-3 text-sm text-gray-500 dark:text-gray-400">
                            <div className="flex items-center space-x-1">
                              <Calendar className="w-4 h-4" />
                              <span>{new Date(article.publishDate).toLocaleDateString()}</span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <Eye className="w-4 h-4" />
                              <span>{article.views}</span>
                            </div>
                          </div>
                          <Button variant="ghost" size="sm" className="text-green-600 hover:text-green-700">
                            Read More
                            <ChevronRight className="w-4 h-4 ml-1" />
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>

              {filteredArticles.length === 0 && (
                <div className="text-center py-12">
                  <div className="w-16 h-16 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Search className="w-8 h-8 text-gray-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">No articles found</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    Try adjusting your search terms or filters to find what you're looking for.
                  </p>
                  <Button
                    onClick={() => {
                      setSearchTerm('');
                      setSelectedCategory('all');
                      setSelectedTag('all');
                    }}
                    variant="outline"
                    className="border-green-600 text-green-600 hover:bg-green-50 dark:hover:bg-green-900/20"
                  >
                    Clear Filters
                  </Button>
                </div>
              )}
            </section>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Most Popular */}
            <Card>
              <CardHeader>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white flex items-center">
                  <TrendingUp className="w-5 h-5 mr-2 text-green-600" />
                  Most Popular
                </h3>
              </CardHeader>
              <CardContent className="space-y-4">
                {popularPosts.map((post, index) => (
                  <div key={post.id} className="flex items-start space-x-3 group cursor-pointer">
                    <div className="w-8 h-8 bg-green-100 dark:bg-green-900/20 rounded-full flex items-center justify-center text-green-600 dark:text-green-400 font-semibold text-sm">
                      {index + 1}
                    </div>
                    <div className="flex-1">
                      <h4 className="font-medium text-gray-900 dark:text-white group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors line-clamp-2">
                        {post.title}
                      </h4>
                      <div className="flex items-center space-x-1 text-sm text-gray-500 dark:text-gray-400 mt-1">
                        <Eye className="w-3 h-3" />
                        <span>{post.views} views</span>
                      </div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Recommended Reads */}
            <Card>
              <CardHeader>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white flex items-center">
                  <Star className="w-5 h-5 mr-2 text-green-600" />
                  Recommended Reads
                </h3>
              </CardHeader>
              <CardContent className="space-y-4">
                {recommendedPosts.map(post => (
                  <div key={post.id} className="group cursor-pointer">
                    <h4 className="font-medium text-gray-900 dark:text-white group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors line-clamp-2 mb-2">
                      {post.title}
                    </h4>
                    <Badge variant="outline" className="text-green-600 border-green-600">
                      {categories.find(cat => cat.id === post.category)?.label}
                    </Badge>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Newsletter Signup */}
            <Card className="bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-green-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                  Get Weekly Tips
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
                  Subscribe to receive the latest nutrition insights and healthy recipes.
                </p>
                <Button 
                  onClick={() => onPageChange('contact')}
                  className="w-full bg-green-600 hover:bg-green-700 text-white"
                >
                  Subscribe Now
                </Button>
              </CardContent>
            </Card>

            {/* Categories */}
            <Card>
              <CardHeader>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Categories</h3>
              </CardHeader>
              <CardContent className="space-y-2">
                {categories.slice(1).map(category => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`w-full text-left p-3 rounded-lg transition-colors ${
                      selectedCategory === category.id
                        ? 'bg-green-100 dark:bg-green-900/20 text-green-700 dark:text-green-300'
                        : 'hover:bg-gray-50 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span>{category.label}</span>
                      <Badge variant="secondary">{category.count}</Badge>
                    </div>
                  </button>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}