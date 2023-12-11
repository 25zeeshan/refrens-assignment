import React from "react";
import styles from "./Card.module.css";

const Card = ({ name, status, image, gender, species }) => {
  const statusColor = status === "Alive" ? "lightgreen" : status === 'Dead' ? "red" : "gray";

  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <img className={styles.image} src={image} alt={`${name} character`} />
      </div>
      <div className={styles.details}>
        <div className={styles.name}>{name}</div>
        <div className={styles.status}><div className={styles.circle} style={{ backgroundColor: statusColor }}></div>{status} - {species}</div>
      </div>
    </div>
  );
};

export default Card;
