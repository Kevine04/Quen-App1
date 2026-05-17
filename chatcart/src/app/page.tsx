'use client'

import { motion } from 'framer-motion'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import { ArrowRight, Zap, Shield, Smartphone, BarChart3, Palette, MessageCircle } from 'lucide-react'
import Link from 'next/link'

const features = [
  {
    icon: Zap,
    title: 'Lightning Fast Setup',
    description: 'Create your professional store in under 5 minutes. No coding required.',
    color: 'from-yellow-400 to-orange-500',
  },
  {
    icon: MessageCircle,
    title: 'WhatsApp Integration',
    description: 'Receive orders directly on WhatsApp. Seamless customer communication.',
    color: 'from-green-400 to-emerald-500',
  },
  {
    icon: Smartphone,
    title: 'Mobile First Design',
    description: 'Beautiful stores that look amazing on any device. Native app feel.',
    color: 'from-blue-400 to-indigo-500',
  },
  {
    icon: Palette,
    title: 'Custom Themes',
    description: 'Choose from beautiful themes or create your own unique brand identity.',
    color: 'from-purple-400 to-pink-500',
  },
  {
    icon: BarChart3,
    title: 'Smart Analytics',
    description: 'Track sales, visitors, and conversions with detailed insights.',
    color: 'from-cyan-400 to-teal-500',
  },
  {
    icon: Shield,
    title: 'Secure & Reliable',
    description: 'Enterprise-grade security. Your data is always protected.',
    color: 'from-red-400 to-rose-500',
  },
]

const stats = [
  { value: '10,000+', label: 'Active Stores' },
  { value: '$50M+', label: 'Transactions' },
  { value: '99.9%', label: 'Uptime' },
  { value: '24/7', label: 'Support' },
]

export default function Home() {
  return (
    <div className="min-h-screen gradient-hero">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary-500"></span>
              </span>
              Now with AI-powered tools
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold font-display text-gray-900 dark:text-white mb-6 leading-tight">
              Turn your WhatsApp business into a{' '}
              <span className="bg-gradient-to-r from-primary-500 to-primary-600 bg-clip-text text-transparent">
                real online store
              </span>
            </h1>
            
            <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-10">
              Create a professional e-commerce store in minutes. Receive orders directly through WhatsApp. 
              Perfect for small businesses, entrepreneurs, and social sellers.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="/auth/signup" className="btn-primary text-lg px-8 py-4 group">
                Start Free Trial
                <ArrowRight className="inline-block ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link href="#how-it-works" className="btn-secondary text-lg px-8 py-4">
                See How It Works
              </Link>
            </div>
            
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-6">
              No credit card required • 14-day free trial • Cancel anytime
            </p>
          </motion.div>
          
          {/* Hero Image/Mockup */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-16 relative"
          >
            <div className="relative mx-auto max-w-5xl">
              <div className="absolute inset-0 bg-gradient-to-r from-primary-500/20 to-primary-600/20 blur-3xl rounded-3xl"></div>
              <div className="relative bg-white dark:bg-dark-800 rounded-2xl shadow-soft-lg border border-gray-200 dark:border-dark-700 overflow-hidden">
                <div className="aspect-video bg-gradient-to-br from-gray-50 to-gray-100 dark:from-dark-900 dark:to-dark-800 flex items-center justify-center">
                  <div className="text-center p-8">
                    <ShoppingCart className="w-20 h-20 text-primary-500 mx-auto mb-4" />
                    <p className="text-gray-500 dark:text-gray-400">Store Preview Dashboard</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white dark:bg-dark-900">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-3xl sm:text-4xl font-bold font-display text-primary-600 mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-600 dark:text-gray-400">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold font-display text-gray-900 dark:text-white mb-4">
              Everything you need to sell on WhatsApp
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Powerful features designed specifically for WhatsApp businesses and social sellers.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="card group hover:border-primary-200 dark:hover:border-primary-800"
              >
                <div className={`w-12 h-12 bg-gradient-to-br ${feature.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="gradient-primary rounded-3xl p-8 sm:p-12 text-center text-white shadow-glow-lg"
          >
            <h2 className="text-3xl sm:text-4xl font-bold font-display mb-4">
              Ready to grow your business?
            </h2>
            <p className="text-lg text-primary-100 mb-8 max-w-2xl mx-auto">
              Join thousands of successful sellers who are growing their business with ChatCart.
            </p>
            <Link href="/auth/signup" className="bg-white text-primary-600 hover:bg-gray-100 font-semibold py-4 px-8 rounded-xl inline-flex items-center gap-2 transition-colors shadow-soft">
              Get Started Free
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

// Simple cart icon component for hero
function ShoppingCart({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
    </svg>
  )
}
