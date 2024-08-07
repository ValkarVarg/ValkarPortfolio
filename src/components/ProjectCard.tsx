import React from 'react';
import { ProjectData } from '../data/projectsData';

import ncimg from "../assets/stepex-northcoders-1.jpg";
import gymbro from "../assets/GYMBROHERO.jpg";

const imageMap: Record<string, string> = {
  'ncimg': ncimg,
  'gymbro': gymbro,
};

interface ProjectCardProps {
  project: ProjectData;
  animate?: boolean; 
  className?: string; 
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, animate, className = '' }) => {
  const imageSrc = project.image ? imageMap[project.image] : null;

  return (
    <a
      href={project.link}
      target="_blank"
      rel="noopener noreferrer"
      className={`bg-paynegrey text-slate-100 border border-slate-900 p-1 pl-3 rounded-lg shadow-md hover:bg-airblue opacity-0 transition-opacity duration-300 ${animate ? 'slide-in opacity-100' : ''} flex items-center ${className}`}
    >
      <div className="flex-grow">
        <h2 className="font-bold">{project.name}</h2>
        <p className="text-sm">{project.description}</p>
        <div className="flex flex-wrap">
          {project.techStack.map((tech, index) => (
            <span key={index} className="bg-gray-700 text-white px-2 py-1 m-1 rounded h-5 text-xs">
              {tech}
            </span>
          ))}
        </div>
      </div>
      {imageSrc && (
        <img
          src={imageSrc}
          alt={project.name}
          className="w-24 h-24 object-cover rounded-lg ml-4"
        />
      )}
    </a>
  );
};

export default ProjectCard;
