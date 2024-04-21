import React from 'react';
import 'css/project.css';
import { useNavigate } from 'react-router-dom';
import ProjectCard from 'Project/ProjectCard'; // Make sure the path is correct based on your file structure

function ProjectRight() {
  // Dummy data for projects, replace with actual data
  const projectsData = [
    {
      title: 'Open Village',
      description: 'Designing Open Housing for Zurich’s Geroldareal.',
      date: 'Spring \'15',
      imageSrc: '/prj1.JPG',
      altText: 'Open Village Thumbnail',
    },
    {
      title: 'Open Village',
      description: 'Designing Open Housing for Zurich’s Geror Zurich’s Geroldareal. Designing Open Housing for Zurich’s Geroldareal',
      date: 'Spring \'15',
      imageSrc: '/prj2.jpg',
      altText: 'Open Village Thumbnail',
    },
    {
      title: 'Open Village',
      description: 'Designing Open Housing for Zurich’s Geroldareal.',
      date: 'Spring \'15',
      imageSrc: '/garden.jpg',
      altText: 'Open Village Thumbnail',
    },
    {
      title: 'Open Village',
      description: 'Designing Open Housing for Zurich’s Geroldareal. g for Zurich’s Gero',
      date: 'Spring \'15',
      imageSrc: '/prj2.jpg',
      altText: 'Open Village Thumbnail',
    },
    {
      title: 'Open Village',
      description: 'Designing Open Housing for Zurich’s Geroldareal. Designing Open Housing for Zurich’s Geroldareal',
      date: 'Spring \'15',
      imageSrc: '/prj2.jpg',
      altText: 'Open Village Thumbnail',
    },
    {
      title: 'Open Village',
      description: 'Designing Open Housing for Zurich’s Geroldareal.',
      date: 'Spring \'15',
      imageSrc: '/prj2.jpg',
      altText: 'Open Village Thumbnail',
    },
    {
      title: 'Open Village',
      description: 'Designing Open Housing for Zurich’s Geroldareal esigning Open Housing for Zurich’s Geroldareal.',
      date: 'Spring \'15',
      imageSrc: '/prj2.jpg',
      altText: 'Open Village Thumbnail',
    },
    // ... other project data
  ];

  const navigate = useNavigate(); // This replaces the useHistory hook

  const handleCardClick = (projectId) => {
    navigate(`/Project/${projectId}`);
  };

  return (
      <div className="portfolio-container">
      {/* ... other parts of the PortfolioPage */}
      <section className="portfolio-projects">
          {projectsData.map((project, index) => (
          <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              date={project.date}
              imageSrc={project.imageSrc}
              altText={project.altText}
              onClick={() => handleCardClick(index)}
          />
          ))}
      </section>
      </div>
  );
}

export default ProjectRight;