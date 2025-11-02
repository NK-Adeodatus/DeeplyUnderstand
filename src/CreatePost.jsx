import { useState } from "react";
import "./styles/createpost.css";

const CreatePost = () => {
  const [tags, setTags] = useState([]);
  const [tagInput, setTagInput] = useState("");

  const addTag = () => {
    if (tagInput.trim() && tags.length < 5) {
      setTags([...tags, tagInput.trim()]);
      setTagInput("");
    }
  };

  return (
    <div className="create-container">
      <h2 className="create-title">Create an Explanation</h2>
      <p className="create-sub">
        Share your deep understanding of how a technology or concept really
        works
      </p>

      <form className="create-form">

        {/* Title */}
        <div className="form-group">
          <label>Title</label>
          <input
            type="text"
            placeholder="e.g., How React's Virtual DOM Actually Works Under the Hood"
          />
          <small className="hint">
            Be specific and descriptive about what you're explaining
          </small>
        </div>

        {/* Category */}
        <div className="form-group">
          <label>Category</label>
          <select defaultValue="">
            <option value="" disabled>Select a category</option>
            <option>Web Development</option>
            <option>Programming Languages</option>
            <option>Databases</option>
            <option>Frameworks & Libraries</option>
          </select>
        </div>

        {/* Summary */}
        <div className="form-group">
          <label>Summary</label>
          <textarea
            rows="2"
            placeholder="Brief overview of what you'll explain (2–3 sentences)"
          ></textarea>
        </div>

        {/* Detailed Explanation */}
        <div className="form-group">
          <label>Detailed Explanation</label>
          <textarea
            rows="6"
            placeholder="Write your in-depth explanation here. Include code examples, diagrams, and step-by-step breakdowns..."
          ></textarea>
          <small className="hint">Supports Markdown formatting</small>
        </div>

        {/* Tags */}
        <div className="form-group">
          <label>Tags (up to 5)</label>
          
          <div className="tag-input-wrapper">
            <input
              type="text"
              placeholder="Add a tag"
              value={tagInput}
              onChange={(e) => setTagInput(e.target.value)}
            />
            <button type="button" onClick={addTag} className="add-tag-btn">+</button>
          </div>

          <div className="tags-list">
            {tags.map((tag, i) => (
              <span key={i} className="tag-pill">#{tag}</span>
            ))}
          </div>
        </div>

        {/* Buttons */}
        <div className="btn-group">
          <button className="primary-btn">Publish Explanation</button>
          <button className="secondary-btn">Save Draft</button>
        </div>
      </form>

      {/* Writing guidelines */}
      <div className="guidelines">
        <h4>Writing Guidelines</h4>
        <ul>
          <li>Explain internal mechanisms, not just usage</li>
          <li>Use real examples and code snippets</li>
          <li>Break down ideas clearly and logically</li>
          <li>Be accurate and verify technical details</li>
        </ul>
      </div>

      {/* Inspiration */}
      <div className="inspiration">
        <h4>Need Inspiration?</h4>
        <ul>
          <li>How does a compiler work?</li>
          <li>What happens during an HTTP request?</li>
          <li>How does garbage collection work?</li>
          <li>What are closures in JavaScript?</li>
        </ul>
      </div>
    </div>
  );
};

export default CreatePost;
