import { Link } from "react-router-dom";
import "../styles/sidebar.css";
import logo from "/images/logo.svg";
import home from "/images/home.svg";
import explore from "/images/explore.svg";
import createPost from "/images/add-ellipse-svgrepo-com.svg";
import web from "/images/web.svg";
import bookmarks from "/images/bookmarks.svg";
import contributors from "/images/people.svg";
import database from "/images/database.svg";
import library from "/images/library.svg";
import sidebar from "/images/sidebar-toggle.svg";

const Sidebar = ({ isOpen, setIsOpen }) => {
  // Remove the useState since we're getting isOpen from props
  
  const sections = [
  {
    title: "Main",
    items: [
      { label: "Home", path: "/", icon: home },
      { label: "Explore", path: "/explore", icon: explore },
      { label: "Create Post", path: "/create", icon: createPost }
    ]
  },
  {
    title: "Categories",
    items: [
      { label: "Web Development", path: "/web-dev", icon: web },
      { label: "Programming Languages", path: "/languages", icon: library },
      { label: "Databases", path: "/databases", icon: database },
      { label: "Frameworks & Libraries", path: "/frameworks", icon: library }
    ]
  },
  {
    title: "Community",
    items: [
      { label: "Contributors", path: "/contributors", icon: contributors },
      { label: "My Bookmarks", path: "/bookmarks", icon: bookmarks }
    ]
  }
];

  return (
    <>
      {/* Remove the menu button since it's now in Navigation.jsx */}
      
      <aside className={`sidebar ${isOpen && "open"}`}>
        <div className="sidebar-header">
          <div className="brand">
            <img src={logo} alt="" className="logo-icon"/>
            <span></span>
            <span className="brand-name">TechDeep</span>
            <button className="close-btn" onClick={() => setIsOpen(false)}>
              ✖
            </button>
          </div>
        </div>

        <div className="sidebar-content">
          {sections.map((section, index) => (
            <div className="sidebar-section" key={index}>
              <p className="section-title">{section.title}</p>
              {section.items.map((item, i) => (
                <Link to={item.path} className="sidebar-item" key={i}>
                    <img src={item.icon} alt={item.label} className="nav-icon" />
                    <span>{item.label}</span>
                </Link>

              ))}
            </div>
          ))}
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
