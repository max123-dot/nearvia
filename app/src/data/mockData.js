export const CATEGORIES = [
  { id: 'all', name: 'All Discoveries', icon: 'Sparkles', count: 16, color: '#00F2FE' },
  { id: 'products', name: 'Products', icon: 'ShoppingBag', count: 3, color: '#F59E0B' },
  { id: 'services', name: 'Services', icon: 'Wrench', count: 2, color: '#10B981' },
  { id: 'businesses', name: 'Businesses', icon: 'Building2', count: 2, color: '#6366F1' },
  { id: 'food', name: 'Food & Dining', icon: 'Utensils', count: 3, color: '#EF4444' },
  { id: 'beauty', name: 'Beauty & Grooming', icon: 'Scissors', count: 2, color: '#EC4899' },
  { id: 'stays', name: 'Hotels & Stays', icon: 'BedDouble', count: 2, color: '#8B5CF6' },
  { id: 'entertainment', name: 'Entertainment', icon: 'Ticket', count: 2, color: '#3B82F6' },
];

export const DISCOVERY_ITEMS = [
  // FOOD
  {
    id: 'food-1',
    title: 'Umami Ramen & Izakaya',
    category: 'food',
    subcategory: 'Japanese & Ramen',
    rating: 4.9,
    reviewsCount: 284,
    distanceMiles: 0.3,
    distanceText: '0.3 mi away',
    locationName: 'Mission District, San Francisco',
    lat: 37.7612,
    lng: -122.4194,
    price: '$$',
    badges: ['Open Now', 'Top Rated', 'Local Favorite'],
    image: 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=800&q=80',
    description: 'Slow-simmered 18-hour tonkotsu broth, hand-crafted noodles, and authentic izakaya small plates made daily using organic local ingredients.',
    owner: {
      name: 'Chef Kenji Sato',
      title: 'Head Chef & Co-Owner',
      avatar: 'https://images.unsplash.com/photo-1583394838336-acd977736f90?auto=format&fit=crop&w=200&q=80'
    },
    phone: '(415) 555-0142',
    operatingHours: '11:30 AM - 10:00 PM',
    offerings: [
      { name: 'Signature Tonkotsu Ramen', price: '$18.50', desc: 'Pork bone broth, chashu pork belly, ajitama egg, wood ear mushroom' },
      { name: 'Spicy Black Garlic Ramen', price: '$19.50', desc: 'House sesame chili oil, roasted garlic oil, tender brisket' },
      { name: 'Wagyu Beef Gyoza (6pcs)', price: '$14.00', desc: 'Pan-seared dumplings with ponzu dipping sauce' }
    ],
    reviews: [
      { user: 'Sarah M.', rating: 5, comment: 'The best ramen in SF hands down. The black garlic broth is unbelievable!' },
      { user: 'David L.', rating: 5, comment: 'Quick seating, vibrant atmosphere, and authentic flavors.' }
    ]
  },
  {
    id: 'food-2',
    title: 'Golden Gate Sourdough Bakery',
    category: 'food',
    subcategory: 'Artisanal Bakery',
    rating: 4.8,
    reviewsCount: 198,
    distanceMiles: 0.5,
    distanceText: '0.5 mi away',
    locationName: 'Valencia St, San Francisco',
    lat: 37.7588,
    lng: -122.4215,
    price: '$',
    badges: ['Open Now', 'Fresh Daily', 'Order Ahead'],
    image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=800&q=80',
    description: '100-year-old sourdough starter, organic heirloom grains, fresh croissants, and single-origin pour-over coffee.',
    owner: {
      name: 'Elena Rostova',
      title: 'Master Baker',
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80'
    },
    phone: '(415) 555-0199',
    operatingHours: '7:00 AM - 4:00 PM',
    offerings: [
      { name: 'Country Sourdough Loaf', price: '$9.00', desc: 'Naturally leavened with crispy caramelized crust' },
      { name: 'Almond Chocolate Croissant', price: '$5.50', desc: 'Flaky French butter pastry with dark Belgian chocolate' },
      { name: 'Cardamom Cinnamon Roll', price: '$6.00', desc: 'Warm spiced roll with brown sugar glaze' }
    ],
    reviews: [
      { user: 'Michael K.', rating: 5, comment: 'Crispy on the outside, pillowy inside. Get here early before croissants sell out!' }
    ]
  },
  {
    id: 'food-3',
    title: 'Horizon Rooftop Lounge',
    category: 'food',
    subcategory: 'Cocktail Bar & Tapas',
    rating: 4.7,
    reviewsCount: 165,
    distanceMiles: 1.2,
    distanceText: '1.2 mi away',
    locationName: 'SoMa, San Francisco',
    lat: 37.7833,
    lng: -122.4007,
    price: '$$$',
    badges: ['Sunset Views', 'Cocktail Lounge', 'Reservations'],
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80',
    description: '360-degree skyline views of San Francisco, craft mixology cocktails, and elevated Mediterranean tapas.',
    owner: {
      name: 'Marcus Vance',
      title: 'Beverage Director',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80'
    },
    phone: '(415) 555-0321',
    operatingHours: '4:00 PM - 1:00 AM',
    offerings: [
      { name: 'Smoked Fog Old Fashioned', price: '$22.00', desc: 'Bourbon, peated scotch rinse, walnut bitters, cedar smoke' },
      { name: 'Truffle Burrata & Fig Tapas', price: '$19.00', desc: 'Heirloom tomatoes, balsamic glaze, grilled sourdough' }
    ],
    reviews: [
      { user: 'Chloe B.', rating: 5, comment: 'Breathtaking sunset views and top tier cocktails!' }
    ]
  },

  // BEAUTY & GROOMING
  {
    id: 'beauty-1',
    title: 'Crown & Blade Barbershop',
    category: 'beauty',
    subcategory: 'Men\'s Grooming',
    rating: 4.9,
    reviewsCount: 312,
    distanceMiles: 0.2,
    distanceText: '0.2 mi away',
    locationName: '24th St, Mission District',
    lat: 37.7522,
    lng: -122.4180,
    price: '$$',
    badges: ['Instant Booking', 'Top Rated', 'Complimentary Drink'],
    image: 'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=800&q=80',
    description: 'Precision fades, hot towel straight-razor shaves, beard sculpting, and premium scalp treatments in a vintage luxury aesthetic.',
    owner: {
      name: 'Mateo Hernandez',
      title: 'Master Barber & Founder',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80'
    },
    phone: '(415) 555-0789',
    operatingHours: '9:00 AM - 7:30 PM',
    offerings: [
      { name: 'Signature Fade & Beard Sculpt', price: '$55.00', desc: 'Custom haircut, foil shaver taper, hot towel beard trim' },
      { name: 'Royal Hot Towel Shave', price: '$45.00', desc: 'Straight razor shave, pre-shave oil, herbal hot towel & cold compress' },
      { name: 'Junior Haircut (Under 12)', price: '$35.00', desc: 'Clean styling & haircut for kids' }
    ],
    reviews: [
      { user: 'Alex P.', rating: 5, comment: 'Mateo gives the sharpest fade in Northern California. Great vibe and cold espresso.' }
    ]
  },
  {
    id: 'beauty-2',
    title: 'Glow & Co. Organic Botanical Spa',
    category: 'beauty',
    subcategory: 'Skincare & Wellness',
    rating: 4.9,
    reviewsCount: 142,
    distanceMiles: 0.8,
    distanceText: '0.8 mi away',
    locationName: 'Hayes Valley, San Francisco',
    lat: 37.7765,
    lng: -122.4242,
    price: '$$$',
    badges: ['Organic', 'Eco-Friendly', 'Instant Booking'],
    image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80',
    description: 'Custom botanical facials, LED light therapy, organic peels, and micro-current lifting using small-batch wildcrafted oils.',
    owner: {
      name: 'Dr. Serena Lin',
      title: 'Licensed Esthetician',
      avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80'
    },
    phone: '(415) 555-0812',
    operatingHours: '10:00 AM - 6:00 PM',
    offerings: [
      { name: 'Hydra-Glow Botanical Facial', price: '$120.00', desc: '60 min deep cleanse, oxygen infusion & cold jade roller massage' },
      { name: 'Sculpting Facial Gua Sha', price: '$95.00', desc: 'Lymphatic drainage massage & collagen boosting serum' }
    ],
    reviews: [
      { user: 'Jessica T.', rating: 5, comment: 'My skin was glowing for weeks after the Hydra-Glow session!' }
    ]
  },

  // PRODUCTS
  {
    id: 'product-1',
    title: 'Artisanal Handcrafted Leather Tote',
    category: 'products',
    subcategory: 'Leather Goods & Accessories',
    rating: 5.0,
    reviewsCount: 88,
    distanceMiles: 0.4,
    distanceText: '0.4 mi away',
    locationName: 'Mission Workshop District',
    lat: 37.7645,
    lng: -122.4150,
    price: '$$$',
    badges: ['Handmade', 'Lifetime Guarantee', 'Local Seller'],
    image: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&w=800&q=80',
    description: 'Full-grain vegetable-tanned Italian leather tote bag, hand-stitched with waxed linen thread in San Francisco.',
    owner: {
      name: 'Julian Vance',
      title: 'Craftsman & Leather Artisan',
      avatar: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=200&q=80'
    },
    phone: '(415) 555-0901',
    operatingHours: 'Pick up today or 1-hr local courier',
    offerings: [
      { name: 'Cognac Leather Tote Bag', price: '$260.00', desc: 'Fits 15-inch laptop, brass hardware, interior zip pocket' },
      { name: 'Minimalist Cardholder Wallet', price: '$48.00', desc: 'Slim design holding up to 8 cards and folded cash' }
    ],
    reviews: [
      { user: 'Rachel H.', rating: 5, comment: 'The quality of leather and stitching is extraordinary. Smells amazing too!' }
    ]
  },
  {
    id: 'product-2',
    title: 'Single-Origin Ethiopian Roast Beans',
    category: 'products',
    subcategory: 'Specialty Coffee',
    rating: 4.8,
    reviewsCount: 230,
    distanceMiles: 0.6,
    distanceText: '0.6 mi away',
    locationName: 'Potrero Hill, San Francisco',
    lat: 37.7600,
    lng: -122.4070,
    price: '$',
    badges: ['Fresh Roasted', 'Direct Trade', 'In Stock'],
    image: 'https://images.unsplash.com/photo-1559056199-641a0ac8b55e?auto=format&fit=crop&w=800&q=80',
    description: 'Light roast with notes of jasmine, bergamot, and peach blossom. Roasted fresh twice a week in small batches.',
    owner: {
      name: 'Oliver Thorne',
      title: 'Roaster & Q-Grader',
      avatar: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=200&q=80'
    },
    phone: '(415) 555-0433',
    operatingHours: '7:00 AM - 5:00 PM',
    offerings: [
      { name: 'Yirgacheffe Ethiopian Whole Bean (12oz)', price: '$22.00', desc: 'Washed process, floral aroma, bright acidity' },
      { name: 'Cold Brew Concentrate (32oz)', price: '$16.00', desc: 'Steeped for 20 hours, velvety dark chocolate notes' }
    ],
    reviews: [
      { user: 'Tom B.', rating: 5, comment: 'Fruity, bright, and delicious. My daily brew!' }
    ]
  },
  {
    id: 'product-3',
    title: 'Vintage Vinyl & Rare Grooves',
    category: 'products',
    subcategory: 'Music & Collectibles',
    rating: 4.9,
    reviewsCount: 175,
    distanceMiles: 1.1,
    distanceText: '1.1 mi away',
    locationName: 'Haight-Ashbury, San Francisco',
    lat: 37.7699,
    lng: -122.4469,
    price: '$$',
    badges: ['Curated', 'Rare Finds', 'Local Seller'],
    image: 'https://images.unsplash.com/photo-1539375665275-f9de415ef9ac?auto=format&fit=crop&w=800&q=80',
    description: 'Curated original pressings of jazz, soul, funk, indie rock, and international vinyl gems.',
    owner: {
      name: 'Samir Patel',
      title: 'Store Curator',
      avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=200&q=80'
    },
    phone: '(415) 555-0955',
    operatingHours: '11:00 AM - 7:00 PM',
    offerings: [
      { name: 'Original 1971 Miles Davis Pressing', price: '$45.00', desc: 'NM condition vinyl, original jacket' },
      { name: 'Japanese Import Jazz Fusion LP', price: '$60.00', desc: 'Includes original OBI strip & insert' }
    ],
    reviews: [
      { user: 'Gary W.', rating: 5, comment: 'Unbelievable collection and super knowledgeable owner.' }
    ]
  },

  // SERVICES
  {
    id: 'service-1',
    title: 'FlowState Mobile Bike & e-Bike Repair',
    category: 'services',
    subcategory: 'Bicycle Maintenance',
    rating: 5.0,
    reviewsCount: 114,
    distanceMiles: 0.5,
    distanceText: '0.5 mi away',
    locationName: 'Servicing SF Bay Area',
    lat: 37.7650,
    lng: -122.4200,
    price: '$$',
    badges: ['Mobile Service', 'Same Day', 'Instant Quote'],
    image: 'https://images.unsplash.com/photo-1485965120184-e220f721d03e?auto=format&fit=crop&w=800&q=80',
    description: 'We bring a fully equipped bike repair workshop on wheels directly to your home or office door.',
    owner: {
      name: 'Chris Dupont',
      title: 'Certified Mechanic',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80'
    },
    phone: '(415) 555-0612',
    operatingHours: '8:00 AM - 6:00 PM',
    offerings: [
      { name: 'Full Tune-Up & Drivetrain Clean', price: '$95.00', desc: 'Gear adjustment, brake bleed, true wheels, chain lube' },
      { name: 'Flat Tire Replacement & Safety Check', price: '$35.00', desc: 'New tube included, tire inspection & inflation' }
    ],
    reviews: [
      { user: 'Nina S.', rating: 5, comment: 'Showed up 20 mins after I booked on NearVia and fixed my chain on the spot!' }
    ]
  },
  {
    id: 'service-2',
    title: 'EcoShine Mobile Auto Detailing',
    category: 'services',
    subcategory: 'Car Care & Detailing',
    rating: 4.9,
    reviewsCount: 89,
    distanceMiles: 1.4,
    distanceText: '1.4 mi away',
    locationName: 'San Francisco Metro',
    lat: 37.7710,
    lng: -122.4100,
    price: '$$$',
    badges: ['Waterless Tech', 'Mobile Service', 'Top Rated'],
    image: 'https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?auto=format&fit=crop&w=800&q=80',
    description: 'Biodegradable waterless ceramic washes, interior steam sanitization, leather conditioning, and paint correction.',
    owner: {
      name: 'Carlos Ruiz',
      title: 'Detailing Specialist',
      avatar: 'https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?auto=format&fit=crop&w=200&q=80'
    },
    phone: '(415) 555-0377',
    operatingHours: '7:30 AM - 5:30 PM',
    offerings: [
      { name: 'Full Interior & Exterior Ceramic Detail', price: '$180.00', desc: 'Hand foam wash, ceramic spray sealant, steam vacuum' },
      { name: 'Headlight Restoration', price: '$65.00', desc: 'Sanding, buffing & UV clear coat protection' }
    ],
    reviews: [
      { user: 'Ben M.', rating: 5, comment: 'My car looks better than the day I bought it from the dealership!' }
    ]
  },

  // BUSINESSES
  {
    id: 'business-1',
    title: 'Green Thumb Botanical Boutique',
    category: 'businesses',
    subcategory: 'Plant Nursery & Design',
    rating: 4.9,
    reviewsCount: 167,
    distanceMiles: 0.7,
    distanceText: '0.7 mi away',
    locationName: 'Castro St, San Francisco',
    lat: 37.7610,
    lng: -122.4350,
    price: '$$',
    badges: ['Open Now', 'Plant Consultation', 'Delivery Available'],
    image: 'https://images.unsplash.com/photo-1470058869958-2a77ade41c02?auto=format&fit=crop&w=800&q=80',
    description: 'Rare tropical houseplants, ceramic pots, terracotta decor, and custom interior landscaping consultations.',
    owner: {
      name: 'Flora Greenwood',
      title: 'Horticulturist & Owner',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80'
    },
    phone: '(415) 555-0844',
    operatingHours: '10:00 AM - 6:30 PM',
    offerings: [
      { name: 'Monstera Deliciosa Thai Constellation', price: '$75.00', desc: 'Variegated rare houseplant in 6-inch planter' },
      { name: 'In-Home Plant Styling Consultation', price: '$60.00', desc: '45-min lighting & plant pairing assessment' }
    ],
    reviews: [
      { user: 'Emily R.', rating: 5, comment: 'Healthy plants and super helpful advice on care!' }
    ]
  },
  {
    id: 'business-2',
    title: 'Apex Tech & Smart Repair Hub',
    category: 'businesses',
    subcategory: 'Electronics Repair',
    rating: 4.8,
    reviewsCount: 204,
    distanceMiles: 0.9,
    distanceText: '0.9 mi away',
    locationName: 'Market St, San Francisco',
    lat: 37.7790,
    lng: -122.4140,
    price: '$$',
    badges: ['Open Now', 'Express Repair', '90-Day Warranty'],
    image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80',
    description: 'Microsoldering, iPhone/MacBook screen replacement, battery upgrades, and data recovery specialists.',
    owner: {
      name: 'Kevin Zhang',
      title: 'Lead Electronics Technician',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=200&q=80'
    },
    phone: '(415) 555-0211',
    operatingHours: '9:00 AM - 7:00 PM',
    offerings: [
      { name: 'iPhone OLED Screen Replacement', price: '$110.00', desc: '30-minute turn around time with OEM glass' },
      { name: 'MacBook Battery & Thermal Paste Service', price: '$140.00', desc: 'Deep dust cleaning and battery installation' }
    ],
    reviews: [
      { user: 'Dan S.', rating: 5, comment: 'Fixed my cracked phone screen in 20 minutes flat.' }
    ]
  },

  // HOTELS & STAYS
  {
    id: 'stay-1',
    title: 'The Urban Sanctuary Loft',
    category: 'stays',
    subcategory: 'Boutique Apartment Stay',
    rating: 4.95,
    reviewsCount: 96,
    distanceMiles: 0.6,
    distanceText: '0.6 mi away',
    locationName: 'Soma Arts District',
    lat: 37.7780,
    lng: -122.4050,
    price: '$$$',
    badges: ['Superhost', 'Instant Book', 'Rooftop Access'],
    image: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=800&q=80',
    description: 'Designer brick-and-timber loft with floor-to-ceiling windows, private rooftop garden, and gigabit Wi-Fi.',
    owner: {
      name: 'Claire & Liam Vance',
      title: 'Property Hosts',
      avatar: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=200&q=80'
    },
    phone: '(415) 555-0155',
    operatingHours: 'Check-in: 3:00 PM',
    offerings: [
      { name: 'Nightly Stay (Entire Loft)', price: '$240.00 / night', desc: 'Accommodates up to 3 guests, fully equipped kitchen' },
      { name: 'Co-Working & Day Stay Pass', price: '$85.00 / day', desc: 'Quiet desk space access from 9 AM - 5 PM' }
    ],
    reviews: [
      { user: 'Monica P.', rating: 5, comment: 'Stunning industrial design and peaceful rooftop spot!' }
    ]
  },
  {
    id: 'stay-2',
    title: 'Redwood Grove Garden Suite',
    category: 'stays',
    subcategory: 'Private Garden Cottage',
    rating: 4.9,
    reviewsCount: 64,
    distanceMiles: 1.8,
    distanceText: '1.8 mi away',
    locationName: 'Cole Valley, San Francisco',
    lat: 37.7630,
    lng: -122.4500,
    price: '$$$',
    badges: ['Eco Retreat', 'Free Parking', 'Pet Friendly'],
    image: 'https://images.unsplash.com/photo-1587061949409-02df41d5e562?auto=format&fit=crop&w=800&q=80',
    description: 'Nestled beneath coastal redwoods, featuring an outdoor cedar soaking tub and private deck.',
    owner: {
      name: 'Julian Sterling',
      title: 'Host',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80'
    },
    phone: '(415) 555-0822',
    operatingHours: 'Check-in: 4:00 PM',
    offerings: [
      { name: 'Cottage Nightly Stay', price: '$210.00 / night', desc: 'Includes cedar hot tub access & organic breakfast basket' }
    ],
    reviews: [
      { user: 'Laura G.', rating: 5, comment: 'Felt like being in the forest right in the middle of San Francisco.' }
    ]
  },

  // ENTERTAINMENT
  {
    id: 'entertainment-1',
    title: 'Blue Note Underground Jazz Club',
    category: 'entertainment',
    subcategory: 'Live Music & Supper Club',
    rating: 4.85,
    reviewsCount: 220,
    distanceMiles: 0.9,
    distanceText: '0.9 mi away',
    locationName: 'North Beach, San Francisco',
    lat: 37.7990,
    lng: -122.4080,
    price: '$$',
    badges: ['Live Tonight', 'Cocktail Menu', 'Ticket Booking'],
    image: 'https://images.unsplash.com/photo-1511192336575-5a79af67a629?auto=format&fit=crop&w=800&q=80',
    description: 'Intimate subterranean jazz venue featuring world-class saxophone quartets, acoustic trios, and vintage wine pairings.',
    owner: {
      name: 'Miles & Anita Roy',
      title: 'Artistic Directors',
      avatar: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=200&q=80'
    },
    phone: '(415) 555-0744',
    operatingHours: '6:30 PM - 12:00 AM',
    offerings: [
      { name: 'Evening Show Pass (General Admission)', price: '$30.00', desc: 'Access to 8:00 PM live performance set' },
      { name: 'VIP Table & Wine Flight Package', price: '$75.00', desc: 'Reserved front stage seating + 3 glass wine tasting' }
    ],
    reviews: [
      { user: 'Gregory K.', rating: 5, comment: 'Electric energy, unbelievable musicianship, and great red wine.' }
    ]
  },
  {
    id: 'entertainment-2',
    title: 'Neon Pulse Retro Arcade & Bar',
    category: 'entertainment',
    subcategory: 'Arcade & Social Venue',
    rating: 4.8,
    reviewsCount: 180,
    distanceMiles: 0.4,
    distanceText: '0.4 mi away',
    locationName: 'Mission District, San Francisco',
    lat: 37.7660,
    lng: -122.4210,
    price: '$',
    badges: ['Open Late', 'Craft Beer', 'No Cover'],
    image: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=800&q=80',
    description: 'Over 60 restored 80s & 90s arcade pinball machines, Japanese rhythm games, and local craft brews on tap.',
    owner: {
      name: 'Derek "Retro" Vance',
      title: 'Arcade Master',
      avatar: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=200&q=80'
    },
    phone: '(415) 555-0990',
    operatingHours: '2:00 PM - 2:00 AM',
    offerings: [
      { name: 'Unlimited Game Pass (All Day)', price: '$15.00', desc: 'Free play on all non-ticket arcade cabinets' },
      { name: 'Craft IPA Flight (4 Taps)', price: '$14.00', desc: 'Sampling of Bay Area microbreweries' }
    ],
    reviews: [
      { user: 'Siddharth R.', rating: 5, comment: 'Pure nostalgia! The pinball collection is top tier.' }
    ]
  }
];
