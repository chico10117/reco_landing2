# Reco Landing Page

This is the landing page for [Reco](https://reco.chat), an AI-powered digital menu for restaurants.

## 📋 Project Overview

Reco is a startup that provides a digital menu platform with an AI assistant that personalizes the dining experience for each customer. This landing page is designed to showcase the product's features and benefits to both restaurant owners and diners.

## 🚀 Features

- Responsive, mobile-first design
- Interactive hero section with CTA buttons
- Benefits showcase with card layout
- Step-by-step explanation of how Reco works
- Contact section with sales and trial CTAs
- Partner logos display
- Integration with Google Analytics and Hotjar

## 🛠️ Technologies Used

- SvelteKit - Framework
- Tailwind CSS - Styling
- Shadcn UI - Component library
- TypeScript - Type safety
- Framer Motion - Animations
- Vercel Analytics - User tracking

## 🧪 Getting Started

### Prerequisites

- Node.js 18+
- pnpm 

### Installation

1. Clone the repository
   ```bash
   git clone https://github.com/yourusername/reco-landing.git
   cd reco-landing
   ```

2. Run the installation script
   ```bash
   ./install-dependencies.sh
   ```
   
   This will:
   - Install required dependencies
   - Set up Shadcn UI components
   - Create necessary directories
   - Set up environment variables

3. Start the development server
   ```bash
   pnpm dev
   ```

4. Open your browser at `http://localhost:5173`

## 📁 Project Structure

```
├── src/
│   ├── lib/
│   │   ├── components/
│   │   │   ├── landing/       # Landing page components
│   │   │   │   ├── hero-section.svelte
│   │   │   │   ├── benefits-section.svelte
│   │   │   │   ├── how-it-works.svelte
│   │   │   │   ├── partners-strip.svelte
│   │   │   │   ├── contact-cta.svelte
│   │   │   │   └── footer.svelte
│   │   │   └── ui/            # Shadcn UI components
│   │   └── utils/
│   │       ├── analytics.ts   # Analytics tracking
│   │       └── utils.ts       # Utility functions
│   ├── routes/
│   │   ├── +page.svelte       # Landing page
│   │   └── +page.ts           # SEO metadata
│   ├── app.css                # Global styles
│   └── app.html               # HTML template
└── static/
    └── img/                   # Static images
```

## 🎨 Image Requirements

The following image files are required for the landing page:

1. `/img/phone-mockup.webp` - A mockup of a phone showing the Reco app interface
2. `/img/logo-yelmo.svg` - Logo for Yelmo Cines
3. `/img/logo-vips.svg` - Logo for VIPS restaurants
4. `/img/logo-honest-greens.svg` - Logo for Honest Greens
5. `/img/logo-tgb.svg` - Logo for TGB (The Good Burger)
6. `/img/logo-foodbox.svg` - Logo for FoodBox
7. `/img/og-image.jpg` - Social media preview image (1200x630px recommended)

## 🚨 Known Issues

- Currently there are linter errors related to missing modules from Shadcn UI - run the installation script to fix
- Images are placeholders - actual images need to be created and placed in the `/static/img/` directory

## 📝 License

Copyright © 2023-present Reco AI Solutions.
