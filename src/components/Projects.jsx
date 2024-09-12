import { useTranslation } from "react-i18next";
import { useEffect, useState } from 'react';
import projectsService from '../services/projects';
import "../styles/sass/projects.scss";


export const Projects = () => {

  const { t, i18n } = useTranslation();
  const [projects, setProjects] = useState([])

  useEffect(() => {
    projectsService.getAll().then((response) => {
      setProjects(response);
    });
  }, []);


  return (
    <section id="projects">
      <h2>{ t('projects') }</h2>
      <div className="project-list">
        {projects.map((project, index) => (
          <div key={index} className="project-item">
            <h3>{project.name}</h3>
            <p>{ project.description[i18n.language] }</p>
            <a href={project.url} target="_blank" rel="noopener noreferrer">
              {t('see')}
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};