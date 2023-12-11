export async function fetchCharactersBasedOnPageNumber(page,name, status, gender, species, type) {
  let api = `https://rickandmortyapi.com/api/character?page=${page}`;
  if(name!==""){
    api += `&name=${name}`
  }if(status!==""){
    api += `&status=${status}`
  }if(gender !== ""){
    api += `&gender=${gender}`
  }if(species!==""){
    api+=`&species=${species}`
  }if(type!==""){
    api+=`&type=${encodeURIComponent(type)}`
  }

  const response = await fetch(
    api
  );
  const resData = await response.json();

  if (!response.ok) {
    throw new Error("Characters not found with given filters !!");
  }

  return resData;
}


export async function fetchCharacterDetailBasedOnId(id){
  const response = await fetch(`https://rickandmortyapi.com/api/character/${id.id}`);
  const resData = await response.json();

  if (!response.ok) {
    throw new Error("Character not found with given id !!");
  }

  return resData;
}


export async function fetchLocationBasedOnId(url){
  const response = await fetch(url);
  const resData = await response.json();

  if (!response.ok) {
    throw new Error("Location not found with given id !!");
  }

  return resData;
}

export async function fetchEpisodeBasedOnId(url){
  const response = await fetch(url);
  const resData = await response.json();

  if (!response.ok) {
    throw new Error("Location not found with given id !!");
  }

  return resData;
}
