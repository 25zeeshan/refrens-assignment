import React, { useReducer, useState } from 'react'
import styles from './Character.module.css'
import Search from './Search'
import Content from './Content'


const initialState = {
  searchValue: '',
  statusValue: '',
  genderValue: '',
  speciesValue: '',
  typeValue: '',
};

const searchFilterReducer = (state, action) => {
  switch (action.type) {
    case 'SET_SEARCH':
      return { ...state, searchValue: action.payload };
    case 'SET_STATUS':
      return { ...state, statusValue: action.payload };
    case 'SET_GENDER':
      return { ...state, genderValue: action.payload };
    case 'SET_SPECIES':
      return { ...state, speciesValue: action.payload };
    case 'SET_TYPE':
      return { ...state, typeValue: action.payload };
    default:
      return state;
  }
};

const Character = () => {
  const [searchStates, dispatchSearchStates] = useReducer(searchFilterReducer, initialState);
  const [page, setPage] = useState(1);

  const handleSearchChanges = (change) => {
    setPage(1);
    dispatchSearchStates(change);
  }

  return (
    <div className={styles.character}>
      <Search searchState={searchStates} handleSearchChanges={handleSearchChanges} />
      <Content page={page} setPage={setPage} name={searchStates.searchValue} status={searchStates.statusValue} gender={searchStates.genderValue} species={searchStates.speciesValue} type={searchStates.typeValue}  />
    </div>
  )
}

export default Character