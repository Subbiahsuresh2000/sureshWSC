// OurFamily.js
import React from 'react';
import './OurFamily.css'; // Ensure the CSS file is styled accordingly

const familyData = [
  {
    imgSrc: require('../assets/img/doc1.jpg'),
    altText: 'Our Family',
    description: `Welcome to our family! At WESTAYCLOSE, we believe in creating a
      supportive and compassionate environment. Our team is dedicated to
      providing the best care and advocacy services to ensure the well-being
      of you and your loved ones.`,
  },
  {
    imgSrc: require('../assets/img/doc2.jpg'),
    altText: 'Family Member 2',
    description: `Meet one of our dedicated staff members who brings compassion and
      professionalism to our daily operations. Every experience is made
      personal to cater to our clients' needs.`,
  },
  {
    imgSrc: require('../assets/img/doc3.jpg'),
    altText: 'Family Member 3',
    description: `Our team continually works towards making your well-being our
      top priority, ensuring you feel supported and cared for at all times.`,
  },
];

const OurFamily = () => {
  return (
    <div className="our-family-container">
      {familyData.map((member, index) => (
        <div
          className={`member-container ${
            index === 1 ? 'reverse-layout' : ''
          }`}
          key={index}
        >
          <div className="description-container">
            <h2>Our Family</h2>
            <p>{member.description}</p>
          </div>
          <div className="image-container">
            <img
              src={member.imgSrc}
              alt={member.altText}
              className="family-image"
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default OurFamily;
