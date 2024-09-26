import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faBriefcase, faProjectDiagram } from '@fortawesome/free-solid-svg-icons';
import MikeImage from '../assets/Mike.jpg';
import { Link } from 'react-router-dom';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';

interface HoverButtonProps {
  icon: IconDefinition;
  label: string;
  side: 'left' | 'right';
  color: string;
  to?: string;
  url?: string;
}

function Home() {
  return (
    <div className="bg-licorice min-h-screen font-sans text-slate-50 flex flex-col items-center justify-center px-4 md:px-0">
      <h1 className="font-bold text-3xl mb-4">Mike Williams</h1>
      <div className="flex items-center justify-center mb-4">
        <div className="flex flex-col space-y-8 lg:space-y-6">
          <HoverButton icon={faBriefcase} label="My Career" side="left" color="text-cream" to="/career" />
          <HoverButton icon={faProjectDiagram} label="Explore Projects" side="left" color="text-cream" to="/projects" />
        </div>
        <div className="relative mx-4 lg:mx-8">
          <img
            src={MikeImage}
            alt="Mike Williams"
            className="w-40 h-40 lg:w-50 lg:h-50 rounded-full"
          />
        </div>
        <div className="flex flex-col space-y-8 lg:space-y-9">
          <HoverButton icon={faLinkedin} label="LinkedIn" side="right" color="text-cream" url="https://www.linkedin.com/in/mike-williams-378b7326/" />
          <HoverButton icon={faGithub} label="Github" side="right" color="text-cream" url="https://github.com/ValkarVarg" />
        </div>
      </div>
      <p className="mt-4">Full-Stack Developer / Project Manager</p>

      <Link to="/hire" className="mt-4 bg-transparent hover:bg-airblue text-white font-semibold py-2 px-4 lg:px-5 border border-white rounded-lg transition duration-300">
        Hire Me
      </Link>
    </div>
  );
}

const HoverButton: React.FC<HoverButtonProps> = ({ icon, label, side, color, to, url }) => (
  <div className="relative flex items-center group">
    {to ? (
      <Link to={to} className={`text-2xl cursor-pointer ${color}`}>
        <FontAwesomeIcon icon={icon} />
      </Link>
    ) : (
      <a href={url} target="_blank" rel="noopener noreferrer" className={`text-2xl cursor-pointer ${color}`}>
        <FontAwesomeIcon icon={icon} />
      </a>
    )}
    <span className={`absolute ${side === 'left' ? 'right-full mr-2' : 'left-full ml-2'} opacity-0 group-hover:opacity-100 transform ${side === 'left' ? 'translate-x-full group-hover:-translate-x-2' : '-translate-x-full group-hover:translate-x-2'} transition duration-300 text-white`}>
      {label}
    </span>
  </div>
);

export default Home;
