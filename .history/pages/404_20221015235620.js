import Link from "next/link";

const NotFound = () => {
  return (
    <div className="not-found">
      <h1>I am so sorry . . .</h1>
      <h4>This page is not available, return back to <LInk href="/"><a>homepage</a></LInk></h4>
    </div>
  )
}

export default NotFound;