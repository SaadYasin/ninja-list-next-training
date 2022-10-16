import Link from "next/link";

const NotFound = () => {
  return (
    <div className="not-found">
      <h1>I am so sorry . . .</h1>
      <h4>That page can not be found </h4>
      <p>Go back to the 
        <Link href="/">
          <a>homepage</a>
        </Link>
      </p>
    </div>
  );
}

export default NotFound;