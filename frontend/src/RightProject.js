import React from 'react';
import './css/project.css';
import Project from './Project'; // Make sure the path is correct based on your file structure

function PortfolioPage() {
  // Dummy data for projects, replace with actual data
  const projectsData = [
    {
        title: 'Open Village',
        description: 'Designing Open Housing for Zurich’s Geroldareal.',
        date: 'Spring \'15',
        imageSrc: '/path-to-open-village-image.jpg',
        altText: 'Open Village Thumbnail',
    },
    {
        title: 'Open Village',
        description: 'Designing Open Housing for Zurich’s Geroldareal.',
        date: 'Spring \'15',
        imageSrc: '/path-to-open-village-image.jpg',
        altText: 'Open Village Thumbnail',
    },
    // ... other project data
  ];

  return (
    <div className="portfolio-container">
      {/* ... other parts of the PortfolioPage */}
      <section className="portfolio-projects">
        {projectsData.map((project, index) => (
          <Project
            key={index}
            title={project.title}
            description={project.description}
            date={project.date}
            imageSrc={project.imageSrc}
            altText={project.altText}
          />
        ))}
      </section>
    </div>
  );
}

export default PortfolioPage;
