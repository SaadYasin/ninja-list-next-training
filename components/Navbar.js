import Image from 'next/image';
import Link from "next/link";
import styles from '../styles/Navbar.module.css';

const Navbar = () => {
  return (
    <nav className={styles.header}>
      <div className={styles.logo}>
        <Image src="/ninja-logo.png" width={128} height={77} alt="" />
      </div>

      <div className={styles.navbar}>
      <Link href="/">
        <a className={styles.linkItem}>Home</a>
      </Link>

      <Link href="/about">
        <a className={styles.linkItem}>About</a>
      </Link>

      <Link href="/ninjas">
        <a className={styles.linkItem}>Ninja List</a>
      </Link>
      </div>

    </nav>
  );
};

export default Navbar;