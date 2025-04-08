import Image from 'next/image'
import styles from './page.module.css'
import Link from 'next/link'
import SoundButton from './SoundButton'
import video from './components/video.mp4'
import song from './components/song.mp3'
import im from './components/im.jpg'

export default function Home() {
  
  return (
    <main  >
      <div className={styles.mydiv}>
        <div className="main">
          <div className={styles.card}>
            hi
            <Link  href="./genre/arcade/snake">Snake Game</Link>
          </div>
          <div className={styles.card}>
            h
            <Image alt='hh' src={im}/>
            <video controls autoPlay src='./components/video.mp4'></video>
          </div>
        </div>
      </div>
    </main>
  )
}
