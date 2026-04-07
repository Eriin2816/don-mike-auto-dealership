export const siteConfig = {
  business: {
    name: "Don Mike Auto Dealership",
    shortName: "Don Mike Auto",
    phone: "(352) 888-2293",
    phoneHref: "tel:+13528882293",
    email: "dansoumika@yahoo.com",
    emailHref: "mailto:dansoumika@yahoo.com",
    address: "Gainesville, FL",
    city: "Gainesville, FL",
    region: "Alachua County, FL",
    bookingHref: "https://api.leadconnectorhq.com/widget/booking/RQpPlKrgCrnAO5kBTthc",
  },

  cta: {
    label: "Schedule a Call",
    href: "/book-a-call",
  },

  nav: [
    { label: "Vehicles", href: "/car-collections" },
    { label: "Why Mazda", href: "/#why-mazda" },
    { label: "Financing", href: "/#financing" },
    { label: "FAQ", href: "/#faq" },
    { label: "Book a Call", href: "/book-a-call" },
  ],

  meta: {
    title: "Don Mike Auto | New & Used Mazda in Gainesville, FL",
    description:
      "Browse new and certified pre-owned Mazda vehicles at Don Mike Auto in Gainesville, FL. Serving UF students, young professionals, and families across Alachua County. Transparent financing, no pressure.",
    ogImage: "/og-image.png",
  },

  // ─── TRUST STRIP ─────────────────────────────────────────────────────────────
  trust: [
    { label: "Mazda-Focused Specialists", icon: "shield" },
    { label: "Transparent Financing", icon: "finance" },
    { label: "Trade-In Appraisals Welcome", icon: "trade" },
    { label: "Serving All of Alachua County", icon: "map" },
    { label: "No-Pressure Buying Process", icon: "check" },
    { label: "Certified Pre-Owned Available", icon: "star" },
  ],

  // ─── FEATURED VEHICLES ────────────────────────────────────────────────────────
  featuredVehicles: [
    {
      model: "CX-5",
      slug: "cx-5",
      tagline: "Gainesville's best-selling Mazda. Built for daily life in North Florida.",
      highlights: [
        "Available i-ACTIV AWD",
        "Top safety ratings",
        "Refined interior above its class",
      ],
      cta: "Inquire About CX-5",
      image: "/hero.png",
    },
    {
      model: "CX-30",
      slug: "cx-30",
      tagline: "Compact enough for campus. Premium enough for everything after.",
      highlights: [
        "Turbocharged engine option",
        "Connected infotainment suite",
        "Versatile cargo flexibility",
      ],
      cta: "Inquire About CX-30",
      image: "/cx-30.png",
    },
    {
      model: "CX-50",
      slug: "cx-50",
      tagline: "Performance SUV for professionals who demand more from every drive.",
      highlights: [
        "Available 2.5T turbo engine",
        "Trail-capable chassis",
        "Elevated Premium Plus trim",
      ],
      cta: "Inquire About CX-50",
      image: "/cx-50.png",
    },
    {
      model: "CX-90",
      slug: "cx-90",
      tagline: "Three rows. More space. Built for Alachua County family life.",
      highlights: [
        "3-row seating for up to 8",
        "PHEV option available",
        "Luxury-class interior",
      ],
      cta: "Inquire About CX-90",
      image: "/cx-90.png",
    },
    {
      model: "Mazda3 Sedan",
      slug: "mazda3-sedan",
      tagline: "The everyday driver that refuses to feel ordinary.",
      highlights: [
        "Available 227-hp turbo",
        "Available i-ACTIV AWD",
        "Refined interior above its class",
      ],
      cta: "Inquire About Mazda3 Sedan",
      image: "/mazda3-sedan.png",
    },
    {
      model: "Mazda3 Hatchback",
      slug: "mazda3-hatchback",
      tagline: "All the style. All the practicality. None of the compromise.",
      highlights: [
        "Hatchback cargo versatility",
        "Sport-tuned suspension",
        "Manual or automatic available",
      ],
      cta: "Inquire About Mazda3 Hatch",
      image: "/mazda3-hatchback.png",
    },
  ],

  // ─── BUYER SEGMENTS ───────────────────────────────────────────────────────────
  buyerSegments: [
    {
      id: "students",
      title: "Students & First-Time Buyers",
      description:
        "UF and Santa Fe students: we understand tight budgets. We guide you through real payment options, first-time buyer financing, and certified pre-owned vehicles that make sense on an early-career income — no jargon, no pressure.",
      badge: "UF & Santa Fe",
      highlights: [
        "Certified Pre-Owned options",
        "First-time buyer financing",
        "Fuel-efficient models",
      ],
    },
    {
      id: "professionals",
      title: "Young Professionals",
      description:
        "Working at UF Health, the VA, or in Gainesville's growing professional sector? The CX-30 and CX-50 match your pace — premium technology, strong value retention, and a low total cost of ownership that holds up over time.",
      badge: "UF Health · VA · County",
      highlights: [
        "CX-30 and CX-50 bestsellers",
        "Technology-forward trims",
        "Low total cost of ownership",
      ],
    },
    {
      id: "families",
      title: "Families & County Commuters",
      description:
        "Alachua County families need space, top safety ratings, and long-term reliability. The CX-5, CX-50, and CX-90 are built for exactly that — and your trade-in may cover more of the down payment than you expect.",
      badge: "Alachua County",
      highlights: [
        "3-row options available",
        "Top NHTSA safety ratings",
        "Trade-in appraisal included",
      ],
    },
    {
      id: "tradeins",
      title: "Used & Trade-In Shoppers",
      description:
        "Not ready for new? Certified Pre-Owned Mazdas come with full inspection, vehicle history, and extended coverage. Transparent pricing, competitive trade-in appraisals, and flexible financing on used units — no games.",
      badge: "CPO Available",
      highlights: [
        "CPO multi-point inspected",
        "Competitive appraisals",
        "Flexible used financing",
      ],
    },
  ],

  // ─── HOW IT WORKS ─────────────────────────────────────────────────────────────
  howItWorks: [
    {
      step: "01",
      title: "Browse & Select",
      description:
        "Explore our current Mazda lineup and pre-owned inventory. If you want guidance, a quick call is all it takes — we'll match you to the right vehicle for your life and budget.",
    },
    {
      step: "02",
      title: "Talk Financing",
      description:
        "We walk you through real payment options — new, CPO, or used. Honest numbers. No inflated estimates, no fine-print surprises. Financing designed for Gainesville buyers at every income level.",
    },
    {
      step: "03",
      title: "Drive Home",
      description:
        "Book your appointment, finalize your deal, and leave in a Mazda that fits your life. The whole process is designed to be simple, fast, and completely pressure-free.",
    },
  ],

  // ─── WHY DON MIKE ─────────────────────────────────────────────────────────────
  whyDonMike: [
    {
      title: "Mazda-Focused Expertise",
      description:
        "We know the Mazda lineup inside and out — which trims matter, which models hold value, and which vehicle fits which buyer. Generic dealers sell everything. We know Mazda.",
    },
    {
      title: "Payment-Forward Process",
      description:
        "In a market where monthly cost matters, we lead with honest numbers. No bait-and-switch estimates. No sticker shock when you sit down to sign.",
    },
    {
      title: "Segment-Specific Guidance",
      description:
        "A UF student shopping a Mazda3 and a family evaluating a CX-90 have very different priorities. We tailor our guidance to your actual situation — not a recycled sales script.",
    },
    {
      title: "Same-Day Response",
      description:
        "Gainesville's auto corridor is competitive. When you reach out, we respond fast — same day, often within the hour. The first dealer to engage thoughtfully usually earns the deal.",
    },
    {
      title: "Transparent Trade-In Appraisals",
      description:
        "We appraise your current vehicle fairly and explain every number. If a trade-in works in your favor, we make it simple. If it doesn't, we'll tell you exactly why.",
    },
    {
      title: "No-Pressure Process",
      description:
        "Our process is built around informed decisions, not closing tactics. Ask every question you have. Take the time you need. We earn business by being straightforward.",
    },
  ],

  // ─── FINANCING SECTION ────────────────────────────────────────────────────────
  financing: {
    headline: "Financing That Starts With Your Reality",
    subheadline: "Honest numbers. Multiple lenders. Built for every type of Gainesville buyer.",
    body: "Whether you're financing your first vehicle, upgrading to a family SUV, or trading in something older — we work with multiple lenders to find terms that match your actual income and credit profile. Payment-forward means you know the real numbers before you walk in the door.",
    points: [
      "Multiple lenders for competitive rate options",
      "First-time buyer programs available",
      "CPO financing with extended coverage",
      "Trade-in value applied toward your down payment",
      "Flexible terms for all credit profiles",
    ],
    cta: "Discuss Financing Options",
  },

  // ─── FAQs ─────────────────────────────────────────────────────────────────────
  faqs: [
    {
      q: "Do you work with first-time buyers and students?",
      a: "Yes — regularly. We help first-time buyers and students understand exactly what they qualify for and which vehicle makes the most sense for their budget. Certified Pre-Owned options are often the best fit: lower payment, full inspection, and Mazda-backed coverage.",
    },
    {
      q: "What Mazda models do you carry?",
      a: "We specialize in the full current Mazda lineup — Mazda3 Sedan, Mazda3 Hatchback, CX-30, CX-5, CX-50, CX-70, and CX-90. We also carry a rotating selection of certified pre-owned Mazda vehicles. Book a call to ask about current availability.",
    },
    {
      q: "Can I get a trade-in appraisal before committing to a purchase?",
      a: "Absolutely — and we encourage it. Knowing your trade-in value upfront gives you a clear picture of your real cost and monthly payment before you commit to anything. Book a call and we'll walk through both at the same time.",
    },
    {
      q: "What financing options are available?",
      a: "We work with multiple lenders to find the best fit for your situation — whether you have excellent credit, limited credit history, or are buying for the first time. We'll show you real, qualified numbers — not estimates built to get you in the door.",
    },
    {
      q: "What is the difference between CPO and used?",
      a: "Certified Pre-Owned Mazdas go through a thorough multi-point inspection, include verified vehicle history, and come with extended Mazda-backed warranty coverage. Standard used inventory is priced to value and still comes with full disclosure. We'll explain the difference clearly so you can choose confidently.",
    },
    {
      q: "How do I schedule a visit or get more information?",
      a: "Book a call directly through our scheduling link — takes under two minutes. We'll confirm your appointment, answer any pre-visit questions, and make sure your time is well spent when you arrive.",
    },
    {
      q: "Do you serve buyers outside Gainesville city limits?",
      a: "Yes. We serve all of Alachua County and the surrounding area — including Newberry, Alachua, Archer, Waldo, High Springs, and beyond. If you're within a reasonable drive of Gainesville, we're worth the trip.",
    },
  ],

  // ─── FULL VEHICLE COLLECTION ─────────────────────────────────────────────────
  vehicleCollection: [
    {
      model: "Mazda3 Sedan",
      slug: "mazda3-sedan",
      buyerFit: "First-time buyers, students, and city commuters who want premium without the premium price.",
      highlights: [
        "Available 227-hp turbocharged engine",
        "Available i-ACTIV AWD",
        "Refined interior well above its price point",
      ],
      cta: "Inquire About Mazda3 Sedan",
      image: "/collection/mazda3-sedan.png",
    },
    {
      model: "Mazda3 Hatchback",
      slug: "mazda3-hatchback",
      buyerFit: "Students and young professionals who want style, versatility, and everyday practicality.",
      highlights: [
        "Hatchback cargo versatility",
        "Sport-tuned suspension",
        "Available in manual or automatic",
      ],
      cta: "Inquire About Mazda3 Hatch",
      image: "/collection/mazda3-hatchback.png",
    },
    {
      model: "CX-30",
      slug: "cx-30",
      buyerFit: "Young professionals and campus-area buyers who want a compact crossover with real character.",
      highlights: [
        "Turbocharged engine option available",
        "Premium infotainment and driver aids",
        "More cargo space than it looks",
      ],
      cta: "Inquire About CX-30",
      image: "/collection/cx-30.png",
    },
    {
      model: "CX-5",
      slug: "cx-5",
      buyerFit: "Families and commuters who need a reliable, safe, and refined daily crossover.",
      highlights: [
        "Available i-ACTIV AWD",
        "Top NHTSA and IIHS safety ratings",
        "Best-selling Mazda for a reason",
      ],
      cta: "Inquire About CX-5",
      image: "/collection/cx-5.png",
    },
    {
      model: "CX-50",
      slug: "cx-50",
      buyerFit: "Active professionals and families who want SUV capability with a performance edge.",
      highlights: [
        "Available 2.5 Turbo engine (227 hp)",
        "Trail-capable off-road tuning",
        "Premium Plus interior appointments",
      ],
      cta: "Inquire About CX-50",
      image: "/collection/cx-50.png",
    },
    {
      model: "CX-70",
      slug: "cx-70",
      buyerFit: "Two-row families who want three-row space in a sleeker, more driver-focused package.",
      highlights: [
        "Available plug-in hybrid powertrain",
        "2-row premium SUV with generous proportions",
        "Elevated standard feature set",
      ],
      cta: "Inquire About CX-70",
      image: "/collection/cx-70.png",
    },
    {
      model: "CX-90",
      slug: "cx-90",
      buyerFit: "Larger families and county commuters who need three rows, real space, and long-trip comfort.",
      highlights: [
        "3-row seating for up to 8 passengers",
        "Available plug-in hybrid",
        "Flagship-level interior refinement",
      ],
      cta: "Inquire About CX-90",
      image: "/collection/cx-90.png",
    },
    {
      model: "CX-60",
      slug: "cx-60",
      buyerFit: "Professionals and families who want a refined midsize SUV with premium proportions.",
      highlights: [
        "Rear-wheel drive platform",
        "Available plug-in hybrid",
        "Luxurious cabin with premium materials",
      ],
      cta: "Inquire About CX-60",
      image: "/collection/cx-60.png",
    },
    {
      model: "CX-80",
      slug: "cx-80",
      buyerFit: "Larger families who need three-row versatility without sacrificing elegance or efficiency.",
      highlights: [
        "3-row seating with flexible layouts",
        "Available plug-in hybrid powertrain",
        "Premium Plus trim levels available",
      ],
      cta: "Inquire About CX-80",
      image: "/collection/cx-80.png",
    },
    {
      model: "MX-5 Miata",
      slug: "mx-5",
      buyerFit: "Driving enthusiasts and weekend warriors who want pure, lightweight sports car joy.",
      highlights: [
        "Iconic rear-wheel drive roadster",
        "Available soft-top or retractable hardtop",
        "Lightest sports car in its class",
      ],
      cta: "Inquire About MX-5 Miata",
      image: "/collection/mx-5.png",
    },
    {
      model: "Mazda6",
      slug: "mazda6",
      buyerFit: "Buyers seeking a refined, spacious sedan — excellent CPO and used options available.",
      highlights: [
        "Premium sedan with luxury-class interior",
        "Available turbocharged engine",
        "Excellent certified pre-owned value",
      ],
      cta: "Inquire About Mazda6",
      image: "/collection/mazda6.png",
    },
    {
      model: "MX-30",
      slug: "mx-30",
      buyerFit: "City drivers and eco-conscious buyers looking for a stylish, efficient compact crossover.",
      highlights: [
        "Electric and range-extender options",
        "Unique freestyle rear door design",
        "Compact footprint, easy to park in Gainesville",
      ],
      cta: "Inquire About MX-30",
      image: "/collection/mx-30.png",
    },
  ],
};
