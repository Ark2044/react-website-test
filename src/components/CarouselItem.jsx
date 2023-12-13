import React from "react";

export const CarouselItem = ({ item, width }) => {
  return (
   
    <div className="carousel-item" style={{ width: width }}>
      <div></div>
      
      <img className="carousel-img" src={item.imageURL} />
      <br></br>
      <div className="carousel-item-text">{item.title}</div>
    </div>
   
  );
};