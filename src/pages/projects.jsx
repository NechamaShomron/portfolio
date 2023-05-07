import React, { useState, useEffect } from 'react';
import getLocalData from '../../lib/localdata';
import ProjectCard from '../../components/Project/ProjectCard';
import styles from '../styles/Projects.module.css';

// eslint-disable-next-line react/prop-types
export default function Projects({ projects }) {
  const [projectsList, setProjectsList] = useState(projects);

  useEffect(() => {
    setProjectsList(projects);
  }, [projects]);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>My Projects</h1>
      <div className={styles.projects_list}>
        {projectsList
          && projectsList.map((project) => (
            <ProjectCard
              key={project.Title}
              title={project.Title}
              description={project.Description}
              technologies={project.Technologies}
            />
          ))}
      </div>
    </div>
  );
}
export async function getStaticProps() {
  const projects = await getLocalData('json/projectsData.json');

  return {
    props: { projects },
  };
}
