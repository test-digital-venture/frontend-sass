import { Link } from "react-router-dom";

export default function NotFoundPage() {
  return (
    <div>
      <h1>The page you are looking for is not available</h1>
      <Link to={"/"}>Go back home</Link>
    </div>
  );
}
