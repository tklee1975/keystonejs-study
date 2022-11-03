import React from "react";
import { useQuery, gql } from "@apollo/client";
import { useParams } from "react-router-dom";
import { DocumentRenderer } from '@keystone-6/document-renderer';
import './OnePost.css'

const FILMS_QUERY = `
{
	posts(where:{slug: {equals:"#slug"}})
  {
    id   
    title
    slug
    content {
      document
    }
  }
}

`;

export default function OnePost() {
  const { slug } = useParams();

  let query = FILMS_QUERY.replace("#slug", slug);

  const { data, loading, error } = useQuery(gql(query));

  if (loading) return "Loading...";
  if (error) return <pre>{error.message}</pre>

  const postList = data.posts;
  if(postList == undefined || postList.length == 0) {
    return <div>Post not found</div>
  }

  const post = postList[0];
  
  // console.debug("post", post);
  // const postList = data.posts.map((post) => (

  //   // <pre key={post.id}>{JSON.stringify(post)}</pre>
  //   <PostCard key={post.id} post={post} />
  //   // <li key={launch.id}>{launch.mission_name}</li>
  // ));

  return (
    <div class="document">
      <h2 class="title">{post.title}</h2>
      <hr/>
      <DocumentRenderer document={post.content.document} />
      <hr/>
      <a href="/">Back to all posts</a>
    </div>
  );

}