import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link';
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.mainContainer}>
      <Head>
        <title>NINJA List | Home</title>
        <meta property="og:title" content="Ninja list" key="ninja list" />
      </Head>

      <h1 className={styles.heading}>Ninja Culture</h1>

      <div className={styles.image}>
        <Image src="/ninja01.jpg" width={500} height={350} alt=""></Image>
      </div>

      <p className={styles.textBody}>
        Ninja (忍者, aka shinobi, meaning &quot;those who act in stealth&quot;)
        were a type of warrior who specialized in unconventional warfare such as
        infiltration, sabotage and assassination during the age of the samurai.
        Ninja employed deception and forgery tactics to take opponents out by
        surprise. Due to their unorthodox methods, which contradicted the way of
        the warrior (bushido), the ninja were not credited with the same honor
        as the samurai.
      </p>
      <p className={styles.textBody}>
        The diverse range of skills practiced by the ninja is called ninjutsu -
        the art of stealth - and includes training in armed combat, weapon
        techniques, military strategy, meteorology, geometry and breathing
        synthesis. Ninjutsu was passed down through generations within families
        or directly from teacher to a selected one or few disciples. This
        secrecy in part explains why little factual information exists about the
        ninja, giving rise to lots of stereotyping of them both within and
        outside of Japan.
      </p>
      <Link href="/ninjas">
        <a className>See Ninja Listing</a>
      </Link>
    </div>
  );
}
