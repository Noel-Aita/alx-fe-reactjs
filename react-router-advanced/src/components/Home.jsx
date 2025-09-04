import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Home Page</h1>
      <Link to="/profile" className="mr-4 text-blue-500">Go to Profile</Link>
      <Link to="/blog/123" className="text-blue-500">Go to Blog Post 123</Link>
    </div>
  );
}
