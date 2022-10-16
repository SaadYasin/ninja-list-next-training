import styles from '../../styles/Details.module.css'

export const getStaticPaths = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();

  const paths = data.map(ninja => {
    return {
      params: { id: ninja.id.toString() }
    }
  });

  return {
    paths,
    fallback: false
  }
}

export const getStaticProps = async (context) => {
  const id = context.params.id;
  const res = await fetch("https://jsonplaceholder.typicode.com/users/" + id);
  const data = await res.json();

  return {
    props: { ninja: data }
  }
}
const Details = ( { ninja }) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.name}>{ninja.name}</h1>
      <p>
        <span>Email address: </span>
        {ninja.email}
      </p>
      <p>
        <span>Website: </span>
        {ninja.website}
      </p>
      <p>{ninja.address.city}</p>
    </div>
  );
};

export default Details;