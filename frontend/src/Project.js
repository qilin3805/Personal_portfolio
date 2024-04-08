import React from 'react';
import PropTypes from 'prop-types';

// Project component
const Project = ({ title, description, date, imageSrc, altText }) => {
  return (
    <div className="project">
      <img src={imageSrc} alt={altText} />
      <h3>{title}</h3>
      <p>{description}</p>
      <p>{date}</p>
    </div>
  );
};

Project.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  imageSrc: PropTypes.string.isRequired,
  altText: PropTypes.string.isRequired,
};

export default Project;
