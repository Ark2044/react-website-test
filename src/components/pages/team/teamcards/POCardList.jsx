import React from 'react';
import MemberCard from './MemberCard';

const cardData = [
    {
        name: "Prof. Pradeep Singh",
        designation: "Program Officer",
        imageSrc: "/images/teammembers/team-members-2023-24/pradeep.jpg",
    },
    {
        name: "Prof. Prachi Dalvi",
        designation: "Program Officer",
        imageSrc: "/images/teammembers/team-members-2023-24/prachi.jpg",
    },
    {
        name: "Prof. Gauree Jagushte",
        designation: "Program Officer",
        imageSrc: "/images/teammembers/team-members-2023-24/po1.jpg",
    },
    {
        name: "Prof. Gajendra Singh",
        designation: "Program Officer",
        imageSrc: "/images/teammembers/team-members-2023-24/gajendra.jpg",
    },
    // Add more card data as needed
];

const POCardList = () => {
    return (
        <div className="dynamic-grid">
            {cardData.map((card, index) => (
                <MemberCard key={index} {...card} />
            ))}
        </div>
    );
};

export default POCardList;
