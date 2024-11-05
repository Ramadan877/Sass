
import React, { useState } from "react";
import "./LoveButton.scss";

const LoveButton = () => {
  const [rickrolled, setRickrolled] = useState(false);
  const [noBtnPosition, setNoBtnPosition] = useState({ top: "50%", left: "50%" });

  const handleYesClick = () => {
    setRickrolled(true);
  };

  const handleNoHover = () => {
    const wrapper = document.querySelector(".wrapper");
    const wrapperRect = wrapper.getBoundingClientRect();

    const randomX = Math.floor(Math.random() * (wrapperRect.width - 150)); // 150 is button width
    const randomY = Math.floor(Math.random() * (wrapperRect.height - 40)); // 40 is button height

    setNoBtnPosition({ top: `${randomY}px`, left: `${randomX}px` });
  };

  return (
    <div className="wrapper">
      <h2 className="question">
        {rickrolled ? "You got Rickrolled 😘" : "Do you love me?"}
      </h2>
      <img
        className="gif"
        alt="gif"
        src={
          rickrolled
            ? "https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExZGI1cW5wMWhpaDF5b3pjdTF0OHZrcHJvaGkzOHJteDhmd245OGRnZyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/Vuw9m5wXviFIQ/giphy.gif"
            : "https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExbjJvdWZzYXc1NGJ6aGp1cDE3b2dyNnVzOGN1andkMjVrMmRzeGwwZSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3OhXBaoR1tVPW/giphy.gif"
        }
      />
      <div className="btn-group">
        <button className="yes-btn" onClick={handleYesClick}>
          Yes
        </button>
        <button
          className="no-btn"
          style={{ top: noBtnPosition.top, left: noBtnPosition.left }}
          onMouseOver={handleNoHover}
        >
          No
        </button>
      </div>
    </div>
  );
};

export default LoveButton;
