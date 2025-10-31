// Navigation bar component
import sidebar from "/images/sidebar-toggle.svg"
import search from "/images/search.svg"
import dark from "/images/dark-mode-night-moon.svg"
import "./styles/navigation.css"
import { Link } from 'react-router-dom'
import { useState } from "react"
import Sidebar from "./components/Sidebar"

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav id="navigation">
        <div className="sidebarIconContainer" onClick={() => setIsOpen(true)}>
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
          <Link to="/signin">
            <button className="signinButton">SignIn</button>
          </Link>
          <Link to="/signup">
            <button className="signupButton">Sign Up</button>
          </Link>
        </div>
      </nav>

      <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />
      {isOpen && <div className="overlay" onClick={() => setIsOpen(false)} />}
    </>
  )
}