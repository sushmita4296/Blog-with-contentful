import { useEffect, useState } from "react";
import { client } from "../../client";
import Post from "../post/Post";
import "./posts.css";

function Posts() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    client
      .getEntries({ content_type: "myStarterBlog" })
      .then((response) => {
        console.log(response);
        setPosts(response.items);
      })
      .catch(console.error);
  }, []);

  console.log(posts, "~~> post");

  return (
    <div className="posts">
      {posts.map((post) => {
        return <Post key={post.sys.id} post={post} />;
      })}
    </div>
  );
}
export default Posts;
