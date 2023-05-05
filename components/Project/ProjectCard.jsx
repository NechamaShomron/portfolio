/* eslint-disable react/prop-types */
import React from "react";
import styles from "./ProjectCard.module.css";

export default function ProjectCard({ title, description, technologies }) {
  const technologiesArr = technologies.split(" ");

  return (
    <div className={styles.project_container}>
      <span className={styles.title}>{title}</span>
      <div className={styles.description}>{description}</div>
      <div className={styles.technologies_container}>
        {technologiesArr &&
          technologiesArr.map((technology) => (
            <span className={styles.technology} key={technology}>
              {technology}
            </span>
          ))}
      </div>
    </div>
  );
}
