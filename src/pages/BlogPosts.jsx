import { useLoaderData } from "react-router-dom";
import Posts from "../components/Posts";
import { getPosts } from "../util/api";

function BlogPostsPage() {
  const loadData = useLoaderData();
  return (
    <>
      <h1>Our Blog Posts</h1>
      <Posts blogPosts={loadData} />
    </>
  );
}

export default BlogPostsPage;

export async function loader() {
  return await getPosts()
}