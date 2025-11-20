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
    phoneNumber: "+1 202 555 0147",
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
    phoneNumber: "+1 415 555 9921",
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
    phoneNumber: "+1 213 555 8400",
    address: "Los Angeles",
    country: "United States",
    subCategory: "Premium Room",
    location: {
      type: "Point",
      coordinates: [-118.2437, 34.0522],
    },
  },
];

module.exports = { data: sampleListings };
