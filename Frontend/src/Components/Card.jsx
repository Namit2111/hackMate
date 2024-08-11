import React from "react";

const Card = ({ top, middle, bottom }) => {
  return (
    <div className="bg-white shadow-lg shadow-black rounded-lg overflow-hidden">
      <div className="p-4 border-b">{top}</div>
      <div className="p-4">{middle}</div>
      <div className="p-4 border-t">{bottom}</div>
    </div>
  );
};

export default Card;
