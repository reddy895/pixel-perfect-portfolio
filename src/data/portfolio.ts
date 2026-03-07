export interface DesignWork {
  id: string;
  title: string;
  category: string;
  price: number;
  description: string;
  imageUrl: string;
  featured: boolean;
}

export const categories = [
  "All",
  "Logo Design",
  "Poster Design",
  "Social Media Posts",
  "YouTube Thumbnails",
  "Banner Designs",
  "Branding",
];

// Mock data - will be replaced with Google Drive API data
export const portfolioWorks: DesignWork[] = [
  {
    id: "1",
    title: "Modern Brand Identity",
    category: "Logo Design",
    price: 150,
    description: "A sleek, modern brand identity design featuring clean lines and bold typography. Perfect for tech startups and innovative businesses.",
    imageUrl: "https://images.unsplash.com/photo-1626785774573-4b799315345d?w=800&q=80",
    featured: true,
  },
  {
    id: "2",
    title: "Music Festival Poster",
    category: "Poster Design",
    price: 80,
    description: "Vibrant, eye-catching festival poster design with dynamic typography and bold color combinations.",
    imageUrl: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&q=80",
    featured: true,
  },
  {
    id: "3",
    title: "Instagram Content Pack",
    category: "Social Media Posts",
    price: 120,
    description: "A cohesive set of Instagram post templates designed for maximum engagement and brand consistency.",
    imageUrl: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&q=80",
    featured: false,
  },
  {
    id: "4",
    title: "Gaming Channel Thumbnail",
    category: "YouTube Thumbnails",
    price: 35,
    description: "High-impact YouTube thumbnail designed to maximize click-through rates with bold visuals.",
    imageUrl: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=800&q=80",
    featured: true,
  },
  {
    id: "5",
    title: "Corporate Web Banner",
    category: "Banner Designs",
    price: 60,
    description: "Professional web banner design with clean layout and compelling call-to-action elements.",
    imageUrl: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=800&q=80",
    featured: false,
  },
  {
    id: "6",
    title: "Complete Brand Package",
    category: "Branding",
    price: 500,
    description: "Full branding package including logo, color palette, typography guide, and brand guidelines document.",
    imageUrl: "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?w=800&q=80",
    featured: true,
  },
  {
    id: "7",
    title: "Minimalist Logo Mark",
    category: "Logo Design",
    price: 100,
    description: "Clean and minimal logo mark that works across all mediums and scales beautifully.",
    imageUrl: "https://images.unsplash.com/photo-1524678714210-9917a6c619c2?w=800&q=80",
    featured: false,
  },
  {
    id: "8",
    title: "Event Promotion Poster",
    category: "Poster Design",
    price: 75,
    description: "Bold event promotion poster with striking visuals and clear information hierarchy.",
    imageUrl: "https://images.unsplash.com/photo-1534670007418-fbb7f6cf32c3?w=800&q=80",
    featured: false,
  },
];

export const pricingPackages = [
  {
    id: "logo",
    name: "Logo Design",
    priceRange: "$100 - $300",
    features: ["2-3 Concepts", "Unlimited Revisions", "Source Files", "Brand Colors"],
    popular: false,
  },
  {
    id: "poster",
    name: "Poster Design",
    priceRange: "$60 - $150",
    features: ["Custom Illustration", "Print Ready", "Digital Version", "2 Revisions"],
    popular: false,
  },
  {
    id: "thumbnail",
    name: "YouTube Thumbnail",
    priceRange: "$25 - $50",
    features: ["Eye-catching Design", "Click Optimized", "Fast Delivery", "1 Revision"],
    popular: true,
  },
  {
    id: "instagram",
    name: "Instagram Post",
    priceRange: "$30 - $80",
    features: ["On-brand Design", "Multiple Formats", "Story + Post", "2 Revisions"],
    popular: false,
  },
  {
    id: "branding",
    name: "Branding Kit",
    priceRange: "$400 - $800",
    features: ["Logo + Variants", "Color Palette", "Typography", "Brand Guidelines"],
    popular: true,
  },
];
