import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";
import projectsService from "../services/projects";
import "../styles/sass/projects.scss";
import { Card } from "./Card";
import { motion } from "framer-motion";

export const Projects = () => {
  const { t } = useTranslation();
  const [projects, setProjects] = useState([]);
  const [loader, setLoader] = useState(true);

  useEffect(() => {
      projectsService.getAll().then((response) => {
        setProjects(response);
        setLoader(false);
      });
  }, []);

  return (
    <section id="projects">
      {loader ? (
        <motion.h2 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
          {t("loading")}
        </motion.h2>
      ) : (
        <motion.h2 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
          {t("projects")}
        </motion.h2>
      )}
      <div className="project-list">
        {projects.map((project, index) => (
          <Card
            key={index}
            name={project.name}
            description={project.description}
            url={project.url}
          />
        ))}
      </div>
    </section>
  );
};
