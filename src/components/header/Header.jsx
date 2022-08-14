import "./header.css"
import banner from "../../images/banner.jpg"
function Header(){
  return(
    <div className="header">
      <div className="headerTitles">
        <span className="headerTitleSm">React</span>
        <span className="headerTitleLg">Blog</span>
        <img className="headerImg" src={banner} />
      </div>
    </div>
  )
}
export default Header;