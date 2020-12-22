import React from "react";
import PropTypes from "prop-types";

export default function Modal({ onHandleClick, img }) {
  return (
    <div className="Overlay" onClick={onHandleClick}>
      <div className="Modal">
        <img src={img} alt="" />
      </div>
    </div>
  );
}

Modal.propTypes = {
  img: PropTypes.string.isRequired,
  onHandleClick: PropTypes.func,
};
