import React from "react";
import PropTypes from "prop-types";

export default function ImageGalleryItem({ img, alt, large, onHandleModal }) {
  return (
    <li className="ImageGalleryItem" onClick={onHandleModal}>
      <img
        src={img}
        alt={alt}
        data-url={large}
        className="ImageGalleryItem-image"
      />
    </li>
  );
}
ImageGalleryItem.propTypes = {
  img: PropTypes.string,
  alt: PropTypes.string,
  large: PropTypes.string,
  onHandleModal: PropTypes.func,
};
