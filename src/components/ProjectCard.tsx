import React from 'react';
import { ProjectData } from '../data/projectsData';

interface ProjectCardProps {
  project: ProjectData;
  animate?: boolean; 
  className: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, animate }) => {
  return (
    <a
      href={project.link}
      target="_blank"
      rel="noopener noreferrer"
      className={`bg-paynegrey text-slate-100 border border-slate-900 p-1 pl-3 rounded-lg shadow-md hover:bg-airblue opacity-0 transition-opacity duration-300 ${animate ? 'slide-in opacity-100': ''}`} 
    >
      <h2 className="font-bold">{project.name}</h2>
      <p className="text-sm">{project.description}</p>
      <div className="flex flex-wrap">
        {project.techStack.map((tech, index) => (
          <span key={index} className="bg-gray-700 text-white px-2 py-1 m-1 rounded h-5 text-xs">
            {tech}
          </span>
        ))}
      </div>
    </a>
  );
};

export default ProjectCard;