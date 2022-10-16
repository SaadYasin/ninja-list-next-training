import Link from "next/link";

const NotFound = () => {
  return (
    <div className="not-found">
      <h1>I am so sorry . . .</h1>
      <h4>T <Link href="/"><a>homepage</a></Link></h4>
    </div>
  )
}

export default NotFound;