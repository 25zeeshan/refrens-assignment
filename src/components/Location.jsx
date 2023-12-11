import React, { useEffect, useState } from 'react';
import styles from "./Location.module.css"
import { fetchLocationBasedOnId } from '../http';

const Location = ({ url }) => {
    const [location, setLocation] = useState(null);

    useEffect(() => {
        async function fetchLocation(){
           const fecthedLocation = await fetchLocationBasedOnId(url);
           setLocation(fecthedLocation);
        }

        fetchLocation();
    }, [url])

  return (
    <div className={styles.location}>
        {
            location && (
                <div className={styles.locationDetails}>
                    <div className={styles.name}>{location.name} , {location.dimension}</div>
                    <div>Population - {location.residents.length}</div>
                </div>
            )
        }
    </div>
  )
}

export default Location