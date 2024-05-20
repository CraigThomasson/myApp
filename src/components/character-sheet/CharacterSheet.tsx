import React from "react";
import { calculateModifier } from '../../scripts/character-utilities/calculateModifier';
interface CharacterSheetProps {
    character: any;
}

const CharacterSheet: React.FC<CharacterSheetProps> = ({ character }) => {
    return (
        <div>
            <h2>{character.name}</h2>
            <p>Class: {character.characterClass}</p>
            <p>Strength: {character.strength} (Modifier: {calculateModifier(character.strength)})</p>
            <p>Dexterity: {character.dexterity} (Modifier: {calculateModifier(character.dexterity)})</p>
            <p>Constitution: {character.constitution} (Modifier: {calculateModifier(character.constitution)})</p>
            <p>Intelligence: {character.intelligence} (Modifier: {calculateModifier(character.intelligence)})</p>
            <p>Wisdom: {character.wisdom} (Modifier: {calculateModifier(character.wisdom)})</p>
            <p>Charisma: {character.charisma} (Modifier: {calculateModifier(character.charisma)})</p>
        </div>
    );
};

export default CharacterSheet;