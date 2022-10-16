import Link from "next/link";

const NotFound = () => {
  const router = use
  return (
    <div className="not-found">
      <h1>I am so sorry . . .</h1>
      <h3>That page can not be found </h3>
      <p>Go back to the 
        <Link href="/">
          <a>Homepage</a>
        </Link>
      </p>
    </div>
  );
}

export default NotFound;