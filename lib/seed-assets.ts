export interface RWAAsset {
  id: string
  name: string
  class: 'Real Estate' | 'Aviation' | 'Watches' | 'Carbon' | 'Collectibles' | 'Private Credit'
  location: string
  status: 'Open' | 'Coming Soon' | 'Reserved'
  indicativeValue: string
  minimumParticipation: string
  projectedTerm: string
  participationNote: string
  image: string
  overview: string
  structure: {
    claimRepresentation: string
    participationIntent: string
    reportingCadence: string
  }
  liquidity: string
  riskDisclosure: string
}

export const seedAssets: RWAAsset[] = [
  {
    id: '1',
    name: 'Brickell Residential Claim',
    class: 'Real Estate',
    location: 'Miami, FL',
    status: 'Open',
    indicativeValue: '$2.4M',
    minimumParticipation: '$25k',
    projectedTerm: '24 months',
    participationNote: 'Structured claim on completed residential development. Illustrative returns based on market benchmarks.',
    image: '🏢',
    overview: 'Premium residential property in Miami\'s Brickell district. This claim structure provides exposure to property appreciation and rental income distributions. Participants receive quarterly reports on property performance metrics, occupancy rates, and maintenance activities. Capital is represented through tokenized claim units.',
    structure: {
      claimRepresentation: 'Participants receive fractional claims encoded as marketplace units. Each unit represents proportional rights to cash distributions.',
      participationIntent: 'Economic exposure without direct property management. Claim holder participates in specified cash flows per the term schedule.',
      reportingCadence: 'Quarterly performance snapshots shared through Kurogami network showing occupancy, revenue, and asset condition.'
    },
    liquidity: 'Claim holders may request liquidity access after 12-month holding period. Kurogami marketplace visibility may facilitate secondary distribution to other network participants.',
    riskDisclosure: 'Real estate markets are subject to interest rate cycles, tenant demand fluctuations, and regional economic conditions. Capital at risk in live deployments. This is illustrative data only. Not an investment offer.'
  },
  {
    id: '2',
    name: 'Light-Jet Charter Exposure',
    class: 'Aviation',
    location: 'Global Fleet',
    status: 'Open',
    indicativeValue: '$1.8M',
    minimumParticipation: '$50k',
    projectedTerm: '36 months',
    participationNote: 'Diversified charter utilization rights. Demo metrics reflect typical charter revenue profiles.',
    image: '✈️',
    overview: 'Participation claim on a managed light-jet charter portfolio operating across North America and Caribbean routes. Claim structure captures revenue from charter bookings, maintenance reserves, and fuel efficiency gains. Participants receive monthly utilization reports and revenue distributions.',
    structure: {
      claimRepresentation: 'Claim units represent fractional rights to charter revenue pool. Revenue allocation determined by utilization and booking rates.',
      participationIntent: 'Exposure to aviation revenue streams without direct aircraft ownership or pilot staffing responsibilities.',
      reportingCadence: 'Monthly flight hour reports, utilization dashboards, and revenue summaries delivered through secure Kurogami portal.'
    },
    liquidity: 'Early liquidity available through structured buyback after 18-month term. Marketplace may facilitate secondary participant transfers.',
    riskDisclosure: 'Aviation assets subject to fuel price volatility, regulatory changes, and demand cycles. Maintenance events may impact cash flow. Capital at risk. Illustrative only.'
  },
  {
    id: '3',
    name: 'Heritage Watch Basket',
    class: 'Watches',
    location: 'Geneva, Switzerland',
    status: 'Coming Soon',
    indicativeValue: '$950k',
    minimumParticipation: '$15k',
    projectedTerm: '18 months',
    participationNote: 'Curated rare watch portfolio. Coming soon to marketplace. Valuation based on comparable auction benchmarks.',
    image: '⌚',
    overview: 'Securitized claim on a carefully curated portfolio of vintage and contemporary horology pieces held by specialized custodian. Exposure to collector market dynamics and scarcity premiums. Participants receive bi-annual appraisals and condition assessments.',
    structure: {
      claimRepresentation: 'Each claim unit represents fractional custody rights and economic exposure to portfolio appreciation.',
      participationIntent: 'Collector market participation without direct custody, insurance, or storage responsibilities.',
      reportingCadence: 'Bi-annual professional appraisals and condition reports. Annual provenance documentation updates.'
    },
    liquidity: 'Portfolio sale at term end. Marketplace may create secondary trading channel for early exit at prevailing valuations.',
    riskDisclosure: 'Collectible watch markets are illiquid and subject to taste/trend shifts. Appraisal volatility common. Capital at risk. Data illustrative only.'
  },
  {
    id: '4',
    name: 'Verified Carbon Lot',
    class: 'Carbon',
    location: 'Southeast Asia Project',
    status: 'Open',
    indicativeValue: '$620k',
    minimumParticipation: '$10k',
    projectedTerm: '12 months',
    participationNote: 'Verified carbon credit pool. Demo yield assumes mid-market pricing. Market-linked valuation.',
    image: '🌱',
    overview: 'Participation in a verified carbon credit retirement pool from validated reforestation and emissions reduction projects across Southeast Asia. Credits are verified by third-party auditors and registered on recognized registries. Quarterly reports show project progress and credit verification status.',
    structure: {
      claimRepresentation: 'Claim units represent fractional ownership of verified carbon credit inventory held in escrow.',
      participationIntent: 'ESG-aligned exposure to carbon market mechanics and credit appreciation. Participants benefit from market value increases.',
      reportingCadence: 'Quarterly project impact reports, credit verification updates, and market price benchmark tracking.'
    },
    liquidity: 'Claim holders may exit via structured buyback at rolling market prices. Kurogami network visibility may enable peer-to-peer transfers.',
    riskDisclosure: 'Carbon credit markets are evolving and subject to regulatory changes. Verification standards vary by jurisdiction. Market liquidity may be limited. Capital at risk. Illustrative data only.'
  },
  {
    id: '5',
    name: 'Contemporary Art Cabinet',
    class: 'Collectibles',
    location: 'London, UK',
    status: 'Reserved',
    indicativeValue: '$1.2M',
    minimumParticipation: '$50k',
    projectedTerm: '24 months',
    participationNote: 'Emerging artist selection. Reserved for existing participants. Metrics from gallery comparables.',
    image: '🎨',
    overview: 'Fractional claim on a curated selection of works by emerging contemporary artists held by specialized art custodian. Exposure to artist market development and institutional acquisition. Semi-annual appraisals and exhibition documentation provided.',
    structure: {
      claimRepresentation: 'Claim units represent fractional rights to artwork appreciation and institutional sale proceeds.',
      participationIntent: 'Art market participation without direct conservation, insurance, or exhibition management.',
      reportingCadence: 'Semi-annual valuations, exhibition placement records, and artist career milestone tracking.'
    },
    liquidity: 'Typically held to term for maximum appreciation. Secondary marketplace may facilitate earlier exits if demand develops.',
    riskDisclosure: 'Art markets are illiquid and subject to taste shifts and artist career volatility. Authentication and provenance critical. Capital at risk. Data illustrative only.'
  },
  {
    id: '6',
    name: 'Short-Duration Private Credit',
    class: 'Private Credit',
    location: 'North America',
    status: 'Open',
    indicativeValue: '$3.1M',
    minimumParticipation: '$100k',
    projectedTerm: '6 months',
    participationNote: 'Senior credit claims on private borrowers. Demo yields reflect mid-market structuring. Secured or unsecured.',
    image: '💳',
    overview: 'Participation claim on a diversified portfolio of short-duration senior and mezzanine credit facilities to North American middle-market companies. Structured claims capture regular interest distributions and principal repayment. Monthly portfolio reporting shows borrower performance, payment status, and covenant compliance.',
    structure: {
      claimRepresentation: 'Claim units represent pro-rata participations in credit facility cash flows with defined seniority.',
      participationIntent: 'Fixed-income-like exposure to private credit spreads without direct borrower relationships or underwriting.',
      reportingCadence: 'Monthly portfolio summaries, borrower covenant status, and payment tracking. Quarterly deep-dives on asset quality.'
    },
    liquidity: 'Term structure typically allows redemption at par after initial 6-month period. Kurogami may facilitate secondary transfers at prevailing valuations.',
    riskDisclosure: 'Private credit involves credit risk, interest rate risk, and potential borrower defaults. Performance sensitive to economic cycles. Capital at risk. Illustrative metrics only. Not a guarantee of returns.'
  }
]
