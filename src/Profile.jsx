import { useState } from "react";
import "./styles/profile.css";
import peopleIcon from "/images/people.svg";

// Helper to get initials
const getInitials = (name) => {
  return name.split(' ').map(word => word[0]).join('').toUpperCase();
};

export default function Profile() {
  const [activeTab, setActiveTab] = useState("profile");
  const [formData, setFormData] = useState({
    fullName: "John Doe",
    email: "john@example.com",
    country: "Nigeria",
    bio: "",
    website: "https://yourwebsite.com"
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSaveChanges = (e) => {
    e.preventDefault();
    // Handle save logic here
    console.log("Saving profile:", formData);
  };

  const handleAvatarChange = () => {
    // Handle avatar upload logic here
    console.log("Change avatar");
  };

  return (
    <div className="profile">
      <div className="profileHeader">
        <h1 className="profileTitle">Settings</h1>
        <p className="profileSubtitle">Manage your account settings and preferences</p>
      </div>

      <div className="settingsTabs">
        <button
          className={`settingsTab ${activeTab === "profile" ? "settingsTabActive" : ""}`}
          onClick={() => setActiveTab("profile")}
        >
          <img src={peopleIcon} alt="Profile" className="tabIcon" />
          Profile
        </button>
        <button
          className={`settingsTab ${activeTab === "notifications" ? "settingsTabActive" : ""}`}
          onClick={() => setActiveTab("notifications")}
        >
          <span className="tabIconEmoji">🔔</span>
          Notifications
        </button>
        <button
          className={`settingsTab ${activeTab === "privacy" ? "settingsTabActive" : ""}`}
          onClick={() => setActiveTab("privacy")}
        >
          <span className="tabIconEmoji">🔒</span>
          Privacy
        </button>
        <button
          className={`settingsTab ${activeTab === "appearance" ? "settingsTabActive" : ""}`}
          onClick={() => setActiveTab("appearance")}
        >
          <span className="tabIconEmoji">🎨</span>
          Appearance
        </button>
      </div>

      {activeTab === "profile" && (
        <div className="profileCard">
          <div className="profileCardHeader">
            <h2 className="profileCardTitle">Profile Information</h2>
            <p className="profileCardSubtitle">
              Update your profile details and public information
            </p>
          </div>

          <div className="avatarSection">
            <div className="avatarContainer">
              <div className="avatar">
                <p className="avatarInitials">{getInitials(formData.fullName)}</p>
              </div>
            </div>
            <div className="avatarActions">
              <button 
                type="button"
                onClick={handleAvatarChange}
                className="changeAvatarButton"
              >
                Change Avatar
              </button>
              <p className="avatarHint">JPG, PNG or GIF. Max size 2MB</p>
            </div>
          </div>

          <form className="profileForm" onSubmit={handleSaveChanges}>
            <div className="profileFormField">
              <label htmlFor="fullName" className="profileLabel">Full Name</label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                value={formData.fullName}
                onChange={handleInputChange}
                className="profileInput"
              />
            </div>

            <div className="profileFormField">
              <label htmlFor="email" className="profileLabel">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="profileInput"
              />
            </div>

            <div className="profileFormField">
              <label htmlFor="country" className="profileLabel">Country</label>
              <select
                id="country"
                name="country"
                value={formData.country}
                onChange={handleInputChange}
                className="profileSelect"
              >
                <option value="Nigeria">Nigeria</option>
                <option value="Ghana">Ghana</option>
                <option value="South Africa">South Africa</option>
                <option value="Kenya">Kenya</option>
                <option value="Egypt">Egypt</option>
                <option value="Tanzania">Tanzania</option>
                <option value="Uganda">Uganda</option>
                <option value="Ethiopia">Ethiopia</option>
                <option value="Morocco">Morocco</option>
                <option value="Algeria">Algeria</option>
              </select>
            </div>

            <div className="profileFormField">
              <label htmlFor="bio" className="profileLabel">Bio</label>
              <textarea
                id="bio"
                name="bio"
                value={formData.bio}
                onChange={handleInputChange}
                className="profileTextarea"
                rows="4"
                placeholder="Tell us about yourself and your expertise..."
              />
            </div>

            <div className="profileFormField">
              <label htmlFor="website" className="profileLabel">Website</label>
              <input
                type="url"
                id="website"
                name="website"
                value={formData.website}
                onChange={handleInputChange}
                className="profileInput"
              />
            </div>

            <button type="submit" className="saveChangesButton">
              Save Changes
            </button>
          </form>
        </div>
      )}

      {activeTab === "notifications" && (
        <div className="profileCard">
          <div className="profileCardHeader">
            <h2 className="profileCardTitle">Notifications</h2>
            <p className="profileCardSubtitle">
              Manage your notification preferences
            </p>
          </div>
          {/* Notifications content would go here */}
        </div>
      )}

      {activeTab === "privacy" && (
        <div className="profileCard">
          <div className="profileCardHeader">
            <h2 className="profileCardTitle">Privacy</h2>
            <p className="profileCardSubtitle">
              Control your privacy settings
            </p>
          </div>
          {/* Privacy content would go here */}
        </div>
      )}

      {activeTab === "appearance" && (
        <div className="profileCard">
          <div className="profileCardHeader">
            <h2 className="profileCardTitle">Appearance</h2>
            <p className="profileCardSubtitle">
              Customize the look and feel
            </p>
          </div>
          {/* Appearance content would go here */}
        </div>
      )}
    </div>
  );
}
