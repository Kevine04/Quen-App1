'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { 
  Sparkles, 
  Wand2, 
  FileText, 
  Hash, 
  MessageSquare, 
  Palette, 
  Lightbulb,
  TrendingUp,
  Zap,
  Search,
  Copy,
  Check
} from 'lucide-react'

const aiTools = [
  {
    id: 'description',
    name: 'Product Description Generator',
    description: 'Generate compelling product descriptions in seconds',
    icon: FileText,
    color: 'from-blue-400 to-indigo-500',
    inputLabel: 'Product Name',
    placeholder: 'e.g., Wireless Bluetooth Headphones',
    buttonLabel: 'Generate Description',
  },
  {
    id: 'title',
    name: 'Product Title Generator',
    description: 'Create attention-grabbing product titles',
    icon: Zap,
    color: 'from-yellow-400 to-orange-500',
    inputLabel: 'Product Keywords',
    placeholder: 'e.g., headphones, wireless, premium',
    buttonLabel: 'Generate Titles',
  },
  {
    id: 'hashtags',
    name: 'Hashtag Generator',
    description: 'Generate trending hashtags for social media',
    icon: Hash,
    color: 'from-purple-400 to-pink-500',
    inputLabel: 'Product or Topic',
    placeholder: 'e.g., summer fashion collection',
    buttonLabel: 'Generate Hashtags',
  },
  {
    id: 'captions',
    name: 'Marketing Caption Generator',
    description: 'Create engaging captions for your posts',
    icon: MessageSquare,
    color: 'from-green-400 to-emerald-500',
    inputLabel: 'Post Content',
    placeholder: 'Describe what you want to post about',
    buttonLabel: 'Generate Captions',
  },
  {
    id: 'autoreply',
    name: 'Auto Reply Assistant',
    description: 'Generate automatic responses for common questions',
    icon: MessageSquare,
    color: 'from-cyan-400 to-teal-500',
    inputLabel: 'Customer Question',
    placeholder: 'e.g., What are your delivery times?',
    buttonLabel: 'Generate Reply',
  },
  {
    id: 'theme',
    name: 'Store Theme Generator',
    description: 'Get AI-powered theme suggestions for your store',
    icon: Palette,
    color: 'from-red-400 to-rose-500',
    inputLabel: 'Brand Style',
    placeholder: 'e.g., modern, minimalist, luxury',
    buttonLabel: 'Generate Themes',
  },
  {
    id: 'insights',
    name: 'Sales Insights',
    description: 'Get AI-powered insights on your sales performance',
    icon: TrendingUp,
    color: 'from-violet-400 to-purple-500',
    inputLabel: 'Time Period',
    placeholder: 'Select a time range to analyze',
    buttonLabel: 'Get Insights',
  },
  {
    id: 'recommendations',
    name: 'Product Recommendations',
    description: 'AI-suggested products to add to your store',
    icon: Lightbulb,
    color: 'from-amber-400 to-orange-500',
    inputLabel: 'Your Niche',
    placeholder: 'e.g., electronics, fashion, home decor',
    buttonLabel: 'Get Recommendations',
  },
]

export default function AIToolsPage() {
  const [selectedTool, setSelectedTool] = useState(aiTools[0])
  const [inputValue, setInputValue] = useState('')
  const [isGenerating, setIsGenerating] = useState(false)
  const [result, setResult] = useState('')
  const [copied, setCopied] = useState(false)

  const handleGenerate = async () => {
    if (!inputValue.trim()) return
    
    setIsGenerating(true)
    setResult('')
    
    // Simulate AI generation
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    // Mock results based on tool type
    const mockResults: Record<string, string> = {
      description: `✨ **Premium Quality**\n\nExperience the ultimate in audio excellence with our Wireless Bluetooth Headphones. Featuring advanced noise cancellation technology, these headphones deliver crystal-clear sound quality that immerses you in your music.\n\n🎯 **Key Features:**\n• 40-hour battery life\n• Premium comfort design\n• HD audio quality\n• Instant pairing\n\nPerfect for music lovers, professionals, and anyone who appreciates superior sound quality.`,
      title: `1. Premium Wireless Bluetooth Headphones - Noise Cancelling\n2. High-Fidelity Wireless Headphones with 40H Battery\n3. Professional Grade Bluetooth Headphones - Studio Quality\n4. Ultra-Comfortable Wireless Headphones - All Day Wear\n5. Advanced Noise-Cancelling Bluetooth Headphones`,
      hashtags: `#WirelessHeadphones #BluetoothAudio #PremiumSound #NoiseCancelling #AudioTech #MusicLovers #TechGadgets #WirelessAudio #HighQualitySound #AudioGear #TechEssentials #SoundQuality`,
      captions: `🎵 Elevate your listening experience! Our premium wireless headphones bring you closer to the music you love. \n\n✨ Crystal clear sound meets all-day comfort.\n\n👉 Shop now and feel the difference!\n\n#PremiumAudio #WirelessFreedom`,
      autoreply: `Thank you for your inquiry! \n\nOur standard delivery times are:\n• Local deliveries: 1-2 business days\n• National deliveries: 3-5 business days\n• International: 7-14 business days\n\nAll orders are processed within 24 hours and come with tracking. Is there anything else I can help you with? 😊`,
      theme: `Based on your brand style, here are 3 theme recommendations:\n\n1. **Modern Minimalist**\n   - Clean white backgrounds\n   - Bold typography\n   - Accent color: Primary Green\n\n2. **Luxury Premium**\n   - Dark mode base\n   - Gold accents\n   - Elegant serif fonts\n\n3. **Vibrant & Bold**\n   - Colorful gradients\n   - Rounded elements\n   - Playful animations`,
      insights: `📊 **Sales Performance Analysis**\n\n✅ Revenue increased by 23% this month\n✅ Best performing category: Electronics\n✅ Peak sales time: 6-9 PM\n✅ Conversion rate: 3.2% (+0.5%)\n\n💡 **Recommendations:**\n• Focus marketing on evening hours\n• Expand electronics inventory\n• Optimize checkout flow`,
      recommendations: `Based on your niche, consider adding:\n\n1. **Wireless Earbuds Pro** - High demand, good margins\n2. **Phone Stands & Holders** - Complementary product\n3. **Charging Cables (Multi-pack)** - Frequently bought together\n4. **Protective Cases** - High conversion rate\n5. **Screen Protectors** - Low cost, high volume`,
    }
    
    setResult(mockResults[selectedTool.id] || 'Generated content will appear here...')
    setIsGenerating(false)
  }

  const handleCopy = () => {
    navigator.clipboard.writeText(result)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl sm:text-3xl font-bold font-display text-gray-900 dark:text-white">
          AI Tools
        </h1>
        <p className="text-gray-600 dark:text-gray-400 mt-1">
          Supercharge your store with AI-powered tools
        </p>
      </div>

      {/* AI Tools Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {aiTools.map((tool, index) => (
          <motion.button
            key={tool.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05 }}
            onClick={() => {
              setSelectedTool(tool)
              setResult('')
              setInputValue('')
            }}
            className={`card text-left group transition-all ${
              selectedTool.id === tool.id
                ? 'ring-2 ring-primary-500 bg-primary-50 dark:bg-primary-900/20'
                : 'hover:border-primary-300 dark:hover:border-primary-700'
            }`}
          >
            <div className={`w-12 h-12 bg-gradient-to-br ${tool.color} rounded-xl flex items-center justify-center mb-3 group-hover:scale-110 transition-transform`}>
              <tool.icon className="w-6 h-6 text-white" />
            </div>
            <h3 className="font-semibold text-gray-900 dark:text-white mb-1">{tool.name}</h3>
            <p className="text-sm text-gray-500 line-clamp-2">{tool.description}</p>
          </motion.button>
        ))}
      </div>

      {/* Tool Interface */}
      <motion.div
        key={selectedTool.id}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="card"
      >
        <div className="flex items-center gap-3 mb-6">
          <div className={`w-10 h-10 bg-gradient-to-br ${selectedTool.color} rounded-xl flex items-center justify-center`}>
            <selectedTool.icon className="w-5 h-5 text-white" />
          </div>
          <div>
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white">{selectedTool.name}</h2>
            <p className="text-sm text-gray-500">{selectedTool.description}</p>
          </div>
        </div>

        {/* Input */}
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              {selectedTool.inputLabel}
            </label>
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder={selectedTool.placeholder}
              className="input"
              onKeyDown={(e) => e.key === 'Enter' && handleGenerate()}
            />
          </div>

          <button
            onClick={handleGenerate}
            disabled={isGenerating || !inputValue.trim()}
            className="btn-primary w-full"
          >
            {isGenerating ? (
              <span className="flex items-center justify-center gap-2">
                <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                </svg>
                Generating...
              </span>
            ) : (
              <span className="flex items-center justify-center gap-2">
                <Sparkles className="w-5 h-5" />
                {selectedTool.buttonLabel}
              </span>
            )}
          </button>
        </div>

        {/* Result */}
        {result && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-6 p-4 bg-gray-50 dark:bg-dark-800 rounded-xl"
          >
            <div className="flex items-center justify-between mb-3">
              <h3 className="font-medium text-gray-900 dark:text-white">Result</h3>
              <button
                onClick={handleCopy}
                className="flex items-center gap-1 text-sm text-gray-500 hover:text-primary-600"
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4" />
                    Copied!
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4" />
                    Copy
                  </>
                )}
              </button>
            </div>
            <p className="text-gray-700 dark:text-gray-300 whitespace-pre-wrap">{result}</p>
          </motion.div>
        )}
      </motion.div>
    </div>
  )
}
