import "./write.css";
import  writeBlog from "../../images/writeBlog.jpg"

function Write() {
  return (
    <div className="write">
      <img className="writeImg" src={writeBlog} alt="post-image" />
      <form action="" className="writeForm">
        <div className="writeFormGroup">
          <label htmlFor="fileInput" >
            <i className="writeIcon fa-regular fa-plus"></i>
          </label>
          <input className="inputClass" type="file" id="fileInput"  />
          <input type="text" placeholder="Title" className="writeInput" autoFocus={true} />
        </div>
        <div className="writeFormGroup">
          <textarea placeholder="Tell your story...." type="text" className="writeInput writeText" />
        </div>
        <button className="writeSubmit">Publish</button>
      </form>
    </div>
  );
}

export default Write;
