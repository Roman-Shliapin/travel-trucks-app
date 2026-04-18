'use client';

import { use } from 'react';
import { useQuery } from '@tanstack/react-query';
import { getCamperById, getCamperReviews } from '@/lib/api';
import { Gallery } from '@/components/Gallery/Gallery';
import { Reviews } from '@/components/Reviews/Reviews';
import { BookingForm } from '@/components/BookingForm/BookingForm';
import { FaStar, FaMapMarkerAlt } from 'react-icons/fa';
import { Loader } from '@/components/Loader/Loader';
import styles from './camper.module.css';

interface Props {
  params: Promise<{ camperId: string }>;
}

export default function CamperPage({ params }: Props) {
  const { camperId } = use(params);

  const { data: camper, isLoading } = useQuery({
    queryKey: ['camper', camperId],
    queryFn: () => getCamperById(camperId),
  });

  const { data: reviews = [] } = useQuery({
    queryKey: ['reviews', camperId],
    queryFn: () => getCamperReviews(camperId),
  });

  if (isLoading) return <Loader />;
  if (!camper) return <p className={styles.loading}>Camper not found</p>;

  return (
    <div className={styles.page}>

      <div className={styles.top}>
        <div className={styles.galleryCol}>
          <Gallery images={camper.gallery} />
        </div>

        <div className={styles.infoCol}>
          <h1 className={styles.name}>{camper.name}</h1>

          <div className={styles.meta}>
            <span className={styles.metaItem}>
              <FaStar color="#ffc531" />
              {camper.rating} ({camper.totalReviews} Reviews)
            </span>
            <span className={styles.metaItem}>
              <FaMapMarkerAlt />
              {camper.location}
            </span>
          </div>

          <p className={styles.price}>€{camper.price.toLocaleString()}</p>
          <p className={styles.description}>{camper.description}</p>

          <div className={styles.details}>
            <h2 className={styles.detailsTitle}>Vehicle details</h2>

            <div className={styles.badges}>
              {camper.amenities.map((amenity) => (
                <span key={amenity} className={styles.badge}>
                  {amenity.replace(/_/g, ' ')}
                </span>
              ))}
              {camper.transmission && (
                <span className={styles.badge}>{camper.transmission}</span>
              )}
              {camper.engine && (
                <span className={styles.badge}>{camper.engine}</span>
              )}
              {camper.form && (
                <span className={styles.badge}>{camper.form.replace(/_/g, ' ')}</span>
              )}
            </div>

            <div className={styles.specs}>
              {[
                { label: 'Form', value: camper.form?.replace(/_/g, ' ') },
                { label: 'Length', value: camper.length },
                { label: 'Width', value: camper.width },
                { label: 'Height', value: camper.height },
                { label: 'Tank', value: camper.tank },
                { label: 'Consumption', value: camper.consumption },
              ].map(({ label, value }) => value && (
                <div key={label} className={styles.specRow}>
                  <span className={styles.specLabel}>{label}</span>
                  <span className={styles.specValue}>{value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className={styles.bottom}>
        <h2 className={styles.sectionTitle}>Reviews</h2>
        <div className={styles.bottomContent}>
          <div className={styles.reviews}>
            <Reviews reviews={reviews} />
          </div>
          <BookingForm camperId={camperId} />
        </div>
      </div>
    </div>
  );
}
