import React, { useEffect, useState } from "react";
import styles from "./Content.module.css";
import { fetchCharactersBasedOnPageNumber } from "../http";
import Card from "./Card";
import ReactPaginate from "react-paginate";
import { Link } from "react-router-dom";
import { useMediaQuery } from 'react-responsive';
import Loader from "./Loader";


const MobilePagination = ({ handlePageClick, totalPages }) => {
  const isMobile = useMediaQuery({ maxWidth: 768 });
  console.log(isMobile);

  const range = isMobile ? 1 : 5;

  const mobilePrevLabel = <span>&lt;</span>;
  const mobileNextLabel = <span>&gt;</span>;

  return (
    <ReactPaginate
      breakLabel="..."
      nextLabel={mobileNextLabel}
      onPageChange={handlePageClick}
      pageCount={totalPages}
      previousLabel={mobilePrevLabel}
      renderOnZeroPageCount={null}
      containerClassName={styles.pagination}
      activeClassName={styles.active}
      nextClassName={styles.active}
      previousClassName={styles.active}
      pageRangeDisplayed={range}
      
    />
  );
};


const Content = ({ page, setPage, name, status, gender, species, type }) => {
  
  const [totalPages, setTotalPages] = useState(0);
  const [characters, setCharacters] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const [error, setError] = useState(null); 

  const handlePageClick = (selectedPage) => {
    setPage(selectedPage.selected + 1);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    setIsLoading(true);
    setError(null);

    async function fetchCharacters() {
      try {
        const fetchedCharacters = await fetchCharactersBasedOnPageNumber(page, name, status, gender, species, type);
        setCharacters(fetchedCharacters.results);
        setTotalPages(fetchedCharacters.info.pages);
      } catch (e) {
        setError(e.message); 
      } finally {
        setIsLoading(false);
      }
    }

    fetchCharacters();
  }, [page, name, status, gender, species, type]);

  return (
    <div className={styles.content}>
      <div className={styles.heading}>
        <h2>Characters</h2>
      </div>
      <div className={styles.characters}>
        {isLoading && <Loader/>}
        {!isLoading && error && <p>{error}</p>}
        {!isLoading && !error &&
          characters.map((character, index) => {
            return (
              <Link
                key={character.id}
                to={{
                  pathname: `/character/${character.id}`,
                  state: { characterData: character }
                }}
                style={{textDecoration : 'none'}}
              >
                <Card {...character}>character.name</Card>
              </Link>
            );
          })}
      </div>
      <MobilePagination handlePageClick={handlePageClick} totalPages={totalPages}  />
    </div>
  );
};

export default Content;
