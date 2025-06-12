import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { favoriteSlice } from "../RTK/slice";

const FavoriteButton = ({ pokemonId }) => {
    const isFavorite = useSelector((state) => state.favorite.some((item) => item === pokemonId));
    const dispatch = useDispatch();

    return (
        <button
            onClick={(e) => {
                e.stopPropagation();
                dispatch(
                    isFavorite
                        ? favoriteSlice.actions.removeFavorite({ pokemonId })
                        : favoriteSlice.actions.addToFavorite({ pokemonId })
                );
            }}
            className={isFavorite ? "text-pink-400" : ""}
        >
            {isFavorite ? "♥" : "♡"}
        </button>
    );
};

export default FavoriteButton;
