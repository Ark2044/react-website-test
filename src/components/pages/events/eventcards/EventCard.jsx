import React from 'react';

const EventCard = ({ name, date, imageSrc, instagramLink, reportLink }) => {
  return (
    <div className="event-custom-card animate__animated animate__backInUp animate__slower">
      <img src={imageSrc} alt={name} className="event-img"/>
      <div className="card-info">
        <h3>{name}</h3>
        <p>{date}</p>
      </div>
      <div className="social-icons">
        {instagramLink && (
          <a href={instagramLink} target="_blank" rel="noopener noreferrer">
            <i className="fab fa-instagram"></i>
          </a>
        )}
        {reportLink && (
          <a href={reportLink} target="_blank" rel="noopener noreferrer">
            <i className='fa fa-file-pdf'></i>
          </a> 
        )}
      </div>
    </div>
  );
};

export default EventCard;