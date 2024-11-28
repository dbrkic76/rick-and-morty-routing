import "./single-page.css";
import Modal from "../../components/Modal/Modal";
import BasicButton from "../../components/Button/Button";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const SinglePage = () => {
  const { id } = useParams();
  const [character, setCharacter] = useState(null);
  const [error, setError] = useState(false);

  const fetchCharacterById = (id) => {
    const url = `https://rickandmortyapi.com/api/character/${id}`;
    fetch(url)
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        throw new Error("Failed to fetch character");
      })
      .then((character) => setCharacter(character))
      .catch((error) => {
        setError(true);
      });
  };

  useEffect(() => {
    fetchCharacterById(id);
  }, [id]);

  if (error) return <>Error</>;

  return (
    <div className="single-page">
      <div>
        <img src={character?.image} alt="character" />
      </div>
      <div>
        <h2>Name: {character?.name}</h2>
        <h3>Species: {character?.species}</h3>
        <h3>Gender: {character?.gender}</h3>
        <h3>Status: {character?.status}</h3>
        <h3>Location: {character?.location.name}</h3>
      </div>
      <div className="episodes">
        {character?.episode.map((e) => {
          return <Modal episodeUrl={e} />;
        })}
      </div>
    </div>
  );
};

export default SinglePage;
