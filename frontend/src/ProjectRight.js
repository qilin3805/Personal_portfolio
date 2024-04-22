import React from 'react';
import 'css/project.css';
import { useNavigate } from 'react-router-dom';
import ProjectCard from 'Project/ProjectCard'; // Make sure the path is correct based on your file structure

function ProjectRight() {
  // Dummy data for projects, replace with actual data
  const projectsData = [
    {
      title: 'Bio-Switch',
      description: 'Independent Project ｜ Care for ocean regions with historically low oxygen using living bivalve mollusks, the rate and amount of whoose opening shells are sensitive detectors of water-dissolved oxygen.',
      date: 'Spring \'2022',
      imageSrc: require('assets/project/bioswitch/bioswitch_comparision.jpg'),
      altText: 'Open Village Thumbnail',
    },
    {
      title: 'Blossom',
      description: '2019 UIA-CBC International Construction Competition ｜Inspired by vernacular pear culture and pastoral life, the "blossom" shares its prototype with the geometrical abstraction of a pear blossom and gestures of farmers celebrating their harvest',
      date: 'Sumer \'2019',
      imageSrc: require('assets/project/blossom/bloosom_perspective.jpg'),
      altText: 'Built real shot of Blossom',
    },
    {
      title: 'Landscape Hyperlink',
      description: 'Experimental Research Group | Renewal Design of Waterfront Area in Chaotianmen Area, Chongqing. "Landscape" is an urban wonder like mountains and rivers, and it is also the ideal pursuit of life that is "feasible, watchable, habitable, and travelable"',
      date: 'Winter \'2020',
      imageSrc: require('assets/project/landscape/landscape_cover.jpg'),
      altText: 'Rendering of landscape hyperlink',
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