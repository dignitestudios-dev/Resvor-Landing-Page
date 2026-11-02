export interface GuestProfile {
  id: string;
  name: string;
  email: string;
  phone: string;
  birthMonthDay: string;
  category: "VIP Patron" | "Birthday" | "Corporate" | "Regular" | "Influencer";
  totalVisits: number;
  lifetimeSpend: number;
  lastVisit: string;
  notes: string;
  preferredDrinks: string[];
  depositConfirmed: boolean;
}

export interface LoungeEvent {
  id: string;
  title: string;
  date: string;
  time: string;
  hostName: string;
  eventType: "Birthday Celebration" | "VIP Table Takeover" | "Corporate Mixer" | "Guest DJ Night" | "Private Buyout";
  attendeeLimit: number;
  currentRsvp: number;
  securityDeposit: number;
  depositStatus: "Paid & Confirmed" | "Pending Payment" | "Refunded" | "Waived";
  paymentMethod: "Credit Card" | "Apple Pay" | "Wire / ACH" | "Cash on Arrival";
  budget: number;
  tableArea: string;
}

export interface ServiceItem {
  id: string;
  name: string;
  category: "Bottle Service" | "VIP Section" | "Dining & Pairings" | "Entertainment";
  description: string;
  timingSlots: string;
  capacity: string;
  price: number;
  depositRequired: number;
  popular?: boolean;
  image: string;
}

export interface LoungeVenue {
  id: string;
  name: string;
  slug: string;
  tagline: string;
  city: string;
  neighborhood: string;
  address: string;
  rating: number;
  reviewCount: number;
  priceTier: "$$$" | "$$$$" | "$$$$$";
  category: "Rooftop Lounge" | "Speakeasy" | "Nightclub" | "Cocktail Lounge" | "VIP Club";
  heroImage: string;
  gallery: string[];
  availableTonight: number;
  vibeTags: string[];
  musicGenres: string[];
  operatingHours: string;
  featuredSpecial: string;
}

export interface MarketingTemplate {
  id: string;
  name: string;
  type: "SMS" | "Email";
  occasion: "Birthday" | "Anniversary" | "Weekend Headliner" | "VIP Drop" | "Re-engagement";
  targetSegment: string;
  audienceCount: number;
  messageContent: string;
  subjectLine?: string;
  conversionRate: string;
}

export interface PricingPlan {
  id: string;
  name: string;
  tagline: string;
  monthlyPrice: number;
  annualPrice: number;
  popular?: boolean;
  features: string[];
  limits: {
    venues: string;
    guestProfiles: string;
    campaigns: string;
    staffSeats: string;
  };
  ctaText: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  venue: string;
  city: string;
  metric: string;
  metricLabel: string;
  avatar: string;
}

export interface FaqItem {
  question: string;
  answer: string;
  category: "Security & Payments" | "Guest CRM" | "Events & Booking" | "Setup & Onboarding";
}

