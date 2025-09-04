import { useQuery } from "@tanstack/react-query";

// Fetch function
const fetchPosts = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  if (!response.ok) throw new Error("Network response was not ok");
  return response.json();
};

export default function PostsComponent() {
  // useQuery automatically fetches, caches, and tracks loading/error states
  const { data, error, isLoading, refetch } = useQuery({
    queryKey: ["posts"],      // Unique key for caching
    queryFn: fetchPosts,
    staleTime: 1000 * 60 * 5, // Cache data for 5 minutes
  });

  if (isLoading) return <p>Loading posts...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div className="p-4 max-w-2xl mx-auto">
      <h2 className="text-xl font-bold mb-4">Posts</h2>
      <button
        onClick={() => refetch()}
        className="mb-4 bg-blue-500 text-white px-3 py-1 rounded"
      >
        Refresh Posts
      </button>

      <ul className="space-y-2">
        {data.map((post) => (
          <li key={post.id} className="border p-2 rounded">
            <h3 className="font-semibold">{post.title}</h3>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
