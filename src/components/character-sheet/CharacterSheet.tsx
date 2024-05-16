import React from "react";

interface CharacterSheetProps {
    character: any;
}

const CharacterSheet: React.FC<CharacterSheetProps> = ({ character }) => {
    return (
        <div>
            <h2>{character.name}</h2>
            <p>Class: {character.characterClass}</p>
            <p>Strength: {character.stenght}</p>
            <p>Dexterity: {character.dexterity}</p>
            <p>Constitution: {character.constitution}</p>
            <p>Intelligence: {character.intelligence}</p>
            <p>Wisdom: {character.wisdom}</p>
            <p>Charisma: {character.charisma}</p>
        </div>
    );
};

export default CharacterSheet;