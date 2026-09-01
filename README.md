# Kurogami RWA Marketplace - Prototype

A premium dark/gold real-world asset marketplace prototype built with **Next.js 14**, **TypeScript**, and **Tailwind CSS**.

## 🎯 Overview

The Kurogami RWA Marketplace is a demonstration interface showcasing how real-world assets (real estate, aviation, watches, carbon, collectibles, private credit) can be packaged and distributed through a tokenized participation model.

### Key Features

✨ **6 Seed Demo Assets** with realistic metrics and detailed structures  
🎨 **Premium Dark/Gold Design** — institutional-crypto aesthetic with mobile-first responsive layout  
📊 **Interactive Asset Browsing** — filters by class, detailed asset pages with full disclosures  
🔐 **Claim & Liquidity Explainers** — educational pages on participation mechanics  
📝 **Waitlist Capture** — demo form to collect participation interest  
🔬 **Prototype Labeling** — clear "Prototype" badges throughout; no fake settlement claims  

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

```bash
npm install
# or
yarn install
```

### Development Server

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser. The app will redirect to `/rwa`.

### Production Build

```bash
npm run build
npm start
```

## 📂 Project Structure

```
rwamarketplace/
├── app/
│   ├── layout.tsx              # Root layout with Header/Footer
│   ├── page.tsx                # Redirects to /rwa
│   ├── globals.css             # Global styles + Tailwind
│   └── rwa/
│       ├── page.tsx            # Marketplace home (hero, stats, filters, asset grid)
│       ├── claim-path/page.tsx # Claim packaging explainer
│       ├── liquidity-path/     # Liquidity options explainer
│       └── [id]/page.tsx       # Asset detail page (overview, structure, risks, waitlist)
├── components/
│   ├── AssetCard.tsx           # Grid card component
│   ├── MetricCard.tsx          # Stats/metrics display
│   ├── FilterChip.tsx          # Filter button
│   ├── StatusBadge.tsx         # Status indicator (Open/Coming/Reserved)
│   ├── GoldButton.tsx          # Primary CTA button
│   ├── PrototypeBadge.tsx      # Demo labeling
│   ├── WaitlistForm.tsx        # Participation request form
│   ├── Header.tsx              # Navigation header
│   └── Footer.tsx              # Footer with links & disclosure
├── lib/
│   └── seed-assets.ts          # 6 demo assets + types
├── package.json                # Dependencies
├── tailwind.config.ts          # Tailwind theme (dark/gold)
└── next.config.js              # Next.js configuration
```

## 🎨 Design System

### Color Palette

- **Base** — `#0a0a0a` (near-black background)
- **Surface** — `#1a1a1a` / `#262626` (card/section backgrounds)
- **Gold** — `#e8b514` (primary accent, CTAs)
- **Text** — `#f5f1e8` cream / `#a8a8a8` dim gray

### Components

| Component | Purpose |
|-----------|---------|
| `GoldButton` | Primary/secondary CTAs with size variants |
| `StatusBadge` | Open / Coming Soon / Reserved indicator |
| `FilterChip` | Asset class filter buttons |
| `MetricCard` | Stats cards with icon + value |
| `AssetCard` | Grid card with asset preview + quick metrics |
| `PrototypeBadge` | Prototype/demo environment label |
| `WaitlistForm` | Participation interest form with success state |

## 📋 Routes

| Route | Purpose |
|-------|---------|
| `/` | Redirects to `/rwa` |
| `/rwa` | Marketplace home with hero, stats, filters, asset grid |
| `/rwa/[id]` | Asset detail page (overview, structure, risks, waitlist form) |
| `/rwa/claim-path` | Educational: How assets are packaged and distributed |
| `/rwa/liquidity-path` | Educational: Liquidity options and exit strategies |

## 💾 Seed Data

**6 Demo Assets** included in `lib/seed-assets.ts`:

1. **Brickell Residential Claim** (Real Estate, Miami) — $2.4M indicative value
2. **Light-Jet Charter Exposure** (Aviation, Global) — $1.8M
3. **Heritage Watch Basket** (Watches, Geneva) — $950k (Coming Soon)
4. **Verified Carbon Lot** (Carbon, SE Asia) — $620k
5. **Contemporary Art Cabinet** (Collectibles, London) — $1.2M (Reserved)
6. **Short-Duration Private Credit** (Private Credit, N.A.) — $3.1M

Each asset includes:
- Status badge (Open / Coming Soon / Reserved)
- Indicative metrics (value, min participation, term)
- Overview narrative
- Structure explanation (claim representation, intent, reporting)
- Liquidity pathway
- Risk disclosures
- Participation notes

## 🔬 Prototype Labeling

All data is explicitly labeled as **illustrative and demonstration only**:

- ✓ Prototype badges on hero + header
- ✓ Risk disclaimers on asset pages
- ✓ Footer disclosure about demo environment
- ✓ Info banners explaining non-live status
- ✓ Waitlist form success state confirms request received (no actual settlement)

**No fake settlement claims.** Metrics based on market benchmarks and historical data, but clearly marked as demo for prototype marketplace structure exploration.

## 🧩 Customization

### Update Seed Assets
Edit `lib/seed-assets.ts` to modify or add assets. Update the `RWAAsset` interface if adding new fields.

### Adjust Color Theme
Tailwind theme config in `tailwind.config.ts`:
- Gold palette (50-950 scale)
- Slate/charcoal backgrounds
- Cream text colors

### Add New Pages
Create `.tsx` files in `app/rwa/[path]` directory. Uses Next.js app router with TypeScript support.

## 🚀 Deployment

### Vercel (Recommended)
```bash
vercel deploy
```

### Docker
```dockerfile
FROM node:18
WORKDIR /app
COPY . .
RUN npm install && npm run build
EXPOSE 3000
CMD ["npm", "start"]
```

### Static Export
If needed for static hosting:
```bash
npm run build
# outputs to .next (or configure in next.config.js for static export)
```

## 📖 Further Documentation

- [Next.js Docs](https://nextjs.org/docs)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [React 18 Docs](https://react.dev)

---

## ⚠️ Important Disclaimer

**This is a demonstration prototype only.** 

- All asset data is illustrative and for marketplace structure exploration
- No active settlement system or live trading
- Not an investment offer or guarantee of returns
- Capital at risk in any real-world deployment
- Regulatory compliance depends on jurisdiction and asset type

Built for the Kurogami World portal as a reference implementation.