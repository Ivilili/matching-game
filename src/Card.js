import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "animate.css";

function Card({ id, icon, handleClick, flipped, matched, disabled }) {
  const visible = flipped || matched ? "front" : "back";

  return (
    <div
      className={`card ${
        visible === "front"
          ? `${visible} animate__animated animate__flipInY`
          : `${visible}`
      }`}
      onClick={() => {
        if (!disabled) handleClick(id);
      }}
    >
      <div className="font-icon">
        <FontAwesomeIcon icon={icon} className="icon" />
      </div>
    </div>
  );
}

export default Card;
