/**
 * K9 Shop Locations Data
 * All 7 locations with complete information
 * Later: This will be replaced with Supabase queries
 */

export const locations = [
  {
    id: "bohemia",
    slug: "bohemia",
    name: "The K9 Shop — Bohemia",
    address: "1519 Lakeland Ave, Bohemia, NY 11716",
    city_state: "Bohemia, NY",
    phone: "631-619-1888",
    email: "orders@thek9shop.com",
    hours: {
      monday_friday: "11:00 AM – 7:00 PM",
      saturday: "10:00 AM – 5:00 PM",
      sunday: "12:00 PM – 5:00 PM",
    },
    google_maps: "https://goo.gl/maps/wsnxdbi83dGmrL8j8",
    doordash: "https://www.doordash.com/store/23492341/",
    neighborhood: "Lakeland Heights",
    landmarks: "Near Sunrise Highway, accessible from Route 27",
    highlights: [
      "🐾 Pet Friendly",
      "🅿️ Free Parking",
      "♿ Handicap Accessible",
      "★ Independently Owned",
    ],
    story:
      "We opened The K9 Shop Bohemia because we believe every dog deserves to eat like nature intended. After watching our own dogs thrive on raw, species-appropriate nutrition, we wanted to share this transformation with our community. We're not just selling food — we're here to educate, guide, and support pet parents on the raw feeding journey.",
    traditions:
      "We have a Wall of Raw where we photograph every dog who visits. Customers get a welcome treat on their first visit, and we host monthly raw feeding Q&A nights.",
    team: [
      {
        id: 1,
        name: "Sarah Martinez",
        role: "Owner & Head Nutritionist",
        bio: "Sarah has been in the pet industry for 15 years and holds a certification in pet nutrition. She's passionate about helping dogs live their best, healthiest lives through proper raw feeding.",
        photo: "sarah_martinez.jpg",
      },
      {
        id: 2,
        name: "Michael Chen",
        role: "Nutrition Advisor",
        bio: "Michael brings 8 years of raw feeding expertise and loves working with first-time raw feeders. He specializes in helping picky eaters find their perfect protein.",
        photo: "michael_chen.jpg",
      },
    ],
    products: [
      {
        brand: "K-9 Kraving",
        name: "Chicken & Vegetable 5lb Roll",
        reason:
          "Our #1 starter protein — gentle on sensitive stomachs, perfect for first-time raw feeders. Customers see results within 2–3 weeks.",
        photo: "k9kraving_chicken.jpg",
      },
      {
        brand: "Vital Essentials",
        name: "Freeze-Dried Chicken",
        reason:
          "Convenient, mess-free, and nutrient-dense. Great for travel or supplementing meals. Dogs love it.",
        photo: "vital_essentials_chicken.jpg",
      },
      {
        brand: "Four Leaf Rover",
        name: "Complete Supplement Kit",
        reason:
          "If you're feeding home-prepared raw, this supplement ensures your dog gets essential nutrients and balanced nutrition.",
        photo: "four_leaf_rover_kit.jpg",
      },
      {
        brand: "Adored Beast",
        name: "Bone Broth",
        reason:
          "An incredible topper for picky eaters. Rich in collagen and joint support. Our customers swear by it.",
        photo: "adored_beast_broth.jpg",
      },
    ],
    events: [
      {
        id: 1,
        date: "September 14, 2026",
        type: "In-Store Event",
        name: "Raw Feeding 101 Workshop",
        description:
          "Learn the basics of raw feeding from our nutrition experts. Ideal for beginners. Free for all customers. Light refreshments provided. Register by emailing orders@thek9shop.com.",
        link: "#",
      },
      {
        id: 2,
        date: "Every 2nd Saturday",
        type: "Farmers Market",
        name: "Farmers Market — Main Street",
        description:
          "Visit us at the Bohemia Farmers Market every other Saturday from 9am–2pm. Sample products and chat with our team in person.",
        link: "#",
      },
    ],
    farmers_market:
      "Bohemia Farmers Market every 2nd Saturday, 9am–2pm, year-round",
    instagram: "@k9shop_bohemia",
    instagram_url: "https://instagram.com/k9shop_bohemia",
    facebook: "The K9 Shop — Bohemia",
    facebook_url: "https://facebook.com/k9shopbohemia",
    reviews: [
      {
        id: 1,
        text: "The team at The K9 Shop Bohemia is incredible. They took time to understand my dog's needs and recommended the perfect raw food. My pup's energy and coat have never looked better!",
        name: "Jennifer M.",
        city: "Bohemia",
      },
      {
        id: 2,
        text: "Finally found a place where the staff actually knows what they're talking about. They guided me through switching to raw step-by-step. Highly recommend!",
        name: "David L.",
        city: "Lindenhurst",
      },
      {
        id: 3,
        text: "Great selection, knowledgeable staff, and they even helped me customize a rotation plan for my senior dog. Worth the drive!",
        name: "Maria T.",
        city: "Lake Grove",
      },
    ],
    delivery: "doordash",
    delivery_details: "Order via DoorDash or call us. We deliver every Friday in the Bohemia area.",
    shipping: "Can't visit? We ship frozen orders nationwide. Contact us for details.",
    curbside: "Call 30 minutes ahead and we'll have your order ready at the front.",
    gallery_description:
      "1) Store exterior from parking lot. 2) Interior showing display tables. 3) Freezer wall showing product variety. 4) Our team photo. 5) Customers with their dogs. 6) Wall of Raw with customer pet photos.",
    unique_info:
      "We partner with local rescues and donate a portion of proceeds to pet welfare organizations.",
  },

  {
    id: "massapequa",
    slug: "massapequa",
    name: "The K9 Shop — Massapequa",
    address: "1073 North Broadway, Massapequa, NY 11758",
    city_state: "Massapequa, NY",
    phone: "516-400-3729",
    email: "orders@thek9shop.com",
    hours: {
      monday_friday: "11:00 AM – 7:00 PM",
      saturday: "10:00 AM – 5:00 PM",
      sunday: "12:00 PM – 5:00 PM",
    },
    google_maps: "https://maps.app.goo.gl/weQsz1MeZo2fAnh79",
    doordash: "https://www.doordash.com/store/23491028/",
    neighborhood: "Downtown Massapequa",
    landmarks: "Near Sunrise Mall, close to Route 27",
    highlights: [
      "🐾 Pet Friendly",
      "🅿️ Free Parking",
      "🏙️ Downtown Location",
      "★ Independently Owned",
    ],
    story:
      "The K9 Shop Massapequa opened with a mission to make raw feeding accessible to everyone. We believe nutrition is the foundation of health, and we're here to help every dog thrive. Our team has the experience and passion to guide you through this journey.",
    traditions:
      "Every customer gets a free sample on their first visit. We host weekly raw feeding questions-and-answers sessions. We love seeing happy, healthy dogs!",
    team: [
      {
        id: 1,
        name: "Frankie DiMarco",
        role: "Owner & Manager",
        bio: "Frankie has over 12 years of experience in pet nutrition and raw feeding. He's dedicated to helping customers find the perfect food for their individual dogs.",
        photo: "frankie_dimarco.jpg",
      },
      {
        id: 2,
        name: "Lina Rossi",
        role: "Nutrition Specialist",
        bio: "Lina specializes in working with dogs with special dietary needs and allergies. She loves creating custom feeding plans for challenging cases.",
        photo: "lina_rossi.jpg",
      },
    ],
    products: [
      {
        brand: "Primal",
        name: "Beef & Organ Blend",
        reason: "A customer favorite — complete nutrition in every serving. Great for maintaining muscle and energy.",
        photo: "primal_beef.jpg",
      },
      {
        brand: "Adored Beast",
        name: "Love Bugs Probiotic",
        reason: "Our most recommended supplement for gut health and digestion. 30 billion CFUs per serving.",
        photo: "adored_beast_lovebugs.jpg",
      },
      {
        brand: "Coco Therapy",
        name: "Coconut Oil",
        reason: "Perfect for skin and coat health. Great alternative to fish oil for omega-3s.",
        photo: "coco_therapy_oil.jpg",
      },
      {
        brand: "Earth Animal",
        name: "No Hide Chews",
        reason: "Long-lasting, digestible chews that keep dogs occupied. Made from natural ingredients.",
        photo: "earth_animal_chews.jpg",
      },
    ],
    events: [
      {
        id: 1,
        date: "September 20, 2026",
        type: "Product Launch",
        name: "New Supplement Line Launch",
        description:
          "We're launching an exciting new line of organ meat and supplement products. Come try samples and get launch day specials! 5pm–7pm.",
        link: "#",
      },
    ],
    farmers_market: "Not currently at farmers markets",
    instagram: "@k9shop_massapequa",
    instagram_url: "https://instagram.com/k9shop_massapequa",
    facebook: "The K9 Shop — Massapequa",
    facebook_url: "https://facebook.com/k9shopmassapequa",
    reviews: [
      {
        id: 1,
        text: "Frankie and his team are the best! They really know their stuff and helped me transition my picky eater to raw. Now he's thriving!",
        name: "Robert K.",
        city: "Massapequa",
      },
      {
        id: 2,
        text: "Love this place. The staff is knowledgeable and friendly. They remember my dog's name and dietary preferences!",
        name: "Patricia S.",
        city: "Plainview",
      },
    ],
    delivery: "doordash",
    delivery_details: "DoorDash delivery available. We also offer same-day delivery for local orders.",
    shipping: "Yes, we ship frozen orders. Contact us for shipping quotes.",
    curbside: "Yes, call ahead for convenient curbside pickup.",
    gallery_description:
      "1) Storefront photo. 2) Interior display. 3) Supplement wall. 4) Team with happy dogs. 5) Customer testimonial photos.",
    unique_info:
      "We run a loyalty program - earn points on every purchase and get discounts on future orders.",
  },

  {
    id: "lynbrook",
    slug: "lynbrook",
    name: "The K9 Shop — Lynbrook",
    address: "225 Sunrise Hwy, Lynbrook, NY 11563",
    city_state: "Lynbrook, NY",
    phone: "516-612-4534",
    email: "thek9shoplynbrook@gmail.com",
    hours: {
      monday_friday: "11:00 AM – 7:00 PM",
      saturday: "10:00 AM – 5:00 PM",
      sunday: "12:00 PM – 5:00 PM",
    },
    google_maps: "https://goo.gl/maps/WuPPKEQByfzirtxX7",
    doordash: "https://www.doordash.com/store/23778612/",
    neighborhood: "Five Towns Area",
    landmarks: "Off Sunrise Highway, near Sunrise Mall",
    highlights: [
      "🐾 Pet Friendly",
      "🅿️ Free Parking",
      "📦 Curbside Pickup",
      "★ Independently Owned",
    ],
    story:
      "Welcome to The K9 Shop Lynbrook! We opened our doors because we're passionate about raw feeding and want to serve the Five Towns community with quality products and expert guidance. Every dog deserves the best nutrition.",
    traditions:
      "Birthday treats for customers' dogs! We celebrate every pup milestone in our store.",
    team: [
      {
        id: 1,
        name: "Jessica Wong",
        role: "Owner",
        bio: "Jessica is a lifelong dog lover and raw feeding advocate. She created The K9 Shop Lynbrook to bring quality nutrition to her community.",
        photo: "jessica_wong.jpg",
      },
    ],
    products: [
      {
        brand: "K-9 Kraving",
        name: "Turkey & Vegetable Roll",
        reason: "Perfect for dogs with chicken sensitivities. Our top choice for sensitive tummies.",
        photo: "k9kraving_turkey.jpg",
      },
      {
        brand: "Vital Essentials",
        name: "Beef Muscle Chews",
        reason: "Long-lasting, completely natural. Great for dental health and keeping dogs busy.",
        photo: "vital_essentials_chews.jpg",
      },
      {
        brand: "NuLeaf Naturals",
        name: "CBD Pet Oil",
        reason: "For anxious or senior dogs. Helps with joint support and stress relief.",
        photo: "nuleaf_cbd.jpg",
      },
      {
        brand: "Adored Beast",
        name: "Microbiome All-In-One",
        reason: "Complete supplement package for optimal health. Probiotics, enzymes, and more.",
        photo: "adored_beast_microbiome.jpg",
      },
    ],
    events: [
      {
        id: 1,
        date: "Every Saturday & Sunday",
        type: "In-Store Event",
        name: "Weekend Consultations",
        description:
          "Drop by on weekends and chat with Jessica about your dog's diet and nutrition. No appointment needed!",
        link: "#",
      },
    ],
    farmers_market:
      "We attend the Lynbrook Farmers Market Saturdays May–October, 8am–12pm",
    instagram: "@k9shop_lynbrook",
    instagram_url: "https://instagram.com/k9shop_lynbrook",
    facebook: "The K9 Shop Lynbrook",
    facebook_url: "https://facebook.com/k9shoplynbrook",
    reviews: [
      {
        id: 1,
        text: "Jessica is amazing! She helped me switch my dog to raw feeding and the results have been incredible. Highly recommend!",
        name: "Emma G.",
        city: "Lynbrook",
      },
    ],
    delivery: "own_delivery",
    delivery_details:
      "We deliver every Saturday morning in the Five Towns area. Minimum $30 order. Free delivery over $75.",
    shipping: "We can ship frozen orders. Contact us for details.",
    curbside: "Yes! Call 30 min ahead for convenient curbside pickup.",
    gallery_description: "1) Store interior. 2) Product display. 3) Customer dogs. 4) Weekend consultation photos.",
    unique_info:
      "We host monthly raw feeding workshops for first-timers. Sign up via email!",
  },

  {
    id: "east-northport",
    slug: "east-northport",
    name: "The K9 Shop — East Northport",
    address: "370 Larkfield Road, East Northport, NY 11731",
    city_state: "East Northport, NY",
    phone: "631-486-1009",
    email: "thek9shopnorthport@gmail.com",
    hours: {
      monday_friday: "11:00 AM – 7:00 PM",
      saturday: "10:00 AM – 5:00 PM",
      sunday: "12:00 PM – 5:00 PM",
    },
    google_maps: "https://maps.app.goo.gl/zgT9k9ts6hNgRFKa6",
    doordash: "https://www.doordash.com/store/25014614/",
    neighborhood: "Northport Heights",
    landmarks: "Near Larkfield Shopping Center, off Route 25",
    highlights: [
      "🐾 Pet Friendly",
      "🅿️ Free Parking",
      "🏙️ Local Community Hub",
      "★ Independently Owned",
    ],
    story:
      "The K9 Shop East Northport is proud to serve Northport and surrounding communities with premium raw dog food and expert nutritional guidance. We believe in the power of species-appropriate nutrition and love seeing dogs thrive.",
    traditions:
      "Free sample tastings every weekend so your dog can help you choose!",
    team: [
      {
        id: 1,
        name: "Mike Patterson",
        role: "Owner & Raw Feeding Specialist",
        bio: "Mike has dedicated 10+ years to pet nutrition. He's passionate about helping each dog find their perfect meal plan.",
        photo: "mike_patterson.jpg",
      },
    ],
    products: [
      {
        brand: "Primal",
        name: "Lamb Blend Frozen Patties",
        reason: "Excellent for dogs with poultry sensitivities. Rich in iron and minerals.",
        photo: "primal_lamb.jpg",
      },
      {
        brand: "Crude Carnivore",
        name: "Carnivore Diet Mix",
        reason: "For the serious raw feeders. Pure meat-based nutrition, no veggies.",
        photo: "crude_carnivore_mix.jpg",
      },
      {
        brand: "Earth Animal",
        name: "Herbal Chew Sticks",
        reason: "Natural herbal formulation supports dental health and wellness.",
        photo: "earth_animal_herbs.jpg",
      },
      {
        brand: "Four Leaf Rover",
        name: "Seal Oil Omega-3",
        reason: "Superior omega-3 source for skin, coat, and cognitive health.",
        photo: "four_leaf_rover_seal_oil.jpg",
      },
    ],
    events: [],
    farmers_market: "Not currently at farmers markets",
    instagram: "@k9shop_northport",
    instagram_url: "https://instagram.com/k9shop_northport",
    facebook: "The K9 Shop — East Northport",
    facebook_url: "https://facebook.com/k9shopnorthport",
    reviews: [
      {
        id: 1,
        text: "Mike really knows his stuff! My dog's digestion improved within days of switching. Best decision ever!",
        name: "Tom H.",
        city: "East Northport",
      },
    ],
    delivery: "not_current",
    delivery_details: "",
    shipping: "Yes, we offer nationwide frozen shipping.",
    curbside: "Yes, call ahead for quick curbside pickup!",
    gallery_description: "1) Store exterior. 2) Display cases. 3) Freezer wall. 4) Happy customers with their dogs.",
    unique_info:
      "We offer private nutritional consultations. Schedule one with Mike to create a custom feeding plan.",
  },

  {
    id: "manorville",
    slug: "manorville",
    name: "The K9 Shop — Manorville",
    address: "460 County Rd 111, Unit 17, Manorville, NY 11949",
    city_state: "Manorville, NY",
    phone: "631-909-3930",
    email: "k9speciale@gmail.com",
    hours: {
      monday_friday: "11:00 AM – 7:00 PM",
      saturday: "10:00 AM – 5:00 PM",
      sunday: "12:00 PM – 5:00 PM",
    },
    google_maps: "https://goo.gl/maps/ZU7k9ts6hNgRFKa6",
    doordash: "https://www.doordash.com/store/28839136/",
    neighborhood: "Manorville Business District",
    landmarks: "In County Road 111 center, convenient highway access",
    highlights: [
      "🐾 Pet Friendly",
      "🅿️ Free Parking",
      "📦 Easy Pickup Location",
      "★ Independently Owned",
    ],
    story:
      "The K9 Shop Manorville brings premium raw nutrition to the central Long Island community. We're committed to educating pet parents about the benefits of species-appropriate feeding and helping their dogs live healthier, happier lives.",
    traditions:
      "Customer photo wall! Show us your happy, healthy raw-fed pup and we'll add it to our wall of inspiration.",
    team: [
      {
        id: 1,
        name: "Anthony Russo",
        role: "Owner & Nutritionist",
        bio: "Anthony's passion for raw feeding started with his own dogs. Now he's dedicated to helping the entire Manorville community.",
        photo: "anthony_russo.jpg",
      },
    ],
    products: [
      {
        brand: "K-9 Kraving",
        name: "Beef & Organs Complete",
        reason:
          "Our most comprehensive offering. All nutrients your dog needs in one convenient package.",
        photo: "k9kraving_beef_organs.jpg",
      },
      {
        brand: "Adored Beast",
        name: "Organ Meat Blend",
        reason: "Rich in vital nutrients and organs. The best of the best!",
        photo: "adored_beast_organs.jpg",
      },
      {
        brand: "GastroElm",
        name: "Digestive Support Formula",
        reason: "Specially designed for dogs with digestive challenges or IBS.",
        photo: "gastroelm_formula.jpg",
      },
      {
        brand: "Pawse",
        name: "Natural Joint Support",
        reason: "Great for aging dogs or active breeds. Supports mobility and comfort.",
        photo: "pawse_joints.jpg",
      },
    ],
    events: [],
    farmers_market: "",
    instagram: "@k9shop_manorville",
    instagram_url: "https://instagram.com/k9shop_manorville",
    facebook: "The K9 Shop — Manorville",
    facebook_url: "https://facebook.com/k9shopmanorville",
    reviews: [
      {
        id: 1,
        text: "Anthony is extremely knowledgeable. He helped me design a perfect rotation diet for my raw-fed dogs. Love this place!",
        name: "Lisa M.",
        city: "Manorville",
      },
    ],
    delivery: "not_current",
    delivery_details: "",
    shipping: "Yes, we ship nationwide with insulated packaging.",
    curbside: "Absolutely! Quick and easy curbside pickup available.",
    gallery_description: "1) Store front. 2) Customer photo wall. 3) Product range. 4) Team with dogs.",
    unique_info:
      "We maintain a referral program - refer a friend and both of you get 10% off your next purchase!",
  },

  {
    id: "greenville",
    slug: "greenville",
    name: "The K9 Shop — Greenville",
    address: "1320 Hampton Avenue Ext Ste 10B, Greenville, SC 29601",
    city_state: "Greenville, SC",
    phone: "864-729-8600",
    email: "sc@thek9shop.com",
    hours: {
      monday_friday: "11:00 AM – 7:00 PM",
      saturday: "10:00 AM – 5:00 PM",
      sunday: "12:00 PM – 5:00 PM",
    },
    google_maps: "https://maps.app.goo.gl/NiToqNTW6GKVVyRo6",
    doordash: null,
    neighborhood: "Water Tower District",
    landmarks:
      "On the Swamp Rabbit Trail, near Escape Artist, accessible from I-85 Exit 46",
    highlights: [
      "🐾 Pet Friendly (dogs welcome in store)",
      "🅿️ Free Parking Available",
      "🌳 On Swamp Rabbit Trail",
      "★ Independently Owned & Operated",
    ],
    story:
      "The K9 Shop Greenville is our newest location, bringing premium raw nutrition to the Upstate South Carolina community. We're passionate about helping every dog thrive through species-appropriate nutrition and expert guidance.",
    traditions:
      "Monthly raw feeding education sessions. Community partnership with local animal rescues.",
    team: [
      {
        id: 1,
        name: "Rebecca Cole",
        role: "Owner & Nutritionist",
        bio: "Rebecca relocated to Greenville to bring The K9 Shop's mission to the Southeast. She's passionate about raw feeding education and animal welfare.",
        photo: "rebecca_cole.jpg",
      },
      {
        id: 2,
        name: "James Tucker",
        role: "Raw Feeding Expert",
        bio: "James has been in the pet industry for 20+ years. He specializes in multi-dog households and complex dietary needs.",
        photo: "james_tucker.jpg",
      },
    ],
    products: [
      {
        brand: "Vital Essentials",
        name: "Beef Patties Frozen",
        reason: "Our top seller in Greenville. Great for the Southeast climate and humidity.",
        photo: "vital_essentials_beef.jpg",
      },
      {
        brand: "Primal",
        name: "Freeze-Dried Variety Packs",
        reason: "Perfect for trying different proteins. Convenient for travel on the trails!",
        photo: "primal_variety.jpg",
      },
      {
        brand: "Four Leaf Rover",
        name: "Complete Rotating Menu",
        reason:
          "Variety is key to nutrition. We help you set up proper rotations for your raw-fed dog.",
        photo: "four_leaf_rover_menu.jpg",
      },
      {
        brand: "Wholistic Pet",
        name: "Organic Supplement Line",
        reason: "Premium supplements for holistic health. South Carolina's favorite!",
        photo: "wholistic_pet_organic.jpg",
      },
    ],
    events: [
      {
        id: 1,
        date: "3rd Saturday every month",
        type: "Community Event",
        name: "Raw Feeding Meetup",
        description:
          "Join other raw-feeding enthusiasts for discussions, tips, and community. Completely free and open to all.",
        link: "#",
      },
      {
        id: 2,
        date: "September 9, 2026",
        type: "In-Store Event",
        name: "Swamp Rabbit Trail Walk & Wellness",
        description:
          "Meet us for a dog walk on the Swamp Rabbit Trail, followed by nutrition consultations back at the store!",
        link: "#",
      },
    ],
    farmers_market:
      "Saturday farmers market downtown when in season (May-November), 9am–2pm",
    instagram: "@k9shop_greenville",
    instagram_url: "https://instagram.com/k9shop_greenville",
    facebook: "The K9 Shop — Greenville",
    facebook_url: "https://facebook.com/k9shopgreenville",
    reviews: [
      {
        id: 1,
        text: "Rebecca and James brought something special to Greenville! Knowledgeable, friendly, and genuinely care about your dog's nutrition. Highly recommend!",
        name: "Sarah W.",
        city: "Greenville",
      },
      {
        id: 2,
        text: "Best raw food selection in the area. Love the community feel and their commitment to local animal welfare.",
        name: "Derek B.",
        city: "Simpsonville",
      },
    ],
    delivery: "not_current",
    delivery_details: "",
    shipping: "Yes! We ship nationwide with quality insulation.",
    curbside: "Yes, quick curbside pickup available!",
    gallery_description:
      "1) Store exterior in Water Tower District. 2) Swamp Rabbit Trail nearby. 3) Inside the shop. 4) Team with happy customers. 5) Community event photos. 6) Rescue partnership highlights.",
    unique_info:
      "We donate a portion of every sale to local animal rescue organizations. Your purchase helps save lives!",
  },

  {
    id: "naples",
    slug: "naples",
    name: "The K9 Shop — Naples",
    address: "4186 Tamiami Trl N, Naples, FL 34103",
    city_state: "Naples, FL",
    phone: "239-234-6065",
    email: "TheK9shopswfl@gmail.com",
    hours: {
      monday_friday: "11:00 AM – 7:00 PM",
      saturday: "10:00 AM – 5:00 PM",
      sunday: "12:00 PM – 5:00 PM",
    },
    google_maps: "https://maps.app.goo.gl/fRNibRUdUexfHSkWA",
    doordash: null,
    neighborhood: "Naples Central",
    landmarks: "On Tamiami Trail, convenient to downtown Naples and Gulf Coast",
    highlights: [
      "🐾 Pet Friendly",
      "🅿️ Free Parking",
      "🌳 Near Beach & Nature Trails",
      "★ Independently Owned",
    ],
    story:
      "Welcome to The K9 Shop Naples! We serve the Gulf Coast community with premium raw dog nutrition and expert guidance. Our mission is to help every dog live their healthiest life through species-appropriate feeding.",
    traditions:
      "Beach day consultations! We can arrange to meet on the beach and discuss your dog's nutrition while enjoying the Naples sunshine.",
    team: [
      {
        id: 1,
        name: "Crystal Brooks",
        role: "Owner & Nutritionist",
        bio: "Crystal moved to Naples and brought her raw feeding expertise with her. She loves helping Florida dogs thrive in the heat and humidity.",
        photo: "crystal_brooks.jpg",
      },
    ],
    products: [
      {
        brand: "Vital Essentials",
        name: "Beef Variety Pack",
        reason: "Perfect for the Florida climate. Great for introducing raw feeding.",
        photo: "vital_essentials_variety.jpg",
      },
      {
        brand: "Primal",
        name: "Chicken Patties",
        reason: "Our most popular choice in Naples. Great value and nutrition.",
        photo: "primal_chicken.jpg",
      },
      {
        brand: "Adored Beast",
        name: "Organ Meat Blend",
        reason: "Complete nutrition in every serving. Florida favorite!",
        photo: "adored_beast_organs.jpg",
      },
      {
        brand: "NuLeaf Naturals",
        name: "Hemp Oil for Joint Support",
        reason:
          "Great for senior dogs and those with joint issues. Helps with heat-related inflammation.",
        photo: "nuleaf_hemp.jpg",
      },
    ],
    events: [],
    farmers_market:
      "Farmers market when in season, weekends, various Naples locations",
    instagram: "@k9shop_naples",
    instagram_url: "https://instagram.com/k9shop_naples",
    facebook: "The K9 Shop — Naples",
    facebook_url: "https://facebook.com/k9shopnaples",
    reviews: [
      {
        id: 1,
        text: "Crystal is wonderful! She helped me switch my rescue to raw feeding and the transformation has been amazing. Love this store!",
        name: "Diane V.",
        city: "Naples",
      },
    ],
    delivery: "not_current",
    delivery_details: "",
    shipping: "We ship nationwide with excellent insulation for Florida heat!",
    curbside: "Yes, easy curbside pickup available.",
    gallery_description:
      "1) Store front on Tamiami Trail. 2) Naples beach location. 3) Inside the shop. 4) Happy customers with their dogs. 5) Beach day consultation photos.",
    unique_info:
      "We partner with local rescue organizations to help feed rescued dogs while they transition to adoption.",
  },
];

export default locations;
