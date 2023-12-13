import React from 'react';
import EventCard from './EventCard';


const cardData = [
  {
    name: "NSS Orientation",
    date: "1st August 2023",
    imageSrc: "/images/events-2023-24/Orient23.jpg",
    instagramLink: "https://www.instagram.com/p/CvhoKb6t5gS/",
    reportLink: "/Report-PDF/Orientation_.pdf"
  },
  {
    name: "Tarang Aasha Ki",
    date: "10 August 2023",
    imageSrc: "/images/events-2023-24/tarang.jpg",
    instagramLink: "https://www.instagram.com/p/Cv1cuaiyb3O/?img_index=1",
    reportLink: "/Report-PDF/Tarang.pdf",
  },
  {
    name: "Tree Plantation",
    date: "15th August 2023",
    imageSrc: "/images/events-2023-24/Plant23.jpg",
    instagramLink: "https://www.instagram.com/p/CwPRy_VN1hi/",
    reportLink: "/Report-PDF/Plantation.pdf"
  },
  {
    name: "Blood Donation Camp",
    date: "17th August 2023",
    imageSrc: "/images/events-2023-24/BloodDonationCamp23.jpg",
    instagramLink: "https://www.instagram.com/p/CwPS1BFy7FZ/",
    reportLink: "/Report-PDF/Blood Donation.pdf"
  },


  {
    name: "Mission Mangroves Webinar",
    date: "22nd August 2023",
    imageSrc: "/images/events-2023-24/Mangrove23.jpg",
    instagramLink: "https://www.instagram.com/p/CwPTK9GteK9/",
    reportLink: "/Report-PDF/Mission Mangroves.pdf"
  },
  
  // Add more card data as needed
];

const AugustEventList = () => {
  return (
    <div className="card-list dynamic-grid">
      {cardData.map((card, index) => (
        <EventCard key={index} {...card} />
      ))}
    </div>
  );
};

export default AugustEventList;
