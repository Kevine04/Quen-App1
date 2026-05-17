'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { Plus, Search, Filter, Edit2, Trash2, Eye, MoreVertical } from 'lucide-react'
import Link from 'next/link'

const sampleProducts = [
  { id: 1, name: 'Wireless Headphones Pro', price: 89.99, stock: 45, category: 'Electronics', status: 'active', image: '🎧', sales: 234 },
  { id: 2, name: 'Smart Watch Ultra', price: 199.99, stock: 23, category: 'Electronics', status: 'active', image: '⌚', sales: 189 },
  { id: 3, name: 'Phone Case Premium', price: 24.99, stock: 156, category: 'Accessories', status: 'active', image: '📱', sales: 156 },
  { id: 4, name: 'Bluetooth Speaker', price: 59.99, stock: 0, category: 'Electronics', status: 'out_of_stock', image: '🔊', sales: 142 },
  { id: 5, name: 'USB-C Cable 2m', price: 12.99, stock: 89, category: 'Accessories', status: 'active', image: '🔌', sales: 98 },
]

export default function ProductsPage() {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')

  const categories = ['all', 'Electronics', 'Accessories', 'Clothing', 'Home']

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold font-display text-gray-900 dark:text-white">
            Products
          </h1>
          <p className="text-gray-600 dark:text-gray-400 mt-1">
            Manage your product inventory
          </p>
        </div>
        <button className="btn-primary">
          <Plus className="w-4 h-4 mr-2" />
          Add Product
        </button>
      </div>

      {/* Filters */}
      <div className="card">
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="input pl-12"
            />
          </div>
          <div className="flex gap-2 overflow-x-auto pb-2 sm:pb-0">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-xl font-medium whitespace-nowrap transition-colors ${
                  selectedCategory === category
                    ? 'bg-primary-600 text-white'
                    : 'bg-gray-100 dark:bg-dark-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-dark-700'
                }`}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {sampleProducts.map((product, index) => (
          <motion.div
            key={product.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="card group"
          >
            <div className="flex items-start justify-between mb-4">
              <div className="w-20 h-20 bg-gradient-to-br from-gray-100 to-gray-200 dark:from-dark-800 dark:to-dark-700 rounded-2xl flex items-center justify-center text-4xl">
                {product.image}
              </div>
              <button className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-dark-800 opacity-0 group-hover:opacity-100 transition-opacity">
                <MoreVertical className="w-5 h-5 text-gray-500" />
              </button>
            </div>

            <div className="mb-4">
              <h3 className="font-semibold text-gray-900 dark:text-white mb-1">{product.name}</h3>
              <p className="text-sm text-gray-500">{product.category}</p>
            </div>

            <div className="flex items-center justify-between mb-4">
              <span className="text-xl font-bold text-primary-600">${product.price}</span>
              <span className={`px-2.5 py-1 rounded-full text-xs font-medium ${
                product.status === 'active'
                  ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400'
                  : 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400'
              }`}>
                {product.status === 'active' ? 'In Stock' : 'Out of Stock'}
              </span>
            </div>

            <div className="flex gap-2">
              <button className="flex-1 btn-secondary py-2 text-sm">
                <Edit2 className="w-4 h-4 mr-1" />
                Edit
              </button>
              <Link href={`/store/preview/${product.id}`} className="flex-1 btn-secondary py-2 text-sm">
                <Eye className="w-4 h-4 mr-1" />
                View
              </Link>
            </div>
          </motion.div>
        ))}

        {/* Add Product Card */}
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: sampleProducts.length * 0.1 }}
          className="card border-2 border-dashed border-gray-300 dark:border-dark-700 hover:border-primary-500 dark:hover:border-primary-500 min-h-[280px] flex flex-col items-center justify-center gap-4"
        >
          <div className="w-16 h-16 bg-primary-100 dark:bg-primary-900/30 rounded-2xl flex items-center justify-center">
            <Plus className="w-8 h-8 text-primary-600" />
          </div>
          <div className="text-center">
            <p className="font-medium text-gray-900 dark:text-white">Add New Product</p>
            <p className="text-sm text-gray-500 mt-1">Create a new product listing</p>
          </div>
        </motion.button>
      </div>
    </div>
  )
}
