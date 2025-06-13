import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { selectorPokemonById } from "../RTK/selector";
import FavoriteButton from "../component/FavoriteButton";
import FlipCard from "../component/FlipCard";

const Detail = () => {
    const { pokemonId } = useParams();
    const pokemon = useSelector(selectorPokemonById(Number(pokemonId)));
    console.log(pokemon);

    if (!pokemon) return <div>Loading...</div>;

    return (
        <div
            className="flex flex-col justify-center items-center
         rounded-[0.875rem] py-[30px] px-[60px] bg-[white]
        border-b-[5px] border-r-[5px] border-black"
        >
            <div className="text-[30px] mb-[10px] ">
                {pokemon.name}
                <FavoriteButton pokemonId={Number(pokemonId)} />
            </div>
            <div className=" whitespace-pre-wrap">{pokemon.description}</div>
            <FlipCard front={pokemon.front} back={pokemon.back} />
        </div>
    );
};

export default Detail;
