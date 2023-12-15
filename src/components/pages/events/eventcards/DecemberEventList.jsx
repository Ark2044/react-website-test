import React from 'react';
import EventCard from './EventCard';

const cardData = [
    {
        name: "Pollution Control Day",
        date: "2nd December 2023",
        imageSrc: "/images/events-2023-24/pollution.svg",
        instagramLink: "",
        reportLink: "/Report-PDF/Pollution Control Day.pdf"
      },


];

const DecemberEventList = () => {
    return (
      <div className="card-list dynamic-grid">
        {cardData.map((card, index) => (
          <EventCard key={index} {...card} />
        ))}
      </div>
    );
  };
  
  export default DecemberEventList;
