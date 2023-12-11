import React, { useState, useEffect } from "react";
import styles from "./Episode.module.css";
import { fetchEpisodeBasedOnId } from "../http";

const Episode = ({ url }) => {
  const [episode, setEpisode] = useState(null);

  useEffect(() => {
    async function fetchEpisode() {
      const fecthedLocation = await fetchEpisodeBasedOnId(url);
      setEpisode(fecthedLocation);
    }

    fetchEpisode();
  }, [url]);

  return (
    <div className={styles.episode}>
      {episode && (
        <div className={styles.container}>
          <div className={styles.season}>{episode.episode} <span> - {episode.air_date}</span></div>
          <div className={styles.name}>Title - {episode.name}</div>
        </div>
      )}
    </div>
  );
};

export default Episode;
