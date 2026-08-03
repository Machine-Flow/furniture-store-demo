/* ─────────────────────────────────────────────────────────────
   MOBILITOP product catalog
   Images: Unsplash CDN. Gallery entries are crop variants of the
   same photo id so they always resolve.
   ───────────────────────────────────────────────────────────── */

export const CATEGORIES = [
  'Living Rooms',
  'Bedrooms',
  'Dining Rooms',
  'Kitchens',
  'Accessories',
  'Outdoors',
]

const g = (base, ...crops) => {
  const id = base.split('?')[0]
  const params = base.split('?')[1] || 'w=800&q=80'
  const [main] = crops
  const variants = crops.map((c) => `${id}?${params}&fit=crop&crop=${c}`)
  return [main === undefined ? base : `${id}?${params}&fit=crop&crop=${main}`, ...variants.slice(1)]
}

export const products = [
  /* ─── Living Rooms ─── */
  {
    id: 'stratos-fabric-sofa',
    slug: 'stratos-fabric-sofa',
    name: 'Stratos Fabric Sofa',
    category: 'Living Rooms',
    subcategory: 'Fabric Sofas',
    price: 1299,
    image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&q=80',
    gallery: g('https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&q=80', 'entropy', 'edges', 'focalpoint'),
    description:
      'The Stratos is our best-loved three-seater — deep cushioning, a tailored low profile, and a dense foam core that keeps its shape for years. Upholstered in a soft, stain-resistant performance fabric that feels like home from day one.',
    rating: 4.8,
    badge: 'Bestseller',
  },
  {
    id: 'luna-velvet-armchair',
    slug: 'luna-velvet-armchair',
    name: 'Luna Velvet Armchair',
    category: 'Living Rooms',
    subcategory: 'Armchairs',
    price: 549,
    image: 'https://images.unsplash.com/photo-1549187774-b4e9b0445b41?w=800&q=80',
    gallery: g('https://images.unsplash.com/photo-1549187774-b4e9b0445b41?w=800&q=80', 'entropy', 'edges'),
    description:
      'A sculptural accent chair wrapped in plush velvet. The Luna pairs a curved shell back with a feather-wrapped cushion, making it as comfortable as it is photogenic — perfect beside a reading lamp.',
    rating: 4.6,
  },
  {
    id: 'aria-leather-sofa',
    slug: 'aria-leather-sofa',
    name: 'Aria Leather Sofa',
    category: 'Living Rooms',
    subcategory: 'Leather Sofas',
    price: 1899,
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&q=80',
    gallery: g('https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&q=80', 'entropy', 'edges'),
    description:
      'Full-grain top-grain leather that only gets better with age. The Aria is a timeless chesterfield-inspired silhouette with hand-tufted detailing and a kiln-dried hardwood frame built for generations.',
    rating: 4.9,
    badge: 'Premium',
  },
  {
    id: 'nova-coffee-table',
    slug: 'nova-coffee-table',
    name: 'Nova Coffee Table',
    category: 'Living Rooms',
    subcategory: 'Coffee Tables',
    price: 329,
    image: 'https://images.unsplash.com/photo-1533090481720-856c6e3c1fdc?w=800&q=80',
    gallery: g('https://images.unsplash.com/photo-1533090481720-856c6e3c1fdc?w=800&q=80', 'entropy', 'edges'),
    description:
      'A minimalist round coffee table in warm oak veneer with a lower display shelf. The Nova grounds any seating arrangement and hides remotes, coasters and magazines with effortless ease.',
    rating: 4.5,
  },

  /* ─── Bedrooms ─── */
  {
    id: 'elysium-master-bed',
    slug: 'elysium-master-bed',
    name: 'Elysium Master Bed',
    category: 'Bedrooms',
    subcategory: 'Master Beds',
    price: 1499,
    image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=800&q=80',
    gallery: g('https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=800&q=80', 'entropy', 'edges'),
    description:
      'An upholstered platform bed with a tall, softly-padded headboard. Slatted support means no box spring needed — just mattress and dreams. Available in a full range of fabric finishes.',
    rating: 4.7,
    badge: 'Bestseller',
  },
  {
    id: 'haven-king-bed',
    slug: 'haven-king-bed',
    name: 'Haven King Bed',
    category: 'Bedrooms',
    subcategory: 'Master Beds',
    price: 1199,
    image: 'https://images.unsplash.com/photo-1505692952047-1a78307da8f2?w=800&q=80',
    gallery: g('https://images.unsplash.com/photo-1505692952047-1a78307da8f2?w=800&q=80', 'entropy', 'edges'),
    description:
      'Clean lines and a low profile make the Haven feel effortlessly modern. Solid wood frame with a fabric-upholstered headboard, engineered for quiet, creak-free nights.',
    rating: 4.6,
  },
  {
    id: 'loft-single-bunk',
    slug: 'loft-single-bunk',
    name: 'Loft Single & Bunk Bed',
    category: 'Bedrooms',
    subcategory: 'Single & Bunk Beds',
    price: 699,
    image: 'https://images.unsplash.com/photo-1617325247661-675ab4b64ae2?w=800&q=80',
    gallery: g('https://images.unsplash.com/photo-1617325247661-675ab4b64ae2?w=800&q=80', 'entropy', 'edges'),
    description:
      'Space-saving bunk beds in solid pine with a guardrail on the top bunk and a ladder built into the frame. Doubles as a playroom essential — sturdy enough for the most enthusiastic sleeper.',
    rating: 4.4,
  },
  {
    id: 'horizon-shoe-cabinet',
    slug: 'horizon-shoe-cabinet',
    name: 'Horizon Shoe Cabinet',
    category: 'Bedrooms',
    subcategory: 'Shoe Cabinets',
    price: 349,
    image: 'https://images.unsplash.com/photo-1567016432779-094069958ea5?w=800&q=80',
    gallery: g('https://images.unsplash.com/photo-1567016432779-094069958ea5?w=800&q=80', 'entropy', 'edges'),
    description:
      'Tidy entryways and closets with a slim cabinet that holds up to eighteen pairs. Soft-close doors, ventilated shelves and a matte lacquer finish in a range of warm tones.',
    rating: 4.3,
  },

  /* ─── Dining Rooms ─── */
  {
    id: 'fusion-dining-set',
    slug: 'fusion-dining-set',
    name: 'Fusion Dining Set',
    category: 'Dining Rooms',
    subcategory: 'Dining Sets',
    price: 1799,
    image: 'https://images.unsplash.com/photo-1617806118233-18e1de247200?w=800&q=80',
    gallery: g('https://images.unsplash.com/photo-1617806118233-18e1de247200?w=800&q=80', 'entropy', 'edges'),
    description:
      'A complete six-seat dining set — table plus four chairs — in contemporary walnut with a brushed brass accent. Engineered for everyday meals and effortless hosting alike.',
    rating: 4.8,
    badge: 'Bestseller',
  },
  {
    id: 'milano-dining-table',
    slug: 'milano-dining-table',
    name: 'Milano Dining Table',
    category: 'Dining Rooms',
    subcategory: 'Dining Tables',
    price: 899,
    image: 'https://images.unsplash.com/photo-1533777857889-4be7c70b33f7?w=800&q=80',
    gallery: g('https://images.unsplash.com/photo-1533777857889-4be7c70b33f7?w=800&q=80', 'entropy', 'edges'),
    description:
      'A generously proportioned extendable table in solid oak. Seats six everyday and opens to seat ten for holidays — a centrepiece that grows with your gatherings.',
    rating: 4.7,
  },
  {
    id: 'oaks-dining-chairs',
    slug: 'oaks-dining-chairs',
    name: 'Oaks Dining Chairs (Set of 4)',
    category: 'Dining Rooms',
    subcategory: 'Dining Chairs',
    price: 459,
    image: 'https://images.unsplash.com/photo-1519710164239-da123dc03ef4?w=800&q=80',
    gallery: g('https://images.unsplash.com/photo-1519710164239-da123dc03ef4?w=800&q=80', 'entropy', 'edges'),
    description:
      'A set of four contoured dining chairs in solid beech with a breathable upholstered seat. Stackable, sturdy, and comfortable for long dinners and even longer conversations.',
    rating: 4.5,
  },
  {
    id: 'torino-bar-table',
    slug: 'torino-bar-table',
    name: 'Torino Bar Table',
    category: 'Dining Rooms',
    subcategory: 'Bar Tables',
    price: 749,
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80',
    gallery: g('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80', 'entropy', 'edges'),
    description:
      'A high-top bar table with a waterfall stone-look top and a sturdy pedestal base. Pairs with bar stools for a casual entertaining corner in kitchen or dining room.',
    rating: 4.4,
  },

  /* ─── Kitchens ─── */
  {
    id: 'stratos-modern-kitchen',
    slug: 'stratos-modern-kitchen',
    name: 'Stratos Modern Kitchen',
    category: 'Kitchens',
    subcategory: 'Modern Kitchens',
    price: 4999,
    image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=80',
    gallery: g('https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=80', 'entropy', 'edges'),
    description:
      'Our flagship modern kitchen system — handleless matte fronts, soft-close drawers, and integrated appliance housings. Designed around how you actually cook, from coffee to dinner parties.',
    rating: 4.9,
    badge: 'Signature',
  },
  {
    id: 'vera-modern-kitchen',
    slug: 'vera-modern-kitchen',
    name: 'Vera Modern Kitchen',
    category: 'Kitchens',
    subcategory: 'Modern Kitchens',
    price: 3499,
    image: 'https://images.unsplash.com/photo-1600573472592-401b489a3cdc?w=800&q=80',
    gallery: g('https://images.unsplash.com/photo-1600573472592-401b489a3cdc?w=800&q=80', 'entropy', 'edges'),
    description:
      'A warm, wood-front kitchen with a generous island and concealed storage everywhere you look. Practical, beautiful, and built with moisture-resistant MDF cores.',
    rating: 4.7,
  },
  {
    id: 'classic-kitchens-collection',
    slug: 'classic-kitchens-collection',
    name: 'Classic Kitchens Collection',
    category: 'Kitchens',
    subcategory: 'Classic Kitchens',
    price: 3899,
    image: 'https://images.unsplash.com/photo-1556911220-bff31c812dba?w=800&q=80',
    gallery: g('https://images.unsplash.com/photo-1556911220-bff31c812dba?w=800&q=80', 'entropy', 'edges'),
    description:
      'Timeless shaker-style cabinetry with raised panels and antique brass hardware. The Classic collection brings quiet elegance to family kitchens that host every occasion.',
    rating: 4.6,
  },

  /* ─── Accessories ─── */
  {
    id: 'halo-floor-lamp',
    slug: 'halo-floor-lamp',
    name: 'Halo Floor Lamp',
    category: 'Accessories',
    subcategory: 'Lighting',
    price: 189,
    image: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=800&q=80',
    gallery: g('https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=800&q=80', 'entropy', 'edges'),
    description:
      'A sculptural arc floor lamp with a linen drum shade and a dimmable warm LED. The Halo throws a soft, ambient glow that turns any corner into a reading nook.',
    rating: 4.6,
  },
  {
    id: 'atlas-table-lamp',
    slug: 'atlas-table-lamp',
    name: 'Atlas Table Lamp',
    category: 'Accessories',
    subcategory: 'Lighting',
    price: 129,
    image: 'https://images.unsplash.com/photo-1594026112284-02bb6f3352fe?w=800&q=80',
    gallery: g('https://images.unsplash.com/photo-1594026112284-02bb6f3352fe?w=800&q=80', 'entropy', 'edges'),
    description:
      'A bedside staple with a ceramic base and pleated fabric shade. Compact enough for nightstands, warm enough to make every evening feel unhurried.',
    rating: 4.5,
  },
  {
    id: 'amber-brass-lamp',
    slug: 'amber-brass-lamp',
    name: 'Amber Brass Lamp',
    category: 'Accessories',
    subcategory: 'Lighting',
    price: 149,
    image: 'https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?w=800&q=80',
    gallery: g('https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?w=800&q=80', 'entropy', 'edges'),
    description:
      'Brushed brass and a frosted glass globe give the Amber a mid-century character that flatters any palette. A statement piece that doubles as a bedside light.',
    rating: 4.4,
  },
  {
    id: 'gallery-artwork',
    slug: 'gallery-artwork',
    name: 'Gallery Artwork',
    category: 'Accessories',
    subcategory: 'Artworks',
    price: 249,
    image: 'https://images.unsplash.com/photo-1578301978693-85fa9c0320b9?w=800&q=80',
    gallery: g('https://images.unsplash.com/photo-1578301978693-85fa9c0320b9?w=800&q=80', 'entropy', 'edges'),
    description:
      'A museum-grade giclée print on cotton rag paper, framed in matte black oak. Each piece is numbered and ships ready to hang above sofa or sideboard.',
    rating: 4.7,
    badge: 'New',
  },
  {
    id: 'study-desk-accessories',
    slug: 'study-desk-accessories',
    name: 'Study Desk Accessories',
    category: 'Accessories',
    subcategory: 'Decorative',
    price: 219,
    image: 'https://images.unsplash.com/photo-1495446815901-a7297e633e8d?w=800&q=80',
    gallery: g('https://images.unsplash.com/photo-1495446815901-a7297e633e8d?w=800&q=80', 'entropy', 'edges'),
    description:
      'A curated set of desk companions — a stone tray, brass pen stand and ceramic holder — that organise your workspace with quiet, considered style.',
    rating: 4.3,
  },

  /* ─── Outdoors ─── */
  {
    id: 'oceana-outdoor-set',
    slug: 'oceana-outdoor-set',
    name: 'Oceana Outdoor Set',
    category: 'Outdoors',
    subcategory: 'Outdoor Living',
    price: 1299,
    image: 'https://images.unsplash.com/photo-1600121848594-d8644e57abab?w=800&q=80',
    gallery: g('https://images.unsplash.com/photo-1600121848594-d8644e57abab?w=800&q=80', 'entropy', 'edges'),
    description:
      'A four-piece modular outdoor lounge in weatherproof resin wicker with quick-dry cushions. Built to survive sun, rain and seaside salt — while looking like a resort.',
    rating: 4.8,
    badge: 'Bestseller',
  },
  {
    id: 'patio-sun-lounger',
    slug: 'patio-sun-lounger',
    name: 'Patio Sun Lounger',
    category: 'Outdoors',
    subcategory: 'Sun Loungers',
    price: 449,
    image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=800&q=80',
    gallery: g('https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=800&q=80', 'entropy', 'edges'),
    description:
      'An adjustable reclining lounger in powder-coated aluminium with breathable mesh. Five positions, two wheels, zero effort — the weekend is calling.',
    rating: 4.5,
  },
  {
    id: 'solara-outdoor-dining',
    slug: 'solara-outdoor-dining',
    name: 'Solara Outdoor Dining Set',
    category: 'Outdoors',
    subcategory: 'Outdoor Dining',
    price: 1599,
    image: 'https://images.unsplash.com/photo-1600121848594-d8644e57abab?w=1200&q=80&fit=crop&crop=edges',
    gallery: g('https://images.unsplash.com/photo-1600121848594-d8644e57abab?w=800&q=80', 'entropy', 'edges'),
    description:
      'Dine al fresco with a six-seat table and weatherproof chairs in teak-look composite. Low-maintenance, all-season, and made for long summer evenings.',
    rating: 4.6,
  },
]

export const getProductBySlug = (slug) => products.find((p) => p.slug === slug)

export const getProductsByCategory = (cat) =>
  cat === 'All' || !cat ? products : products.filter((p) => p.category === cat)

export const getRelatedProducts = (product, limit = 4) =>
  products.filter((p) => p.category === product.category && p.slug !== product.slug).slice(0, limit)

export const formatPrice = (n) => `$${n.toLocaleString('en-US')}`
