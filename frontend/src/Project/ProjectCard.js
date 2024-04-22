import React from 'react';
import PropTypes from 'prop-types';
import 'animate.css'

// Project component
const ProjectCard = ({ title, description, date, imageSrc, altText, onClick }) => {
  return (
    <div className="project" onClick={onClick}>
      <img src={imageSrc} alt={altText} />
      <h3 className="animate__animated animate__pulse animate__slow animate__infinite	infinite">{title}</h3>
      <p className="animate__animated animate__zoomInDown animate__fast">{description}</p>
      <p className="animate__animated animate__rotateInUpLeft animate__fast">{date}</p>
      <div className="plus-icon animate__animated animate__swing animate__slow animate__infinite	infinite">+</div>
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
