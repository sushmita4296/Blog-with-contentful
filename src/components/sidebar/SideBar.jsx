import "./sidebar.css"

import sidebarImg from "../../images/sidebarImg.jpg"

function SideBar() {
    return (
        <div className="sidebar">
            <div className="sidebarItem">
                <span className="sidebarTitle">About Me</span>
                <img className="sidebarImg"  src={sidebarImg} />
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.            Deleniti, nam. Voluptate tenetur ea quam
                aut aperiam pariatur deserunt explicabo optio temporibus? Perferendis repellendus, modi voluptate
                recusandae sequi numquam distinctio aliquam.</p>
            </div>

            <div className="sidebarItem">
                <span className="sidebarTitle">Categories</span>
                <ul className="sidebarList">
                    <li className="sidebarListItem sideNav">Life</li>
                    <li className="sidebarListItem sideNav">Music</li>
                    <li className="sidebarListItem sideNav">Style</li>
                    <li className="sidebarListItem sideNav">Sport</li>
                    <li className="sidebarListItem sideNav">Tech</li>
                    <li className="sidebarListItem sideNav">Cinema</li>
                   
                </ul>
            </div>

            <div className="sidebarItem">
                <span className="sidebarTitle">Follow Us</span>
                <div className="sidebarSocial">
                    <i className="sidebarIcon fa-brands fa-facebook-square"></i>
                    <i className="sidebarIcon fa-brands fa-instagram-square"></i>
                    <i className="sidebarIcon fa-brands fa-pinterest-square"></i>
                    <i className="sidebarIcon fa-brands fa-twitter-square"></i>
                </div>

            </div>
        </div>
    )
}
export default SideBar;