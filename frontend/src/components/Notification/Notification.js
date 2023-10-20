import React from "react";
import "./Notification.css";

const Notification = ({ isOpen, onClose, text }) => {

  return (
    <section
      onClick={onClose}
      className={`popup  ${isOpen ? "popup_overlay" : ""}`}
    >
      <div className="popup__box">
        <p className="popup__text">{text}</p>
      </div>
    </section>
  );
};

export default Notification;
