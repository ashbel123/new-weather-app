import React, { useState, useEffect } from "react";

const Ss = () => {
  const [color, setColor] = useState("blue");

  const handleClick = () => {
    setColor((prevColor) => {
      if (prevColor === "blue") {
        return "red";
      } else {
        return "blue";
      }
    });
  };

  // This is where we actually change the background color
  useEffect(() => {
    document.body.style.backgroundImage =
      "./assets/background_images/clouds.jpg";
    document.body.style.backgroundSize = "cover";
  }, []);

  return (
    <div>
      <h1>Background Image: {color}</h1>
      <button onClick={handleClick}>Change Background Color</button>
    </div>
  );
};

export default Ss;
