import { useState } from "react";
import "./styles/contributors.css";
import peopleIcon from "/images/people.svg";
import trendingIcon from "/images/trending-up.svg";
import starIcon from "/images/star.svg";

// Helper function to get initials from name
const getInitials = (name) => {
  return name.split(' ').map(word => word[0]).join('').toUpperCase();
};

// Static contributor data
const contributorsData = {
  top: [
    {
      name: "Amara Okafor",
      country: "Nigeria",
      bio: "Full-stack developer passionate about React internals and performance optimization",
      tags: ["Top Contributor", "Expert"],
      posts: 24,
      upvotes: 1247,
      comments: 189
    },
    {
      name: "Kwame Mensah",
      country: "Ghana",
      bio: "Security engineer exploring authentication systems and cryptography",
      tags: ["Security Expert", "Helpful"],
      posts: 18,
      upvotes: 892,
      comments: 145
    },
    {
      name: "Thabo Ndlovu",
      country: "South Africa",
      bio: "JavaScript engine enthusiast diving deep into V8 internals",
      tags: ["Top Contributor", "Expert"],
      posts: 31,
      upvotes: 1567,
      comments: 234
    },
    {
      name: "Zara Bello",
      country: "Nigeria",
      bio: "Frontend architect focused on rendering optimization and browser internals",
      tags: ["Expert", "Helpful"],
      posts: 22,
      upvotes: 1123,
      comments: 198
    },
    {
      name: "Kofi Asante",
      country: "Ghana",
      bio: "Backend systems engineer exploring database internals and query optimization",
      tags: ["Top Contributor", "Expert"],
      posts: 27,
      upvotes: 1345,
      comments: 167
    }
  ],
  active: [
    {
      name: "Amina Hassan",
      country: "Kenya",
      bio: "DevOps engineer explaining container orchestration and distributed systems",
      tags: ["Active", "Expert"],
      posts: 19,
      upvotes: 756,
      comments: 134
    },
    {
      name: "Tshepo Molefe",
      country: "South Africa",
      bio: "Network protocols specialist covering WebSockets and real-time communication",
      tags: ["Active", "Helpful"],
      posts: 16,
      upvotes: 623,
      comments: 112
    }
  ],
  new: [
    {
      name: "Chidi Okoro",
      country: "Nigeria",
      bio: "Full-stack developer sharing knowledge about API design and microservices",
      tags: ["New Member", "Helpful"],
      posts: 8,
      upvotes: 234,
      comments: 45
    },
    {
      name: "Yaw Boateng",
      country: "Ghana",
      bio: "Mobile developer exploring native bridge implementations and platform internals",
      tags: ["New Member"],
      posts: 5,
      upvotes: 156,
      comments: 32
    }
  ]
};

export default function Contributors() {
  const [activeTab, setActiveTab] = useState("top");

  const getCurrentContributors = () => {
    switch (activeTab) {
      case "top":
        return contributorsData.top;
      case "active":
        return contributorsData.active;
      case "new":
        return contributorsData.new;
      default:
        return contributorsData.top;
    }
  };

  return (
    <div className="contributors">
      <div className="contributorsHeader">
        <h1 className="contributorsTitle">Contributors</h1>
        <p className="contributorsSubtitle">
          Meet the developers sharing their knowledge with the community
        </p>
      </div>

      <div className="statsSection">
        <div className="statCard">
          <div className="statIconContainer">
            <img src={peopleIcon} alt="Total Contributors" className="statIcon" />
          </div>
          <p className="statLabel">Total Contributors</p>
          <p className="statValue">1,247</p>
        </div>
        <div className="statCard">
          <div className="statIconContainer">
            <img src={trendingIcon} alt="Active This Month" className="statIcon" />
          </div>
          <p className="statLabel">Active This Month</p>
          <p className="statValue">423</p>
        </div>
        <div className="statCard">
          <div className="statIconContainer">
            <img src={starIcon} alt="Top Contributors" className="statIcon" />
          </div>
          <p className="statLabel">Top Contributors</p>
          <p className="statValue">89</p>
        </div>
      </div>

      <div className="tabsContainer">
        <button
          className={`tab ${activeTab === "top" ? "tabActive" : ""}`}
          onClick={() => setActiveTab("top")}
        >
          Top Contributors
        </button>
        <button
          className={`tab ${activeTab === "active" ? "tabActive" : ""}`}
          onClick={() => setActiveTab("active")}
        >
          Most Active
        </button>
        <button
          className={`tab ${activeTab === "new" ? "tabActive" : ""}`}
          onClick={() => setActiveTab("new")}
        >
          New Members
        </button>
      </div>

      <div className="contributorsList">
        {getCurrentContributors().map((contributor, index) => (
          <div key={index} className="contributorCard">
            <div className="contributorAvatar">
              <p className="contributorInitials">{getInitials(contributor.name)}</p>
            </div>
            <div className="contributorInfo">
              <h3 className="contributorName">{contributor.name}</h3>
              <p className="contributorCountry">{contributor.country}</p>
              <p className="contributorBio">{contributor.bio}</p>
              <div className="contributorTags">
                {contributor.tags.map((tag, tagIndex) => (
                  <span key={tagIndex} className="contributorTag">{tag}</span>
                ))}
              </div>
              <div className="contributorStats">
                <div className="contributorStatItem">
                  <p className="statItemLabel">Posts</p>
                  <p className="statItemValue">{contributor.posts}</p>
                </div>
                <div className="contributorStatItem">
                  <p className="statItemLabel">Upvotes</p>
                  <p className="statItemValue">{contributor.upvotes}</p>
                </div>
                <div className="contributorStatItem">
                  <p className="statItemLabel">Comments</p>
                  <p className="statItemValue">{contributor.comments}</p>
                </div>
              </div>
              <div className="contributorActions">
                <button className="viewProfileButton">View Profile</button>
                <button className="followButton">Follow</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
