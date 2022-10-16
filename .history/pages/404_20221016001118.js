import Link from "next/link";
import { useRouter } from "next/router";

const NotFound = () => {
  const router = useRouter()
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