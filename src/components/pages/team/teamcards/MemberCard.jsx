import React from 'react';

const MemberCard = ({ name, designation, imageSrc, linkedinLink, instagramLink, githubLink }) => {
  return (
    <div className="custom-card animate__animated animate__backInUp animate__slower">
      <div className="card-content">
        <img src={imageSrc} alt={name} className="card-image" />
        <div className="hover-content">
          <h3>{name}</h3>
          <p>{designation}</p>
          <div className="social-icons">
            {linkedinLink && (
              <a href={linkedinLink} target="_blank" rel="noopener noreferrer">
                <i className="fab fa-linkedin"></i>
              </a>
            )}
            {instagramLink && (
              <a href={instagramLink} target="_blank" rel="noopener noreferrer">
                <i className="fab fa-instagram"></i>
              </a>
            )}
            {githubLink && (
              <a href={githubLink} target="_blank" rel="noopener noreferrer">
                <i className="fab fa-github"></i>
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MemberCard;
