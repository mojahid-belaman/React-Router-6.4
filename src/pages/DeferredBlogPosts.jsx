import React, { Suspense } from "react";
import Posts from "../components/Posts";
import { Await, defer, useLoaderData } from "react-router-dom";
import { getSlowPosts } from "../util/api";

const DeferredBlogPostsPage = () => {
  const loaderData = useLoaderData();
  return (
    <React.Fragment>
      <h1>Our Blog Posts</h1>
      <Suspense fallback={<p>LOADING...</p>}>
        <Await resolve={loaderData.posts}>
          {(loadedPost) => <Posts blogPosts={loadedPost} />}
        </Await>
      </Suspense>
    </React.Fragment>
  );
};

export default DeferredBlogPostsPage;

export async function loader() {
  return defer({ posts: getSlowPosts() });
}
