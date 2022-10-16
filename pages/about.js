import Head from 'next/head';
import Navbar from '../components/Navbar';
import styles from '../styles/about.module.css';

const About = () => {
  return (
    <div className={styles.about}>
      <Head>
        <title>NINJA List | About</title>
      </Head>

      <h1 className={styles.aboutTitle}>About</h1>
      <p>
        This is an about page which will be pre-rendered and displayed
        immediately when required. This is an about page which will be
        pre-rendered and displayed immediately when required. It is about Ninja
        Gang names and addresses.
      </p>
      <p>
        Ninja Assassin is a 2009 neo-noir martial arts film directed by James
        McTeigue. The story was written by Matthew Sand, with a screenplay by J.
        Michael Straczynski. The film stars South Korean pop musician Rain as a
        disillusioned assassin looking for retribution against his former
        mentor, played by ninja film legend Sho Kosugi. Ninja Assassin explores
        political corruption, child endangerment and the impact of violence. The
        Wachowskis, Joel Silver, and Grant Hill produced the film for Legendary
        Pictures, Dark Castle Entertainment and Silver Pictures. It was
        distributed by Warner Bros. Pictures. Ninja Assassin premiered in
        theaters across the United States on November 25, 2009 and received
        mixed reviews from critics. Its box office gross was $61,590,252, of
        which $38,122,883 was from North America. The films budget was $40–50
        million.
      </p>
    </div>
  );
}

export default About;