import { useState } from "react";
import "./styles/createPost.css";
import codeIcon from "/images/code.svg";
import libraryIcon from "/images/library.svg";
import databaseIcon from "/images/database.svg";
import starIcon from "/images/star.svg";

export default function CreatePost() {
  const [formData, setFormData] = useState({
    title: "",
    category: "",
    summary: "",
    detailedExplanation: "",
    tags: []
  });
  
  const [tagInput, setTagInput] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleAddTag = () => {
    if (tagInput.trim() && formData.tags.length < 5) {
      setFormData(prev => ({
        ...prev,
        tags: [...prev.tags, tagInput.trim()]
      }));
      setTagInput("");
    }
  };

  const handleRemoveTag = (index) => {
    setFormData(prev => ({
      ...prev,
      tags: prev.tags.filter((_, i) => i !== index)
    }));
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleAddTag();
    }
  };

  const handlePublish = () => {
    // Handle publish logic
    console.log("Publishing:", formData);
  };

  const handleSaveDraft = () => {
    // Handle save draft logic
    console.log("Saving draft:", formData);
  };

  return (
    <div className="createPost">
      <div className="createPostHeader">
        <h1 className="createPostTitle">Create an Explanation</h1>
        <p className="createPostSubtitle">
          Share your deep understanding of how a technology or concept really works
        </p>
      </div>

      <div className="explanationCard">
        <div className="writeExplanationSection">
          <h2 className="sectionTitle">Write Your Explanation</h2>
          <p className="sectionDescription">Focus on explaining the internal workings and mechanisms</p>
        </div>

        <div className="formSection">
          <label className="formLabel">Title</label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleInputChange}
            className="formInput"
            placeholder="e.g., How React's Virtual DOM Actually Works"
          />
          <p className="formHint">Be specific and descriptive about what you're explaining</p>
        </div>

        <div className="formSection">
          <label className="formLabel">Category</label>
          <select
            name="category"
            value={formData.category}
            onChange={handleInputChange}
            className="formSelect"
          >
            <option value="">Select a category</option>
            <option value="web-dev">Web Development</option>
            <option value="languages">Programming Languages</option>
            <option value="databases">Databases</option>
            <option value="frameworks">Frameworks & Libraries</option>
            <option value="other">Other</option>
          </select>
        </div>

        <div className="formSection">
          <label className="formLabel">Summary</label>
          <textarea
            name="summary"
            value={formData.summary}
            onChange={handleInputChange}
            className="formTextarea"
            rows="3"
            placeholder="Brief overview of what you'll explain (2-3 sentences)"
          />
        </div>

        <div className="formSection">
          <label className="formLabel">Detailed Explanation</label>
          <textarea
            name="detailedExplanation"
            value={formData.detailedExplanation}
            onChange={handleInputChange}
            className="formTextarea formTextareaLarge"
            rows="8"
            placeholder="Write your in-depth explanation here. Include code examples, diagrams descriptions, and step-by-step breakdowns of how things work internally..."
          />
          <p className="formHint">Supports Markdown formatting.</p>
        </div>
      </div>

      <div className="tagsSection">
        <label className="formLabel">Tags (up to 5)</label>
        <div className="tagsInputContainer">
          <input
            type="text"
            value={tagInput}
            onChange={(e) => setTagInput(e.target.value)}
            onKeyPress={handleKeyPress}
            className="tagInput"
            placeholder="Add a tag"
          />
          <button 
            type="button"
            onClick={handleAddTag}
            className="addTagButton"
            disabled={formData.tags.length >= 5}
          >
            +
          </button>
        </div>
        <div className="tagsList">
          {formData.tags.map((tag, index) => (
            <div key={index} className="tagItem">
              <span>{tag}</span>
              <button
                type="button"
                onClick={() => handleRemoveTag(index)}
                className="removeTagButton"
              >
                ×
              </button>
            </div>
          ))}
        </div>
      </div>

      <div className="actionButtons">
        <button 
          type="button"
          onClick={handlePublish}
          className="publishButton"
        >
          Publish Explanation
        </button>
        <button 
          type="button"
          onClick={handleSaveDraft}
          className="saveDraftButton"
        >
          Save Draft
        </button>
      </div>

      <div className="guidelinesCard">
        <h2 className="sectionTitle">Writing Guidelines</h2>
        <div className="guidelinesList">
          <div className="guidelineItem">
            <div className="guidelineIconContainer">
              <img src={libraryIcon} alt="Go Deep" className="guidelineIcon" />
            </div>
            <div className="guidelineContent">
              <p className="guidelineTitle">Go Deep</p>
              <p className="guidelineDescription">Explain internal mechanisms, not just usage</p>
            </div>
          </div>
          <div className="guidelineItem">
            <div className="guidelineIconContainer">
              <img src={codeIcon} alt="Use Examples" className="guidelineIcon" />
            </div>
            <div className="guidelineContent">
              <p className="guidelineTitle">Use Examples</p>
              <p className="guidelineDescription">Include code snippets and real-world scenarios</p>
            </div>
          </div>
          <div className="guidelineItem">
            <div className="guidelineIconContainer">
              <img src={starIcon} alt="Clarify Concepts" className="guidelineIcon" />
            </div>
            <div className="guidelineContent">
              <p className="guidelineTitle">Clarify Concepts</p>
              <p className="guidelineDescription">Break down complex ideas into understandable parts</p>
            </div>
          </div>
          <div className="guidelineItem">
            <div className="guidelineIconContainer">
              <img src={databaseIcon} alt="Be Accurate" className="guidelineIcon" />
            </div>
            <div className="guidelineContent">
              <p className="guidelineTitle">Be Accurate</p>
              <p className="guidelineDescription">Cite sources and verify technical details</p>
            </div>
          </div>
        </div>
      </div>

      <div className="inspirationCard">
        <h2 className="sectionTitle">Need Inspiration?</h2>
        <ul className="inspirationList">
          <li>How does a compiler work?</li>
          <li>What happens during an HTTP request?</li>
          <li>How does garbage collection work?</li>
          <li>What are closures in JavaScript?</li>
        </ul>
      </div>
    </div>
  );
}
