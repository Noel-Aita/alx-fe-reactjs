import { useParams } from "react-router-dom";

export default function BlogPost() {
  const { postId } = useParams(); // dynamic parameter
  return <h2>Displaying Blog Post ID: {postId}</h2>;
}
