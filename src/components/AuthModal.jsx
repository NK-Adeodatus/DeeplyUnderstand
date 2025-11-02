import { useState, useEffect } from "react";
import "../styles/authModal.css";

const AuthModal = ({ isOpen, setIsOpen, initialMode = "signin" }) => {
  const [mode, setMode] = useState(initialMode);

  useEffect(() => {
    if (isOpen) {
      setMode(initialMode);
    }
  }, [initialMode, isOpen]);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: ""
  });

  if (!isOpen) return null;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    if (mode === "signin") {
      console.log("Sign In:", formData);
    } else {
      console.log("Sign Up:", formData);
    }
  };

  const handleClose = () => {
    setIsOpen(false);
    // Reset form when closing
    setFormData({
      fullName: "",
      email: "",
      password: ""
    });
  };

  return (
    <>
      <div className="authOverlay" onClick={handleClose} />
      <div className="authModal">
        <button className="authModalClose" onClick={handleClose}>×</button>
        
        <div className="authModalHeader">
          <h2 className="authModalTitle">Welcome to TechDeep</h2>
          <p className="authModalSubtitle">
            Join our community of African developers learning together
          </p>
        </div>

        <div className="authModalTabs">
          <button
            className={`authTab ${mode === "signin" ? "authTabActive" : ""}`}
            onClick={() => setMode("signin")}
          >
            Sign In
          </button>
          <button
            className={`authTab ${mode === "signup" ? "authTabActive" : ""}`}
            onClick={() => setMode("signup")}
          >
            Sign Up
          </button>
        </div>

        <form className="authForm" onSubmit={handleSubmit}>
          {mode === "signup" && (
            <div className="authFormField">
              <label htmlFor="fullName" className="authLabel">Full Name</label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                value={formData.fullName}
                onChange={handleInputChange}
                className="authInput"
                placeholder="John Doe"
                required={mode === "signup"}
              />
            </div>
          )}

          <div className="authFormField">
            <label htmlFor="email" className="authLabel">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="authInput"
              placeholder="you@example.com"
              required
            />
          </div>

          <div className="authFormField">
            <label htmlFor="password" className="authLabel">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              className="authInput"
              placeholder="Enter your password"
              required
            />
          </div>

          <button type="submit" className="authSubmitButton">
            {mode === "signin" ? "Sign In" : "Create Account"}
          </button>
        </form>
      </div>
    </>
  );
};

export default AuthModal;
