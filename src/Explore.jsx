// Explore.jsx
import "./styles/explore.css";
import Card from "./components/Card";
import searchIcon from "/images/search.svg";
import add from "/images/add-circle.svg";
import trending from "/images/trending-up.svg";
import time from "/images/time.svg";
import star from "/images/star.svg";

// Sample data (replace with real API data later)
const exploreData = [
  {
    upvotes: 89,
    title: "Understanding Microservices Architecture Patterns",
    description: "Deep dive into service discovery, API gateways, circuit breakers, and how to design resilient distributed systems.",
    technologies: ["Architecture", "Microservices", "Distributed Systems"],
    author: "Chidi Nnamani",
    country: "Nigeria",
    timePosted: "3 hours ago",
    messageCount: 15,
  },
  {
    upvotes: 145,
    title: "How Does TypeScript's Type System Work?",
    description: "Exploring structural typing, type inference, generics, and the compiler's type-checking algorithm.",
    technologies: ["TypeScript", "Type Systems", "JavaScript"],
    author: "Tshepo Sefara",
    country: "South Africa",
    timePosted: "6 hours ago",
    messageCount: 23,
  },
  {
    upvotes: 127,
    title: "How React's Virtual DOM Actually Works Under the Hood",
    description: "A deep dive into React's reconciliation algorithm, fiber architecture, and how it optimizes rendering performance. We'll explore the actual source code and understand the diffing process.",
    technologies: ["React", "JavaScript", "Performance"],
    author: "Amara Okafor",
    country: "Nigeria",
    timePosted: "2 hours ago",
    messageCount: 23,
  },
  {
    upvotes: 94,
    title: "Understanding JWT Authentication: Beyond the Basics",
    description: "Learn how JSON Web Tokens work internally, token structure, signing algorithms, refresh tokens, and security best practices.",
    technologies: ["Authentication", "JWT", "Security"],
    author: "Kwame Asante",
    country: "Ghana",
    timePosted: "5 hours ago",
    messageCount: 18,
  },
];

const topics = [
  { label: "All Topics", active: true },
  { label: "Web Development", active: false },
  { label: "Programming Languages", active: false },
  { label: "Databases", active: false },
  { label: "Frameworks & Libraries", active: false },
  { label: "DevOps & Infrastructure", active: false },
  { label: "Security", active: false },
  { label: "Data Structures & Algorithms", active: false },
];

export default function Explore() {
  return (
    <div className="explore">
      <main className="exploreMain">
        {/* Header Section - Styled like Home but without buttons */}
        <div className="exploreHeader">
          <p className="exploreHeading">Explore</p>
          <p className="exploreSubtext">
            Discover in-depth explanations across all technology topics
          </p>
        </div>

        {/* Filter by Topics */}
        <div className="filterSection">
          <p className="filterLabel">Filter by:</p>
          <div className="topicsContainer">
            {topics.map((topic, index) => (
              <button
                key={index}
                className={`topicButton ${topic.active ? "activeTopic" : ""}`}
              >
                {topic.label}
              </button>
            ))}
          </div>
        </div>

        {/* Sort Dropdown + Results Count */}
        <div className="resultsHeader">
          <p className="resultsCount">Showing 6 explanations</p>
          <div className="sortDropdownContainer">
            <select className="sortDropdown" defaultValue="recent">
              <option value="recent">Most Recent</option>
              <option value="upvoted">Most Upvoted</option>
              <option value="discussed">Most Discussed</option>
              <option value="viewed">Most Viewed</option>
            </select>
          </div>
        </div>

        {/* Cards Grid */}
        <div className="exploreCardsContainer">
          {exploreData.map((card, index) => (
            <Card
              key={index}
              upvotes={card.upvotes}
              title={card.title}
              description={card.description}
              technologies={card.technologies}
              author={card.author}
              country={card.country}
              timePosted={card.timePosted}
              messageCount={card.messageCount}
            />
          ))}
        </div>
      </main>
    </div>
  );
}