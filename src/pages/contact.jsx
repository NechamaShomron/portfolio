import React, { useState } from "react";
import styles from "../styles/Contact.module.css";

export default function Contact() {
  return (
    <div className={styles.contact_container}>
      <div className={styles.title}>
        CONTACT <span className={styles.inner_title}>ME</span>
      </div>
    </div>
  );
}
