# Kurogami RWA Marketplace - Architecture & User Flow

## 🏗️ Application Architecture

```
┌─────────────────────────────────────────────────────────────────┐
│                    KUROGAMI RWA MARKETPLACE                     │
│                   (Next.js 14 + TypeScript)                     │
└─────────────────────────────────────────────────────────────────┘

                         ┌──────────────┐
                         │  Root Layout │ (app/layout.tsx)
                         │ Header/Footer│
                         └──────┬───────┘
                                │
                ┌───────────────┼───────────────┐
                │               │               │
                ▼               ▼               ▼
            ┌────────┐      ┌────────┐    ┌──────────┐
            │ /rwa   │      │/rwa/:id│    │Home→/rwa │
            │ (Home) │      │(Detail)│    │Redirect  │
            └────────┘      └────────┘    └──────────┘
                │               │
                │               ▼
                │          ┌──────────────┐
                │          │ WaitlistForm │
                │          │  Component   │
                │          └──────────────┘
                │
        ┌───────┴───────┐
        │               │
        ▼               ▼
   ┌──────────┐  ┌──────────────┐
   │Claim Path│  │Liquidity Path│
   │ (Explainer) (Explainer)
   └──────────┘  └──────────────┘
```

---

## 📱 Page Routes & Navigation

```
Entry Point: http://localhost:3000
                    │
                    ▼ (redirect)
              /rwa (HOME)
            ┌─────────────┐
            │             │
    ┌───────┴────────┬────┴──────────┐
    │                │               │
    ▼                ▼               ▼
(Click Asset)   (Learn Path)    (Learn Path)
    │           (Explainer 1)   (Explainer 2)
    ▼
/rwa/[id]         /rwa/claim-path   /rwa/liquidity-path
(Asset Detail)    (4-Step Flow)     (3 Pathways)
    │                 │                  │
    ▼                 └──────┬───────────┘
(Form Submit)            │
                    (Back to /rwa)
```

---

## 🧩 Component Hierarchy

```
Layout (app/layout.tsx)
├── Header
│   ├── Logo/Brand
│   └── PrototypeBadge
│
├── Main Content
│   ├── /rwa (Home Page)
│   │   ├── Hero Section
│   │   ├── Stats Strip
│   │   │   └── MetricCards (4×)
│   │   ├── Filter Bar
│   │   │   └── FilterChips (7×)
│   │   └── Asset Grid
│   │       └── AssetCards (1-6×)
│   │
│   ├── /rwa/[id] (Asset Detail)
│   │   ├── Hero
│   │   ├── Metrics
│   │   │   └── MetricCards (4×)
│   │   ├── Content Grid
│   │   │   ├── Main Section
│   │   │   │   ├── Overview
│   │   │   │   ├── Structure
│   │   │   │   ├── Liquidity
│   │   │   │   └── Risk Box
│   │   │   └── Sidebar
│   │   │       ├── CTA (GoldButton)
│   │   │       └── WaitlistForm
│   │   ├── Related Assets
│   │   │   └── AssetCards (3×)
│   │   └── Footer Banner
│   │
│   ├── /rwa/claim-path (Explainer)
│   │   ├── Hero
│   │   ├── 4-Step Flow
│   │   │   └── Step Cards
│   │   ├── Principles Grid
│   │   └── CTA Back
│   │
│   └── /rwa/liquidity-path (Explainer)
│       ├── Hero
│       ├── 3 Pathways
│       │   └── Pathway Cards
│       ├── Asset Tiers Grid
│       ├── Concepts Grid
│       └── CTA Back
│
└── Footer
    ├── About Section
    ├── Links
    └── Disclosure
```

---

## 🎨 Component Usage Map

```
REUSABLE COMPONENTS                PAGES USING THEM
─────────────────────────────────────────────────────

GoldButton ─────────────────┬──→ All pages (CTAs)
                            ├──→ Sidebar (Request/Waitlist)
                            └──→ Explainers (Links back)

StatusBadge ───────────────┬──→ AssetCard
                           ├──→ Asset Detail page
                           └──→ Home page detail

FilterChip ────────────────→ Home page (filter bar)

MetricCard ────────────────┬──→ Stats strip
                           ├──→ Detail page metrics
                           └──→ Info sections

AssetCard ─────────────────┬──→ Home page grid
                           └──→ Related assets grid

PrototypeBadge ────────────┬──→ Header
                           ├──→ All pages
                           └──→ Info banners

WaitlistForm ──────────────→ Asset detail sidebar

Header ────────────────────→ Root layout (all pages)

Footer ────────────────────→ Root layout (all pages)
```

---

## 💾 Data Flow

```
seed-assets.ts (6 Demo Assets)
         │
         ├─→ AssetCard Component
         │   └─→ Rendered in Grid
         │       └─→ Links to /rwa/[id]
         │
         └─→ Asset Detail Page [id]
             ├─→ Displays Full Details
             ├─→ Show WaitlistForm
             │   └─→ On Submit: Console.log (Demo)
             └─→ Show Related Assets
                 └─→ Links to Other Assets
```

---

## 🎯 User Journey

```
┌─────────────────────────────────────────────────────────┐
│  Step 1: Visit http://localhost:3000                   │
│          (redirects to /rwa)                            │
└────────────────────┬────────────────────────────────────┘
                     │
┌────────────────────▼────────────────────────────────────┐
│  Step 2: Browse Marketplace                            │
│  ├─ View Hero Section                                  │
│  ├─ See Stats (assets, classes, total value)          │
│  ├─ Filter Assets by Class                            │
│  └─ Scroll Asset Grid                                 │
└────────────────────┬────────────────────────────────────┘
                     │
        ┌────────────┴────────────┐
        │                         │
        ▼                         ▼
   JOURNEY A              JOURNEY B
   Click "View"           Click "Understand
   Details                Claim Path"
        │                         │
        ▼                         ▼
   Asset Detail            Claim Path
   ├─ Full Overview        ├─ 4-Step Flow
   ├─ Structure Info       ├─ Principles
   ├─ Liquidity Options    └─ Link Back
   ├─ Risk Disclosure      
   ├─ Fill Form            JOURNEY C
   └─ Submit Waitlist      Click "Understand
                           Liquidity Path"
                                │
                                ▼
                           Liquidity Path
                           ├─ 3 Pathways
                           ├─ Asset Tiers
                           └─ Link Back
```

---

## 🎨 Design System Layer

```
┌─────────────────────────────────────────────────────────┐
│              TAILWIND CSS CONFIGURATION                 │
├─────────────────────────────────────────────────────────┤
│                                                         │
│  Colors:                                               │
│  ├─ Base:      #0a0a0a (near-black)                   │
│  ├─ Surface:   #1a1a1a, #262626 (charcoal)            │
│  ├─ Gold:      #e8b514 (accents)                      │
│  ├─ Text:      #f5f1e8 (cream), #a8a8a8 (dim)        │
│  └─ Status:    emerald, amber, slate (badges)        │
│                                                         │
│  Typography:                                           │
│  ├─ Headlines: Bold, 4xl-6xl                          │
│  ├─ Body:      Regular, base-lg                       │
│  └─ Labels:    Semibold uppercase                     │
│                                                         │
│  Spacing:                                              │
│  ├─ Sections: py-12 to py-32                          │
│  ├─ Cards:    p-4 to p-8                              │
│  └─ Gap:      gap-4 to gap-12                         │
│                                                         │
│  Responsive:                                           │
│  ├─ Mobile:   1 col, full width                       │
│  ├─ Tablet:   2 cols, md: breakpoint                  │
│  └─ Desktop:  3 cols, lg: breakpoint                  │
│                                                         │
└─────────────────────────────────────────────────────────┘
```

---

## 🔄 Form Submission Flow

```
User Page: /rwa/[id]
    │
    ├─→ Click "Request Access" / "Join Waitlist"
    │   └─→ Shows WaitlistForm Component
    │
    ├─→ Fill Form
    │   ├─ name: text input
    │   ├─ contact: email input
    │   ├─ assetClass: dropdown
    │   └─ ticketSize: dropdown
    │
    ├─→ Click "Request Participation Access"
    │   └─→ Form Submission
    │
    ├─→ Success State
    │   ├─ Display: "✓ Request Received"
    │   ├─ Show: Thank you message
    │   ├─ Console.log: Form data (demo)
    │   └─ After 3s: Reset form
    │
    └─→ User Can:
        ├─ Close form and continue browsing
        ├─ View other assets
        └─ Fill waitlist on different assets

Note: In production, would connect to backend API
      to save submissions to database/email service
```

---

## 📊 Asset Listing Structure

```
Each RWAAsset Object Contains:
│
├─ Identity
│  ├─ id: unique identifier
│  ├─ name: asset name
│  └─ image: emoji icon
│
├─ Classification
│  ├─ class: category (6 types)
│  ├─ location: geographic info
│  └─ status: Open/Coming/Reserved
│
├─ Metrics
│  ├─ indicativeValue: $X.XM
│  ├─ minimumParticipation: $XXk
│  ├─ projectedTerm: XX months
│  └─ participationNote: demo disclaimer
│
├─ Details
│  ├─ overview: narrative description
│  ├─ structure: {
│  │   ├─ claimRepresentation
│  │   ├─ participationIntent
│  │   └─ reportingCadence
│  │ }
│  ├─ liquidity: pathway explanation
│  └─ riskDisclosure: important warnings
│
└─ Usage
   ├─ AssetCard Component ─→ Grid Display
   ├─ Detail Page ─────────→ Full Information
   └─ Filter Logic ────────→ Class Selection
```

---

## 🚀 Deployment Architecture (Example: Vercel)

```
┌──────────────────────────────────┐
│   GitHub Repository              │
│   rwamarketplace/                │
└────────────┬─────────────────────┘
             │
             ├─→ Push to main
             │
┌────────────▼─────────────────────┐
│   Vercel Auto-Deploy             │
│   ├─ Install dependencies        │
│   ├─ Run build                   │
│   ├─ Optimize for production     │
│   └─ Deploy to CDN               │
└────────────┬─────────────────────┘
             │
             ▼
┌──────────────────────────────────┐
│   Production URL                 │
│   https://your-domain.vercel.app │
│                                  │
│   Ready for:                     │
│   • Global traffic               │
│   • Custom domains               │
│   • Preview deployments          │
│   • Analytics tracking           │
└──────────────────────────────────┘
```

---

## 📈 Performance Metrics

```
Next.js 14 Optimizations:
✓ Automatic code splitting per route
✓ Image optimization ready
✓ CSS-in-JS with Tailwind (minimal bundle)
✓ Client-side navigation (SPA-like)
✓ Pre-loading of linked pages
✓ Responsive images support
✓ Lazy loading ready

Expected Performance:
├─ Initial Load:  < 2s
├─ Navigation:    < 100ms
├─ Lighthouse:    90+ score (mobile)
└─ Accessibility: WCAG 2.1 AA ready
```

---

## 🔒 Security Considerations

```
Built-in Protections:
✓ TypeScript strict mode (type safety)
✓ Next.js CSRF protection
✓ Content Security Policy ready
✓ No sensitive data in frontend
✓ Form validation before submission
✓ Sanitized component rendering

Future Additions:
- Rate limiting on API endpoints
- JWT authentication
- Input validation library (zod)
- HTTPS enforcement
- Environment variables for secrets
```

---

## 📚 File Dependencies

```
app/layout.tsx
├─→ components/Header
├─→ components/Footer
├─→ app/globals.css
└─→ React (implicit)

app/rwa/page.tsx
├─→ lib/seed-assets.ts (data)
├─→ components/AssetCard.tsx
├─→ components/FilterChip.tsx
├─→ components/MetricCard.tsx
├─→ components/GoldButton.tsx
├─→ components/PrototypeBadge.tsx
└─→ React hooks (useState)

app/rwa/[id]/page.tsx
├─→ lib/seed-assets.ts
├─→ next/navigation (notFound)
├─→ All common components
├─→ components/WaitlistForm.tsx
└─→ React hooks

components/WaitlistForm.tsx
└─→ 'use client' (client component)
```

---

This architecture supports:
- ✅ Easy maintenance
- ✅ Scalability
- ✅ Performance
- ✅ Type safety
- ✅ Responsive design
- ✅ Future enhancements
