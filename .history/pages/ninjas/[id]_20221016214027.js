export const getStaticPaths = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.ja
}
const Details = () => {
  return (
    <div>
      <h1>Details</h1>
    </div>
  );
};

export default Details;