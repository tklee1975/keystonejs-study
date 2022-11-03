import { useQuery, gql } from "@apollo/client";
import PostCard from "./PostCard";

const FILMS_QUERY = gql`
# Write your query or mutation here
{
	posts 
  {
    id   
    title
    tags {
      name
    }
  }
}
`;

export default function RecentPostList() {
  const { data, loading, error } = useQuery(FILMS_QUERY);

  if (loading) return "Loading...";
  if (error) return <pre>{error.message}</pre>

  console.debug("post", post);
  const postList = data.posts.map((post) => (
    
    // <pre key={post.id}>{JSON.stringify(post)}</pre>
    <PostCard key={post.id} post={post} />
    // <li key={launch.id}>{launch.mission_name}</li>
  ));

  return (
    <div>
      <ul>{postList}</ul>
    </div>
  );
}

