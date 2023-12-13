import React from 'react';
import EventCard from './EventCard';

const cardData = [
    {
        name: "Swacchta Hi Seva Campaign",
        date: "1st October 2023",
        imageSrc: "/images/events-2023-24/SwacchtaHiSeva.jpg",
        instagramLink: "https://www.instagram.com/p/Cx-C-bdoNua/",
        reportLink: "/Report-PDF/swachh bharat.pdf"
      },
      {
        name: "Animal Welfare Day Webinar",
        date: "1st October 2023",
        imageSrc: "/images/events-2023-24/AnimalWelfareDay.jpg",
        instagramLink: "https://www.instagram.com/p/CyCtB0myGBj/",
        reportLink: "/Report-PDF/webinar_animal_welfare.pdf"
      },
      {
        name: "Bhajan Sandhya",
        date: "2nd October 2023",
        imageSrc: "/images/events-2023-24/Bhajan.svg",
        // instagramLink: "",
        reportLink: "/Report-PDF/Bhajan sandhya.pdf"
      },
      {
        name: "World Teacher's Day",
        date: "5th October 2023",
        imageSrc: "/images/events-2023-24/TeachersDayPost.svg",
        instagramLink: "https://www.instagram.com/p/CzQKK70o-tg/",
      //   reportLink: "/Report-PDF/"
      },
      {
        name: "Bandra Fair Appreciation",
        date: "6th October 2023",
        imageSrc: "/images/events-2023-24/BandraFairAppr.svg",
        instagramLink: "https://www.instagram.com/p/CzQKnJ2SYvV/",
        //reportLink: "/Report-PDF/.pdf"
      },
      {
        name: "Nirmalya Mukhti",
        date: "13th October 2023",
        imageSrc: "/images/events-2023-24/Nirmalyapost.svg",
        instagramLink: "https://www.instagram.com/p/CzQLPOEIz70/",
        reportLink: "/Report-PDF/Nirmalya mukti.pdf"
      },
      {
        name: "MasterChef 2023",
        date: "16th October 2023",
        imageSrc: "/images/events-2023-24/Masterchefposter.svg",
        instagramLink: "https://www.instagram.com/p/CzdOYsyyBY1/",
        reportLink: "/Report-PDF/MasterChef.pdf"
      },
      {
        name: "FoodFest 2023",
        date: "18th October 2023",
        imageSrc: "/images/events-2023-24/Foodfest23.jpg",
        instagramLink: "https://www.instagram.com/p/Czn-uKiN_u6/",
        reportLink: "/Report-PDF/Food Fest.pdf"
      },


];

const OctoberEventList = () => {
    return (
      <div className="card-list dynamic-grid">
        {cardData.map((card, index) => (
          <EventCard key={index} {...card} />
        ))}
      </div>
    );
  };
  
  export default OctoberEventList;
