import { motion } from 'framer-motion';
import styles from '../styles/review-filter.module.css';

export default function ReviewFilter({
  tourTypes,
  selectedTourType,
  selectedRating,
  onFilter,
}) {
  return (
    <div className={styles.filterWrapper}>
      <motion.div
        className={styles.filterContainer}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {/* Tour Type Filter */}
        <div className={styles.filterGroup}>
          <label className={styles.label}>Tour Type</label>
          <div className={styles.options}>
            {tourTypes.map((type) => (
              <motion.button
                key={type}
                className={`${styles.option} ${selectedTourType === type ? styles.active : ''}`}
                onClick={() => onFilter(type, selectedRating)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {type.charAt(0).toUpperCase() + type.slice(1)}
              </motion.button>
            ))}
          </div>
        </div>

        {/* Rating Filter */}
        <div className={styles.filterGroup}>
          <label className={styles.label}>Rating</label>
          <div className={styles.options}>
            {['all', '5', '4', '3'].map((rating) => (
              <motion.button
                key={rating}
                className={`${styles.option} ${selectedRating === rating ? styles.active : ''}`}
                onClick={() => onFilter(selectedTourType, rating)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {rating === 'all' ? 'All Ratings' : `${rating}★`}
              </motion.button>
            ))}
          </div>
        </div>

        {/* Reset Button */}
        {(selectedTourType !== 'all' || selectedRating !== 'all') && (
          <motion.button
            className={styles.resetBtn}
            onClick={() => onFilter('all', 'all')}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Clear Filters
          </motion.button>
        )}
      </motion.div>
    </div>
  );
}
