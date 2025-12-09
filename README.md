# Bindamy Solutions - Landing Page

A modern, responsive landing page for Bindamy Solutions, showcasing services, portfolio, and company information. Built with cutting-edge web technologies and best practices.

## 🛠️ Tech Stack Badges

![React](https://img.shields.io/badge/React-19.2.1-61DAFB?logo=react&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5.8.3-3178C6?logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-5.4.19-646CFF?logo=vite&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4.17-38B2AC?logo=tailwind-css&logoColor=white)
![React Router](https://img.shields.io/badge/React_Router-6.30.1-CA4245?logo=react-router&logoColor=white)
![shadcn/ui](https://img.shields.io/badge/shadcn%2Fui-Latest-000000?logo=react&logoColor=white)
![i18next](https://img.shields.io/badge/i18next-25.7.2-26A69A?logo=i18next&logoColor=white)
![React Query](https://img.shields.io/badge/React_Query-5.83.0-FF4154?logo=react-query&logoColor=white)
![Zod](https://img.shields.io/badge/Zod-3.25.76-3E63DD?logo=zod&logoColor=white)
![ESLint](https://img.shields.io/badge/ESLint-9.32.0-4B32C3?logo=eslint&logoColor=white)

## 🚀 Tech Stack

### Core Framework & Language
- ⚛️ **React** `^19.2.1` - Modern UI library
- 🔷 **TypeScript** `^5.8.3` - Type-safe JavaScript
- ⚡ **Vite** `^5.4.19` - Next-generation build tool

### UI & Styling
- 🎨 **Tailwind CSS** `^3.4.17` - Utility-first CSS framework
- 🧩 **shadcn/ui** - High-quality React components built on Radix UI
- 🎯 **Radix UI** - Unstyled, accessible component primitives
  - Accordion, Alert Dialog, Avatar, Checkbox, Dialog, Dropdown Menu, and 30+ more components
- 🎭 **Lucide React** `^0.462.0` - Beautiful icon library
- ✨ **tailwindcss-animate** `^1.0.7` - Animation utilities
- 🎪 **class-variance-authority** `^0.7.1` - Component variant management
- 🔧 **clsx** `^2.1.1` & **tailwind-merge** `^2.6.0` - Conditional class utilities

### Routing & State Management
- 🗺️ **React Router DOM** `^6.30.1` - Client-side routing
- 🔄 **TanStack Query (React Query)** `^5.83.0` - Server state management

### Internationalization
- 🌍 **i18next** `^25.7.2` - Internationalization framework
- 🔤 **react-i18next** `^16.4.0` - React bindings for i18next
- 🔍 **i18next-browser-languagedetector** `^8.2.0` - Language detection

### Forms & Validation
- 📝 **React Hook Form** `^7.61.1` - Performant form library
- ✅ **Zod** `^3.25.76` - TypeScript-first schema validation
- 🔗 **@hookform/resolvers** `^3.10.0` - Form validation resolvers

### Additional Libraries
- 📊 **Recharts** `^2.15.4` - Composable charting library
- 📅 **date-fns** `^3.6.0` - Date utility library
- 📆 **react-day-picker** `^8.10.1` - Date picker component
- 🎠 **Embla Carousel** `^8.6.0` - Carousel component
- 🔔 **Sonner** `^1.7.4` - Toast notifications
- 📧 **Resend** `^6.5.2` - Email API
- 🌓 **next-themes** `^0.3.0` - Theme management

### Development Tools
- 🔍 **ESLint** `^9.32.0` - Code linting
- 🔷 **TypeScript ESLint** `^8.38.0` - TypeScript-specific linting rules
- 🎨 **PostCSS** `^8.5.6` - CSS processing
- 🔄 **Autoprefixer** `^10.4.21` - CSS vendor prefixing
- ⚡ **@vitejs/plugin-react-swc** `^3.11.0` - Fast React refresh with SWC
- 🏷️ **lovable-tagger** `^1.1.11` - Component tagging for development

## ✨ Features

- 🌐 **Multi-language Support** - English and Portuguese (PT) with automatic language detection
- 📱 **Fully Responsive** - Mobile-first design that works on all devices
- 🎨 **Modern UI Components** - Built with shadcn/ui for consistent, accessible components
- ⚡ **Fast Performance** - Optimized with Vite and React 19
- 🎯 **SEO Friendly** - Proper meta tags and semantic HTML
- 🔄 **Smooth Animations** - Tailwind CSS animations for enhanced UX
- 📧 **Contact Form** - Integrated contact section with form validation
- 💬 **WhatsApp Integration** - Floating WhatsApp button for quick contact
- 🎭 **Dark Mode Ready** - Theme support infrastructure in place
- 📊 **Portfolio Showcase** - Dynamic project display section
- 🤝 **Partner Showcase** - Trusted by section with partner logos

## 📋 Prerequisites

- **Node.js** >= 18.x
- **npm** >= 9.x or **bun** >= 1.x

## 🛠️ Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd bindamy-soluctions-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   bun install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   # or
   bun run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:8080`

## 📜 Available Scripts

- `npm run dev` - Start development server on port 8080
- `npm run build` - Build for production
- `npm run build:dev` - Build in development mode
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint to check code quality

## 📁 Project Structure

```
bindamy-soluctions-website/
├── public/                 # Static assets
│   ├── partners/          # Partner logos
│   ├── projects/          # Project screenshots
│   └── bindamy-logo.svg   # Company logo
├── src/
│   ├── components/        # React components
│   │   ├── ui/           # shadcn/ui components
│   │   ├── AboutSection.tsx
│   │   ├── ContactSection.tsx
│   │   ├── Footer.tsx
│   │   ├── HeroSection.tsx
│   │   ├── Navbar.tsx
│   │   ├── ServicesSection.tsx
│   │   ├── TrustedBySection.tsx
│   │   ├── WorkSection.tsx
│   │   └── WhatsAppFloat.tsx
│   ├── data/             # JSON data files
│   │   ├── company.json
│   │   ├── partners.json
│   │   ├── projects.json
│   │   ├── services.json
│   │   └── technologies.json
│   ├── hooks/            # Custom React hooks
│   ├── i18n/             # Internationalization
│   │   ├── config.ts
│   │   └── locales/
│   │       ├── en.json
│   │       └── pt.json
│   ├── lib/              # Utility functions
│   ├── pages/            # Page components
│   │   ├── Index.tsx
│   │   ├── NotFound.tsx
│   │   ├── Privacy.tsx
│   │   └── Terms.tsx
│   ├── App.tsx           # Main app component
│   └── main.tsx          # Entry point
├── components.json       # shadcn/ui configuration
├── tailwind.config.ts   # Tailwind CSS configuration
├── vite.config.ts       # Vite configuration
└── package.json         # Dependencies and scripts
```

## 🌍 Internationalization

The project supports multiple languages:
- **English (en)** - Default language
- **Portuguese (pt)** - Portuguese (Portugal)

Language detection is automatic based on:
1. Browser language preference
2. LocalStorage preference

To add a new language:
1. Create a new JSON file in `src/i18n/locales/`
2. Add the language to `src/i18n/config.ts`
3. Translate all keys from `en.json`

## 🎨 Styling

The project uses Tailwind CSS with a custom configuration:
- **Base Color**: Slate
- **CSS Variables**: Enabled for theming
- **Custom Fonts**: Space Grotesk (display) and Manrope (body)
- **Animations**: Tailwind CSS Animate plugin

## 🔧 Configuration

### Vite Configuration
- Development server runs on port `8080`
- Path alias `@` maps to `./src`
- React SWC plugin for fast refresh

### Tailwind Configuration
- Custom color system with CSS variables
- Responsive breakpoints
- Custom animations and keyframes

### shadcn/ui
Configured via `components.json`:
- Style: default
- TypeScript: enabled
- CSS variables: enabled

## 📝 Content Management

Content is managed through JSON files in `src/data/`:
- `company.json` - Company information and navigation
- `partners.json` - Partner/trusted by data
- `projects.json` - Portfolio projects
- `services.json` - Services offered
- `technologies.json` - Technology stack

Each data file has corresponding language versions (`.en.json`, `.pt.json`).

## 🚀 Deployment

### Build for Production
```bash
npm run build
```

The build output will be in the `dist/` directory, ready to be deployed to any static hosting service:
- Vercel
- Netlify
- GitHub Pages
- AWS S3 + CloudFront
- Any static hosting provider

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is private and proprietary to Bindamy Solutions.

## 📞 Contact

**Bindamy Solutions**
- Website: [bindamy.site](https://bindamy.site)
- LinkedIn: [@bindamy](https://linkedin.com/company/bindamy)
- Twitter: [@bindamy](https://twitter.com/bindamy)
- GitHub: [@bindamy](https://github.com/bindamy)

---

**Built with precision in mind.** © 2024 Bindamy Solutions. All rights reserved.

