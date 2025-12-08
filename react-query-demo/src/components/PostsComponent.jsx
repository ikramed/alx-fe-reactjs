import { useQuery } from "react-query";

export default function PostsComponent() {
  const fetchPosts = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    return res.json();
  };

  const { data, isLoading, error, refetch } = useQuery("posts", fetchPosts);

  if (isLoading) return <p>Loading posts...</p>;
  if (error) return <p>Error loading posts</p>;

  return (
    <div>
      <h2>Posts List</h2>

      <button
        onClick={() => refetch()}
        style={{ padding: "8px 12px", marginBottom: "12px" }}
      >
        Refetch Posts
      </button>

      <ul>
        {data.map((post) => (
          <li key={post.id} style={{ marginBottom: "10px" }}>
            <strong>{post.title}</strong>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
