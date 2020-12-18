import React from "react";

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
