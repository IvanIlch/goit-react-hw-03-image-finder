import React from "react";

export default function Modal({ onHandleClick, img }) {
  return (
    <div className="Overlay" onClick={onHandleClick}>
      <div className="Modal">
        <img src={img} alt="" />
      </div>
    </div>
  );
}
