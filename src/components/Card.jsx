// Card Component
import "../styles/card.css"
import upvote from "../../images/upvote.svg"
import message from "../../images/message.svg"
import bookMark from "../../images/bookmark.svg"
export default function Card() {
  return (
    <div className="card">
        <div className="mainContent">
            <div className="left">
                <div className="upvoteIconContainer">
                    <img src={upvote} alt="upvote" className="upvoteIcon" />
                </div>
                <p>78</p>
            </div>
            <div className="right">
                <p className="title">WebSockets vs Server-Sent Events: Implementation Details</p>
                <p className="description">A technical comparison of real-time communication protocols, examining TCP connections, browser APIs, and when to use each approach.</p>
                <div className="techUsedContainer">
                    <div className="individualTech">
                        <p className="techUsed">WebSockets</p>
                    </div>
                    <div className="individualTech">
                        <p className="techUsed">Real-time</p>
                    </div>
                    <div className="individualTech">
                        <p className="techUsed">Networking</p>
                    </div>
                </div>
            </div>
        </div>
        <div className="extraContent">
            <div className="abreviationContainer">
                <p>TM</p>
            </div>
            <div className="moreInfoContainer">
                <p className="moreInfo">Tshepo Molefe • South Africa • 1 day ago</p>
            </div>
            <div className="messageContainer">
                <div className="messageIconContainer">
                    <img src={message} alt="message" className="messageIcon" />
                </div>
                <p className="messageCount">45</p>
            </div>
            <div className="bookmarkIconContainer">
                <img src={bookMark} alt="bookmark" className="bookmarkIcon" />
            </div>
        </div>
    </div>
  );
}