import React, {useEffect, useState} from "react";
import TopBar from "./components/topbar/Topbar";
import Intro from "./components/intro/Intro";
import Portfolio from "./components/portfolio/Portfolio";
import Work from "./components/works/Work";
import Contact from "./components/contact/Contact";
import './app.scss'
import Menu from "./components/menu/Menu";
import Particles from 'react-particles-js';
import About from "./components/about/About";
import AOS from 'aos';
import 'aos/dist/aos.css';
import Experience from "./components/experience/Experience";

function App() {

    useEffect(() => {
        AOS.init({ duration: 1000 });
        console.log("Aos init > ", AOS)
    }, []);

    const [openMenuBar, setOpenMenuBar] = useState(false);
    return (
    <div className="app">
     <TopBar openMenuBar={openMenuBar} setOpenMenuBar={setOpenMenuBar}/>
     <Menu openMenuBar={openMenuBar} setOpenMenuBar={setOpenMenuBar}/>
     <div className="sections">
         <Intro/>
         <About/>
         <Experience/>
         {/*<Portfolio/>*/}
         <Work/>
         <Contact/>
     </div>
    </div>
  );
}

export default App;
