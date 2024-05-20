import React, { useState} from "react";
import SubmitButton from "../buttons/SubmitButton";
import "./CharacterForm.css";

interface CharacterFormProps {
    onSubmit: (character: any) => void;
}

const CharacterForm: React.FC<CharacterFormProps> = ({ onSubmit }) => {
    const [name, setName] = useState<string>('');
    const [characterClass, setCharacterClass] = useState<string>('');
    const [characterRace, setCharacterRace] = useState<string>('');
    const [strength, setStrength] = useState<number>(0);
    const [dexterity, setDexterity] = useState<number>(0);
    const [constitution, setConstitution] = useState<number>(0);
    const [intelligence, setIntelligence] = useState<number>(0);
    const [wisdom, setWisdom] = useState<number>(0);
    const [charisma, setCharisma] = useState<number>(0);

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        const character = {
            name,
            characterClass,
            characterRace,
            strength,
            dexterity,
            constitution,
            intelligence,
            wisdom,
            charisma,
        };  
        onSubmit(character);
    };

    return (
        console.log("character form loaded"),
        <form onSubmit={handleSubmit}>
            <label>
                Name:
                <input type="text" value={name} onChange={e => setName(e.target.value)} />
            </label>
            <label>
                Class:
                <input type="text" value={characterClass} onChange={e => setCharacterClass(e.target.value)} />
            </label>
            <label>
                stenght:
                <input type="number" value={strength} onChange={e => setStrength(Number(e.target.value))} />
            </label>
            <label>
                Dexterity:
                <input type="number" value={dexterity} onChange={e => setDexterity(Number(e.target.value))} />
            </label>
            <label>
                Constitution:
                <input type="number" value={constitution} onChange={e => setConstitution(Number(e.target.value))} />
            </label>
            <label>
                Intelligence:
                <input type="number" value={intelligence} onChange={e => setIntelligence(Number(e.target.value))} />
            </label>
            <label>
                Wisdom:
                <input type="number" value={wisdom} onChange={e => setWisdom(Number(e.target.value))} />
            </label>
            <label>
                Charisma:
                <input type="number" value={charisma} onChange={e => setCharisma(Number(e.target.value))} />
            </label>
            <SubmitButton text='Create Character' onSubmit={handleSubmit} />
        </form>
    );
};

export default CharacterForm;