import React from "react";
import "./Notification.css";

const Notification = ({ isOpen, onClose, onCloseOverlay, text }) => {
  return (
    <section
      onClick={onCloseOverlay}
      className={`popup  ${isOpen ? "popup_overlay" : ""}`}
    >
      <div className="popup__box">
        <p className="popup__text">{text}</p>
        <button className="popup__close" type="button" onClick={onClose}>
          Ок
        </button>
      </div>
    </section>
  );
};

export default Notification;
