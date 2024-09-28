"use client"
import React, { useState } from 'react';
import { getCharacters } from '@/app/api/MarvelApi';

const characters = () => {
  const fetchCharacters = async () => {
    const response = await getCharacters();
    setCharacters(response.data.results);
  }

  const [characters, setCharacters] = useState([]);

  return (
    <div>
      <h1>Characters Page</h1>
      <button onClick={fetchCharacters}>Fetch Characters</button>
      <ul>
        {characters.map((character : any) => (
          <li key={character.id}>{character.name}</li>
        ))}
      </ul>
    </div>
  )
}

export default characters;