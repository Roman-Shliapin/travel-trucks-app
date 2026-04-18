import { Review } from '@/types/camper';
import { FaStar } from 'react-icons/fa';
import styles from './Reviews.module.css';

interface Props {
  reviews: Review[];
}

function StarRating({ rating }: { rating: number }) {
  return (
    <div className={styles.stars}>
      {[1, 2, 3, 4, 5].map((star) => (
        <FaStar
          key={star}
          color={star <= rating ? '#ffc531' : '#d0d5dd'}
          size={16}
        />
      ))}
    </div>
  );
}

export function Reviews({ reviews }: Props) {
  if (reviews.length === 0) {
    return <p className={styles.empty}>No reviews yet.</p>;
  }

  return (
    <ul className={styles.list}>
      {reviews.map((review) => (
        <li key={review.id} className={styles.item}>
          <div className={styles.avatar}>
            {review.reviewer_name.charAt(0).toUpperCase()}
          </div>
          <div className={styles.content}>
            <div className={styles.header}>
              <span className={styles.name}>{review.reviewer_name}</span>
              <StarRating rating={review.reviewer_rating} />
            </div>
            <p className={styles.comment}>{review.comment}</p>
          </div>
        </li>
      ))}
    </ul>
  );
}
