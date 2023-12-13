import React from 'react';
import MemberCard from './MemberCard';

const cardData = [
    {
        name: "Aarush Wasnik",
        designation: "Senior Webmaster",
        imageSrc: "/images/teammembers/team-members-2023-24/Aarush.jpg",
        linkedinLink: "https://www.linkedin.com/in/aarush-wasnik-016120248/",
        githubLink: "https://github.com/Ark2044"
    },
    {
        name: "Shreya Ghorpade",
        designation: "Junior Webmaster",
        imageSrc: "/images/teammembers/team-members-2023-24/shreya_ghorpade.jpg",
        linkedinLink: "https://www.linkedin.com/in/shreya-g-a697b8272/",
        githubLink: "https://github.com/shreya64684",
    },
    // Add more card data as needed
];

const WebCardList = () => (
    <div>
        <h1>Web Team</h1>
        <div className="dynamic-grid">
            {cardData.map((card, index) => (
                <MemberCard key={index} {...card} />
            ))}
        </div>
    </div>
);

export default WebCardList;
