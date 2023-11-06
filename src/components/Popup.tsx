import React, { useState } from "react";
import "./styles/Popup.css";
import UserAvatar from "../assets/icons/user-avatar.png";

interface PopupProps {
  text: string;
  closePopup: () => void;
}

const Popup: React.FC<PopupProps> = ({ closePopup }) => {
  const [name, setName] = useState("John Doe");
  const [email, setEmail] = useState("johndoe@example.com");
  const [isChangingName, setIsChangingName] = useState(false);
  const [isChangingEmail, setIsChangingEmail] = useState(false);
  const [selectedTheme, setSelectedTheme] = useState("Light");
  const [role, setRole] = useState("Software Engineer");
  const [isChangingRole, setIsChangingRole] = useState(false);

  const handleSaveSettings = () => {
    // logic to save the user settings
    console.log("Settings saved:", { name, email, selectedTheme, role });
  };
  return (
    <div className="popup-container">
      <div className="popup-body" onClick={(e) => e.stopPropagation()}>
        <h2>User Settings</h2>
        <div className="avatar-container">
          <img
            style={{ width: 125, height: 125 }}
            src={UserAvatar}
            alt="Avatar"
            className="avatar"
          />
          <button className="change-avatar-button">Change Avatar</button>
        </div>
        <div className="input-container">
          <label style={{ color: "black" }} htmlFor="name">
            Name:
          </label>
          {isChangingName ? (
            <input
              type="text"
              id="name"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          ) : (
            <span>{name}</span>
          )}
          <button onClick={() => setIsChangingName(!isChangingName)}>
            {isChangingName ? "Save" : "Edit"}
          </button>
        </div>

        <div className="input-container">
          <label style={{ color: "black" }} htmlFor="email">
            Email:
          </label>
          {isChangingEmail ? (
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          ) : (
            <span>{email}</span>
          )}
          <button onClick={() => setIsChangingEmail(!isChangingEmail)}>
            {isChangingEmail ? "Save" : "Edit"}
          </button>
        </div>
        <div className="input-container">
          <label style={{ color: "black" }} htmlFor="role">
            Role:
          </label>
          {isChangingRole ? (
            <input
              type="text"
              id="role"
              placeholder="Enter your role"
              value={role}
              onChange={(e) => setRole(e.target.value)}
            />
          ) : (
            <span>{role}</span>
          )}
          <button onClick={() => setIsChangingRole(!isChangingRole)}>
            {isChangingRole ? "Save" : "Edit"}
          </button>
        </div>

        <div className="input-container">
          <label style={{ color: "black" }} htmlFor="theme">
            Theme:
          </label>
          <select
            style={{
              cursor: "pointer",
              width: "40%",
              backgroundColor: "white",
            }}
            id="theme"
            value={selectedTheme}
            onChange={(e) => setSelectedTheme(e.target.value)}
          >
            <option value="Light">Light</option>
            <option value="Dark">Dark</option>
          </select>
        </div>
        <button onClick={handleSaveSettings}>Save Settings</button>
        <button onClick={closePopup}>Close</button>
      </div>
    </div>
  );
};

export default Popup;
