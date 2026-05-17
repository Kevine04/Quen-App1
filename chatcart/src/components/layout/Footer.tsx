'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const footerLinks = {
    Product: [
      { href: '#features', label: 'Features' },
      { href: '#pricing', label: 'Pricing' },
      { href: '#templates', label: 'Templates' },
      { href: '#integrations', label: 'Integrations' },
    ],
    Company: [
      { href: '#about', label: 'About' },
      { href: '#blog', label: 'Blog' },
      { href: '#careers', label: 'Careers' },
      { href: '#contact', label: 'Contact' },
    ],
    Resources: [
      { href: '#docs', label: 'Documentation' },
      { href: '#help', label: 'Help Center' },
      { href: '#community', label: 'Community' },
      { href: '#status', label: 'Status' },
    ],
    Legal: [
      { href: '#privacy', label: 'Privacy' },
      { href: '#terms', label: 'Terms' },
      { href: '#security', label: 'Security' },
    ],
  }

  return (
    <footer className="bg-dark-900 dark:bg-dark-950 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-2 md:grid-cols-6 gap-8 mb-12">
          {/* Brand Column */}
          <div className="col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-primary-600 rounded-xl flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <span className="text-xl font-bold font-display">ChatCart</span>
            </Link>
            <p className="text-gray-400 mb-6 max-w-sm">
              Turn your WhatsApp business into a professional online store. Create your store in minutes and start selling today.
            </p>
            <div className="flex gap-4">
              {['twitter', 'facebook', 'instagram', 'linkedin'].map((social) => (
                <motion.a
                  key={social}
                  href={`#${social}`}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 bg-dark-800 hover:bg-primary-600 rounded-xl flex items-center justify-center transition-colors"
                >
                  <span className="sr-only">{social}</span>
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="10" />
                  </svg>
                </motion.a>
              ))}
            </div>
          </div>

          {/* Links Columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="font-semibold mb-4 text-gray-200">{category}</h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-gray-400 hover:text-primary-400 transition-colors text-sm"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-dark-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm">
            © {currentYear} ChatCart. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <Link href="#privacy" className="text-gray-400 hover:text-primary-400 transition-colors">
              Privacy Policy
            </Link>
            <Link href="#terms" className="text-gray-400 hover:text-primary-400 transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
