import Image from 'next/image';
import styles from '@/styles/Location.module.css';

const categories = [
  { 
    slug: 'food', 
    name: 'Food', 
    image: 'https://robertt181.sg-host.com/wp-content/uploads/2026/10/400-x-400-Food.png',
    description: 'Proteins & toppers' 
  },
  { 
    slug: 'treats', 
    name: 'Treats', 
    image: 'https://robertt181.sg-host.com/wp-content/uploads/2026/10/400-x-400-treats.png',
    description: 'Protein treats' 
  },
  { 
    slug: 'supplement', 
    name: 'Supplement', 
    image: 'https://robertt181.sg-host.com/wp-content/uploads/2026/10/400-x-400-Supplements.png',
    description: 'Balms, wellness' 
  },
  { 
    slug: 'flea-tick', 
    name: 'Flea & Tick', 
    image: 'https://robertt181.sg-host.com/wp-content/uploads/2026/10/400-x-400-flea-and-tick.png',
    description: 'Prevention & sprays' 
  },
  { 
    slug: 'pet-supplies', 
    name: 'Pet Supplies', 
    image: 'https://robertt181.sg-host.com/wp-content/uploads/2026/10/400-x-400-pet-supplies.png',
    description: 'Collars, leashes' 
  },
  { 
    slug: 'bone-broth', 
    name: 'Bone Broth', 
    image: 'https://robertt181.sg-host.com/wp-content/uploads/2026/10/400-x-400-bone-broth.png',
    description: 'Natural tonics' 
  },
  { 
    slug: 'milk-eggs', 
    name: 'Milk & Eggs', 
    image: 'https://robertt181.sg-host.com/wp-content/uploads/2026/10/400-x-400-goat-milk-and-eggs.png',
    description: 'Raw & fermented' 
  },
];

export default function ShopByCategory({ location }) {
  const handleCategoryClick = (categorySlug) => {
    const replitUrl = `https://instore-pickup.replit.app/instore/category?location=${location.slug}&category=${categorySlug}`;
    window.open(replitUrl, '_blank');
  };

  return (
    <section id="shop-by-category" className={styles.shopByCategorySection}>
      <div className={styles.shopByCategoryContainer}>
        <div className={styles.shopByCategoryHeader}>
          <h2>Shop by Category</h2>
          <p>Browse products by category</p>
        </div>

        <div className={styles.categoryGrid}>
          {categories.map((category) => (
            <div
              key={category.slug}
              className={styles.categoryCard}
              onClick={() => handleCategoryClick(category.slug)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  handleCategoryClick(category.slug);
                }
              }}
            >
              <div className={styles.categoryImageWrapper}>
                <img 
                  src={category.image} 
                  alt={category.name}
                  className={styles.categoryImage}
                />
              </div>
              <h3>{category.name}</h3>
              <p>{category.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}