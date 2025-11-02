// Category page component (e.g., Web Development)
import "./styles/home.css"
import add from "/images/add-circle.svg"
import trending from "/images/trending-up.svg"
import recent from "/images/time.svg"
import star from "/images/star.svg"
import Card from "./components/Card"

// Static filtered data for Web Development category
const webDevCardsData = [
  {
    upvotes: 92,
    title: "How HTTP/2 Server Push Works Under the Hood",
    description: "Exploring the internal mechanisms of HTTP/2 server push, connection multiplexing, and how browsers handle pushed resources before requests are made.",
    technologies: ["HTTP/2", "Web Performance", "Networking"],
    author: "Kofi Mensah",
    country: "Ghana",
    timePosted: "3 hours ago",
    messageCount: 28
  },
  {
    upvotes: 85,
    title: "CSS Grid vs Flexbox: When the Browser Renders Each",
    description: "Deep dive into browser rendering engines, how CSS Grid and Flexbox calculate layouts differently at the algorithmic level, and their performance implications.",
    technologies: ["CSS", "Web Performance", "Rendering"],
    author: "Zara Bello",
    country: "Nigeria",
    timePosted: "5 hours ago",
    messageCount: 41
  },
  {
    upvotes: 78,
    title: "JavaScript Event Loop: The Complete Internals",
    description: "Understanding the JavaScript event loop, call stack, task queue, microtask queue, and how the V8 engine coordinates asynchronous operations.",
    technologies: ["JavaScript", "V8 Engine", "Asynchronous"],
    author: "Thabo Ndlovu",
    country: "South Africa",
    timePosted: "1 day ago",
    messageCount: 56
  },
  {
    upvotes: 71,
    title: "How Browser DevTools Actually Inspect the DOM",
    description: "Exploring how browser DevTools communicate with the rendering engine, DOM mutation observers, and the underlying architecture that enables real-time inspection.",
    technologies: ["DevTools", "Browser Internals", "DOM"],
    author: "Amina Hassan",
    country: "Kenya",
    timePosted: "2 days ago",
    messageCount: 33
  }
];

export default function Category({ categoryName = "Web Development" }) {
  return (
    <div className="home">
        <main id="homeMain">
            <p id="heading">{categoryName}</p>
            <p className="homeText">Explore deep explanations of {categoryName.toLowerCase()} concepts. Learn how technologies in this category actually work under the hood.</p>
            <div className="buttonsContainer">
                <button className="shareYourKnowledgeButton">
                    <div className="addIconContainer">
                        <img src={add} alt="add" id="addIcon"/>
                    </div>
                    Share Your Knowledge</button>
                
                <button 
                className="JoinTheCommunityButton">Join the Community</button>
            </div>
        </main>
        <div id="infoContainer">
            <div className="trendingContainer outerContainer selectedOuterContainer">
                <div id="trendingIconContainer">
                    <img src={trending} alt="trending" id="trendingIcon"
                    className="icon"
                    />
                </div>
                <p className="innerText">trending</p>
            </div>
            <div className="recentContainer outerContainer">
                <div id="recentIconConatainer container">
                    <img src={recent} alt="recent" id="recentIcon"
                    className="icon"
                    />
                </div>
                <p className="innerText">recent</p>
            </div>
            <div className="topRatedContainer outerContainer">
                <div id="starIconContainer" className="container">
                    <img src={star} alt="star" id="starIcon"
                    className="icon"
                    />
                </div>
                <p className="innerText">top rated</p>
            </div>
        </div>
        <div className="cardsContainer">
            {webDevCardsData.map((card, index) => (
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
    </div>
  )
}
