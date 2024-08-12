import React, { useState } from "react";
import "./Campus.css";
import gallery_1 from "../../assets/gallery-1.png";
import gallery_2 from "../../assets/gallery-2.png";
import gallery_3 from "../../assets/gallery-3.png";
import gallery_4 from "../../assets/gallery-4.png";
import white_arrow from "../../assets/white-arrow.png";

const Campus = () => {
  const [showMore, setShowMore] = useState(false);

  const handleToggle = () => {
    setShowMore(!showMore);
  };

  return (
    <div className="campus">
      <div className="gallery">
        <img src={gallery_1} alt="gallery" />
        <img src={gallery_2} alt="gallery" />
        <img src={gallery_3} alt="gallery" />
        <img src={gallery_4} alt="gallery" />
        {showMore && (
          <div className="additional-gallery">
            <img src={gallery_2} alt="gallery" />
            <img src={gallery_1} alt="gallery" />
            <img src={gallery_4} alt="gallery" />
            <img src={gallery_3} alt="gallery" />
          </div>
        )}
      </div>
      <button className="btn dark-btn" onClick={handleToggle}>
        {showMore ? "See less" : "See more here"}{" "}
        <img src={white_arrow} alt="white arrow" />
      </button>
    </div>
  );
};

export default Campus;
