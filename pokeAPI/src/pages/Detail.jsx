import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { selectorPokemonById } from "../RTK/selector";
import FavoriteButton from "../component/FavoriteButton";

const Detail = () => {
    const { pokemonId } = useParams();
    const pokemon = useSelector(selectorPokemonById(Number(pokemonId)));
    console.log(pokemon);

    if (!pokemon) return <div>Loading...</div>;

    return (
        <div
            className="flex flex-col justify-center items-center
        border border-[gray] rounded-[0.875rem] p-[30px]"
        >
            <div className="text-[30px] mb-[10px] ">
                {pokemon.name}
                <FavoriteButton pokemonId={Number(pokemonId)} />
            </div>
            <div className=" whitespace-pre-wrap">{pokemon.description}</div>
            <img className="w-60 " src={pokemon.front} />
        </div>
    );
};

export default Detail;
