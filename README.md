# Alex Morgan — Developer Portfolio

A production-grade developer portfolio built with Next.js 14 App Router, Tailwind CSS, and Framer Motion.

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Fonts**: Playfair Display + DM Sans + JetBrains Mono

## Features

- ⚡ Next.js 14 App Router with Server Components
- 🌙 Dark / Light mode with system preference detection
- 🎨 Glassmorphism design with gradient accents
- 📱 Fully responsive for all screen sizes
- ✨ Smooth scroll animations with Framer Motion
- 🧭 Active section highlighting in navbar
- 📬 Contact form with loading & success states
- 🚀 Optimized performance

## Project Structure

```
portfolio/
├── app/
│   ├── globals.css      # Global styles, CSS variables, animations
│   ├── layout.tsx       # Root layout with metadata
│   └── page.tsx         # Home page assembling all sections
├── components/
│   ├── ThemeProvider.tsx # Dark/light mode context
│   ├── Navbar.tsx        # Sticky nav with active section detection
│   ├── Hero.tsx          # Hero with floating elements
│   ├── About.tsx         # About with stats and code card
│   ├── Skills.tsx        # Animated skill bars by category
│   ├── Projects.tsx      # Project cards with links
│   ├── Experience.tsx    # Alternating timeline
│   ├── Testimonials.tsx  # Client testimonials
│   ├── Contact.tsx       # Contact form with validation
│   └── Footer.tsx        # Footer with links
├── sections/
│   ├── HeroSection.tsx
│   └── ProjectsSection.tsx
├── features/
│   ├── projects/
│   │   └── projectsData.ts
│   └── skills/
│       └── skillsData.ts
├── next.config.js
├── tailwind.config.ts
├── tsconfig.json
└── package.json
```

## Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Run development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

### 3. Build for production

```bash
npm run build
npm start
```

## Customization

### Personal Information
Update the following files with your own details:
- `components/Hero.tsx` — Name, title, tagline
- `components/About.tsx` — Bio and metrics
- `components/Skills.tsx` — Your skill levels
- `components/Projects.tsx` — Your project data
- `components/Experience.tsx` — Your work history
- `components/Testimonials.tsx` — Client reviews
- `components/Contact.tsx` — Your email
- `components/Footer.tsx` — Social links
- `app/layout.tsx` — SEO metadata

### Theme Colors
Edit `tailwind.config.ts` to change the brand color palette.

### Fonts
Edit `app/globals.css` to swap Google Fonts imports.

## Deploy

```bash
# Vercel (recommended)
npx vercel

# Or push to GitHub and connect to Vercel
```
