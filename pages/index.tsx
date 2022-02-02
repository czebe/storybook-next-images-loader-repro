
import styles from '../styles/Home.module.css';

import vercel from '../assets/vercel.svg';

export default function Home() {
  return (
    <div className={styles.container}>
      <h1>An imported image</h1>
      <p>
        <img src={vercel.src} alt="Vercel Logo" className={styles.logo} />
      </p>

      <h1>Custom font-family</h1>
      <p className={styles.icons}> </p>
    </div>
  );
}
