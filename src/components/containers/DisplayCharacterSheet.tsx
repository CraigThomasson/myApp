import React, { useState } from 'react';
import CharacterForm from '../forms/CharacterForm';
import CharacterSheet from '../character-sheet/CharacterSheet';

const DisplayCharacterSheet: React.FC = () => {
  const [character, setCharacter] = useState<any | null>(null);

  return (
    <div>
      <h1>D&D 5e Character Sheet</h1>
      {!character ? (
        <CharacterForm onSubmit={setCharacter} />
      ) : (
        <>
          <CharacterSheet character={character} />
        </>
      )}
    </div>
  );
};

export default DisplayCharacterSheet;
