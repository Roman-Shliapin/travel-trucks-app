import Link from 'next/link';
import Image from 'next/image';
import { CamperListItem } from '@/types/camper';
import { FaMapMarkerAlt, FaStar, FaCog, FaGasPump, FaCar } from 'react-icons/fa';
import styles from './CamperCard.module.css';

interface Props {
  camper: CamperListItem;
}

export function CamperCard({ camper }: Props) {
  return (
    <article className={styles.card}>
      <div className={styles.imageWrapper}>
        <Image
          src={camper.coverImage}
          alt={camper.name}
          fill
          className={styles.image}
          sizes="290px"
        />
      </div>

      <div className={styles.info}>
        <div className={styles.header}>
          <h2 className={styles.name}>{camper.name}</h2>
          <p className={styles.price}>€{camper.price.toLocaleString()}</p>
        </div>

        <div className={styles.meta}>
          <span className={styles.rating}>
            <FaStar color="#ffc531" />
            {camper.rating} ({camper.totalReviews} Reviews)
          </span>
          <span className={styles.location}>
            <FaMapMarkerAlt />
            {camper.location}
          </span>
        </div>

        <p className={styles.description}>{camper.description}</p>

        <div className={styles.badges}>
          {camper.transmission && (
            <span className={styles.badge}>
              <FaCog /> {camper.transmission}
            </span>
          )}
          {camper.engine && (
            <span className={styles.badge}>
              <FaGasPump /> {camper.engine}
            </span>
          )}
          {camper.form && (
            <span className={styles.badge}>
              <FaCar /> {camper.form.replace(/_/g, ' ')}
            </span>
          )}
        </div>

        <Link
          href={`/catalog/${camper.id}`}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.btn}
        >
          Show more
        </Link>
      </div>
    </article>
  );
}
