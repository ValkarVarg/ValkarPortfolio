import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { projects, ProjectData } from '../data/projectsData';
import ProjectCard from '../components/ProjectCard';

const Projects: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [searchTerms, setSearchTerms] = useState<string[]>([]);
  const [filteredProjects, setFilteredProjects] = useState<ProjectData[]>([...projects].reverse());
  const [animateCards, setAnimateCards] = useState<Record<number, boolean>>({});

  useEffect(() => {
    const initialAnimateState = projects.reduce<Record<number, boolean>>((acc, project) => {
      acc[project.id] = false;
      return acc;
    }, {});
    setAnimateCards(initialAnimateState);
  }, []);

  useEffect(() => {
    const animationTimeouts = filteredProjects.map((project, index) => {
      return setTimeout(() => {
        setAnimateCards(prev => ({
          ...prev,
          [project.id]: true
        }));
      }, index * 200); 
    });

    return () => {
      animationTimeouts.forEach(timeout => {
        clearTimeout(timeout);
      });
    };
  }, [filteredProjects]);

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter' && searchTerm.trim()) {
      addSearchTerm();
    }
  };

  const filterProjects = (terms: string[]) => {
    if (terms.length === 0) {
      setFilteredProjects([...projects].reverse());
    } else {
      const filtered = projects.filter(project =>
        terms.every(term =>
          project.techStack.some(tech => tech.toLowerCase().includes(term))
        )
      );
      setFilteredProjects([...filtered].reverse());
    }
  };

  const removeSearchTerm = (termToRemove: string) => {
    const updatedTerms = searchTerms.filter(term => term !== termToRemove);
    setSearchTerms(updatedTerms);
    filterProjects(updatedTerms);
  };

  const addSearchTerm = () => {
    if (searchTerm.trim()) {
      if (!searchTerms.includes(searchTerm.trim().toLowerCase())) {
        const updatedTerms = [...searchTerms, searchTerm.trim().toLowerCase()];
        setSearchTerms(updatedTerms);
        setSearchTerm('');
        filterProjects(updatedTerms);
      }
    }
  };

  return (
    <div className="bg-licorice min-h-screen flex flex-col p-4 text-slate-100">
      <div className="flex items-center mb-4">
        <Link to="/" className="inline-block text-slate-100 hover:text-airblue">
          <FontAwesomeIcon icon={faArrowLeft} size="2x" />
        </Link>
        <h2 className="font-bold text-2xl flex-1 text-center">Projects</h2>
      </div>
      
      <div className="flex mb-4">
        <input
          type="text"
          value={searchTerm}
          onChange={handleSearch}
          onKeyDown={handleKeyDown}
          placeholder="Search by tech stack..."
          className="pl-2 rounded bg-paynegrey text-slate-100 border border-slate-900 w-full max-w-md mr-2"
        />
        <button onClick={addSearchTerm} className="bg-airblue text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-300">Add</button>
      </div>
      <div className="mb-4 flex flex-wrap">
        {searchTerms.map(term => (
          <div key={term} className="bg-paynegrey text-slate-100 border border-slate-900 rounded-full px-4 py-1 m-1 flex items-center">
            <span>{term}</span>
            <button onClick={() => {
              removeSearchTerm(term);
            }} className="ml-2 text-airblue">&times;</button>
          </div>
        ))}
      </div>
      <div className="flex-grow grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredProjects.map(project => (
          <ProjectCard
            key={project.id}
            project={project}
            animate={animateCards[project.id]} 
            className={animateCards[project.id] ? 'animate-slide-in' : 'hidden'}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
