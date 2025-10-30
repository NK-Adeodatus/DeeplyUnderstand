import { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/sidebar.css";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const sections = [
    {
      title: "Main",
      items: [
        { label: "Home", path: "/", icon: "🏠" },
        { label: "Explore", path: "/explore", icon: "🔍" },
        { label: "Create Post", path: "/create", icon: "✏️" }
      ]
    },
    {
      title: "Categories",
      items: [
        { label: "Web Development", path: "/web-dev", icon: "🌐" },
        { label: "Programming Languages", path: "/languages", icon: "💻" },
        { label: "Databases", path: "/databases", icon: "🗄️" },
        { label: "Frameworks & Libraries", path: "/frameworks", icon: "📚" }
      ]
    },
    {
      title: "Community",
      items: [
        { label: "Contributors", path: "/contributors", icon: "👥" },
        { label: "My Bookmarks", path: "/bookmarks", icon: "🔖" }
      ]
    },
    {
      title: "Settings",
      items: [
        { label: "Settings", path: "/settings", icon: "⚙️" },
        { label: "Help & Support", path: "/support", icon: "❓" }
      ]
    }
  ];

  return (
    <>
      <button className="menu-btn" onClick={() => setIsOpen(true)}>
        ☰
      </button>

      <aside className={`sidebar ${isOpen && "open"}`}>
        <div className="sidebar-header">
          <div className="brand">
            <span className="logo-icon">💻</span>
            <span className="brand-name">TechDeep</span>
          </div>
          <button className="close-btn" onClick={() => setIsOpen(false)}>
            ✖
          </button>
        </div>

        <div className="sidebar-content">
          {sections.map((section, index) => (
            <div className="sidebar-section" key={index}>
              <p className="section-title">{section.title}</p>
              {section.items.map((item, i) => (
                <Link to={item.path} className="sidebar-item" key={i}>
                  <span className="icon">{item.icon}</span>
                  <span>{item.label}</span>
                </Link>
              ))}
            </div>
          ))}
        </div>
      </aside>

      {/* Overlay for close on click */}
      {isOpen && <div className="overlay" onClick={() => setIsOpen(false)} />}
    </>
  );
};

export default Sidebar;
