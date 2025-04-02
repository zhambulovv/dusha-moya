import React from "react";

const MineButton = ({ onClick }) => {
  return (
    <button id="mine-button" onClick={onClick}>
      Добыть монету
    </button>
  );
};

export default MineButton;
