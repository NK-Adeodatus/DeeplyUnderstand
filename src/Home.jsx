// Homepage component
import "./styles/home.css"
import add from "/images/add-circle.svg"
import trending from "/images/trending-up.svg"
import recent from "/images/time.svg"
import star from "/images/star.svg"
import Card from "./components/Card"
import Sidebar from "./components/Sidebar"
const cardsData = [
  {
    upvotes: 78,
    title: "WebSockets vs Server-Sent Events: Implementation Details",
    description: "A technical comparison of real-time communication protocols, examining TCP connections, browser APIs, and when to use each approach.",
    technologies: ["WebSockets", "Real-time", "Networking"],
    author: "Tshepo Molefe",
    country: "South Africa",
    timePosted: "1 day ago",
    messageCount: 45
  },
  {
    upvotes: 65,
    title: "Understanding React's Virtual DOM Implementation",
    description: "Deep dive into how React's reconciliation process works and how the virtual DOM optimizes rendering performance.",
    technologies: ["React", "JavaScript", "Web Performance"],
    author: "Amara Okafor",
    country: "Nigeria",
    timePosted: "2 days ago",
    messageCount: 32
  }
  // Add more card data objects as needed
];

export default function Home() {
  return (
    <div className="home">
        <Sidebar />
        <main id="homeMain">
            <p id="heading">Learn How Technology Really Works</p>
            <p className="homeText">Join African developers in deep-diving into the inner workings of technologies, libraries, and programming concepts. Move beyond tutorials to true understanding.</p>
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
            {cardsData.map((card, index) => (
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