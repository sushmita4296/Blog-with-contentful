import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS, MARKS } from "@contentful/rich-text-types";
import moment from "moment";
import { useLocation } from "react-router-dom";
import "./singlePost.css";

const Bold = ({ children }) => (
  <span className="has-text-weight-bold">{children}</span>
);

const Text = ({ children }) => <p className="align-center">{children}</p>;
const H1 = ({ children }) => (
  <div className="content">
    <h1 className="is-size-1">{children}</h1>
  </div>
);
const H2 = ({ children }) => (
  <div className="content">
    <h2 className="is-size-2">{children}</h2>
  </div>
);
const H3 = ({ children }) => (
  <div className="content">
    <h2 className="is-size-2">{children}</h2>
  </div>
);
const H4 = ({ children }) => (
  <div className="content">
    <h4 className="is-size-4">{children}</h4>
  </div>
);
const H5 = ({ children }) => (
  <div className="content">
    <h5 className="is-size-5">{children}</h5>
  </div>
);
const H6 = ({ children }) => (
  <div className="content">
    <h6 className="is-size-6">{children}</h6>
  </div>
);

function SinglePost() {
  const location = useLocation();
  const { title, blog_body, blog_img, created_at } = location.state;

  const options = {
    renderMark: {
      [MARKS.BOLD]: (text) => <Bold>{text}</Bold>,
    },
    renderNode: {
      [BLOCKS.PARAGRAPH]: (node, children) => <Text>{children}</Text>,
      [MARKS.BOLD]: (text) => <Bold>{text}</Bold>,
      [BLOCKS.HEADING_1]: (node, children) => <H1>{children}</H1>,
      [BLOCKS.HEADING_2]: (node, children) => <H2>{children}</H2>,
      [BLOCKS.HEADING_3]: (node, children) => <H3>{children}</H3>,
      [BLOCKS.HEADING_4]: (node, children) => <H4>{children}</H4>,
      [BLOCKS.HEADING_5]: (node, children) => <H5>{children}</H5>,
      [BLOCKS.HEADING_6]: (node, children) => <H6>{children}</H6>,
    },
    renderText: (text) => {
      return text.split("\n").reduce((children, textSegment, index) => {
        return [...children, index > 0 && <br key={index} />, textSegment];
      }, []);
    },
  };

  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        <img
          className="singlePostImg"
          src={blog_img.fields.file.url}
          alt="post-image"
        />

        <h1 className="singlePostTitle">{title}</h1>
        <div className="singlePostInfo">
          <span className="singlePostAuthor">
            Author: <b>Sushmita</b>{" "}
          </span>
          <span className="singlePostDate">
            {moment(created_at).format("YYYY-MM-DD")}
          </span>
        </div>
        <div className="singlePostDesc">
          {documentToReactComponents(blog_body, options)}
        </div>
      </div>
    </div>
  );
}
export default SinglePost;
