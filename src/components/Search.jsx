import React from "react";
import styles from "./Search.module.css";

const Search = ({ searchState, handleSearchChanges}) => {

  const handleSearchChange = (e) => {
    handleSearchChanges({ type: 'SET_SEARCH', payload: e.target.value });
  };

  const handleStatusChange = (e) => {
    handleSearchChanges({ type: 'SET_STATUS', payload: e.target.value });
  };

  const handleGenderChange = (e) =>{
    handleSearchChanges({ type: 'SET_GENDER', payload: e.target.value });
  }

  const handleSpeciesChange = (e) =>{
    handleSearchChanges({ type: 'SET_SPECIES', payload: e.target.value });
  }

  const handleTypeChange = (e) =>{
    handleSearchChanges({ type: 'SET_TYPE', payload: e.target.value });
  }

  return ( 
    <form className={styles.search}>
      <div className={styles.inputSpace}>
        <input
          placeholder="Search for Character"
          type="text"
          className={styles.input}
          value={searchState.searchValue}
          onChange={handleSearchChange}
        />
        <button onClick={(e) => e.preventDefault() } className={styles.button}>Search</button>
      </div>

      <div class={styles.filterContainer}>
        <div class={styles.filter}>
          <label for="status-filter">Status:</label>
          <select id="status-filter" value={searchState.statusValue} onChange={handleStatusChange} >
            <option value="">Select Status</option>
            <option value="alive">Alive</option>
            <option value="dead">Dead</option>
            <option value="unknown">Unknown</option>
          </select>
        </div>
        <div class={styles.filter}>
          <label for="gender-filter">Gender:</label>
          <select id="gender-filter" value={searchState.genderValue} onChange={handleGenderChange}>
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="unknown">Unknown</option>
          </select>
        </div>
        <div class={styles.filter}>
          <label for="species-filter">Species:</label>
          <select id="species-filter" value={searchState.speciesValue} onChange={handleSpeciesChange}>
            <option value="">Select Species</option>
            <option value="human">Human</option>
            <option value="alien">Alien</option>
          </select>
        </div>
        <div class={styles.filter}>
          <label for="type-filter">Type:</label>
          <select id="type-filter" value={searchState.typeValue} onChange={handleTypeChange}>
            <option value="">Select Type</option>
            <option value="Genetic experiment">Genetic experiment</option>
            <option value="Superhuman (Ghost trains summoner)">
              Superhuman (Ghost trains summoner)
            </option>
            <option value="Parasite">Parasite</option>
            <option value="Human with antennae">Human with antennae</option>
            <option value="Human with ants in his eyes">
              Human with ants in his eyes
            </option>
          </select>
        </div>
      </div>

    </form>
  );
};

export default Search;
