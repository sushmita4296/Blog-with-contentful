import moment from "moment";
import { Link } from "react-router-dom";
import "./post.css";

function Post({ post }) {
  const { title, blog_body, blog_img, created_at } = post.fields;
  console.log(blog_body, "~~>");
  console.log(post, "~~>");
  return (
    <div className="post">
      <div className="postWrapper">
        <img
          className="postImg"
          src={blog_img.fields.file.url}
          alt="post-image"
        />
        <div className="postInfo">
          <div className="postCats"></div>
          <Link
            to="Single-post"
            state={{ title, blog_body, blog_img, created_at }}
          >
            <span className="postTitle">{title}</span>
          </Link>
          <hr />
          <span className="postDate">
            {moment(created_at).format("YYYY-MM-DD")}
          </span>
        </div>
      </div>
    </div>
  );
}
export default Post;
