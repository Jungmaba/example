import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchMultiplePokemonById = createAsyncThunk("pokemon/fetchMultiplePokemonById", async (maxPokemonId) => {
    const numberArray = Array.from({ length: 151 }, (_, i) => i + 1);

    const fetchAPI = async (pokemonId) => {
        const rsponse = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${pokemonId}/`);
        const data = await rsponse.json();

        const pokemonData = {
            id: pokemonId,
            name: data.names.find((el) => el.language.name === "ko").name,
            description: data.flavor_text_entries.find((el) => el.language.name === "ko").flavor_text,
            back: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/${pokemonId}.png`,
            front: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonId}.png`,
        };

        return pokemonData;
    };

    return Promise.all(numberArray.map((el) => fetchAPI(el)));
});
