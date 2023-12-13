import React from 'react';
import MemberCard from './MemberCard';

const cardData = [
    {
        name: "Ratan Singh",
        designation: "President",
        imageSrc: "/images/teammembers/team-members-2023-24/ratan.jpg",
        linkedinLink: "https://www.linkedin.com/in/ratan-singh-327b74228/",
        instagramLink: "https://www.instagram.com/ratan.singh_21/",
    },
    {
        name: "Krishna Soni",
        designation: "Vice-President and Head of Events",
        imageSrc: "/images/teammembers/team-members-2023-24/krishna.jpg",
        linkedinLink: "https://www.linkedin.com/in/krishnasoni9/",
        instagramLink: "https://instagram.com/krishhna_9193?igshid=OGQ5ZDc2ODk2ZA==",
    },
    {
        name: "Aarush Wasnik",
        designation: "Senior Webmaster",
        imageSrc: "/images/teammembers/team-members-2023-24/Aarush.jpg",
        linkedinLink: "https://www.linkedin.com/in/aarush-wasnik-016120248/",
        githubLink: "https://github.com/Ark2044"
    },
    {
        name: "Kush Ambekar",
        designation: "PR Head",
        imageSrc: "/images/teammembers/team-members-2023-24/Kush.jpg",
        linkedinLink: "https://www.linkedin.com/in/kush-ambekar-11a08a230/",
        instagramLink: "https://instagram.com/_._._.kush._._._?igshid=MzRlODBiNWFlZA==",
    },
    {
        name: "Prathmesh Magar",
        designation: "Head of Inventory and Equipment",
        imageSrc: "/images/teammembers/team-members-2023-24/Prathmesh.jpg",
        linkedinLink: "https://www.linkedin.com/in/prathmeshmagar447/",
        instagramLink: "https://www.instagram.com/prathmesh196/",
    },
    {
        name: "Shubham Ghadigaonkar",
        designation: "Treasurer",
        imageSrc: "/images/teammembers/team-members-2023-24/Shubham.jpg",
     },
    // Add more card data as needed
];

const SCCardList = () => {
    return (
        <div className="dynamic-grid">
            {cardData.map((card, index) => (
                <MemberCard key={index} {...card} />
            ))}
        </div>
    );
};

export default SCCardList;
