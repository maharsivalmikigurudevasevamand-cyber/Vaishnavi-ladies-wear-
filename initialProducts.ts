import { Product } from '../types';

export const INITIAL_PRODUCTS: Product[] = [
  {
    id: 'prod-paithani-silk-saree',
    name: 'Royal Maharani Paithani Silk Saree',
    slug: 'royal-maharani-paithani-silk-saree',
    category: 'Sarees',
    description: 'An ode to Maharashtra’s regal heritage crafted with opulent pure mulberry silk and authentic zari peacock pallu motifs. Sourced from master weavers, this timeless drape radiates royalty for weddings and grand festive celebrations in Vidarbha and beyond.',
    fabric: 'Pure Mulberry Silk with Genuine Gold Zari Weave',
    sizes: ['Free Size (Includes 0.8m Blouse Piece)'],
    price: 6499,
    originalPrice: 8999,
    discountPercentage: 28,
    mainImage: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=1200&q=80',
    featured: true,
    newArrival: true,
    active: true,
    createdAt: Date.now() - 1000000,
    variants: [
      {
        id: 'var-paithani-pink',
        colorName: 'Rani Pink',
        colorCode: '#E42875',
        sku: 'VSH-SA-01-RPK',
        stock: 12,
        images: [
          'https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=1200&q=80',
          'https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&w=1200&q=80',
          'https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&w=1200&q=80'
        ]
      },
      {
        id: 'var-paithani-emerald',
        colorName: 'Emerald Green',
        colorCode: '#1A5D3A',
        sku: 'VSH-SA-01-EMG',
        stock: 8,
        images: [
          'https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&w=1200&q=80',
          'https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=1200&q=80'
        ]
      },
      {
        id: 'var-paithani-maroon',
        colorName: 'Heritage Maroon',
        colorCode: '#691223',
        sku: 'VSH-SA-01-MRN',
        stock: 6,
        images: [
          'https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&w=1200&q=80',
          'https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=1200&q=80'
        ]
      }
    ]
  },
  {
    id: 'prod-designer-anarkali-kurti',
    name: 'Zari Embroidered Flared Anarkali Kurti Set',
    slug: 'zari-embroidered-flared-anarkali-kurti-set',
    category: 'Kurtis',
    description: 'Breathtaking 3-piece festive Anarkali suit set featuring delicate thread work, mirror embellishments, coordinated pencil pants, and a scalloped organza dupatta. Tailored for effortless grace and supreme breathability.',
    fabric: 'Premium Chanderi Silk with Cotton Lining & Organza Dupatta',
    sizes: ['S (36)', 'M (38)', 'L (40)', 'XL (42)', 'XXL (44)'],
    price: 3299,
    originalPrice: 4599,
    discountPercentage: 28,
    mainImage: 'https://images.unsplash.com/photo-1583391733975-dd44f7762696?auto=format&fit=crop&w=1200&q=80',
    featured: true,
    newArrival: true,
    active: true,
    createdAt: Date.now() - 900000,
    variants: [
      {
        id: 'var-kurti-blush-pink',
        colorName: 'Blush Pink',
        colorCode: '#F48FB1',
        sku: 'VSH-KU-02-BPK',
        stock: 14,
        images: [
          'https://images.unsplash.com/photo-1583391733975-dd44f7762696?auto=format&fit=crop&w=1200&q=80',
          'https://images.unsplash.com/photo-1609357605129-26f69add5d6e?auto=format&fit=crop&w=1200&q=80'
        ]
      },
      {
        id: 'var-kurti-royal-blue',
        colorName: 'Midnight Navy',
        colorCode: '#1A2B4C',
        sku: 'VSH-KU-02-MNV',
        stock: 9,
        images: [
          'https://images.unsplash.com/photo-1609357605129-26f69add5d6e?auto=format&fit=crop&w=1200&q=80',
          'https://images.unsplash.com/photo-1583391733975-dd44f7762696?auto=format&fit=crop&w=1200&q=80'
        ]
      },
      {
        id: 'var-kurti-mustard-gold',
        colorName: 'Festive Mustard',
        colorCode: '#D49B23',
        sku: 'VSH-KU-02-FMT',
        stock: 5,
        images: [
          'https://images.unsplash.com/photo-1560769629-975ec94e6a86?auto=format&fit=crop&w=1200&q=80',
          'https://images.unsplash.com/photo-1583391733975-dd44f7762696?auto=format&fit=crop&w=1200&q=80'
        ]
      }
    ]
  },
  {
    id: 'prod-banarasi-georgette-saree',
    name: 'Handwoven Banarasi Katan Silk Saree',
    slug: 'handwoven-banarasi-katan-silk-saree',
    category: 'Sarees',
    description: 'Immaculate Banarasi weave boasting intricate floral jaal woven with dipped antique gold zari. The soft body falls like water while providing substantial drape for prestigious family gatherings and wedding receptions.',
    fabric: 'Katan Silk Blend with Intricate Meenakari & Gold Zari',
    sizes: ['Free Size (Includes Unstitched Blouse Piece)'],
    price: 5299,
    originalPrice: 7499,
    discountPercentage: 29,
    mainImage: 'https://images.unsplash.com/photo-1610030469668-932d5964f434?auto=format&fit=crop&w=1200&q=80',
    featured: true,
    newArrival: false,
    active: true,
    createdAt: Date.now() - 800000,
    variants: [
      {
        id: 'var-banarasi-ruby-red',
        colorName: 'Bridal Crimson',
        colorCode: '#8B0000',
        sku: 'VSH-SA-03-BCR',
        stock: 10,
        images: [
          'https://images.unsplash.com/photo-1610030469668-932d5964f434?auto=format&fit=crop&w=1200&q=80',
          'https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=1200&q=80'
        ]
      },
      {
        id: 'var-banarasi-champagne-gold',
        colorName: 'Champagne Gold',
        colorCode: '#D9B875',
        sku: 'VSH-SA-03-CGD',
        stock: 7,
        images: [
          'https://images.unsplash.com/photo-1560769629-975ec94e6a86?auto=format&fit=crop&w=1200&q=80',
          'https://images.unsplash.com/photo-1610030469668-932d5964f434?auto=format&fit=crop&w=1200&q=80'
        ]
      }
    ]
  },
  {
    id: 'prod-indowestern-tier-maxi-dress',
    name: 'Indo-Western Embroidered Tiered Maxi Dress',
    slug: 'indowestern-embroidered-tiered-maxi-dress',
    category: 'Dresses',
    description: 'A contemporary fusion statement crafted with airy tiers of lightweight georgette, an embroidered cinched waist belt, and romantic bell sleeves. Ideal for cocktail soirees, sangeet nights, and holiday brunches.',
    fabric: 'Georgette with Foil Print Accents & Satin Lining',
    sizes: ['XS (34)', 'S (36)', 'M (38)', 'L (40)', 'XL (42)'],
    price: 2899,
    originalPrice: 3999,
    discountPercentage: 27,
    mainImage: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=1200&q=80',
    featured: true,
    newArrival: true,
    active: true,
    createdAt: Date.now() - 700000,
    variants: [
      {
        id: 'var-dress-burgundy',
        colorName: 'Burgundy Wine',
        colorCode: '#5B101E',
        sku: 'VSH-DR-04-BWN',
        stock: 11,
        images: [
          'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=1200&q=80',
          'https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=1200&q=80'
        ]
      },
      {
        id: 'var-dress-midnight-black',
        colorName: 'Obsidian Black',
        colorCode: '#181818',
        sku: 'VSH-DR-04-BLK',
        stock: 6,
        images: [
          'https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=1200&q=80',
          'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=1200&q=80'
        ]
      },
      {
        id: 'var-dress-sage',
        colorName: 'Sage Pastel',
        colorCode: '#7A9A80',
        sku: 'VSH-DR-04-SGE',
        stock: 8,
        images: [
          'https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?auto=format&fit=crop&w=1200&q=80',
          'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=1200&q=80'
        ]
      }
    ]
  },
  {
    id: 'prod-chikankari-straight-kurti',
    name: 'Lucknowi Chikankari Modal Cotton Kurti',
    slug: 'lucknowi-chikankari-modal-cotton-kurti',
    category: 'Kurtis',
    description: 'Everyday understated luxury crafted with handmade Chikankari shadow-work floral motifs across rich, breathable modal cotton. Includes matching pure cotton inner slip.',
    fabric: 'Ultra-soft Breathable Modal Cotton',
    sizes: ['S (36)', 'M (38)', 'L (40)', 'XL (42)', 'XXL (44)'],
    price: 1899,
    originalPrice: 2499,
    discountPercentage: 24,
    mainImage: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=1200&q=80',
    featured: false,
    newArrival: true,
    active: true,
    createdAt: Date.now() - 600000,
    variants: [
      {
        id: 'var-chikankari-lilac',
        colorName: 'Lavender Mist',
        colorCode: '#B39DDB',
        sku: 'VSH-CK-05-LAV',
        stock: 15,
        images: [
          'https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=1200&q=80'
        ]
      },
      {
        id: 'var-chikankari-ivory',
        colorName: 'Warm Pearl White',
        colorCode: '#F8F6F0',
        sku: 'VSH-CK-05-IVR',
        stock: 12,
        images: [
          'https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?auto=format&fit=crop&w=1200&q=80'
        ]
      }
    ]
  },
  {
    id: 'prod-lehenga-choli-festive',
    name: 'Maroon Zardozi Velvet Bridal Lehenga Set',
    slug: 'maroon-zardozi-velvet-bridal-lehenga-set',
    category: 'Ethnic Wear',
    description: 'A cinematic bridal masterpiece with heavy micro-velvet fabric adorned with hand-stitched zardozi, kora, sequins, and pearls. Completed with a dual-tone organza veil and structured cancan skirting.',
    fabric: 'Micro Velvet Lehenga & Blouse with Silk Net Dupatta',
    sizes: ['Semi-Stitched (Customizable waist up to 44 inches)'],
    price: 14999,
    originalPrice: 19999,
    discountPercentage: 25,
    mainImage: 'https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&w=1200&q=80',
    featured: true,
    newArrival: false,
    active: true,
    createdAt: Date.now() - 500000,
    variants: [
      {
        id: 'var-lehenga-deep-maroon',
        colorName: 'Amravati Heritage Maroon',
        colorCode: '#500914',
        sku: 'VSH-EW-06-MRN',
        stock: 5,
        images: [
          'https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&w=1200&q=80'
        ]
      },
      {
        id: 'var-lehenga-royal-teal',
        colorName: 'Peacock Teal',
        colorCode: '#0D4C55',
        sku: 'VSH-EW-06-TEA',
        stock: 3,
        images: [
          'https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&w=1200&q=80'
        ]
      }
    ]
  },
  {
    id: 'prod-silk-crop-top-ethnic',
    name: 'Raw Silk Embroidered Crop Top & Peplum Blouse',
    slug: 'raw-silk-embroidered-crop-top-peplum-blouse',
    category: 'Tops',
    description: 'Contemporary structured crop top in raw silk, adorned with subtle dabka embroidery along the neckline and cuffs. Wear it over high-waist palazzo pants, dhoti skirts, or under sheer organza sarees.',
    fabric: 'Raw Silk with Soft Cotton Lining and Padded Cups',
    sizes: ['S (34)', 'M (36)', 'L (38)', 'XL (40)'],
    price: 1499,
    originalPrice: 2199,
    discountPercentage: 31,
    mainImage: 'https://images.unsplash.com/photo-1551803091-e20673f15770?auto=format&fit=crop&w=1200&q=80',
    featured: false,
    newArrival: true,
    active: true,
    createdAt: Date.now() - 400000,
    variants: [
      {
        id: 'var-top-gold',
        colorName: 'Antique Golden Champagne',
        colorCode: '#D6AE60',
        sku: 'VSH-TP-07-GLD',
        stock: 18,
        images: [
          'https://images.unsplash.com/photo-1551803091-e20673f15770?auto=format&fit=crop&w=1200&q=80'
        ]
      },
      {
        id: 'var-top-black',
        colorName: 'Jet Black',
        colorCode: '#111111',
        sku: 'VSH-TP-07-BLK',
        stock: 14,
        images: [
          'https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=1200&q=80'
        ]
      }
    ]
  },
  {
    id: 'prod-organza-floral-saree',
    name: 'Pastel Floral Hand-Painted Organza Saree',
    slug: 'pastel-floral-hand-painted-organza-saree',
    category: 'Sarees',
    description: 'Feather-light sheer organza saree with hand-painted watercolor botanical blooms framed with hand-cut scalloped gota patti embroidery. Delicate, ethereal, and made for high tea or daytime festivities.',
    fabric: 'Pure Sheer Silk Organza with Gota Borders',
    sizes: ['Free Size (Includes 0.8m Raw Silk Blouse Fabric)'],
    price: 3799,
    originalPrice: 4999,
    discountPercentage: 24,
    mainImage: 'https://images.unsplash.com/photo-1610030469888-2975cf6493b8?auto=format&fit=crop&w=1200&q=80',
    featured: true,
    newArrival: true,
    active: true,
    createdAt: Date.now() - 300000,
    variants: [
      {
        id: 'var-organza-powder-blue',
        colorName: 'Powder Sky Blue',
        colorCode: '#A0C4DF',
        sku: 'VSH-SA-08-PBL',
        stock: 9,
        images: [
          'https://images.unsplash.com/photo-1610030469888-2975cf6493b8?auto=format&fit=crop&w=1200&q=80'
        ]
      },
      {
        id: 'var-organza-rose-peach',
        colorName: 'Rose Quartz Peach',
        colorCode: '#F3B5A6',
        sku: 'VSH-SA-08-PCH',
        stock: 7,
        images: [
          'https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=1200&q=80'
        ]
      }
    ]
  }
];

export const CATEGORIES = [
  {
    name: 'Sarees',
    slug: 'sarees',
    tagline: 'Paithani, Banarasi & Pure Silk Weaves',
    image: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=800&q=80',
    count: '340+ Designs'
  },
  {
    name: 'Kurtis',
    slug: 'kurtis',
    tagline: 'Anarkali, Straight Cut & Chikankari',
    image: 'https://images.unsplash.com/photo-1583391733975-dd44f7762696?auto=format&fit=crop&w=800&q=80',
    count: '220+ Designs'
  },
  {
    name: 'Dresses',
    slug: 'dresses',
    tagline: 'Indo-Western Maxis & Festive Gowns',
    image: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=800&q=80',
    count: '145+ Designs'
  },
  {
    name: 'Tops',
    slug: 'tops',
    tagline: 'Silk Peplums, Blouses & Ethnic Tops',
    image: 'https://images.unsplash.com/photo-1551803091-e20673f15770?auto=format&fit=crop&w=800&q=80',
    count: '98+ Designs'
  },
  {
    name: 'Ethnic Wear',
    slug: 'ethnic-wear',
    tagline: 'Bridal Lehengas & Festive Shararas',
    image: 'https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&w=800&q=80',
    count: '180+ Designs'
  },
  {
    name: 'New Arrivals',
    slug: 'new-arrivals',
    tagline: 'Amravati’s Latest Curated Trends',
    image: 'https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&w=800&q=80',
    count: '50+ New In'
  }
];
