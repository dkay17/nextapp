import Link from "next/link";
import styles from './page.module.css'

export default function Page() {
  return (
    <>
      <div className="main">
        <div className={styles.games}>
          <div className={styles.genres}>
            <div className={styles.genrename}>
              <b>Arcade</b>
            </div>
            <div className={styles.gamelist}>
              <div className={styles.playgame}>
                1. Snake Game
                <div className={styles.playbutton}>
                  Play Now
                  <button className={styles.but}><Link href="/genre/arcade/snake">p</Link></button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

