import { Testimonial, FaqItem } from "@/types";

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "t-1",
    quote:
      "Before ResVor, table no-shows were costing us upwards of $12,000 every single weekend. With automated security deposit verification and direct guest payments, our no-show rate plummeted to under 2%. The dual calendar and list views make our floor operations seamless.",
    author: "Elena Rostova",
    role: "General Operations Director",
    venue: "The Velvet Room NYC",
    city: "New York, NY",
    metric: "98.4%",
    metricLabel: "Table Reservation Realization",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80",
  },
  {
    id: "t-2",
    quote:
      "The Guest Book CRM alone paid for the system in week one. Our staff immediately knows when a VIP guest walks through the door, what champagne they drink, and their exact birthdate. The automated birthday SMS campaign generated 42 private table reservations in our first month.",
    author: "Marcus Sterling",
    role: "Managing Partner & Nightlife Lead",
    venue: "Aura Sky Lounge & Terrace",
    city: "Austin, TX",
    metric: "3.4x",
    metricLabel: "Repeat VIP Spend Multiplier",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80",
  },
  {
    id: "t-3",
    quote:
      "We operate 4 nightlife venues across South Beach. Managing them from one clean portal without logging in and out was a game changer. Plus, not having to store card details while still securing upfront deposits eliminated our fraud disputes completely.",
    author: "Devon Vance",
    role: "VP of Hospitality & Entertainment",
    venue: "Onyx Hospitality Group",
    city: "Miami Beach, FL",
    metric: "$340k",
    metricLabel: "Year-to-Date Deposit Volume",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80",
  },
];

export const FAQ_ITEMS: FaqItem[] = [
  {
    category: "Security & Payments",
    question: "How does ResVor handle guest card data and direct payments?",
    answer:
      "ResVor implements end-to-end tokenization adhering strictly to PCI-DSS Level 1 security standards. Guests process payments using their own credit/debit cards or Apple Pay directly through the secure manager or patron interface. Crucially, the platform never stores sensitive raw credit card numbers or CVVs on our servers, ensuring zero card liability for your venue.",
  },
  {
    category: "Events & Booking",
    question: "How does the dual Calendar and List event management system work?",
    answer:
      "Our dual interface provides two distinct workflows: Visual Calendar view lets your managers tap directly into specific dates and time blocks to inspect capacity, conflicting bookings, and schedule headliners. The List view gives floor staff and hosts an ultra-fast data table where they can instantly adjust headcount caps, record door ticket proceeds, and mark security deposits as paid to lock in reservations.",
  },
  {
    category: "Guest CRM",
    question: "Can we migrate our existing guest list from OpenTable, SevenRooms, or Excel spreadsheets?",
    answer:
      "Yes. ResVor features a universal CSV import engine. You can upload existing spreadsheets containing guest names, phone numbers, emails, birthdays, and historical notes in under 60 seconds. Our concierge onboarding team also assists Enterprise clients with custom data sanitization and historical spend mapping.",
  },
  {
    category: "Guest CRM",
    question: "How do custom guest attributes and birthday campaigns work?",
    answer:
      "You can add unlimited custom fields to any guest profile—such as preferred spirits, seating preferences, corporate affiliations, and anniversary dates. ResVor's Campaign Studio automatically queries this database to trigger hyper-personalized SMS or email invitations 14 days before a guest's birthday with tailored incentives like complimentary champagne or priority booth hold.",
  },
  {
    category: "Setup & Onboarding",
    question: "Can we manage multiple venue locations under a single enterprise account?",
    answer:
      "Absolutely. Multi-venue hospitality groups and lounge managers can switch seamlessly between different lounge locations from a single master web dashboard. You can configure unique operating hours, distinct bottle service menus, and location-specific staff permissions while maintaining centralized revenue and guest intelligence.",
  },
  {
    category: "Setup & Onboarding",
    question: "How long does it take to train lounge hosts and floor staff?",
    answer:
      "ResVor was designed from the ground up for high-tempo nightlife environments where lighting is dim and speed is critical. Most door hosts and floor managers master the interface in less than 20 minutes. We provide interactive staff walkthroughs, printable cheat sheets, and 24/7 weekend priority operational support.",
  },
];

