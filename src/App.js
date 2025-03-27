import React, { useState, createContext, useContext } from "react";
import Services from "./componid/home page/services/Services";
import Activity from "./componid/home page/activity/activity";
import Contact from "./componid/home page/contact/contact";
import Teem from "./componid/home page/teem/teem";
import Nav from "./componid/home page/navBar/nav"; // Ensure this is correct
import Footer from "./componid/home page/footer/footer";
import Hero from "./componid/home page/HeroSection/HeroSection";
import "./i18n";
import "./App.css";

// DarkModeContext should be created and provided at the root of the app
const DarkModeContext = createContext();

export const useDarkMode = () => useContext(DarkModeContext);

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => setIsDarkMode(!isDarkMode);

  return (
    <DarkModeContext.Provider value={{ isDarkMode, toggleDarkMode }}>
      <div className={`App ${isDarkMode ? "dark-mode" : "light-mode"}`}>
        <Nav />
        <Hero />
        <Activity />
        <Services />
        <Teem />
        <Contact />
        <Footer />
      </div>
    </DarkModeContext.Provider>
  );
}

export default App;
