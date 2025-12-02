# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Favela Party Co is a modern, mobile-first tour booking website built with Next.js 14, TypeScript, and Tailwind CSS. The site showcases authentic Rio de Janeiro tours and experiences with a clean, Apple-style aesthetic featuring smooth animations and generous whitespace.

## Technology Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Deployment**: Optimized for Vercel

## Development Commands

```bash
# Install dependencies
npm install

# Start development server (localhost:3000)
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run linter
npm run lint
```

## Project Structure

```
app/
├── page.tsx                    # Homepage with hero, features, and CTA
├── tours/page.tsx              # Tours listing with all 9+ tours
├── private-experiences/page.tsx # Custom packages and booking form
├── contact/page.tsx            # Contact page with social links
├── layout.tsx                  # Root layout with navigation and footer
└── globals.css                 # Global styles and Tailwind setup

components/
├── Navigation.tsx              # Mobile-first nav with hamburger menu
└── Footer.tsx                  # Footer with links and social media
```

## Design System

### Mobile-First Approach
- **Critical**: All components prioritize mobile (375px-428px) viewports first
- Touch-friendly buttons: Minimum 44x44px tap targets
- Large input fields: Minimum 52px height for easy typing
- Generous spacing for thumb navigation
- Smooth scrolling and animations optimized for mobile

### Color Palette
- **Authentic Brazilian Flag Colors**:
  - Green: #009c3b (brazil-green) - Primary actions & gradients
  - Yellow: #ffdf00 (brazil-yellow) - Accents, borders, highlights
  - Blue: #012169 (brazil-blue) - Secondary actions & text
- Primary Gradient: brazil-green to brazil-blue
- Backgrounds: White with subtle green/yellow overlays (20-30% opacity)
- Text: Gray-900 (headings), Gray-600 (body), brazil-green (emphasis)
- Accents: Brazil yellow borders, Green-500 (WhatsApp), Purple-500 (Instagram)
- High Contrast: All text remains readable on white/light backgrounds

### Typography
- Font Stack: -apple-system, BlinkMacSystemFont, SF Pro Display
- Headings: Bold, 2xl-6xl responsive scales
- Body: Regular, lg-xl for readability on mobile

### Key Components
- Rounded corners: 2xl-3xl border radius (Apple-style)
- Shadows: Subtle on cards, stronger on hover/active states
- Animations: Framer Motion with 0.3-0.6s durations
- Buttons: Full-width on mobile, auto-width on desktop

## Tours & Pricing

All tour information is in `app/tours/page.tsx`:
1. Favela Tour by Day - 260R (200R for 2+) - 3 hours
2. Pubcrawl & Favela Party - 150R
3. Pedra do Sal Pubcrawl - FREE (Mondays)
4. Morro Dois Irmãos Sunrise Hike - 200R
5. Hang Gliding - 750R
6. Helicopter Tour (No Doors) - 1150R
7. Football Match Experience - 350R-450R
8. Adventure Tours (Rappelling) - Custom pricing
9. Vidigal Moto Tour - 190R

## Key Features

### Navigation
- Fixed header with scroll-based transparency
- Mobile hamburger menu with full-screen overlay
- Smooth page transitions
- Active link highlighting

### Forms
- WhatsApp integration (all forms submit via WhatsApp)
- Large, mobile-optimized input fields
- Client-side validation
- Success states and loading indicators

### Animations
- Scroll-triggered animations using Framer Motion
- Stagger effects for lists/grids
- Hover states with scale transforms
- Smooth page transitions

## Contact Integration

**WhatsApp Number**: +55 21 99847-7858 (configured as `5521998477858` in links)
- Found in: Navigation.tsx, Footer.tsx, all page.tsx files
- Used for: Contact forms, booking buttons, quick contact links

**Social Media**:
- Instagram: https://www.instagram.com/favelapartyco/ (configured)
- Facebook: Currently `#` (placeholder - update when available)

## Mobile Responsiveness

### Breakpoints (Tailwind defaults)
- `sm`: 640px
- `md`: 768px
- `lg`: 1024px
- `xl`: 1280px

### Testing Priority
1. Mobile (375px - iPhone SE)
2. Mobile (390px - iPhone 12/13/14)
3. Mobile (428px - iPhone 14 Pro Max)
4. Tablet (768px)
5. Desktop (1024px+)

## Performance Optimizations

- Images should use Next.js Image component (when added)
- Lazy loading for animations (viewport triggers)
- Minimal JavaScript bundle with tree-shaking
- CSS optimized with Tailwind's purge

## Future Enhancements

- Add actual tour images to public/images/
- Implement booking confirmation system
- Add customer testimonials/reviews
- Create blog/content section
- Integrate payment gateway
- Add multi-language support (Portuguese/English)
