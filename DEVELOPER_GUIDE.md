# Kurogami RWA Marketplace - Developer Guide

## Quick Reference

### Running the Project

```bash
# Setup
npm install

# Development
npm run dev
# → http://localhost:3000/rwa

# Build & Test
npm run build
npm start

# Check TypeScript
npx tsc --noEmit

# Lint
npm run lint
```

---

## Component Usage Guide

### GoldButton
```tsx
import { GoldButton } from '@/components/GoldButton'

// Primary CTA
<GoldButton size="lg" onClick={() => {}}>
  Browse Assets
</GoldButton>

// Secondary outline
<GoldButton variant="secondary" size="md">
  Learn More
</GoldButton>

// Link variant
<GoldButton href="/rwa/claim-path">
  View Claim Path
</GoldButton>

// Form submit
<GoldButton type="submit" size="lg" className="w-full">
  Submit
</GoldButton>
```

**Props:**
- `variant`: 'primary' | 'secondary' (default: 'primary')
- `size`: 'sm' | 'md' | 'lg' (default: 'md')
- `href`: Optional link URL
- `onClick`: Optional click handler
- `type`: 'button' | 'submit' (default: 'button')
- `disabled`: boolean
- `className`: Additional Tailwind classes

---

### StatusBadge
```tsx
import { StatusBadge } from '@/components/StatusBadge'

<StatusBadge status="Open" />
<StatusBadge status="Coming Soon" />
<StatusBadge status="Reserved" />
```

**Props:**
- `status`: 'Open' | 'Coming Soon' | 'Reserved'
- `className`: Additional classes

---

### FilterChip
```tsx
import { FilterChip } from '@/components/FilterChip'

const [active, setActive] = useState('All')

<FilterChip
  label="Real Estate"
  isActive={active === 'Real Estate'}
  onClick={() => setActive('Real Estate')}
/>
```

**Props:**
- `label`: Filter text
- `isActive`: boolean
- `onClick`: Handler function

---

### MetricCard
```tsx
import { MetricCard } from '@/components/MetricCard'

<MetricCard
  label="Indicative Value"
  value="$2.4M"
  subtext="Miami Property"
  icon="💎"
/>
```

**Props:**
- `label`: Metric name
- `value`: Main display value
- `subtext`: Optional secondary text
- `icon`: Optional emoji/icon

---

### AssetCard
```tsx
import { AssetCard } from '@/components/AssetCard'
import { RWAAsset, seedAssets } from '@/lib/seed-assets'

<AssetCard asset={seedAssets[0]} />
```

**Props:**
- `asset`: RWAAsset object

---

### PrototypeBadge
```tsx
import { PrototypeBadge } from '@/components/PrototypeBadge'

<PrototypeBadge /> // Displays "🔬 PROTOTYPE"
```

---

### WaitlistForm
```tsx
'use client'

import { WaitlistForm } from '@/components/WaitlistForm'

export default function MyPage() {
  return <WaitlistForm />
}
```

**Features:**
- 4 form fields (name, email, asset class, ticket size)
- Form state management
- Success state display
- Auto-clear after 3 seconds

---

### Header & Footer
```tsx
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'

// Used in app/layout.tsx - no props needed
<Header />
<main>{children}</main>
<Footer />
```

---

## Data Management

### Adding New Assets

Edit `lib/seed-assets.ts`:

```tsx
import { RWAAsset } from '@/lib/seed-assets'

const newAsset: RWAAsset = {
  id: '7',
  name: 'New Asset Name',
  class: 'Real Estate', // Must match one of the 6 classes
  location: 'City, Country',
  status: 'Open', // or 'Coming Soon' or 'Reserved'
  indicativeValue: '$1.5M',
  minimumParticipation: '$25k',
  projectedTerm: '24 months',
  participationNote: 'Demo note...',
  image: '🏢', // emoji
  overview: 'Narrative description...',
  structure: {
    claimRepresentation: '...',
    participationIntent: '...',
    reportingCadence: '...',
  },
  liquidity: '...',
  riskDisclosure: '...',
}

seedAssets.push(newAsset)
```

---

## Page Structure

### Home Page (/rwa)
```tsx
// app/rwa/page.tsx
'use client'

import { seedAssets } from '@/lib/seed-assets'
import { AssetCard } from '@/components/AssetCard'
import { FilterChip } from '@/components/FilterChip'
// ... more imports

export default function RWAMarketplace() {
  const [activeFilter, setActiveFilter] = useState('All')
  // ... filtering logic
  
  return (
    <div className="bg-base text-cream">
      {/* Hero Section */}
      {/* Stats Strip */}
      {/* Filter Bar */}
      {/* Asset Grid */}
      {/* Info Banner */}
    </div>
  )
}
```

### Detail Page (/rwa/[id])
```tsx
// app/rwa/[id]/page.tsx
'use client'

import { seedAssets } from '@/lib/seed-assets'
import { notFound } from 'next/navigation'

interface AssetDetailPageProps {
  params: { id: string }
}

export default function AssetDetailPage({ params }: AssetDetailPageProps) {
  const asset = seedAssets.find(a => a.id === params.id)
  
  if (!asset) notFound()
  
  return (
    <div>
      {/* Hero */}
      {/* Metrics */}
      {/* Content Grid */}
        {/* Main: overview, structure, liquidity, risks */}
        {/* Sidebar: CTA, form, details */}
      {/* Related Assets */}
      {/* Footer */}
    </div>
  )
}
```

---

## Styling Tips

### Using Tailwind Classes

```tsx
// Text colors
className="text-cream"      // Primary text (#f5f1e8)
className="text-dim"        // Secondary text (#a8a8a8)
className="text-gold-400"   // Gold accent

// Backgrounds
className="bg-base"         // #0a0a0a
className="bg-surface"      // #1a1a1a
className="bg-surface-light" // #262626

// Hover effects
className="hover:border-gold-600/50"
className="hover:bg-gold-600/10"

// Responsive
className="grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
className="px-4 sm:px-6"

// Spacing
className="gap-6"
className="mb-8"
className="py-12"
```

### Creating New Sections

```tsx
<section className="max-w-7xl mx-auto px-4 sm:px-6 py-16">
  <h2 className="text-3xl font-bold text-gold-400 mb-8">Section Title</h2>
  
  <div className="space-y-6">
    {/* Content */}
  </div>
</section>
```

---

## Extending the Project

### Adding a New Page

1. Create file: `app/rwa/new-page/page.tsx`
2. Import components as needed
3. Use same layout structure (header, content, footer auto-included)
4. Add link in Header/Footer if needed

### Styling New Components

1. Follow existing Tailwind patterns
2. Use custom colors from `tailwind.config.ts`
3. Keep dark/gold aesthetic
4. Test responsive breakpoints

### Connecting to Backend

1. Create API routes in `app/api/`
2. Update form handlers in components (e.g., WaitlistForm)
3. Use fetch/axios to call endpoints
4. Handle loading/error states

### Adding Database

Consider:
- **PostgreSQL** (Supabase, Railway, PgBoss)
- **MongoDB** (Atlas)
- **Firebase**
- **Prisma ORM** for queries

---

## Performance & SEO

### Current Setup
- Next.js 14 with automatic code splitting
- Image optimization ready
- SEO metadata in `app/layout.tsx`
- Responsive design mobile-first

### Improvements
- Consider Image component for emoji (external CDN)
- Add `sitemap.xml` generation
- Implement analytics (optional)
- Cache assets via CDN

---

## Troubleshooting

### Port Already in Use
```bash
# Kill process on port 3000
lsof -ti:3000 | xargs kill -9
npm run dev
```

### Build Fails
```bash
# Clear cache
rm -rf .next
npm run build
```

### TypeScript Errors
```bash
# Check types
npx tsc --noEmit

# Update types
npm install --save-dev @types/react @types/node
```

---

## Documentation Files

- **README.md** — Project overview & deployment
- **BUILD_SUMMARY.md** — Complete feature list
- **DEVELOPER_GUIDE.md** — This file
- **tailwind.config.ts** — Color palette definitions
- **lib/seed-assets.ts** — Data structure documentation

---

## Useful Links

- [Next.js Docs](https://nextjs.org/docs)
- [Tailwind CSS Reference](https://tailwindcss.com/docs)
- [React 18 Docs](https://react.dev)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)

---

**Last Updated:** 2026-09-01  
**Version:** 1.0.0-prototype  
**Maintainer:** Kurogami Team
