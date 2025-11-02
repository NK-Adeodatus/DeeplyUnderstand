// Navigation bar component
import sidebar from "/images/sidebar-toggle.svg"
import search from "/images/search.svg"
import dark from "/images/dark-mode-night-moon.svg"
import "./styles/navigation.css"
import { useState } from "react"
import Sidebar from "./components/Sidebar"
import AuthModal from "./components/AuthModal"

export default function Navigation() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [authModalMode, setAuthModalMode] = useState("signin");

  const handleSignInClick = (e) => {
    e.preventDefault();
    setAuthModalMode("signin");
    setIsAuthModalOpen(true);
  };

  const handleSignUpClick = (e) => {
    e.preventDefault();
    setAuthModalMode("signup");
    setIsAuthModalOpen(true);
  };

  return (
    <>
      <nav id="navigation">
        <div className="sidebarIconContainer" onClick={() => setIsSidebarOpen(true)}>
          <img className="sidebarIcon" src={sidebar} alt="sidebarIcon" />
        </div>
        <div className="searchContainer">
          <img className="searchIcon" src={search} alt="searchIcon" />
          <input type="text" className="searchbar" placeholder="Search" />
        </div>
        <div className="darkmodeIconContainer">
          <img className="darkmodeIcon" src={dark} alt="darkmodeIcon" />
        </div>
        <div className="profileButtonsContainer">
          <button className="signinButton" onClick={handleSignInClick}>SignIn</button>
          <button className="signupButton" onClick={handleSignUpClick}>Sign Up</button>
        </div>
      </nav>

      <Sidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />
      {isSidebarOpen && <div className="overlay" onClick={() => setIsSidebarOpen(false)} />}
      
      <AuthModal 
        isOpen={isAuthModalOpen} 
        setIsOpen={setIsAuthModalOpen} 
        initialMode={authModalMode}
      />
    </>
  )
}