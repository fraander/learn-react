import BucketList from "./qcomps/arrObj";
import styles from '@/styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.main}>
      <BucketList />
    </div>
  );
}
