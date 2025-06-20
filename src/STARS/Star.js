import React, { useState } from "react";
import { FaStar } from "react-icons/fa";

function Star() {
  const [rating, setRating] = useState(0);

  const handleStarClick = (index) => {
    setRating(index + 1);
  };

  return (
    <div>
      <h1>Star Rating</h1>
      {[...Array(5)].map((_, index) => (
        <FaStar
          key={index}
          onClick={() => handleStarClick(index)}
          color={index < rating ? "yellow" : "gray"}
          size={30}
          style={{ cursor: "pointer" }}
        />
      ))}
      <p>Selected rating: {rating}</p>
    </div>
  );
}

export default Star;
