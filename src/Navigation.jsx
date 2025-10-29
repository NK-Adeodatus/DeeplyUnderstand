// Navigation bar component
import sidebar from "/images/sidebar-toggle.svg"
import search from "/images/search.svg"
import dark from "/images/dark-mode-night-moon.svg"
import "./styles/navigation.css"

export default function Navigation() {
  return (
    <nav id="navigation">
      <div className="sidebarIconContainer">
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
        <button className="signinButton">SignIn</button>
        <button className="signupButton">Sign Up</button>
      </div>


    </nav>
  )
}