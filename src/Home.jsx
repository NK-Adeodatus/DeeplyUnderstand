// Homepage component
import Navigation from "./Navigation"
import "./styles/home.css"
import add from "/images/add-circle.svg"
import trending from "/images/trending-up.svg"
import recent from "/images/time.svg"
import star from "/images/star.svg"
import Card from "./components/Card"
export default function Home() {
  return (
    <div className="home">
        <Navigation />
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
            <Card />
        </div>
    </div>
  )
}