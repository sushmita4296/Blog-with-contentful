import React from "react";
// importing browser for routing6//
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// importing Bulma CSS//
import 'bulma/css/bulma.min.css';
import SinglePost from "./components/singlePost/SinglePost";

// importing components //
import TopBar from "./components/topbar/TopBar";
// import TopMenu from "./components/TopMenu";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Contact from "./pages/Contact";
import Single from "./pages/single/Single"
import Write from "./pages/write/Write";
import Settings from "./pages/settings/Settings";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";

// function App() {
//   return (
//     <div className="App">
//       <TopBar />
//       <Register />
//     </div>
//   );
// }

const App = () => {
  return (
    <div className="My-app">
      <Router>
        <Routes>
          <Route path="/" element={<TopBar />}>
            {/* <Route path="/top" index element ={ <TopMenu />} /> */}
            <Route path="/" index element={<Home />} />
            <Route path="about" index element={<About />} />
            <Route path="contact" index element={<Contact />} />
            <Route path="single-post" index element={<SinglePost />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
 //space id : 4kd05ayyw410