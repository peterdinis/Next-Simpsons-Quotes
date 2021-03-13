import React, {useState, useEffect} from 'react';
import Character from '../interfaces/CharacterInterface';
import {data} from '../data/characters';
import { CharacterDirection, CharacterGrid, CharacterImage, CharacterQuote, Characterss } from '../design/Characters.styled';

export default function FetchAllCharacters() {
    const [characters, setCharacters] = useState<Character[]>([]);

    const loadCharacters = async () => {
        setCharacters(data);
    }

    useEffect(() => {
        loadCharacters();
    }, []);

    return (
        <div>
            {characters.map((character) => {
                return (
                    <CharacterGrid>
                        <CharacterQuote>{character.quote}</CharacterQuote>
                        <Characterss>{character.character}</Characterss>
                        <CharacterImage src={character.image} />
                        <CharacterDirection>{character.characterDirection}</CharacterDirection>
                    </CharacterGrid>
                )
            })}
        </div>
    )
}