const sampleListings = [
  {
    title: "Cozy Beachfront Cottage",
    description:
      "Escape to this charming beachfront cottage for a relaxing getaway. Enjoy stunning ocean views and easy access to the beach.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    },
    price: 1500,
    address: "Malibu",
    country: "United States",
    subCategory: "Private Single Room",
    location: {
      type: "Point",
      coordinates: [-118.6919, 34.0259],
    },
  },
  {
    title: "Modern Loft in Downtown",
    description:
      "Stay in the heart of the city in this stylish loft apartment. Perfect for urban explorers!",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    },
    price: 1200,
    address: "New York City",
    country: "United States",
    subCategory: "1 BHK Apartment",
    location: {
      type: "Point",
      coordinates: [-74.0060, 40.7128],
    },
  },
  {
    title: "Mountain Retreat",
    description:
      "Unplug and unwind in this peaceful mountain cabin. Surrounded by nature, it's a perfect place to recharge.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    },
    price: 1000,
    address: "Aspen",
    country: "United States",
    subCategory: "Single Room",
    location: {
      type: "Point",
      coordinates: [-106.8367, 39.1911],
    },
  },
  {
    title: "Historic Villa in Tuscany",
    description:
      "Experience the charm of Tuscany in this beautifully restored villa. Explore the rolling hills and vineyards.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    },
    price: 2500,
    address: "Florence",
    country: "Italy",
    subCategory: "Premium Room",
    location: {
      type: "Point",
      coordinates: [11.2558, 43.7696],
    },
  },
  {
    title: "Secluded Treehouse Getaway",
    description:
      "Live among the treetops in this unique treehouse retreat. A true nature lover's paradise.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    },
    price: 800,
    address: "Portland",
    country: "United States",
    subCategory: "Shared Room",
    location: {
      type: "Point",
      coordinates: [-122.6784, 45.5152],
    },
  },
  {
    title: "Beachfront Paradise",
    description:
      "Step out of your door onto the sandy beach. This beachfront condo offers the ultimate relaxation.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    },
    price: 2000,
    address: "Cancun",
    country: "Mexico",
    subCategory: "Service Apartment",
    location: {
      type: "Point",
      coordinates: [-86.8515, 21.1619],
    },
  },
  {
    title: "Rustic Cabin by the Lake",
    description:
      "Spend your days fishing and kayaking on the serene lake. This cozy cabin is perfect for outdoor enthusiasts.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1516455590571-18256e5bb9ff?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    },
    price: 900,
    address: "Lake Tahoe",
    country: "United States",
    subCategory: "Studio Room",
    location: {
      type: "Point",
      coordinates: [-120.0324, 39.0968],
    },
  },
  {
    title: "Luxury Penthouse with City Views",
    description:
      "Indulge in luxury living with panoramic city views from this stunning penthouse apartment.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    },
    price: 3500,
    address: "Los Angeles",
    country: "United States",
    subCategory: "Premium Room",
    location: {
      type: "Point",
      coordinates: [-118.2437, 34.0522],
    },
  },
  {
    title: "Ski-In/Ski-Out Chalet",
    description:
      "Hit the slopes right from your doorstep in this ski-in/ski-out chalet in the Swiss Alps.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1551218808-94e220e084d2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    },
    price: 3000,
    address: "Verbier",
    country: "Switzerland",
    subCategory: "Premium Room",
    location: {
      type: "Point",
      coordinates: [7.2284, 46.0964],
    },
  },
  {
    title: "Safari Lodge in the Serengeti",
    description:
      "Experience the thrill of the wild in a comfortable safari lodge. Witness the Great Migration up close.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1521401830884-6c03c1c87ebb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    },
    price: 4000,
    address: "Serengeti National Park",
    country: "Tanzania",
    subCategory: "Premium Room",
    location: {
      type: "Point",
      coordinates: [34.8333, -2.3333],
    },
  },
  {
    title: "Historic Canal House",
    description:
      "Stay in a piece of history in this beautifully preserved canal house in Amsterdam's iconic district.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    },
    price: 1800,
    address: "Amsterdam",
    country: "Netherlands",
    subCategory: "Co-living Room",
    location: {
      type: "Point",
      coordinates: [4.9041, 52.3676],
    },
  },
  {
    title: "Private Island Retreat",
    description:
      "Have an entire island to yourself for a truly exclusive and unforgettable vacation experience.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1540979388789-6cee28a1cdc9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    },
    price: 10000,
    address: "Fiji",
    country: "Fiji",
    subCategory: "Premium Room",
    location: {
      type: "Point",
      coordinates: [177.4760, -17.7134],
    },
  },
  {
    title: "Charming Cottage in the Cotswolds",
    description:
      "Escape to the picturesque Cotswolds in this quaint and charming cottage with a thatched roof.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    },
    price: 1200,
    address: "Cotswolds",
    country: "United Kingdom",
    subCategory: "Standard Room",
    location: {
      type: "Point",
      coordinates: [-1.8094, 51.8330],
    },
  },
  {
    title: "Historic Brownstone in Boston",
    description:
      "Step back in time in this elegant historic brownstone located in the heart of Boston.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    },
    price: 2200,
    address: "Boston",
    country: "United States",
    subCategory: "1 BHK Apartment",
    location: {
      type: "Point",
      coordinates: [-71.0589, 42.3601],
    },
  },
  {
    title: "Beachfront Bungalow in Bali",
    description:
      "Relax on the sandy shores of Bali in this beautiful beachfront bungalow with a private pool.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    },
    price: 1800,
    address: "Bali",
    country: "Indonesia",
    subCategory: "Private Single Room",
    location: {
      type: "Point",
      coordinates: [115.0920, -8.4095],
    },
  },
  {
    title: "Mountain View Cabin in Banff",
    description:
      "Enjoy breathtaking mountain views from this cozy cabin in the Canadian Rockies.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    },
    price: 1500,
    address: "Banff",
    country: "Canada",
    subCategory: "Single Room",
    location: {
      type: "Point",
      coordinates: [-115.5708, 51.1784],
    },
  },
  {
    title: "Art Deco Apartment in Miami",
    description:
      "Step into the glamour of the 1920s in this stylish Art Deco apartment in South Beach.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    },
    price: 1600,
    address: "Miami",
    country: "United States",
    subCategory: "Shared Apartment",
    location: {
      type: "Point",
      coordinates: [-80.1918, 25.7617],
    },
  },
  {
    title: "Tropical Villa in Phuket",
    description:
      "Escape to a tropical paradise in this luxurious villa with a private infinity pool in Phuket.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    },
    price: 3000,
    address: "Phuket",
    country: "Thailand",
    subCategory: "Premium Room",
    location: {
      type: "Point",
      coordinates: [98.3923, 7.8804],
    },
  },
  {
    title: "Historic Castle in Scotland",
    description:
      "Live like royalty in this historic castle in the Scottish Highlands. Explore the rugged beauty of the area.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1551524164-687a55dd1126?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    },
    price: 4000,
    address: "Scottish Highlands",
    country: "United Kingdom",
    subCategory: "Premium Room",
    location: {
      type: "Point",
      coordinates: [-4.2026, 57.2790],
    },
  },
  {
    title: "Desert Oasis in Dubai",
    description:
      "Experience luxury in the middle of the desert in this opulent oasis in Dubai with a private pool.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1618773928121-c32242e63f39?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    },
    price: 5000,
    address: "Dubai",
    country: "United Arab Emirates",
    subCategory: "Premium Room",
    location: {
      type: "Point",
      coordinates: [55.2708, 25.2048],
    },
  },
  {
    title: "Rustic Log Cabin in Montana",
    description:
      "Unplug and unwind in this cozy log cabin surrounded by the natural beauty of Montana.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1587061949409-02df41d5e562?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    },
    price: 1100,
    address: "Montana",
    country: "United States",
    subCategory: "Studio Room",
    location: {
      type: "Point",
      coordinates: [-110.3626, 46.8059],
    },
  },
  {
    title: "Beachfront Villa in Greece",
    description:
      "Enjoy the crystal-clear waters of the Mediterranean in this beautiful beachfront villa on a Greek island.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    },
    price: 2500,
    address: "Mykonos",
    country: "Greece",
    subCategory: "Premium Room",
    location: {
      type: "Point",
      coordinates: [25.3289, 37.4415],
    },
  },
  {
    title: "Eco-Friendly Treehouse Retreat",
    description:
      "Stay in an eco-friendly treehouse nestled in the forest. It's the perfect escape for nature lovers.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1488462237308-ecaa28b729d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    },
    price: 750,
    address: "Costa Rica",
    country: "Costa Rica",
    subCategory: "Budget Room",
    location: {
      type: "Point",
      coordinates: [-83.7534, 9.7489],
    },
  },
  {
    title: "Historic Cottage in Charleston",
    description:
      "Experience the charm of historic Charleston in this beautifully restored cottage with a private garden.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    },
    price: 1600,
    address: "Charleston",
    country: "United States",
    subCategory: "Standard Room",
    location: {
      type: "Point",
      coordinates: [-79.9311, 32.7765],
    },
  },
  {
    title: "Modern Apartment in Tokyo",
    description:
      "Explore the vibrant city of Tokyo from this modern and centrally located apartment.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    },
    price: 2000,
    address: "Tokyo",
    country: "Japan",
    subCategory: "1 BHK Apartment",
    location: {
      type: "Point",
      coordinates: [139.6917, 35.6895],
    },
  },
  {
    title: "Lakefront Cabin in New Hampshire",
    description:
      "Spend your days by the lake in this cozy cabin in the scenic White Mountains of New Hampshire.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    },
    price: 1200,
    address: "New Hampshire",
    country: "United States",
    subCategory: "Single Room",
    location: {
      type: "Point",
      coordinates: [-71.5376, 43.1939],
    },
  },
  {
    title: "Luxury Villa in the Maldives",
    description:
      "Indulge in luxury in this overwater villa in the Maldives with stunning views of the Indian Ocean.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1540541338287-41700207dee6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    },
    price: 6000,
    address: "Maldives",
    country: "Maldives",
    subCategory: "Premium Room",
    location: {
      type: "Point",
      coordinates: [73.2207, 3.2028],
    },
  },
  {
    title: "Ski Chalet in Aspen",
    description:
      "Hit the slopes in style with this luxurious ski chalet in the world-famous Aspen ski resort.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1551218808-94e220e084d2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    },
    price: 4000,
    address: "Aspen",
    country: "United States",
    subCategory: "Premium Room",
    location: {
      type: "Point",
      coordinates: [-106.8367, 39.1911],
    },
  },
  {
    title: "Secluded Beach House in Costa Rica",
    description:
      "Escape to a secluded beach house on the Pacific coast of Costa Rica. Surf, relax, and unwind.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    },
    price: 1800,
    address: "Costa Rica",
    country: "Costa Rica",
    subCategory: "Private Single Room",
    location: {
      type: "Point",
      coordinates: [-83.7534, 9.7489],
    },
  },
];


module.exports = { data: sampleListings };