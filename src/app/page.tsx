import Link from 'next/link';
import styles from './page.module.css';

export default function HomePage() {
  return (
    <main className={styles.hero}>
      <div className={styles.heroContent}>
        <div className={styles.textBlock}>
          <h1 className={styles.title}>Campers of your dreams</h1>
          <p className={styles.subtitle}>
            You can find everything you want in our catalog
          </p>
        </div>
        <Link href="/catalog" className={styles.btn}>
          View Now
        </Link>
      </div>
    </main>
  );
}