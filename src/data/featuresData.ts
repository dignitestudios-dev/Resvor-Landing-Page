export interface FeatureDeepItem {
  id: string;
  badge: string;
  title: string;
  headline: string;
  description: string;
  highlights: string[];
  specs: { label: string; value: string }[];
  figmaReference: string;
}

export const PLATFORM_FEATURES: FeatureDeepItem[] = [
  {
    id: "guest-book",
    badge: "Guest Book & CRM",
    title: "Comprehensive Guest Profiling & Memory",
    headline: "Every VIP, preference, and celebration stored in one secure hospitality ledger.",
    description:
      "Transform transient visitors into lifelong high-spending patrons. Lounge managers can record essential guest attributes, birthday and anniversary milestones, past hosted events, and preferred spirits with customizable attributes.",
    highlights: [
      "Rich Guest Dossiers: First & last names, verified contacts, birthday tracking, and optional guest photo.",
      "Custom Occasion Fields: Tag high-net-worth VIPs, corporate accounts, anniversary milestones, and influencer tiers.",
      "Instant Multi-Param Search: Filter instantly by birth month, preferred category (live music, rooftop, private dining), or lifetime spend.",
      "1-Click CSV Data Export: Seamlessly export custom segments or full guest rosters for offline compliance and enterprise reporting.",
    ],
    specs: [
      { label: "Search Latency", value: "< 15ms" },
      { label: "Custom Attributes", value: "Unlimited" },
      { label: "Data Portability", value: "Instant CSV / API" },
      { label: "Birthday Alerts", value: "Automated 14-Day Advance" },
    ],
    figmaReference: "Guest Book & CRM Architecture",
  },
  {
    id: "dual-events",
    badge: "Dual Event Architecture",
    title: "Visual Calendar & Rapid List Event Management",
    headline: "Switch effortlessly between visual scheduling and lightning-fast operational list views.",
    description:
      "Whether your floor manager is planning a month of guest headliners or quickly confirming a security deposit at the door, Resvor provides the optimal dual-interface workflow.",
    highlights: [
      "Visual Calendar View: Click any date and time block to inspect venue section capacity, conflicting bookings, and promoter schedules.",
      "Rapid List View: Sort and edit events on the fly, adjust attendee caps, log door ticket proceeds, and update security deposit statuses.",
      "Deposit Confirmation Engine: Lock venue sections only when security deposits are confirmed, completely eliminating costly empty table no-shows.",
      "Omni-Channel Payment Tracking: Reconcile credit cards, digital wallet checkouts, bank transfers, and cash collections under one unified audit log.",
    ],
    specs: [
      { label: "Views Supported", value: "Calendar Grid & Compact List" },
      { label: "Deposit Verification", value: "Real-Time Stripe Token" },
      { label: "Capacity Guard", value: "Automatic Overbook Protection" },
      { label: "Audit Log", value: "Immutable Ledger" },
    ],
    figmaReference: "Dual Event Scheduling Engine",
  },
  {
    id: "service-catalog",
    badge: "Services & Direct Payments",
    title: "Custom Service Listings & Zero-Friction Payments",
    headline: "Let patrons browse VIP tables, bottle packages, and private suites with instant card checkout.",
    description:
      "Lounge operators can curate rich service listings with high-res imagery, available time windows, guest caps, and pricing. Guests pay directly from the portal without the venue ever taking on sensitive card liability.",
    highlights: [
      "Custom Service Builder: Upload images, write detailed sensory descriptions, configure available time windows, and define minimum spends.",
      "Direct Guest Payments: Guests complete transactions seamlessly using their own credit/debit cards or Apple Pay.",
      "Zero Card Storage Security: All payment credentials are encrypted and tokenized via PCI-DSS compliant vaults. Zero raw card numbers stored on servers.",
      "Automated Receipt & Confirmation: Real-time SMS and email confirmations with digital entry QR codes sent immediately upon payment.",
    ],
    specs: [
      { label: "Payment Security", value: "PCI-DSS Level 1 Encrypted" },
      { label: "Raw Card Storage", value: "0% (Zero Liability)" },
      { label: "Supported Methods", value: "Cards, Apple Pay, Google Pay" },
      { label: "Payout Cadence", value: "Next-Day Direct Payout" },
    ],
    figmaReference: "Service Catalog & Payment Vault",
  },
  {
    id: "marketing-studio",
    badge: "Campaign Studio",
    title: "Segmented Marketing & Automated Retargeting",
    headline: "Turn guest data into packed tables with personalized SMS and email campaigns.",
    description:
      "Say goodbye to generic spam blasts. Leverage rich guest profiling data to send hyper-personalized invitations, celebratory birthday bottles, and VIP headliner announcements with measurable conversion tracking.",
    highlights: [
      "Ready-to-Deploy Templates: Professionally crafted SMS and email templates designed specifically for upscale lounges and nightclubs.",
      "Intelligent Segmentation: Target guests celebrating birthdays in the upcoming two weeks, high-roller VIPs, or corporate event decision makers.",
      "Dynamic Personalization: Automatically inject first name, favored spirit, and custom booking links directly into every message.",
      "Conversion & ROI Analytics: Track open rates, reservation clicks, and actual revenue generated per campaign in real time.",
    ],
    specs: [
      { label: "Avg Open Rate (SMS)", value: "98.2%" },
      { label: "Birthday Re-booking Lift", value: "+34.8%" },
      { label: "Compliance", value: "100% TCPA & CAN-SPAM" },
      { label: "Template Customization", value: "Full Rich Text & HTML" },
    ],
    figmaReference: "Automated Engagement Studio",
  },
  {
    id: "enterprise-hierarchy",
    badge: "Multi-Location & Admin",
    title: "Multi-Venue Command & Real-Time Revenue Dashboards",
    headline: "Manage single speakeasies or nationwide nightlife conglomerates from a single pane.",
    description:
      "Scale seamlessly from one flagship location to multi-city hospitality groups. Super admins gain enterprise revenue oversight, subscriber metrics, and granular staff role permissions.",
    highlights: [
      "Single-Login Multi-Venue: Seamlessly toggle between multiple lounge locations, menus, and staff rosters without signing out.",
      "Executive Revenue Tracking: Aggregated metrics displaying monthly recurring revenue, table spend trends, and average revenue per patron (ARPU).",
      "Granular Role Permissions: Restrict host stand staff to guest check-in while granting general managers financial and pricing controls.",
      "Multi-Factor Authentication (MFA): Enterprise-grade identity verification and strong credential enforcement protect sensitive patron data.",
    ],
    specs: [
      { label: "Venues per Account", value: "1 to 50+ Venues" },
      { label: "Role Hierarchy", value: "Super Admin, GM, Host, Promoter" },
      { label: "Security Protocol", value: "MFA & Role-Based RBAC" },
      { label: "Data Encryption", value: "AES-256 at Rest & Transit" },
    ],
    figmaReference: "Multi-Venue Enterprise Console",
  },
];
