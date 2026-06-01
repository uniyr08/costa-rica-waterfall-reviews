import { motion } from 'framer-motion';
import styles from '../styles/review-card.module.css';

export default function ReviewCard({ review, index }) {
  const renderStars = (rating) => {
    return [...Array(5)].map((_, i) => (
      <span key={i} className={`${styles.star} ${i < rating ? styles.filled : ''}`}>
        ★
      </span>
    ));
  };

  return (
    <motion.article
      className={styles.card}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: (index % 3) * 0.1, duration: 0.5 }}
      whileHover={{ y: -8 }}
    >
      {/* Platform badge */}
      <div className={styles.platformBadge}>{review.platform}</div>

      {/* Featured badge */}
      {review.featured && (
        <div className={styles.featuredBadge}>
          <span>★ Featured</span>
        </div>
      )}

      {/* Rating */}
      <div className={styles.ratingContainer}>
        <div className={styles.stars}>{renderStars(review.rating)}</div>
        <span className={styles.ratingText}>{review.rating}.0</span>
      </div>

      {/* Review text */}
      <p className={styles.reviewText}>{review.text}</p>

      {/* Guest info */}
      <div className={styles.guestInfo}>
        <div className={styles.guestName}>{review.name}</div>
        <div className={styles.guestMeta}>
          {review.tour_type && <span className={styles.tourType}>{review.tour_type}</span>}
          <span className={styles.date}>{new Date(review.date).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })}</span>
        </div>
      </div>

      {/* Guides */}
      {review.guides && review.guides.length > 0 && (
        <div className={styles.guides}>
          <span className={styles.guidesLabel}>Guide{review.guides.length > 1 ? 's' : ''}:</span>
          <span className={styles.guideNames}>{review.guides.join(', ')}</span>
        </div>
      )}
    </motion.article>
  );
}
