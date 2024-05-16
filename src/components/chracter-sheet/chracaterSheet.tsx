import React from "react";

interface CharacterSheetProps {
    chracter: any;
}

const CharacterSheet: React.FC<CharacterSheetProps> = ({ chracter }) => {
    return (
        <div>
            <h2>{chracter.name}</h2>
            <p>Class: {chracter.characterClass}</p>
            <p>Strength: {chracter.stenght}</p>
            <p>Dexterity: {chracter.dexterity}</p>
            <p>Constitution: {chracter.constitution}</p>
            <p>Intelligence: {chracter.intelligence}</p>
            <p>Wisdom: {chracter.wisdom}</p>
            <p>Charisma: {chracter.charisma}</p>
        </div>
    );
};

export default CharacterSheet;