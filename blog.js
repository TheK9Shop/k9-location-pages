/**
 * K9 Shop Blog Structure
 * 
 * This file defines the blog structure and metadata.
 * Later: Add content and integrate with Supabase for dynamic posts
 * 
 * Current structure allows for:
 * - General K9 Shop blog posts (site-wide)
 * - Location-specific featured posts
 * - Tags, categories, and SEO optimization
 */

export const blogPosts = [
  // Future posts will go here
  // This is a placeholder structure
];

export const blogCategories = [
  {
    id: "nutrition",
    name: "Nutrition & Feeding",
    slug: "nutrition-feeding",
    description: "Everything about raw feeding, nutrition, and dietary guidance",
  },
  {
    id: "health",
    name: "Health & Wellness",
    slug: "health-wellness",
    description: "Dog health, supplements, and wellness topics",
  },
  {
    id: "recipes",
    name: "Recipes & Meal Plans",
    slug: "recipes-meal-plans",
    description: "Raw feeding recipes and custom meal plans",
  },
  {
    id: "events",
    name: "Store Events",
    slug: "store-events",
    description: "Announcements and recaps from our locations",
  },
  {
    id: "community",
    name: "Community",
    slug: "community",
    description: "Customer stories and community highlights",
  },
];

/**
 * Blog Tags for organization and filtering
 */
export const blogTags = [
  "raw-feeding",
  "nutrition",
  "supplements",
  "sensitive-stomach",
  "allergies",
  "senior-dogs",
  "puppies",
  "multi-dog-household",
  "raw-feeding-101",
  "meal-plans",
  "recipes",
  "event-recap",
  "customer-story",
  "product-review",
  "wellness",
  "joint-health",
  "skin-coat",
  "digestion",
  "weight-management",
  "organic",
  "freeze-dried",
  "bone-broth",
  "probiotics",
  "cbd",
  "local-news",
];

/**
 * Planned Blog Post Topics
 * These are placeholder topics for future content
 */
export const plannedBlogTopics = [
  {
    title: "Complete Guide to Raw Feeding for Beginners",
    category: "nutrition",
    tags: ["raw-feeding-101", "nutrition", "puppies"],
    excerpt:
      "Everything you need to know to start your dog on a raw feeding journey. Safety, nutrition, and common questions answered.",
    planned_for: "September 2026",
    location_featured_for: null,
  },
  {
    title: "Raw vs. Kibble: A Nutritional Comparison",
    category: "nutrition",
    tags: ["nutrition", "raw-feeding"],
    excerpt:
      "Detailed breakdown of raw diets vs. commercial kibble. Which is better for your dog?",
    planned_for: "September 2026",
    location_featured_for: null,
  },
  {
    title: "Best Proteins for Dogs with Sensitive Stomachs",
    category: "health",
    tags: ["sensitive-stomach", "nutrition", "allergies"],
    excerpt:
      "A guide to choosing the right protein for dogs with digestive issues and allergies.",
    planned_for: "October 2026",
    location_featured_for: null,
  },
  {
    title: "The Power of Bone Broth for Dog Health",
    category: "health",
    tags: ["bone-broth", "wellness", "joint-health"],
    excerpt:
      "How bone broth supports joint health, digestion, and overall wellness in raw-fed dogs.",
    planned_for: "October 2026",
    location_featured_for: null,
  },
  {
    title: "Supplements Your Raw-Fed Dog Might Need",
    category: "health",
    tags: ["supplements", "nutrition", "wellness"],
    excerpt:
      "A complete guide to essential supplements for raw-fed dogs and when they're necessary.",
    planned_for: "October 2026",
    location_featured_for: null,
  },
  {
    title: "Building the Perfect Raw Rotation",
    category: "recipes",
    tags: ["meal-plans", "nutrition", "recipes"],
    excerpt:
      "Why rotation matters and how to create a balanced rotating diet for your dog.",
    planned_for: "November 2026",
    location_featured_for: null,
  },
  {
    title: "Senior Dogs and Raw Feeding: A Special Guide",
    category: "nutrition",
    tags: ["senior-dogs", "nutrition", "health"],
    excerpt:
      "Adapting raw feeding for senior dogs. Special considerations and nutritional adjustments.",
    planned_for: "November 2026",
    location_featured_for: null,
  },
  {
    title: "CBD for Dogs: Benefits, Dosage, and Safety",
    category: "health",
    tags: ["cbd", "wellness", "supplements"],
    excerpt:
      "Everything pet parents need to know about CBD for dogs. Safety, benefits, and quality considerations.",
    planned_for: "December 2026",
    location_featured_for: null,
  },
];

/**
 * Location-Specific Blog Topics
 * Each location can have 2-3 featured posts per year
 */
export const locationBlogTopics = {
  bohemia: [
    {
      title: "Bohemia Raw Feeding Success Stories",
      category: "community",
      tags: ["customer-story", "local-news"],
      excerpt:
        "Meet some of our Bohemia customers and hear how raw feeding transformed their dogs.",
      status: "planned",
    },
  ],
  massapequa: [
    {
      title: "Massapequa's Favorite Raw Food Brands",
      category: "product-review",
      tags: ["product-review", "local-news"],
      excerpt:
        "The most popular raw food brands among Massapequa customers and why they love them.",
      status: "planned",
    },
  ],
  lynbrook: [
    {
      title: "Five Towns Raw Feeding Guide",
      category: "nutrition",
      tags: ["raw-feeding-101", "local-news"],
      excerpt:
        "A guide to raw feeding specifically for the Five Towns community.",
      status: "planned",
    },
  ],
  "east-northport": [
    {
      title: "Northport Wellness Workshop Recap",
      category: "events",
      tags: ["event-recap", "local-news"],
      excerpt: "Recap from our latest wellness workshop at the East Northport location.",
      status: "planned",
    },
  ],
  manorville: [
    {
      title: "Manorville Community Spotlight",
      category: "community",
      tags: ["customer-story", "local-news"],
      excerpt:
        "Highlighting the amazing raw-feeding community in Manorville.",
      status: "planned",
    },
  ],
  greenville: [
    {
      title: "Greenville's Raw Feeding Meetup Group",
      category: "community",
      tags: ["event-recap", "local-news"],
      excerpt:
        "Join Greenville's growing raw feeding community and connect with other pet parents.",
      status: "planned",
    },
    {
      title: "Swamp Rabbit Trail Dog Wellness Guide",
      category: "health",
      tags: ["wellness", "local-news"],
      excerpt:
        "Keeping your raw-fed dog healthy while enjoying outdoor adventures on the Swamp Rabbit Trail.",
      status: "planned",
    },
  ],
  naples: [
    {
      title: "Raw Feeding in Hot Florida Climates",
      category: "health",
      tags: ["nutrition", "local-news"],
      excerpt:
        "Special considerations for raw feeding dogs in Florida's heat and humidity.",
      status: "planned",
    },
  ],
};

export default blogPosts;
