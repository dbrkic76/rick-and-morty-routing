import { Card } from "../../components/Card/Card";
import "./home-page.css";
import { Pagination } from "../../components/Pagination/Pagination";
import { useEffect, useState } from "react";

export const HomePage = () => {
  const [characters, setCharacters] = useState([]);
  const [page, setPage] = useState(1);

  const fetchAllCharacters = () => {
    fetch(`https://rickandmortyapi.com/api/character?page=${page}`)
      .then((response) => response.json())
      .then((data) => setCharacters(data.results));
  };

  useEffect(() => {
    fetchAllCharacters();
  }, []);
  return (
    <>
      {/* <div className="pagination">
        <button disabled={page === 1} onClick={() => {prevPage()}}>Prev</button>
        <Pagination page={page} setPage={setPage}/>
        <button onClick={() => nextPage()} disabled={page === 42}>
          Next
        </button>
      </div> */}
      <div className="cards-wrapper">
        {characters.map((char) => {
          return <Card key={crypto.randomUUID()} character={char} />;
        })}
      </div>
    </>
  );
};
