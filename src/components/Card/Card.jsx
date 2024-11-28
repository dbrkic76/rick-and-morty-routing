import { Link } from "react-router-dom";
export const Card = ({ character }) => {
  return (
    <Link className="card" to={`/character/${character.id}`}>
      <img src={character.image} alt="character" />
      <h3>{character.name}</h3>
    </Link>
  );
};
