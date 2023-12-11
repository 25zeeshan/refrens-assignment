import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styles from "./Detail.module.css";
import { fetchCharacterDetailBasedOnId } from "../http";
import Loader from "./Loader";
import Location from "./Location";
import Episode from "./Episode";

function Detail() {
  const id = useParams();
  const [character, setCharacter] = useState(null);
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    setError(null);

    async function fetchCharacterDetail() {
      try {
        const resData = await fetchCharacterDetailBasedOnId(id);
        setCharacter(resData);
      } catch (e) {
        setError(e.message);
      } finally {
        setLoading(false);
      }
    }

    fetchCharacterDetail();
  }, [id]);

  return (
    <div className={styles.detail}>
      {isLoading && <Loader />}
      {!isLoading && error && <p>{error}</p>}
      {!isLoading && !error && character && 
        <div className={styles.characterContainer}>
          <div className={styles.characterInfo}>
            <div className={styles.profilePic}>
              <img src={character.image} alt={character.name} />
            </div>

            <div className={styles.otherDetails}>
              <div className={styles.name}>{character.name} <span style={{backgroundColor: character.status === "Alive" ? "lightgreen" : character.status === 'Dead' ? "red" : "gray"}}>{character.status}</span></div>
              <div className={styles.typeDetail}>
                {character.species} - {character.gender}
              </div>
              <div className={styles.locationDetail}>
                <div className={styles.heading}> Origin Location :</div>
                {character.origin.name !== "unknown" && (
                  <Location url={character.origin.url} />
                )}
                {character.origin.name === "unknown" && <div>Unknown</div>}
              </div>
              <div className={styles.locationDetail}>
                <div className={styles.heading}>Current Location :</div>
                {character.location.name !== "unknown" && (
                  <Location url={character.location.url} />
                )}
                {character.location.name === "unknown" && <div>Unknown</div>}
              </div>
            </div>
          </div>

          <h2>Episodes :</h2>
          <div className={styles.allEpisodes}>
            {character.episode.map((ep, index) => {
              return <Episode url={ep} key={index} />;
            })}
          </div>
        </div>
      }
    </div>
  );
}

export default Detail;
