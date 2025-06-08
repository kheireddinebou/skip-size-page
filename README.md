# Skip Size Selection Page - Redesign

A complete redesign of WeWantWaste's "Choose Your Skip Size" page with modern UI and mobile responsive design.

## 🔗 Links

- **GitHub Repository**: https://github.com/kheireddinebou/skip-size-page
- **Live Demo**: https://codesandbox.io/p/github/kheireddinebou/skip-size-page/main?import=true
- **Original Page**: [WeWantWaste.co.uk](https://wewantwaste.co.uk/) (enter the postcode LE10 1SH and select an address, then select garden waste)

## 🛠️ Tech Stack

- **React 19** + **TypeScript** + **Vite**
- **Tailwind CSS** with custom dark violet theme
- **React Icons** for UI elements
- **React Router** for navigation

## 🎨 Design Approach

### Key Changes
- **Dark violet theme** - Modern, professional color scheme
- **Card-based layout** - Replaced list with interactive cards
- **Mobile responsive** - Optimized for all screen sizes
- **Improved UX** - Clear pricing, better visual hierarchy
- **Stepper navigation** - Enhanced user flow

### Responsive Design
- Mobile: Stacked cards with touch-friendly interactions
- Desktop: Grid layout for better space utilization
- Consistent spacing and typography across breakpoints

## 📁 Project Structure

```
src/
├── components/
│   ├── BottomNavigation.tsx
│   ├── SelectedSkipInfoBanner.tsx
│   ├── SkipCard.tsx
│   ├── Stepper/
│   └── ui/Loader.tsx
├── pages/Index.tsx
├── services/skips.ts
├── types/global.d.ts
└── styles/index.css
```

## 🚀 Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

## 📡 API Integration

Fetches skip data from WeWantWaste API:
```
https://app.wewantwaste.co.uk/api/skips/by-location?postcode=NR32&area=Lowestoft
```

Includes proper error handling and loading states.

## ✨ Features

- **Responsive design** - Works on mobile, tablet, and desktop
- **Interactive cards** - Hover effects and clear selection states
- **Loading states** - Smooth user experience with loaders
- **Error handling** - Graceful fallbacks for API issues
- **Accessibility** - Proper ARIA labels and keyboard navigation

## 🎯 Approach

1. **Analyzed original page** - Understood existing functionality
2. **Mobile responsive design** - Started with mobile viewport
3. **Component architecture** - Modular, reusable components
4. **API integration** - Clean data fetching with error handling
5. **Responsive scaling** - Enhanced for larger screens

---

*Completed as a technical challenge demonstrating React, TypeScript, responsive design, and modern UI/UX principles.*
