export const helmets = [
  {
    id: 'h1',
    name: 'Apex R1 Carbon',
    brand: 'APEX',
    category: 'Full Face',
    price: 12499,
    rating: 4.8,
    sizes: ['M', 'L', 'XL'],
    colors: ['Matte Black', 'Gloss Carbon'],
    image: `${import.meta.env.BASE_URL}images/full_face_carbon_helmet_1786813061790.jpg`,
    description: 'The Apex R1 Carbon is engineered for track-level performance with daily rideability. Features a 100% carbon fiber shell for extreme lightweight protection.',
    features: [
      'ECE 22.06 & DOT Certified',
      'Ultra-lightweight 1250g Carbon Shell',
      'Advanced Aerodynamic Spoiler',
      'Pinlock 120 Max Vision Included',
      'Emergency Quick Release System (EQRS)'
    ],
    featured: true
  },
  {
    id: 'h2',
    name: 'Volt Street X',
    brand: 'VOLT',
    category: 'Full Face',
    price: 7999,
    rating: 4.6,
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Nardo Grey', 'Matte Black', 'Neon Yellow'],
    image: `${import.meta.env.BASE_URL}images/full_face_carbon_helmet_1786813061790.jpg`,
    description: 'Perfect for the urban commuter. The Volt Street X offers superior ventilation and a drop-down internal sun visor for all-day comfort.',
    features: [
      'DOT Approved',
      'Internal Drop-down Sun Visor',
      'Moisture-wicking Removable Liner',
      'Multi-port Ventilation System',
      'Micro-metric Buckle'
    ],
    featured: true
  },
  {
    id: 'h3',
    name: 'Raven Modular Pro',
    brand: 'RAVEN',
    category: 'Modular',
    price: 10499,
    rating: 4.7,
    sizes: ['M', 'L', 'XL', 'XXL'],
    colors: ['Gloss White', 'Matte Black'],
    image: `${import.meta.env.BASE_URL}images/modular_touring_helmet_1786813075868.jpg`,
    description: 'Touring redefined. The Raven Modular Pro allows you to easily switch between a full-face and open-face configuration with a single hand motion.',
    features: [
      'Dual P/J Homologation',
      'One-handed Flip Mechanism',
      'Plush Touring Liner',
      'Integrated Bluetooth Comms Ready',
      'Anti-fog Shield'
    ],
    featured: true
  },
  {
    id: 'h4',
    name: 'Nova Urban',
    brand: 'NOVA',
    category: 'Open Face',
    price: 4999,
    rating: 4.4,
    sizes: ['S', 'M', 'L'],
    colors: ['Vintage Brown', 'Matte Black'],
    image: `${import.meta.env.BASE_URL}images/open_face_retro_helmet_1786813090289.jpg`,
    description: 'Classic cafe-racer styling meets modern protection. The Nova Urban is lightweight and perfect for slow city rides and classic bike enthusiasts.',
    features: [
      'Classic Vintage Styling',
      'Premium Leather Accents',
      'Drop-down Aviator Visor',
      'Lightweight ABS Shell',
      'Removable Washable Liner'
    ],
    featured: false
  },
  {
    id: 'h5',
    name: 'Apex Trail',
    brand: 'APEX',
    category: 'Off-Road',
    price: 9499,
    rating: 4.9,
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Hi-Vis Orange', 'Camo Green'],
    image: `${import.meta.env.BASE_URL}images/off_road_helmet_1786813457533.jpg`,
    description: 'Built for the dirt. The Apex Trail offers an extended peak and oversized ventilation ports to keep you cool on the toughest enduro trails.',
    features: [
      'Aggressive Off-Road Profile',
      'Adjustable Sun Peak',
      'Massive Chin Vent',
      'Goggle Compatible Port',
      'Reinforced Chin Bar'
    ],
    featured: true
  },
  {
    id: 'h6',
    name: 'Axon Speedmaster',
    brand: 'AXON',
    category: 'Full Face',
    price: 15999,
    rating: 4.9,
    sizes: ['M', 'L', 'XL'],
    colors: ['Gloss Red/White', 'Matte Carbon'],
    image: `${import.meta.env.BASE_URL}images/full_face_carbon_helmet_1786813061790.jpg`,
    description: 'Designed in the wind tunnel, the Speedmaster is Axon’s flagship racing helmet offering zero lift at high speeds.',
    features: [
      'FIM Racing Homologated',
      'Tear-off Ready Visor',
      'Hydration System Ready',
      'Titanium D-Rings',
      'Multi-density EPS'
    ],
    featured: false
  },
  {
    id: 'h7',
    name: 'Volt Touring X',
    brand: 'VOLT',
    category: 'Modular',
    price: 11299,
    rating: 4.5,
    sizes: ['L', 'XL', 'XXL'],
    colors: ['Metallic Silver', 'Matte Black'],
    image: `${import.meta.env.BASE_URL}images/modular_touring_helmet_1786813075868.jpg`,
    description: 'Long-distance touring helmet with an advanced noise-reduction neck roll and ultra-wide field of view.',
    features: [
      'Acoustic Collar',
      'Ultra-wide Visor',
      'Intercom Ready',
      'Micro-metric Fastener',
      'Reflective Safety Inserts'
    ],
    featured: false
  },
  {
    id: 'h8',
    name: 'Nova Cruiser',
    brand: 'NOVA',
    category: 'Open Face',
    price: 3999,
    rating: 4.2,
    sizes: ['M', 'L'],
    colors: ['Gloss Black', 'Matte Grey'],
    image: `${import.meta.env.BASE_URL}images/open_face_retro_helmet_1786813090289.jpg`,
    description: 'A minimalist open-face helmet designed for freedom and simple cruising.',
    features: [
      'Low Profile Fit',
      'Fiberglass Composite',
      'Snap-on Peak Included',
      'Quilted Liner',
      'DOT Approved'
    ],
    featured: false
  },
  {
    id: 'h9',
    name: 'Raven Explorer',
    brand: 'RAVEN',
    category: 'Off-Road',
    price: 8999,
    rating: 4.6,
    sizes: ['M', 'L', 'XL'],
    colors: ['Desert Sand', 'Matte Black'],
    image: `${import.meta.env.BASE_URL}images/off_road_helmet_1786813457533.jpg`,
    description: 'Adventure-touring helmet with a dual-sport design, allowing you to use it with a visor or goggles.',
    features: [
      'Removable Peak',
      'Wide Port for Goggles',
      'Internal Sun Shield',
      'Washable Antimicrobial Liner',
      'Multiple Vents'
    ],
    featured: false
  },
  {
    id: 'h10',
    name: 'Axon City',
    brand: 'AXON',
    category: 'Full Face',
    price: 6499,
    rating: 4.3,
    sizes: ['S', 'M', 'L'],
    colors: ['Gloss White', 'Matte Blue'],
    image: `${import.meta.env.BASE_URL}images/full_face_carbon_helmet_1786813061790.jpg`,
    description: 'Entry-level full-face protection with uncompromising safety standards and a sleek profile.',
    features: [
      'Polycarbonate Shell',
      'Quick Release Visor',
      'Breath Deflector Included',
      'Chin Curtain',
      'ECE 22.05 Certified'
    ],
    featured: false
  }
];

export const accessories = [
  {
    id: 'a1',
    name: 'Apex Track Gloves',
    category: 'Gloves',
    price: 4499,
    image: `${import.meta.env.BASE_URL}images/premium_riding_gloves_1786813710964.jpg`,
    description: 'Premium kangaroo leather racing gloves with carbon knuckle sliders.'
  },
  {
    id: 'a2',
    name: 'Volt Urban Mesh Jacket',
    category: 'Jackets',
    price: 7999,
    image: `${import.meta.env.BASE_URL}images/premium_riding_jacket_1786813737662.jpg`,
    description: 'Highly breathable mesh jacket with CE Level 2 armor for city commuting.'
  },
  {
    id: 'a3',
    name: 'Raven Winter Balaclava',
    category: 'Balaclavas',
    price: 999,
    image: `${import.meta.env.BASE_URL}images/premium_riding_jacket_1786813737662.jpg`,
    description: 'Thermal, windproof balaclava to keep you warm on chilly morning rides.'
  },
  {
    id: 'a4',
    name: 'Axon Tinted Visor',
    category: 'Visors',
    price: 1499,
    image: `${import.meta.env.BASE_URL}images/full_face_carbon_helmet_1786813061790.jpg`,
    description: 'Dark smoke replacement visor with anti-scratch coating.'
  },
  {
    id: 'a5',
    name: 'Nova Leather Riding Boots',
    category: 'Riding Gear',
    price: 8499,
    image: `${import.meta.env.BASE_URL}images/premium_riding_gloves_1786813710964.jpg`,
    description: 'Classic styling with modern ankle protection and reinforced shifting pads.'
  },
  {
    id: 'a6',
    name: 'Apex Knee Guards',
    category: 'Riding Gear',
    price: 2999,
    image: `${import.meta.env.BASE_URL}images/premium_riding_gloves_1786813710964.jpg`,
    description: 'Articulating dual-pivot knee guards for extreme off-road protection.'
  },
  {
    id: 'a7',
    name: 'Volt All-Weather Bike Cover',
    category: 'Bike Covers',
    price: 1999,
    image: `${import.meta.env.BASE_URL}images/premium_riding_jacket_1786813737662.jpg`,
    description: 'Heavy-duty waterproof and UV-resistant motorcycle cover with lock holes.'
  },
  {
    id: 'a8',
    name: 'Raven Summer Gloves',
    category: 'Gloves',
    price: 2499,
    image: `${import.meta.env.BASE_URL}images/premium_riding_gloves_1786813710964.jpg`,
    description: 'Lightweight textile gloves with TPR knuckle protection and touch-screen fingers.'
  },
  {
    id: 'a9',
    name: 'Axon Touring Jacket',
    category: 'Jackets',
    price: 12999,
    image: `${import.meta.env.BASE_URL}images/premium_riding_jacket_1786813737662.jpg`,
    description: 'Four-season touring jacket with removable waterproof and thermal liners.'
  },
  {
    id: 'a10',
    name: 'Nova Coolmax Balaclava',
    category: 'Balaclavas',
    price: 799,
    image: `${import.meta.env.BASE_URL}images/premium_riding_jacket_1786813737662.jpg`,
    description: 'Moisture-wicking balaclava for summer rides, keeping helmet liner fresh.'
  }
];
