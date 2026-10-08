import Image from 'next/image';
import styles from '@/styles/Location.module.css';

export default function Gallery({ location }) {
  if (!location.gallery || location.gallery.length === 0) {
    return null;
  }

  const galleryImages = location.gallery.slice(0, 8);

  return (
    <section id="gallery" className={styles.gallerySection}>
      <div className={styles.galleryContainer}>
        <div className={styles.galleryHeader}>
          <h2>Gallery</h2>
          <p>See our store and happy customers</p>
        </div>

        <div className={styles.galleryGrid}>
          {galleryImages.map((image, idx) => (
            <div key={idx} className={styles.galleryItem}>
              <Image 
                src={image} 
                alt={`Gallery image ${idx + 1}`}
                fill
                className={styles.galleryImage}
                style={{ objectFit: 'cover' }}
                unoptimized
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}