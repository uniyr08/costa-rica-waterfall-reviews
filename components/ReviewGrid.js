import ReviewCard from './ReviewCard';
import styles from '../styles/review-grid.module.css';

export default function ReviewGrid({ reviews }) {
  return (
    <section className={styles.gridSection}>
      <div className={styles.grid}>
        {reviews.map((review, index) => (
          <ReviewCard key={review.id} review={review} index={index} />
        ))}
      </div>
    </section>
  );
}
