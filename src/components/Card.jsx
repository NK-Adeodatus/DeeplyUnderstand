// Card Component
import "../styles/card.css"
import upvote from "../../images/upvote.svg"
import message from "../../images/message.svg"
import bookMark from "../../images/bookmark.svg"

export default function Card({ 
  upvotes, 
  title, 
  description, 
  technologies, 
  author, 
  country, 
  timePosted, 
  messageCount 
}) {
  // Generate abbreviation from author name
  const getAbbreviation = (name) => {
    return name.split(' ').map(word => word[0]).join('').toUpperCase();
  };

  return (
    <div className="card">
        <div className="mainContent">
            <div className="left">
                <div className="upvoteIconContainer">
                    <img src={upvote} alt="upvote" className="upvoteIcon" />
                </div>
                <p>{upvotes}</p>
            </div>
            <div className="right">
                <p className="title">{title}</p>
                <p className="description">{description}</p>
                <div className="techUsedContainer">
                    {technologies.map((tech, index) => (
                        <div key={index} className="individualTech">
                            <p className="techUsed">{tech}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
        <div className="extraContent">
            <div className="abreviationContainer">
                <p className="abreviation">{getAbbreviation(author)}</p>
            </div>
            <div className="moreInfoContainer">
                <p className="moreInfo">{`${author} • ${country} • ${timePosted}`}</p>
            </div>
            <div className="messageContainer">
                <div className="messageIconContainer">
                    <img src={message} alt="message" className="messageIcon" />
                </div>
                <p className="messageCount">{messageCount}</p>
            </div>
            <div className="bookmarkIconContainer">
                <img src={bookMark} alt="bookmark" className="bookmarkIcon" />
            </div>
        </div>
    </div>
  );
}