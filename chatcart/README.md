# ChatCart - WhatsApp Store Builder

A modern SaaS platform that helps small businesses turn their WhatsApp business into a professional online store.

## 🚀 Features

### Core Features
- **Store Creation**: Create a mini online store in minutes
- **WhatsApp Integration**: Receive orders directly through WhatsApp
- **Product Management**: Full CRUD operations for products
- **Order Tracking**: Manage pending, confirmed, delivered, and cancelled orders
- **Customer Management**: Track and manage customer relationships
- **Analytics Dashboard**: Revenue, sales, and conversion tracking

### AI Tools
1. Product Description Generator
2. Product Title Generator
3. Hashtag Generator
4. Marketing Caption Generator
5. Auto Reply Assistant
6. Store Theme Generator
7. Sales Insights
8. Product Recommendations

### Authentication
- Email/Password Sign Up & Login
- Google OAuth Integration
- Password Reset
- Email Verification
- Smooth Onboarding Flow

### Design Features
- Modern, premium UI inspired by Shopify, Stripe, and Notion
- Emerald/green accents (WhatsApp-inspired)
- Dark mode support
- Mobile-first responsive design
- Glassmorphism effects
- Smooth animations with Framer Motion
- Clean typography and spacing

## 🛠️ Tech Stack

### Frontend
- **Next.js 14** - React framework with App Router
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first styling
- **Framer Motion** - Animations
- **Lucide React** - Beautiful icons

### Backend (Ready for Integration)
- **Supabase** - PostgreSQL database, authentication, real-time
- **Server Actions** - API routes

### Deployment
- **Vercel** - Hosting and deployment

## 📁 Project Structure

```
chatcart/
├── src/
│   ├── app/
│   │   ├── auth/
│   │   │   ├── login/          # Login page
│   │   │   ├── signup/         # Signup page
│   │   │   └── forgot-password/# Password reset
│   │   ├── dashboard/
│   │   │   ├── page.tsx        # Main dashboard
│   │   │   ├── layout.tsx      # Dashboard layout with sidebar
│   │   │   ├── products/       # Product management
│   │   │   ├── orders/         # Order management
│   │   │   ├── customers/      # Customer management
│   │   │   ├── analytics/      # Analytics & charts
│   │   │   ├── ai-tools/       # AI-powered tools
│   │   │   ├── themes/         # Store customization
│   │   │   ├── marketing/      # Marketing tools
│   │   │   ├── settings/       # Account settings
│   │   │   └── billing/        # Subscription management
│   │   ├── store/
│   │   │   └── [storeId]/      # Public storefront
│   │   ├── api/                # API routes
│   │   ├── globals.css         # Global styles
│   │   ├── layout.tsx          # Root layout
│   │   └── page.tsx            # Landing page
│   ├── components/
│   │   ├── ui/                 # Reusable UI components
│   │   ├── layout/             # Navbar, Footer, etc.
│   │   ├── dashboard/          # Dashboard components
│   │   ├── store/              # Storefront components
│   │   ├── auth/               # Auth components
│   │   └── ai/                 # AI tool components
│   ├── lib/                    # Utilities & helpers
│   ├── hooks/                  # Custom React hooks
│   ├── stores/                 # Zustand state management
│   └── types/                  # TypeScript types
├── public/                     # Static assets
├── package.json
├── tailwind.config.js
├── tsconfig.json
└── next.config.js
```

## 🎨 Color Palette

```javascript
primary: {
  50: '#ecfdf5',
  500: '#10b981',  // Main emerald
  600: '#059669',
  900: '#064e3b',
}
whatsapp: {
  light: '#25D366',
  DEFAULT: '#128C7E',
  dark: '#075E54',
}
dark: {
  900: '#0f172a',
  950: '#020617',
}
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn
- Supabase account (for backend)

### Installation

1. Clone the repository:
```bash
cd chatcart
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
Create a `.env.local` file:
```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```

4. Run development server:
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000)

## 📱 Pages Implemented

### ✅ Completed
- Landing Page (`/`) - Hero, features, stats, CTA
- Login Page (`/auth/login`) - Email/password + Google OAuth
- Signup Page (`/auth/signup`) - Registration with validation
- Dashboard Layout (`/dashboard/layout.tsx`) - Sidebar navigation
- Dashboard Home (`/dashboard`) - Stats, charts, recent orders
- Products Page (`/dashboard/products`) - Product grid with filters
- AI Tools Page (`/dashboard/ai-tools`) - 8 AI-powered tools

### 🔧 To Complete
- Orders Management (`/dashboard/orders`)
- Customers Management (`/dashboard/customers`)
- Analytics Charts (`/dashboard/analytics`)
- Themes Customization (`/dashboard/themes`)
- Marketing Tools (`/dashboard/marketing`)
- Settings (`/dashboard/settings`)
- Billing/Subscription (`/dashboard/billing`)
- Public Storefront (`/store/[storeId]`)
- Onboarding Flow (`/onboarding`)
- Forgot Password (`/auth/forgot-password`)

## 🔌 Backend Integration

### Supabase Setup

1. Create tables:
```sql
-- Users
CREATE TABLE users (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  email TEXT UNIQUE NOT NULL,
  name TEXT,
  avatar_url TEXT,
  created_at TIMESTAMP DEFAULT NOW()
);

-- Stores
CREATE TABLE stores (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID REFERENCES users(id),
  name TEXT NOT NULL,
  slug TEXT UNIQUE,
  logo_url TEXT,
  banner_url TEXT,
  category TEXT,
  theme_colors JSONB,
  whatsapp_number TEXT,
  created_at TIMESTAMP DEFAULT NOW()
);

-- Products
CREATE TABLE products (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  store_id UUID REFERENCES stores(id),
  name TEXT NOT NULL,
  description TEXT,
  price DECIMAL NOT NULL,
  discount_price DECIMAL,
  images TEXT[],
  category TEXT,
  tags TEXT[],
  stock INTEGER DEFAULT 0,
  is_featured BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMP DEFAULT NOW()
);

-- Orders
CREATE TABLE orders (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  store_id UUID REFERENCES stores(id),
  customer_name TEXT,
  customer_phone TEXT,
  items JSONB,
  total DECIMAL,
  status TEXT DEFAULT 'pending',
  whatsapp_message_id TEXT,
  created_at TIMESTAMP DEFAULT NOW()
);
```

2. Enable Row Level Security (RLS)
3. Set up authentication triggers

## 🎯 Key Components to Build

### WhatsApp Integration
```typescript
const sendToWhatsApp = (phone: string, message: string) => {
  const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
  window.open(url, '_blank');
};
```

### Order Message Generator
```typescript
const generateOrderMessage = (order: Order) => {
  return `🛒 New Order!\n\n${order.items.map(item => 
    `${item.name} x${item.quantity} - $${item.price}`
  ).join('\n')}\n\nTotal: $${order.total}\n\nCustomer: ${order.customer_name}\nPhone: ${order.customer_phone}`;
};
```

## 📊 Features Roadmap

### Phase 1 (Core) ✅
- [x] Landing page
- [x] Authentication UI
- [x] Dashboard layout
- [x] Basic product management
- [x] AI tools interface

### Phase 2 (Store Management)
- [ ] Full CRUD for products
- [ ] Order management system
- [ ] Customer database
- [ ] Store customization

### Phase 3 (Advanced)
- [ ] Payment integration (Flutterwave, Paystack)
- [ ] Advanced analytics
- [ ] Marketing automation
- [ ] Multi-language support

### Phase 4 (Scale)
- [ ] Admin panel
- [ ] Subscription billing
- [ ] Team collaboration
- [ ] API for third-party integrations

## 🎨 Design Principles

1. **Mobile-First**: All components designed for mobile first
2. **Accessibility**: WCAG 2.1 compliant
3. **Performance**: Optimized for Core Web Vitals
4. **Consistency**: Unified design system
5. **Delightful**: Micro-interactions and animations

## 📝 License

MIT License - feel free to use for your projects!

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

---

Built with ❤️ using Next.js, Tailwind CSS, and Framer Motion
