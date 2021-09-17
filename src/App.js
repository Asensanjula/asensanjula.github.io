import React, {useState} from "react";
import TopBar from "./components/topbar/Topbar";
import Intro from "./components/intro/Intro";
import Portfolio from "./components/portfolio/Portfolio";
import Work from "./components/works/Work";
import Contact from "./components/contact/Contact";
import './app.scss'

function App() {

    const [openMenuBar, setOpenMenuBar] = useState(false);
    return (
    <div className="app">
     <TopBar openMenuBar={openMenuBar} setOpenMenuBar={setOpenMenuBar}/>
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
