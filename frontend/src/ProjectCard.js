import React from 'react';
import PropTypes from 'prop-types';

// Project component
const ProjectCard = ({ title, description, date, imageSrc, altText, onClick }) => {
  return (
    <div className="project" onClick={onClick}>
      <img src={imageSrc} alt={altText} />
      <h3>{title}</h3>
      <p>{description}</p>
      <p>{date}</p>
      {/* <div className="plus-icon" onClick={onPlusClick}>+</div> */}
      <div className="plus-icon">+</div>
    </div>
  );
};

ProjectCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  imageSrc: PropTypes.string.isRequired,
  altText: PropTypes.string.isRequired,
};

export default ProjectCard;
