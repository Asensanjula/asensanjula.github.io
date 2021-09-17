import React from "react";
import TopBar from "./components/topbar/Topbar";
import Intro from "./components/intro/Intro";
import Portfolio from "./components/portfolio/Portfolio";
import Work from "./components/works/Work";
import Contact from "./components/contact/Contact";
import './app.scss'

function App() {
  return (
    <div className="app">
     <TopBar/>
     <div className="sections">
         <Intro/>
         <Portfolio/>
         <Work/>
         <Contact/>
     </div>
    </div>
  );
}

export default App;
