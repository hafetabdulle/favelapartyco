# Favela Party Co - Rio de Janeiro Tours & Experiences

A modern, mobile-first tour booking website for Favela Party Co, showcasing authentic Rio de Janeiro tours and experiences with a clean, Apple-style aesthetic.

![Next.js](https://img.shields.io/badge/Next.js-14-black)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3-38bdf8)

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Open http://localhost:3000
```

## 📱 Features

- **Mobile-First Design** - Optimized for phones (375px-428px) with touch-friendly interactions
- **Apple-Style Aesthetics** - Smooth curves, generous whitespace, elegant typography
- **Smooth Animations** - Framer Motion powered animations and transitions
- **WhatsApp Integration** - Direct booking via WhatsApp
- **9+ Tour Offerings** - From favela tours to hang gliding experiences
- **Custom Packages** - Multi-day private experiences (3, 7, or 10 days)
- **Responsive Navigation** - Mobile hamburger menu with full-screen overlay
- **Contact Forms** - Easy-to-use, mobile-optimized forms

## 🏗️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Deployment**: Vercel-ready

## 📂 Project Structure

```
favelapartyco/
├── app/
│   ├── page.tsx                    # Homepage
│   ├── tours/page.tsx              # Tours listing
│   ├── private-experiences/page.tsx # Custom packages
│   ├── contact/page.tsx            # Contact page
│   ├── layout.tsx                  # Root layout
│   └── globals.css                 # Global styles
├── components/
│   ├── Navigation.tsx              # Nav with hamburger menu
│   └── Footer.tsx                  # Footer component
└── public/
    └── images/                     # Tour images (to be added)
```

## 🎨 Design System

### Colors
- **Authentic Brazilian Flag Colors**:
  - Green: #009c3b (primary actions)
  - Yellow: #ffdf00 (accents & borders)
  - Blue: #012169 (secondary actions)
- **Primary Gradient**: Green to Blue
- **Backgrounds**: White with subtle Brazilian color overlays
- **Accents**: Yellow borders, Green text, WhatsApp/Instagram colors
- **High Contrast**: Optimized for readability on all backgrounds

### Typography
- **Font**: -apple-system, SF Pro Display
- **Headings**: Bold, responsive (2xl-6xl)
- **Body**: Regular, readable (lg-xl)

### Components
- **Buttons**: Min 44x44px (touch-friendly)
- **Inputs**: Min 52px height
- **Border Radius**: 2xl-3xl (Apple-style)
- **Animations**: 0.3-0.6s durations

## 🎯 Tours & Pricing

1. **Favela Tour by Day** - 260R (200R for 2+) - 3 hours
2. **Pubcrawl & Favela Party** - 150R
3. **Pedra do Sal Pubcrawl** - FREE (Every Monday!)
4. **Morro Dois Irmãos Sunrise Hike** - 200R
5. **Hang Gliding** - 750R (video included)
6. **Helicopter Tour (No Doors)** - 1150R
7. **Football Match Experience** - 350R-450R
8. **Adventure Tours (Rappelling)** - Custom pricing
9. **Vidigal Moto Tour** - 190R

## 🔧 Configuration Needed

Before deployment, update:

1. **WhatsApp Number**: Update to `+55 21 99847-7858` (already configured):
   - `components/Navigation.tsx`
   - `components/Footer.tsx`
   - All page files (homepage, tours, private-experiences, contact)

2. **Social Media Links**: Update placeholder `#` links in:
   - `components/Footer.tsx`
   - `app/contact/page.tsx`

3. **Email Address**: Update `hello@favelapartyco.com` if different

4. **Images**: Add tour photos to `public/images/`

## 📱 Mobile Optimization

The site is built **mobile-first** with special attention to:

- Touch targets (min 44x44px)
- Large, easy-to-tap buttons
- Readable text on small screens
- Smooth scrolling
- One-thumb navigation
- WhatsApp deep linking

## 🚀 Deployment

### Vercel (Recommended)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Build for Production

```bash
npm run build
npm start
```

## 📝 Development Commands

```bash
npm run dev      # Start dev server
npm run build    # Build for production
npm start        # Start production server
npm run lint     # Run ESLint
```

## 🎯 Browser Support

- Chrome (latest)
- Safari (latest)
- Firefox (latest)
- Edge (latest)
- Mobile Safari (iOS 12+)
- Chrome Mobile (Android 8+)

## 📄 License

All rights reserved - Favela Party Co

## 🤝 Support

For questions or support:
- WhatsApp: +55 21 99847-7858
- Email: hello@favelapartyco.com
- Instagram: @favelapartyco

---

Built with ❤️ in Rio de Janeiro
