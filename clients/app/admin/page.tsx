"use client"
import React, { useState } from 'react';

const page = () => {
  const [showPopup, setShowPopup] = useState(false);

  const handleClick = () => {
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  return (
    <div>
      <button onClick={handleClick}>Click me!</button>

      {showPopup && (
        <div className="popup-overlay" onClick={closePopup}>
          <div className="popup">
            <p>This is a simple text popup.</p>
            <button onClick={closePopup}>Close</button>
          </div>
        </div>
      )}

      <style jsx>{`
        .popup-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.5);
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .popup {
          background: #fff;
          padding: 20px;
          text-align: center;
        }
      `}</style>
    </div>
  );
};

export default page;
