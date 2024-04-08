import React from "react";

const GalleryItem = (props) => {
  return (
    <div>
      <img src={props.src} alt="" />
    </div>
  );
};

export default GalleryItem;
