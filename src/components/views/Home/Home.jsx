import "./Home.css";
import { useState, useEffect } from "react";

function Home() {
  const [characters, setCharacter] = useState([]);

  async function getAllCharacters() {
    const response = await fetch("https://api.disneyapi.dev/characters/:id");
    const allCharacters = await response.json();
    setCharacter([...allCharacters]);
  }

  useEffect(() => {
    getAllCharacters();
  }, []);

  return (
    <div className="home"> teste
      {characters.map((characters) => (
        <div className="cards" key={characters.id}>
            <img className="imageUrl" src="https://static.wikia.nocookie.net/disney/images/1/15/Arianna_Tangled.jpg/revision/latest?cb=20160715191802" alt="Disney character">{characters.imageUrl}</img>
            <h1 className="name">{characters.name}</h1>
            <p className="films">{characters.films}</p>
        </div>
      ))}
    </div>
  );
}

export default Home;
