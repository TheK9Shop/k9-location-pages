import styles from '@/styles/Location.module.css';

export default function Reviews({ location }) {
  if (!location.reviews || location.reviews.length === 0) {
    return null;
  }

  return (
    <section id="reviews" className={styles.reviewsSection}>
      <div className={styles.reviewsContainer}>
        <div className={styles.reviewsHeader}>
          <h2>Customer Reviews</h2>
          <p>What our customers are saying about The K9 Shop</p>
        </div>

        <div className={styles.reviewsGrid}>
          {location.reviews.map((review) => (
            <div key={review.id} className={styles.reviewCard}>
              <div className={styles.reviewRating}>
                {'⭐'.repeat(review.rating)}
              </div>
              <p className={styles.reviewQuote}>"{review.quote}"</p>
              <p className={styles.reviewName}>— {review.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}