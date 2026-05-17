'use client'

import { motion } from 'framer-motion'
import { 
  DollarSign, 
  ShoppingCart, 
  Users, 
  Package, 
  TrendingUp, 
  ArrowUpRight, 
  ArrowDownRight,
  Eye,
  MessageCircle,
  Clock
} from 'lucide-react'
import Link from 'next/link'

const stats = [
  {
    name: 'Total Revenue',
    value: '$12,458',
    change: '+12.5%',
    trend: 'up',
    icon: DollarSign,
    color: 'from-green-400 to-emerald-500',
  },
  {
    name: 'Total Orders',
    value: '1,234',
    change: '+8.2%',
    trend: 'up',
    icon: ShoppingCart,
    color: 'from-blue-400 to-indigo-500',
  },
  {
    name: 'Total Customers',
    value: '892',
    change: '+15.3%',
    trend: 'up',
    icon: Users,
    color: 'from-purple-400 to-pink-500',
  },
  {
    name: 'Total Products',
    value: '156',
    change: '+4.1%',
    trend: 'up',
    icon: Package,
    color: 'from-orange-400 to-red-500',
  },
]

const recentOrders = [
  { id: '#ORD-001', customer: 'John Doe', product: 'Wireless Headphones', amount: '$89.99', status: 'Pending', time: '5 min ago' },
  { id: '#ORD-002', customer: 'Jane Smith', product: 'Smart Watch', amount: '$199.99', status: 'Confirmed', time: '15 min ago' },
  { id: '#ORD-003', customer: 'Mike Johnson', product: 'Phone Case', amount: '$24.99', status: 'Delivered', time: '1 hour ago' },
  { id: '#ORD-004', customer: 'Sarah Wilson', product: 'Bluetooth Speaker', amount: '$59.99', status: 'Pending', time: '2 hours ago' },
  { id: '#ORD-005', customer: 'Tom Brown', product: 'USB Cable', amount: '$12.99', status: 'Cancelled', time: '3 hours ago' },
]

const topProducts = [
  { name: 'Wireless Headphones', sales: 234, revenue: '$21,060', image: '🎧' },
  { name: 'Smart Watch Pro', sales: 189, revenue: '$37,710', image: '⌚' },
  { name: 'Phone Case Premium', sales: 156, revenue: '$3,894', image: '📱' },
  { name: 'Bluetooth Speaker', sales: 142, revenue: '$8,518', image: '🔊' },
]

export default function DashboardPage() {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Pending':
        return 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400'
      case 'Confirmed':
        return 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400'
      case 'Delivered':
        return 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400'
      case 'Cancelled':
        return 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400'
      default:
        return 'bg-gray-100 text-gray-700 dark:bg-gray-900/30 dark:text-gray-400'
    }
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold font-display text-gray-900 dark:text-white">
            Dashboard
          </h1>
          <p className="text-gray-600 dark:text-gray-400 mt-1">
            Welcome back! Here's what's happening with your store.
          </p>
        </div>
        <div className="flex gap-3">
          <Link href="/dashboard/products" className="btn-secondary">
            <Package className="w-4 h-4 mr-2" />
            Add Product
          </Link>
          <button className="btn-primary">
            <MessageCircle className="w-4 h-4 mr-2" />
            Share Store
          </button>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="card"
          >
            <div className="flex items-center justify-between mb-4">
              <div className={`w-12 h-12 bg-gradient-to-br ${stat.color} rounded-xl flex items-center justify-center`}>
                <stat.icon className="w-6 h-6 text-white" />
              </div>
              <div className={`flex items-center gap-1 text-sm font-medium ${
                stat.trend === 'up' ? 'text-green-600' : 'text-red-600'
              }`}>
                {stat.trend === 'up' ? (
                  <ArrowUpRight className="w-4 h-4" />
                ) : (
                  <ArrowDownRight className="w-4 h-4" />
                )}
                {stat.change}
              </div>
            </div>
            <div className="text-2xl font-bold text-gray-900 dark:text-white">{stat.value}</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">{stat.name}</div>
          </motion.div>
        ))}
      </div>

      {/* Charts & Recent Activity */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Revenue Chart Placeholder */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="lg:col-span-2 card"
        >
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white">Revenue Overview</h2>
            <select className="input w-auto py-2 px-3 text-sm">
              <option>Last 7 days</option>
              <option>Last 30 days</option>
              <option>Last 90 days</option>
            </select>
          </div>
          <div className="h-64 bg-gradient-to-br from-primary-50 to-primary-100 dark:from-primary-900/20 dark:to-primary-800/20 rounded-xl flex items-center justify-center">
            <div className="text-center">
              <TrendingUp className="w-12 h-12 text-primary-500 mx-auto mb-2" />
              <p className="text-gray-500 dark:text-gray-400">Revenue chart visualization</p>
            </div>
          </div>
        </motion.div>

        {/* Top Products */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="card"
        >
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white">Top Products</h2>
            <Link href="/dashboard/products" className="text-sm text-primary-600 hover:text-primary-700 font-medium">
              View all
            </Link>
          </div>
          <div className="space-y-4">
            {topProducts.map((product, index) => (
              <div key={product.name} className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gray-100 dark:bg-dark-800 rounded-xl flex items-center justify-center text-2xl">
                  {product.image}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="font-medium text-gray-900 dark:text-white truncate">{product.name}</div>
                  <div className="text-sm text-gray-500">{product.sales} sales</div>
                </div>
                <div className="text-right">
                  <div className="font-semibold text-gray-900 dark:text-white">{product.revenue}</div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Recent Orders */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="card overflow-hidden"
      >
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-lg font-semibold text-gray-900 dark:text-white">Recent Orders</h2>
          <Link href="/dashboard/orders" className="text-sm text-primary-600 hover:text-primary-700 font-medium">
            View all
          </Link>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200 dark:border-dark-700">
                <th className="text-left py-3 px-4 text-sm font-medium text-gray-500 dark:text-gray-400">Order</th>
                <th className="text-left py-3 px-4 text-sm font-medium text-gray-500 dark:text-gray-400">Customer</th>
                <th className="text-left py-3 px-4 text-sm font-medium text-gray-500 dark:text-gray-400">Product</th>
                <th className="text-left py-3 px-4 text-sm font-medium text-gray-500 dark:text-gray-400">Amount</th>
                <th className="text-left py-3 px-4 text-sm font-medium text-gray-500 dark:text-gray-400">Status</th>
                <th className="text-left py-3 px-4 text-sm font-medium text-gray-500 dark:text-gray-400">Time</th>
              </tr>
            </thead>
            <tbody>
              {recentOrders.map((order) => (
                <tr key={order.id} className="border-b border-gray-100 dark:border-dark-800 hover:bg-gray-50 dark:hover:bg-dark-800/50">
                  <td className="py-3 px-4 text-sm font-medium text-primary-600">{order.id}</td>
                  <td className="py-3 px-4 text-sm text-gray-900 dark:text-white">{order.customer}</td>
                  <td className="py-3 px-4 text-sm text-gray-600 dark:text-gray-400">{order.product}</td>
                  <td className="py-3 px-4 text-sm font-medium text-gray-900 dark:text-white">{order.amount}</td>
                  <td className="py-3 px-4">
                    <span className={`px-2.5 py-1 rounded-full text-xs font-medium ${getStatusColor(order.status)}`}>
                      {order.status}
                    </span>
                  </td>
                  <td className="py-3 px-4 text-sm text-gray-500">
                    <div className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {order.time}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </motion.div>
    </div>
  )
}
