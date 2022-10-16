import Head from 'next/head';
import styles from '../../styles/Ninjas.module.css';


export const getStaticProps = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await res.jason();

  return {
    props: { ninjas: data }
  }
}
export const Ninjas = ( { ninjas }) => {
  return (
    <div>
      <Head>
        <title>NINJA List | List page</title>
      </Head>
      <h1 className={styles.listTitle}>All Ninjas List</h1>
      {}
    </div>
  );
};
export default Ninjas;
